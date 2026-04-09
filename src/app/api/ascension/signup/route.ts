import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { addSubscriber } from "@/lib/addon-stats";
import { getAddonBySlug } from "@/data/ascension-addons";

const resend = new Resend(process.env.RESEND_API_KEY);
const ADMIN_EMAIL = "infernohouseweb@gmail.com";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  try {
    const { slug, email } = await req.json();

    if (!slug || typeof slug !== "string") {
      return NextResponse.json({ error: "Missing slug" }, { status: 400 });
    }

    if (!email || typeof email !== "string" || !isValidEmail(email)) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    const addon = getAddonBySlug(slug);
    if (!addon) {
      return NextResponse.json({ error: "Unknown addon" }, { status: 404 });
    }

    await addSubscriber(slug, email);

    // Notify Dustin so he knows there's a new subscriber
    try {
      await resend.emails.send({
        from: "PenFifteen Club <onboarding@resend.dev>",
        to: ADMIN_EMAIL,
        subject: `New ${addon.name} subscriber`,
        html: `
          <h2>New addon update subscriber</h2>
          <p><strong>Addon:</strong> ${addon.name} (v${addon.version})</p>
          <p><strong>Email:</strong> ${email}</p>
          <p style="color:#999;font-size:12px;margin-top:24px;">Sent from the Project Ascension addon page on dustintn.com</p>
        `,
      });
    } catch (emailErr) {
      // Don't fail the signup if the notification email fails
      console.error("[ascension/signup] notification email failed:", emailErr);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[ascension/signup]", error);
    return NextResponse.json(
      { error: "Failed to sign up. Please try again." },
      { status: 500 }
    );
  }
}
