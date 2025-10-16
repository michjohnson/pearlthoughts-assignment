import React from "react";
import { addDays, format, startOfWeek, endOfWeek, isSameDay } from "date-fns";

const colorMap = {
  Checkup: "checkup",
  Consultation: "consultation",
  "Follow-up": "followup",
  Procedure: "procedure",
};

// Generate 30-minute slots from 8:00 to 18:00
function generateTimeSlots() {
  const slots = [];
  for (let hour = 8; hour < 18; hour++) {
    slots.push(`${hour}:00`);
    slots.push(`${hour}:30`);
  }
  return slots;
}

export default function WeekView({ appointments, startDate }) {
  const weekStart = startOfWeek(startDate, { weekStartsOn: 1 }); // Monday
  const weekEnd = endOfWeek(startDate, { weekStartsOn: 1 }); // Sunday
  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));
  const timeSlots = generateTimeSlots();

  const weekRangeLabel = `${format(weekStart, "MMM d")} - ${format(
    weekEnd,
    "MMM d, yyyy"
  )}`;

  return (
    <div className="weekview">
      {/* 🗓️ Week Label */}
      <h3
        style={{
          marginBottom: "10px",
          color: "#1f2937",
          fontWeight: "600",
          fontSize: "1.1rem",
        }}
      >
        Week of {weekRangeLabel}
      </h3>

      <table>
        <thead>
          <tr>
            <th style={{ width: "80px" }}>Time</th>
            {weekDays.map((day) => (
              <th key={day}>{format(day, "EEE dd/MM")}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {timeSlots.map((time) => (
            <tr key={time}>
              <td>
                <strong>{time}</strong>
              </td>

              {weekDays.map((day) => {
                // Filter appointments matching this day + time slot
                const slotAppointments = appointments.filter((apt) => {
                  const aptDate = new Date(apt.startTime);
                  return (
                    isSameDay(aptDate, day) &&
                    aptDate.getHours() === Number(time.split(":")[0]) &&
                    aptDate.getMinutes() === Number(time.split(":")[1] || 0)
                  );
                });

                return (
                  <td key={day}>
                    {slotAppointments.map((apt, index) => (
                      <div
                        key={apt.id}
                        className={`appointment ${colorMap[apt.type]}`}
                        style={{
                          marginLeft: `${index * 6}px`, // offset for overlaps
                          minWidth: "100px",
                          fontSize: "0.85rem",
                        }}
                      >
                        <strong>{apt.patient}</strong>
                        <div>{apt.type}</div>
                      </div>
                    ))}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
