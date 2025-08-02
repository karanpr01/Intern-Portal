# 🌐 Intern Portal (MERN Stack)

An internship management portal where interns can track their
performance, rewards, and leaderboard standing. Built with a custom MERN
stack setup.

------------------------------------------------------------------------

## 🚀 Features

-   🧑‍💻 Login with Referral Code
-   📊 Dashboard with User Info & Donations
-   🎁 Dynamic Rewards Display with Emojis
-   🏆 Leaderboard Rankings
-   ⚙️ Settings Page (for future user preferences)
-   🌙 Dark/Light Theme Toggle
-   ✅ Responsive Sidebar with Active State

------------------------------------------------------------------------

## 🛠️ Tech Stack

### Frontend

-   React + Vite
-   Tailwind CSS + shadcn/ui
-   Axios
-   React Router DOM

### Backend

-   Node.js + Express
-   MongoDB + Mongoose
-   Dotenv + CORS

------------------------------------------------------------------------

## 📁 Project Structure

    Intern-Portal/
    ├── client/                 # React Frontend
    │   ├── src/
    │   │   ├── components/     # Sidebar, ThemeToggle, etc.
    │   │   ├── pages/          # Dashboard, Leaderboard, Settings
    │   │   └── App.jsx
    │   └── index.html
    ├── server/                 # Express Backend
    │   ├── models/User.js
    │   ├── routes/userRoutes.js
    │   ├── seed.js
    │   ├── server.js
    │   └── .env

------------------------------------------------------------------------

## 🔌 Environment Variables

Create a `.env` file in `/server` with:

    PORT=5000
    MONGO_URI=your_mongodb_connection_string

------------------------------------------------------------------------

## ⚙️ How to Run Locally

### 📦 Backend

``` bash
cd server
npm install
npm run seed   # Optional: to insert dummy users
npm start
```

### 🌐 Frontend

``` bash
cd client
npm install
npm run dev
```

Visit: `http://localhost:5173`

------------------------------------------------------------------------

## 🌍 Deployment

### Frontend (Netlify)

1.  Push frontend folder to GitHub.
2.  Connect repo on Netlify.
3.  Set environment variable: `VITE_API_URL=https://your-backend-url`

### Backend (Render/Vercel)

1.  Push server folder to GitHub.
2.  Use Render or Cyclic to deploy Express API.
3.  Add `MONGO_URI` in environment settings.

------------------------------------------------------------------------

## 👏 Acknowledgements

Built by **Prem Karn** 🚀 as part of an intern portal project.
