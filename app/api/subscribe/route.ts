import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();
    const email = (form.get("email") || "").toString().trim();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY!;
    const TO = process.env.CONTACT_TO!;
    if (!RESEND_API_KEY || !TO) {
      return NextResponse.json({ ok: false, error: "Server not configured" }, { status: 500 });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: "Shpree <no-reply@shpree.com>",
        to: [TO],
        subject: "New waitlist signup",
        text: `New signup: ${email}`,
      }),
    });

    if (!res.ok) {
      const txt = await res.text();
      return NextResponse.json({ ok: false, error: txt || "Email send failed" }, { status: 500 });
    }

    return NextResponse.redirect(new URL("/thanks", req.url), 303);
  } catch (e:any) {
    return NextResponse.json({ ok: false, error: e?.message || "Unknown error" }, { status: 500 });
  }
}
