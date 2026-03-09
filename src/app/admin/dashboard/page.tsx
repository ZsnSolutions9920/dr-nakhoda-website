"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Appointment {
  _id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  status: "pending" | "approved" | "rejected";
  createdAt: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState<string | null>(null);
  const [filter, setFilter] = useState<"all" | "pending" | "approved" | "rejected">("all");

  const fetchAppointments = async () => {
    try {
      const res = await fetch("/api/admin/appointments");
      if (res.status === 401) {
        router.push("/admin");
        return;
      }
      const data = await res.json();
      setAppointments(data);
    } catch {
      console.error("Failed to fetch appointments");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateStatus = async (id: string, status: "approved" | "rejected") => {
    setUpdating(id);
    try {
      const res = await fetch("/api/admin/appointments", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      });
      if (res.ok) {
        await fetchAppointments();
      }
    } catch {
      alert("Failed to update appointment");
    } finally {
      setUpdating(null);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin");
  };

  const filtered = filter === "all" ? appointments : appointments.filter((a) => a.status === filter);

  const counts = {
    all: appointments.length,
    pending: appointments.filter((a) => a.status === "pending").length,
    approved: appointments.filter((a) => a.status === "approved").length,
    rejected: appointments.filter((a) => a.status === "rejected").length,
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p className="text-text-light">Loading appointments...</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-heading text-3xl text-text">Dashboard</h1>
          <p className="text-text-light text-sm mt-1">Manage appointment requests</p>
        </div>
        <button
          onClick={handleLogout}
          className="text-sm text-text-light hover:text-red-500 transition-colors"
        >
          Logout
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {(["all", "pending", "approved", "rejected"] as const).map((key) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`rounded-xl p-4 text-left transition-all ${
              filter === key
                ? "bg-primary text-white shadow-md"
                : "bg-white border border-gray-200 hover:border-primary/30"
            }`}
          >
            <p className={`text-2xl font-bold ${filter === key ? "text-white" : "text-text"}`}>
              {counts[key]}
            </p>
            <p className={`text-xs capitalize ${filter === key ? "text-white/80" : "text-text-light"}`}>
              {key === "all" ? "Total" : key}
            </p>
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="text-left text-xs font-medium text-text-light uppercase tracking-wide px-6 py-4">
                  Name
                </th>
                <th className="text-left text-xs font-medium text-text-light uppercase tracking-wide px-6 py-4">
                  Email
                </th>
                <th className="text-left text-xs font-medium text-text-light uppercase tracking-wide px-6 py-4">
                  Phone
                </th>
                <th className="text-left text-xs font-medium text-text-light uppercase tracking-wide px-6 py-4">
                  Service
                </th>
                <th className="text-left text-xs font-medium text-text-light uppercase tracking-wide px-6 py-4">
                  Date
                </th>
                <th className="text-left text-xs font-medium text-text-light uppercase tracking-wide px-6 py-4">
                  Status
                </th>
                <th className="text-left text-xs font-medium text-text-light uppercase tracking-wide px-6 py-4">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="text-center py-12 text-text-light">
                    No appointments found.
                  </td>
                </tr>
              ) : (
                filtered.map((apt) => (
                  <tr key={apt._id} className="border-b border-gray-50 hover:bg-gray-50/50">
                    <td className="px-6 py-4 text-sm font-medium text-text">{apt.name}</td>
                    <td className="px-6 py-4 text-sm text-text-light">{apt.email}</td>
                    <td className="px-6 py-4 text-sm text-text-light">{apt.phone}</td>
                    <td className="px-6 py-4 text-sm text-text-light">{apt.service}</td>
                    <td className="px-6 py-4 text-sm text-text-light">
                      {new Date(apt.createdAt).toLocaleDateString("en-PK", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex text-xs font-medium px-2.5 py-1 rounded-full ${
                          apt.status === "pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : apt.status === "approved"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {apt.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {apt.status === "pending" ? (
                        <div className="flex gap-2">
                          <button
                            onClick={() => updateStatus(apt._id, "approved")}
                            disabled={updating === apt._id}
                            className="text-xs font-medium px-3 py-1.5 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 transition-colors disabled:opacity-50"
                          >
                            {updating === apt._id ? "..." : "Approve"}
                          </button>
                          <button
                            onClick={() => updateStatus(apt._id, "rejected")}
                            disabled={updating === apt._id}
                            className="text-xs font-medium px-3 py-1.5 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-colors disabled:opacity-50"
                          >
                            {updating === apt._id ? "..." : "Reject"}
                          </button>
                        </div>
                      ) : (
                        <span className="text-xs text-text-light">—</span>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
