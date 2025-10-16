import React from "react";

export default function DoctorSelector({ doctors, selectedDoctorId, onChange }) {
  return (
    <select
      value={selectedDoctorId || ""}
      onChange={(e) => onChange(Number(e.target.value))}
      className="border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white text-gray-700"
    >
      <option value="" disabled>
        -- Select a Doctor --
      </option>
      {doctors.map((doctor) => (
        <option key={doctor.id} value={doctor.id}>
          {doctor.name} ({doctor.specialty})
        </option>
      ))}
    </select>
  );
}
