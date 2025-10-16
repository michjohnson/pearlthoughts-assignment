import { useEffect, useState } from "react";
import { AppointmentService } from "../services/appointmentService";

export function useAppointments(doctorId, date) {
  const [dayAppointments, setDayAppointments] = useState([]);
  const [weekAppointments, setWeekAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!doctorId || !date) return;

    setLoading(true);
    setError(null);

    try {
      const dayData = AppointmentService.getAppointmentsByDoctorAndDate(doctorId, date);
      const weekData = AppointmentService.getAppointmentsByDoctorAndWeek(doctorId, date);

      setDayAppointments(dayData);
      setWeekAppointments(weekData);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }, [doctorId, date]);

  return { dayAppointments, weekAppointments, loading, error };
}
