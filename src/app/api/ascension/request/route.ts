import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const ADMIN_EMAIL = "infernohouseweb@gmail.com";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

interface RequestBody {
  name?: string;
  email?: string;
  realm?: string;
  characterClass?: string;
  profession?: string;
  environment?: string; // PvP / PvE / Both
  addonIdea?: string;
  whatItShouldDo?: string;
  inspiration?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as RequestBody;
    const {
      name,
      email,
      realm,
      characterClass,
      profession,
      environment,
      addonIdea,
      whatItShouldDo,
      inspiration,
    } = body;

    if (!name || !email || !addonIdea || !whatItShouldDo) {
      return NextResponse.json(
        { error: "Name, email, addon idea, and description are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    const row = (label: string, value?: string) =>
      value
        ? `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:bold;width:180px;">${label}</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${value}</td></tr>`
        : "";

    await resend.emails.send({
      from: "PenFifteen Club Custom Request <onboarding@resend.dev>",
      to: ADMIN_EMAIL,
      replyTo: email,
      subject: `New Custom Addon Request: ${addonIdea}`,
      html: `
        <h2>New Custom Project Ascension Addon Request</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          ${row("Name", name)}
          ${row("Email", `<a href="mailto:${email}">${email}</a>`)}
          ${row("Realm", realm)}
          ${row("Class", characterClass)}
          ${row("Profession", profession)}
          ${row("Environment", environment)}
          ${row("Addon Idea / Title", addonIdea)}
        </table>
        <h3 style="margin-top:24px;">What it should do</h3>
        <p style="white-space:pre-wrap;background:#f9f9f9;padding:16px;border-radius:8px;">${whatItShouldDo}</p>
        ${
          inspiration
            ? `<h3 style="margin-top:24px;">Inspiration / similar addons</h3>
               <p style="white-space:pre-wrap;background:#f9f9f9;padding:16px;border-radius:8px;">${inspiration}</p>`
            : ""
        }
        <hr style="margin-top:32px;border:none;border-top:1px solid #eee;" />
        <p style="color:#999;font-size:12px;">Sent from the Project Ascension custom request form on dustintn.com</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[ascension/request]", error);
    return NextResponse.json(
      { error: "Failed to send request. Please try again." },
      { status: 500 }
    );
  }
}
