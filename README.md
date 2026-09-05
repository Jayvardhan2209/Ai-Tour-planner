# ✈️ AI Tour Planner — Atithi Tech

An AI-powered smart travel companion that generates **personalized travel itineraries** based on the user's destination, travel duration, budget, number of travelers, interests, and travel style.

## 🌟 Overview

Planning a trip usually requires searching across multiple platforms for destinations, activities, schedules, and budget information.

**AI Tour Planner** brings this process together into one application. Users enter their travel preferences, and the system uses **Google Gemini AI** to generate a customized day-by-day itinerary.

## 🚀 Features

* 🤖 AI-generated personalized itineraries
* 📍 Destination-based trip planning
* 🗓️ Day-wise itinerary generation
* 💰 Budget-based planning
* 👥 Support for multiple travelers
* 🎯 Interest-based recommendations
* 🏕️ Multiple travel styles such as Adventure, Relaxation, etc.
* 📋 Structured itinerary and budget breakdown
* 🔐 Backend API for processing requests
* 📱 Responsive React-based interface

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* JavaScript
* Bootstrap
* CSS

### Backend

* Node.js
* Express.js
* REST API

### Database

* MongoDB
* Mongoose

### AI

* Google Gemini API

## 🏗️ System Architecture

```text
User
  │
  ▼
React + Vite Frontend
  │
  │ Travel preferences
  ▼
Node.js + Express Backend
  │
  ├── Request Validation
  │
  ├── Data Processing
  │
  ▼
Google Gemini API
  │
  ▼
AI Generated Itinerary
  │
  ▼
Backend
  │
  ▼
React Frontend
  │
  ▼
Personalized Trip Plan
```

## 📋 User Inputs

The application accepts information such as:

* Starting location
* Destination
* Number of days
* Number of travelers
* Budget
* Travel style
* Interests

Example:

```text
Starting Location: Indore
Destination: Goa
Duration: 4 Days
Travelers: 2
Budget: ₹30,000
Travel Style: Adventure
Interests: Beaches, Food, Nightlife
```

The AI then generates a suitable day-wise travel plan.

## 🧠 How AI Works

The user's travel preferences are sent from the React frontend to the Express backend.

The backend creates a structured prompt containing the user's requirements and sends it to the **Google Gemini API**.

Gemini processes the information and returns a personalized itinerary, which is then displayed to the user.

```text
User Preferences
       ↓
Frontend
       ↓
Backend API
       ↓
Gemini AI
       ↓
Generated Itinerary
       ↓
Frontend
```

## 📁 Project Structure

```text
AI-Tour-Planner/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   └── Tripform.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── routes/
│   ├── models/
│   ├── controllers/
│   ├── server.js
│   └── package.json
│
└── README.md
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/ai-tour-planner.git
cd ai-tour-planner
```

### 2. Install frontend dependencies

```bash
cd frontend
npm install
```

### 3. Install backend dependencies

```bash
cd ../backend
npm install
```

### 4. Configure environment variables

Create a `.env` file inside the backend folder:

```env
PORT=5000
GEMINI_API_KEY=your_gemini_api_key
MONGODB_URI=your_mongodb_connection_string
```

> ⚠️ Never upload your `.env` file or API keys to GitHub.

### 5. Start the backend

```bash
npm run dev
```

### 6. Start the frontend

Open another terminal:

```bash
cd frontend
npm run dev
```

The application will then be available on the local Vite development server.

## 🔮 Future Improvements

* 🗺️ Google Maps integration
* 📌 Interactive map markers
* 🌦️ Real-time weather information
* 🏨 Hotel recommendations
* ✈️ Flight information
* 💳 UPI/payment integration
* 🎙️ Voice-based travel assistant
* 📱 Improved mobile experience
* 🔄 Real-time travel information
* 🧠 Better itinerary validation and recommendation filtering

## 🎯 Problem We Solve

Traditional travel planning requires users to manually search multiple websites for:

* Places to visit
* Activities
* Travel schedules
* Budget planning
* Food recommendations
* Daily itinerary

Our application aims to provide these recommendations through **one AI-powered platform**, reducing the time and effort required to plan a trip.

## 💡 Why AI Tour Planner?

Unlike a traditional static travel website, our system can generate a **different itinerary for different users** based on their individual requirements.

For example:

> Two users visiting Goa for four days may receive completely different itineraries depending on their budget, interests, travel style, and number of travelers.

## 👨‍💻 Project

**Atithi Tech — Smart Travel Companion**

Developed as an academic/project initiative to explore the use of **AI, full-stack web development, APIs, and personalized recommendation systems**.

## 📄 License

This project is created for educational and development purposes.
