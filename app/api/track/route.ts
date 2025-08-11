import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { url, target } = await req.json();

    if (!url || !target) {
      return NextResponse.json(
        { error: "Missing url or target price" },
        { status: 400 }
      );
    }

    const stmt = db.prepare(
      "INSERT INTO products (url, target_price, created_at) VALUES (?, ?, datetime('now'))"
    );
    stmt.run(url, target);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to save product" },
      { status: 500 }
    );
  }
}
