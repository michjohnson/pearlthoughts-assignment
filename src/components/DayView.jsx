import React from "react";

// Appointment colors
const colorMap = {
  Checkup: "checkup",
  Consultation: "consultation",
  "Follow-up": "followup",
  Procedure: "procedure",
};

// Helper: generate 30-minute time slots from 8:00 to 18:00
function generateTimeSlots() {
  const slots = [];
  for (let hour = 8; hour < 18; hour++) {
    slots.push(`${hour}:00`);
    slots.push(`${hour}:30`);
  }
  return slots;
}

// Helper: calculate duration in minutes
function getDuration(startTime, endTime) {
  const start = new Date(startTime);
  const end = new Date(endTime);
  return Math.round((end - start) / (1000 * 60));
}

export default function DayView({ appointments }) {
  const timeSlots = generateTimeSlots();

  // Handle overlapping appointments (slight horizontal offset)
  const getOverlapOffset = (time, aptIndex) => {
    const sameTimeApts = appointments.filter(
      (a) => new Date(a.startTime).getHours() === Number(time.split(":")[0])
    );
    return sameTimeApts.length > 1 ? aptIndex * 8 : 0; // 8px offset
  };

  return (
    <div className="dayview">
      {timeSlots.map((time) => (
        <div key={time} style={{ display: "flex", alignItems: "center" }}>
          <strong style={{ width: "60px" }}>{time}</strong>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {appointments
              .filter(
                (apt) =>
                  new Date(apt.startTime).getHours() ===
                    Number(time.split(":")[0]) &&
                  new Date(apt.startTime).getMinutes() ===
                    Number(time.split(":")[1] || 0)
              )
              .map((apt, index) => (
                <div
                  key={apt.id}
                  className={`appointment ${colorMap[apt.type]}`}
                  style={{
                    transform: `translateX(${getOverlapOffset(time, index)}px)`,
                    minWidth: "120px",
                  }}
                >
                  <div style={{ fontWeight: "bold" }}>{apt.patient}</div>
                  <div>
                    {apt.type} ({getDuration(apt.startTime, apt.endTime)} min)
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
