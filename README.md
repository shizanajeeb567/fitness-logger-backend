Fitness Logger API
A RESTful API built with TypeScript, Node.js, Express, and MongoDB that allows users to manage their workout logs and weekly fitness plans. Users can log workouts, view their plans, and see workout statistics.

Features
Create and view workout logs

Create and view weekly workout plans

View workout statistics

JWT-based user authentication

Secure password storage with bcrypt

Folder Structure
backend/
├── config/ // MongoDB connection
├── controllers/ // Handles requests
├── middlewares/ // Auth middleware
├── models/ // Mongoose schemas
├── routes/ // API endpoints
├── services/ // Business logic
├── node_modules/
├── types/ // TypeScript types
.env // Environment variables
app.ts // Express app setup
server.ts // Server entry point
tsconfig.json
package.json

Setup Instructions
Install dependencies:
npm install

Create a .env file.

Start the server:
npm run dev

API Overview
POST /api/auth/register – Register a new user

POST /api/auth/login – User login

POST /api/workouts – Create a workout log

GET /api/workouts – View all workout logs

POST /api/plans – Create a weekly plan

GET /api/plans – View weekly plans

GET /api/stats – View workout statistics

Note: All workout and plan routes require a valid JWT token.

Technologies Used
TypeScript

Node.js

Express.js

MongoDB + Mongoose

JWT for authentication

bcrypt for password hashing

dotenv for environment configuration

License
This project is licensed under the MIT License.
