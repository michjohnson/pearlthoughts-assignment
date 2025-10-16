import React, { useState } from "react";
import "../App.css";
import { doctors } from "../data/mockData";
import DoctorSelector from "./DoctorSelector";
import DayView from "./DayView";
import WeekView from "./WeekView";
import { useAppointments } from "../hooks/useAppointments";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Legend from "./Legend";

export default function ScheduleView() {
  const userRole = "frontdesk";
  const loggedInDoctorId = 1;

  const [selectedDoctorId, setSelectedDoctorId] = useState(
    userRole === "doctor" ? loggedInDoctorId : null
  );
  const [selectedDate, setSelectedDate] = useState(new Date());

const { dayAppointments, weekAppointments, loading } = useAppointments(selectedDoctorId, selectedDate);

  return (
    <div className="scheduler-container">
      {userRole === "frontdesk" && (
        <div className="doctor-selector">
          <DoctorSelector
            doctors={doctors}
            selectedDoctorId={selectedDoctorId}
            onChange={setSelectedDoctorId}
          />
          {selectedDoctorId && (
  <div style={{ marginTop: "10px", color: "#374151" }}>
    <strong>
      {doctors.find((d) => d.id === selectedDoctorId).name}
    </strong>{" "}
    — {doctors.find((d) => d.id === selectedDoctorId).specialty}
    <br />
    <span>
      Working Hours:{" "}
      {doctors.find((d) => d.id === selectedDoctorId).workingHours.start} -{" "}
      {doctors.find((d) => d.id === selectedDoctorId).workingHours.end}
    </span>
  </div>
)}

        </div>
      )}

      <div className="date-picker">
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="MMMM d, yyyy"
        />
      </div>

      {loading ? (
        <p>Loading appointments...</p>
      ) : (
        <>
          <h2>Day View</h2>
          <DayView appointments={dayAppointments} />

          <h2>Week View</h2>
          <WeekView appointments={weekAppointments} startDate={selectedDate} />
          <Legend/>
        </>
      )}
    </div>
  );
}
