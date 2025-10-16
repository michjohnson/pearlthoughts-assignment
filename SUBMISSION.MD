# Submission

- Candidate: Michelle Johnson
- Challenge: Hospital Appointment Scheduler (Frontend)
- Tech: React (CRA), date-fns, react-datepicker, custom CSS

## Links
- GitHub Repo: https://github.com/michjohnson/pearlthoughts-assignment>
- Live Demo : https://hospital-appointment-scheduler.netlify.app/
- Cloud API (read-only):
  - Doctors: https://my-json-server.typicode.com/michjohnson/pearlthoughts-assignment/doctors  
  - Appointments: https://my-json-server.typicode.com/michjohnson/pearlthoughts-assignment/appointments  
  - By doctor: https://my-json-server.typicode.com/michjohnson/pearlthoughts-assignment/appointments?doctorId=2  

## How to run
1. Clone the repo
git clone https://github.com/michjohnson/pearlthoughts-assignment.git 

Install dependencies
1) npm install
Start the development server
2) npm start

## Architecture
- Service layer: /src/services/appointmentService.js
- Headless logic (hook): /src/hooks/useAppointments.js
- UI components: DayView, WeekView, DoctorSelector, Legend
- Design Pattern: Clear separation of concerns — data access handled in  the service layer, UI in components, and business logic in hooks.

## What I’d improve with more time
- Precise overlap columns
- Server-backed filtering & pagination
- Calendar library integration (react-big-calendar)

## AI Tools
- Used ChatGPT for guidance & code review; all code understood & adapted.
