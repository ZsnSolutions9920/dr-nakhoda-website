import mongoose from "mongoose";
import bcryptjs from "bcryptjs";

async function seed() {
  const uri = process.env.MONGODB_URI || "mongodb+srv://zsnsolutions1:jWkpCPNpMVjY38RO@cluster0.k2bwcti.mongodb.net/?appName=Cluster0";
  await mongoose.connect(uri);

  const AdminSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  });

  const Admin = mongoose.models.Admin || mongoose.model("Admin", AdminSchema);

  const existing = await Admin.findOne({ email: "admin" });
  if (existing) {
    console.log("Admin already exists.");
  } else {
    const hashed = await bcryptjs.hash("admin123", 12);
    await Admin.create({ email: "admin@drnakhodas.com", password: hashed });
    console.log("Admin created: admin / admin123");
  }

  await mongoose.disconnect();
  process.exit(0);
}

seed().catch(console.error);
