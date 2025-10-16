export const doctors = [
  { id: 1, name: "Dr. Sarah Chen", specialty: "Cardiology" ,workingHours: { start: "08:00", end: "18:00" }} ,
  { id: 2, name: "Dr. Rahul Mehta", specialty: "Dermatology", workingHours: { start: "09:00", end: "17:00" } },
  { id: 3, name: "Dr. Priya Sharma", specialty: "Neurology", workingHours: { start: "08:30", end: "16:30" } },
];

export const appointments = [
  {
    id: 1,
    doctorId: 1,
    patient: "John Doe",
    type: "Checkup",
    startTime: "2025-10-15T08:30:00",
    endTime: "2025-10-15T09:00:00",
  },
  {
    id: 2,
    doctorId: 1,
    patient: "Jane Smith",
    type: "Consultation",
    startTime: "2025-10-15T10:00:00",
    endTime: "2025-10-15T11:00:00",
  },
  {
    id: 3,
    doctorId: 2,
    patient: "Rahul Verma",
    type: "Follow-up",
    startTime: "2025-10-15T09:30:00",
    endTime: "2025-10-15T10:00:00",
  },
  {
    id: 4,
    doctorId: 2,
    patient: "Anita Rao",
    type: "Procedure",
    startTime: "2025-10-18T14:00:00",
    endTime: "2025-10-18T15:00:00",
  },
  {
    id: 5,
    doctorId: 3,
    patient: "David Mathew",
    type: "Checkup",
    startTime: "2025-10-19T11:30:00",
    endTime: "2025-10-19T12:00:00",
  },
];
