# Healthcare Backend System

A robust Node.js and Express backend system for managing healthcare workflows, including patient records, doctor profiles, and patient-doctor appointments/mappings.

**Live Deployment:** [https://healthcare-backend-system.onrender.com](https://healthcare-backend-system.onrender.com)

---

## 🚀 Features

- **Authentication & Authorization:** Secure JWT-based user authentication and password hashing using bcrypt.
- **Role-based Data Ownership:** Users can manage the doctors and patients they register.
- **Doctor Management:** Full CRUD capabilities for doctor profiles (Name, Specialization, Contact).
- **Patient Management:** Full CRUD capabilities for patient records (Name, Age, Gender, Contact).
- **Patient-Doctor Mapping:** Many-to-Many relational mapping between patients and doctors (Assign, View, Remove).
- **Data Validation:** Strict input validation and sanitization using Joi.
- **Database ORM:** Managed via Prisma ORM connected to a PostgreSQL database (hosted on Supabase).
- **Error Handling:** Centralized global error handling middleware for consistent API responses.
- **RESTful Architecture:** Clear, standardized, and semantic API endpoints.

---

## 🛠️ Tech Stack

- **Runtime:** [Node.js](https://nodejs.org/)
- **Framework:** [Express.js](https://expressjs.com/)
- **Database:** [PostgreSQL](https://www.postgresql.org/) (via [Supabase](https://supabase.com/))
- **ORM:** [Prisma](https://www.prisma.io/)
- **Validation:** [Joi](https://joi.dev/)
- **Security:** [jsonwebtoken (JWT)](https://jwt.io/), [bcrypt](https://www.npmjs.com/package/bcrypt)
- **Deployment:** [Render](https://render.com/)

---

## ⚙️ Local Setup & Installation

### Prerequisites
- Node.js (v18 or higher)
- PostgreSQL Database (or a Supabase account)

### 1. Clone the repository
```bash
git clone https://github.com/debayudh2001/WhatBytes-Assignment.git
cd WhatBytes-Assignment
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory based on `.env.example`:
```env
# Connect to Supabase via connection pooling
DATABASE_URL="your-connection-pooling-url"

# Direct connection to the database. Used for migrations
DIRECT_URL="your-direct-database-url"

PORT=3000

JWT_SECRET="your-super-secret-jwt-key"
```

### 4. Setup Database
Generate Prisma client and apply migrations to your database:
```bash
npx prisma generate
npx prisma migrate dev --name init
```

### 5. Start the Application
Run the application in development mode:
```bash
npm run dev
```

The server should now be running on `http://localhost:3000`.

---

## 📡 API Endpoints

### Auth Routes (`/api/auth`)
- `POST /register`: Register a new user
- `POST /login`: Authenticate and log in

*(Note: All routes below require a valid JWT token in the `Authorization` header)*

### Patient Routes (`/api/patients`)
- `POST /`: Create a new patient
- `GET /`: Retrieve all patients
- `GET /:id`: Retrieve a specific patient by ID
- `PUT /:id`: Update a patient's details
- `DELETE /:id`: Delete a patient

### Doctor Routes (`/api/doctors`)
- `POST /`: Create a new doctor profile
- `GET /`: Retrieve all doctors
- `GET /:id`: Retrieve a specific doctor by ID
- `PUT /:id`: Update a doctor's details
- `DELETE /:id`: Delete a doctor

### Mapping Routes (`/api/mappings`)
- `POST /`: Assign a doctor to a patient
- `GET /`: Retrieve all active mappings
- `GET /:patientId`: Retrieve all doctors assigned to a specific patient
- `DELETE /:id`: Remove a specific patient-doctor mapping

---

## 👨‍💻 Author

**Debayudh Chakraborty**
