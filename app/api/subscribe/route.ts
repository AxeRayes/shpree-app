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

    const headers = {
      "Authorization": `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json"
    };

    // 1) Notify you
    const notifyOwner = fetch("https://api.resend.com/emails", {
      method: "POST",
      headers,
      body: JSON.stringify({
        from: "Shpree <no-reply@shpree.com>",
        to: [TO],
        subject: "New waitlist signup",
        text: `New signup: ${email}`,
      }),
    });

    // 2) Send welcome email to subscriber
    const welcomeUser = fetch("https://api.resend.com/emails", {
      method: "POST",
      headers,
      body: JSON.stringify({
        from: "Shpree <no-reply@shpree.com>",
        to: [email],
        subject: "You’re on the Shpree list 🎉",
        html: `
          <div style="font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.5;color:#111">
            <h2 style="margin:0 0 12px">Welcome to Shpree</h2>
            <p>Thanks for joining the waitlist. You’ll be among the first to try our real-time price-drop alerts and price history tracking.</p>
            <p style="margin:20px 0">
              👉 <a href="https://t.me/shpree_deals" target="_blank">Join our Telegram channel</a> for daily drops.
            </p>
            <p style="font-size:13px;color:#666;margin-top:24px">If this wasn’t you, just ignore this email.</p>
          </div>
        `,
      }),
    });

    const [ownerRes, userRes] = await Promise.all([notifyOwner, welcomeUser]);

    if (!ownerRes.ok || !userRes.ok) {
      const t1 = ownerRes.ok ? "" : await ownerRes.text();
      const t2 = userRes.ok ? "" : await userRes.text();
      return NextResponse.json({ ok: false, error: t1 || t2 || "Email send failed" }, { status: 500 });
    }

    // Success → redirect to thank-you page
    return NextResponse.redirect(new URL("/thanks", req.url), 303);
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message || "Unknown error" }, { status: 500 });
  }
}
