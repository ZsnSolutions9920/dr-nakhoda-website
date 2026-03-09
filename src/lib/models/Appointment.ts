import mongoose, { Schema, Document } from "mongoose";

export interface IAppointment extends Document {
  name: string;
  email: string;
  phone: string;
  service: string;
  status: "pending" | "approved" | "rejected";
  createdAt: Date;
}

const AppointmentSchema = new Schema<IAppointment>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  service: { type: String, required: true },
  status: { type: String, enum: ["pending", "approved", "rejected"], default: "pending" },
  createdAt: { type: Date, default: Date.now },
});

export const Appointment =
  mongoose.models.Appointment || mongoose.model<IAppointment>("Appointment", AppointmentSchema);
