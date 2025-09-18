import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import Maillist from "@/models/MailList";

export async function POST(req: NextRequest) {
  try {
    const { email, firstName } = await req.json();

    // Basic email validation
    if (!email || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    await dbConnect();

    // Prevent duplicate entries
    const exists = await Maillist.findOne({ email });
    if (exists) {
      return NextResponse.json({ error: "Email already registered" }, { status: 409 });
    }

    await Maillist.create({ email, firstName });

    return NextResponse.json({ message: "Successfully registered" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}