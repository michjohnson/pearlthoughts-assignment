# 🏥 Hospital Appointment Scheduler (Frontend Challenge)

A React-based appointment scheduling interface for hospitals that allows viewing doctor schedules in **Day** and **Week** calendar views.

---

## 👩‍💻 Candidate
**Michelle Johnson**

---

## 🚀 Tech Stack
- React (Create React App)
- date-fns
- react-datepicker
- Custom CSS for styling

---

## 🔗 Live Demo
👉 [https://hospital-appointment-scheduler.netlify.app](https://hospital-appointment-scheduler.netlify.app)

---

## 🧩 Features

### 🌞 Day View
- Displays **appointments from 8 AM to 6 PM** in 30-minute intervals  
- Color-coded appointment types  
  - Blue: Checkup  
  - Green: Consultation  
  - Orange: Follow-up  
  - Purple: Procedure  
- Shows **patient name**, **type**, and **duration**
- Handles overlapping appointments gracefully  

### 📅 Week View
- Displays **Monday–Sunday** overview for the selected week  
- Shows all appointments for the selected doctor  
- Responsive layout for mobile and desktop  

### 👩‍⚕️ Role-Based Filtering
- **Front Desk Staff** can select any doctor  
- **Doctor Role** (in code) can only view their own schedule  
- Displays doctor name, specialty, and working hours  

---

## 🧱 Architecture
- **Service Layer:** `src/services/appointmentService.js` – Handles data fetching  
- **Hook:** `src/hooks/useAppointments.js` – Contains business logic and state  
- **Components:**  
  - `DayView.jsx`  
  - `WeekView.jsx`  
  - `DoctorSelector.jsx`  
  - `Legend.jsx`  
- **Clean separation of concerns** between data, logic, and UI  

---

## ⚙️ How to Run
```bash
npm install
npm start
