import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { sendSupportEmail } from "@/lib/email";

export async function POST(request: Request) {
  const body = await request.json();
  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const organization = String(body.organization || "").trim();
  const message = String(body.message || "").trim();
  const need = String(body.need || "both").trim();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
  }

  try {
    const db = getDb();
    const stmt = db.prepare(
      `INSERT INTO submissions (created_at, name, email, organization, message, need)
       VALUES (?, ?, ?, ?, ?, ?)`
    );
    stmt.run(new Date().toISOString(), name, email, organization, message, need);

    try {
      await sendSupportEmail({ name, email, organization, message, need });
    } catch (emailError) {
      console.error("Contact email error:", emailError);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact submission error:", error);
    return NextResponse.json({ error: "Unable to process your request right now." }, { status: 500 });
  }
}
