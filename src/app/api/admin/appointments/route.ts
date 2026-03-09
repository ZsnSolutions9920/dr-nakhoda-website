import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Appointment } from "@/lib/models/Appointment";
import { getAdminFromCookie } from "@/lib/auth";
import { sendApprovalEmail, sendRejectionEmail } from "@/lib/email";

export async function GET() {
  const admin = await getAdminFromCookie();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await connectDB();
  const appointments = await Appointment.find().sort({ createdAt: -1 });
  return NextResponse.json(appointments);
}

export async function PATCH(req: NextRequest) {
  const admin = await getAdminFromCookie();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectDB();
    const { id, status } = await req.json();

    if (!id || !["approved", "rejected"].includes(status)) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const appointment = await Appointment.findByIdAndUpdate(id, { status }, { new: true });

    if (!appointment) {
      return NextResponse.json({ error: "Appointment not found" }, { status: 404 });
    }

    // Send email notification
    try {
      if (status === "approved") {
        await sendApprovalEmail(appointment.email, appointment.name);
      } else {
        await sendRejectionEmail(appointment.email, appointment.name);
      }
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
      // Don't fail the request if email fails
    }

    return NextResponse.json(appointment);
  } catch (error) {
    console.error("Update error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
