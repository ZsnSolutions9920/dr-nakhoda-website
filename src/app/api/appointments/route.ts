import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Appointment } from "@/lib/models/Appointment";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const body = await req.json();
    const { name, email, phone, service } = body;

    if (!name || !email || !phone || !service) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const appointment = await Appointment.create({
      name,
      email,
      phone,
      service,
      status: "pending",
    });

    return NextResponse.json({ success: true, id: appointment._id }, { status: 201 });
  } catch (error) {
    console.error("Appointment creation error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
