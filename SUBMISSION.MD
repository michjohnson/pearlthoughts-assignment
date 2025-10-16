# Submission

- Candidate: Michelle Johnson
- Challenge: Hospital Appointment Scheduler (Frontend)
- Tech: React (CRA), date-fns, react-datepicker, custom CSS

## Links
- GitHub Repo: https://github.com/michjohnson/pearlthoughts-assignment>
- Live Demo (optional): <Netlify/Vercel URL if you deploy>
- Video Walkthrough (with face): <video link>
- Cloud API (read-only):
  - Doctors: https://my-json-server.typicode.com/<user>/<repo>/doctors
  - Appointments: https://my-json-server.typicode.com/<user>/<repo>/appointments
  - By doctor: https://my-json-server.typicode.com/<user>/<repo>/appointments?doctorId=2

## How to run
1) npm install
2) npm start

## Architecture
- Service layer: /src/services/appointmentService.js
- Headless logic (hook): /src/hooks/useAppointments.js
- UI components: DayView, WeekView, DoctorSelector, Legend
- Separation of concerns: data access in service, UI is presentational, logic in hook

## What I’d improve with more time
- Precise overlap columns
- Server-backed filtering & pagination
- Calendar library integration (react-big-calendar)

## AI Tools
- Used ChatGPT for guidance & code review; all code understood & adapted.
