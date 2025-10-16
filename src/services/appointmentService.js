import { appointments } from "../data/mockData";

export const AppointmentService = {
  getAppointmentsByDoctorAndDate(doctorId, date) {
    return appointments.filter(
      (apt) =>
        apt.doctorId === doctorId &&
        new Date(apt.startTime).toDateString() === new Date(date).toDateString()
    );
  },

  getAppointmentsByDoctorAndWeek(doctorId, startDate) {
    const start = new Date(startDate);
    const end = new Date(start);
    end.setDate(start.getDate() + 6); // 7-day range

    return appointments.filter((apt) => {
      const aptDate = new Date(apt.startTime);
      return (
        apt.doctorId === doctorId &&
        aptDate >= start &&
        aptDate <= end
      );
    });
  },
};
