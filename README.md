Fitness Logger API
A RESTful API built with Node.js, Express, TypeScript, and MongoDB that allows users to track workouts, manage weekly fitness plans, and view statistics like calories burned and most frequent workout type.

Features
User registration and login with JWT authentication

Log daily workouts with exercises and calories burned

Create and update weekly workout plans

View monthly calorie stats and frequent workout types

Protected routes with middleware

Organized using MVC + Service structure

Folder Structure
backend/
├── config/         # MongoDB connection
├── controllers/    # Request handlers
├── middleware/     # Auth middleware
├── models/         # Mongoose schemas
├── routes/         # API endpoints
├── services/       # Business logic
├── .env            # Environment variables
├── app.ts          # Express app
├── server.ts       # Entry point
├── tsconfig.json
└── package.json

Setup Instructions
Clone the repository
Navigate to backend folder
Install dependencies
npm install
Create a .env file
Run the app:
Development: npm run dev
Production: npm run build && npm start

API Overview
Auth
Method	Route	Description
POST	/api/auth/signup	Register a user
POST	/api/auth/login	Login and get token

Workout Logs
Method	Route	Description
POST	/api/logs	Log a workout
GET	/api/logs	Get logs by day, month, or year

Weekly Plan
Method	Route	Description
POST	/api/plan	Create weekly workout plan
GET	/api/plan?week=	View plan for a given week
PUT	/api/plan/:day	Update a specific day in the plan

Stats
Method	Route	Description
GET	/api/stats/monthly	Monthly calories burned
GET	/api/stats/frequent	Most frequent workout type

Technologies Used
Node.js

Express.js

TypeScript

MongoDB + Mongoose

JWT (Authentication)

bcrypt (Password hashing)

dotenv (Environment config)

License
MIT License
