import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = "infernohouseweb@gmail.com";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, business, website, helpTopic, contactMethod, description } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "DustinTN Free Consultation <onboarding@resend.dev>",
      to: TO_EMAIL,
      replyTo: email,
      subject: `Free Consultation Request: ${name}${business ? ` — ${business}` : ""}`,
      html: `
        <h2>New Free Consultation Request</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:bold;width:160px;">Name</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${name}</td></tr>
          <tr><td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:bold;">Email</td><td style="padding:8px 12px;border-bottom:1px solid #eee;"><a href="mailto:${email}">${email}</a></td></tr>
          ${phone ? `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:bold;">Phone</td><td style="padding:8px 12px;border-bottom:1px solid #eee;"><a href="tel:${phone}">${phone}</a></td></tr>` : ""}
          ${business ? `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:bold;">Business</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${business}</td></tr>` : ""}
          ${website ? `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:bold;">Website</td><td style="padding:8px 12px;border-bottom:1px solid #eee;"><a href="${website}">${website}</a></td></tr>` : ""}
          ${helpTopic ? `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:bold;">Help Topic</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${helpTopic}</td></tr>` : ""}
          ${contactMethod ? `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:bold;">Preferred Contact</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${contactMethod}</td></tr>` : ""}
        </table>
        ${description ? `
          <h3 style="margin-top:24px;">Description</h3>
          <p style="white-space:pre-wrap;background:#f9f9f9;padding:16px;border-radius:8px;">${description}</p>
        ` : ""}
        <hr style="margin-top:32px;border:none;border-top:1px solid #eee;" />
        <p style="color:#999;font-size:12px;">Sent from the DustinTN free consultation form</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Consultation form error:", error);
    return NextResponse.json(
      { error: "Failed to send request. Please try again." },
      { status: 500 }
    );
  }
}
