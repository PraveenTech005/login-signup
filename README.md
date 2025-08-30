# MERN Authentication App 🔐

![React](https://img.shields.io/badge/Frontend-React-blue?logo=react)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green?logo=node.js)
![Express](https://img.shields.io/badge/Framework-Express-lightgrey?logo=express)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-darkgreen?logo=mongodb)
![JWT](https://img.shields.io/badge/Auth-JWT-orange?logo=jsonwebtokens)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)  

A simple authentication system built with the **MERN stack** (MongoDB, Express, React, Node.js).  
This app demonstrates **signup, login, JWT authentication, and protected routes** with a minimal and beginner-friendly approach.  

---

## 🚀 Live Demo  

🔗 **Running on Vercel as FrontEnd and Render as Backend:** [Login-Signup](https://login-signup-kappa-fawn.vercel.app/)

<p align="center">
  <a href="[https://your-frontend.vercel.app](https://login-signup-kappa-fawn.vercel.app/)" target="_blank">
    <img src="https://img.shields.io/badge/Live-Demo-green?style=for-the-badge&logo=vercel" alt="Live Demo" />
  </a>
</p>

---

## ✨ Features
- 📝 **Signup** – Create an account with name, email, and password  
- 🔑 **Login** – Authenticate and receive a JWT token  
- 🛡️ **Protected Routes** – Only accessible with a valid token  
- 👤 **User Dashboard** – Displays user details (name, email, createdAt, updatedAt)  
- 🚪 **Logout & Delete Account** – Secure logout and account removal  
- 🔒 **Password Security** – Passwords hashed using bcrypt before saving in DB  
- ⚡ **React Frontend** – Clean UI with conditional rendering  

---

## 🛠️ Tech Stack
**Frontend**
- React
- Axios
- React Router
- React Toastify

**Backend**
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (JSON Web Token)
- bcrypt

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/mern-auth-app.git
cd mern-auth-app
```

### 2. Install Dependencies
# Install server deps
```bash
cd server && npm install
```

# Install client deps
```bash
cd ../client && npm install
```

### 3. Environment Variables
Create .env files in both server/ and client/:
server/.env
```bash
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
PORT=3000
```

### 4. Start the App
```bash
# Start the App from Root Directory
npm run dev

OR

# Start backend
cd server
npm run dev

# Start frontend
cd client
npm run dev
```

Now open 👉 http://localhost:5173 "BOOM"
