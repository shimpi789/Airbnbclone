# 🏡 StayGenie – MERN Stack

StayGenie is a full-stack web application that replicates the core functionalities of Airbnb. Users can browse listings, make bookings, and manage their properties—all in one place.

---

## 🚀 Features

- 🏠 **Listing Management**: Add, update, and delete property listings.
- 📅 **Booking System**: Book available listings for selected dates.
- 🧾 **Authentication**: Sign-up, login, and session handling using JWT.
- 💼 **User Dashboard**: View your trips and listed properties.
- 📸 **Image Upload**: Upload multiple images per listing.
- 🔍 **Search/Filter**: Search listings by city, landmark, etc.
- 💬 **Responsive UI**: Optimized for desktop and mobile with Tailwind CSS.

---

## 🛠️ Tech Stack

### Frontend:
- React.js (with Context API)
- React Router DOM
- Tailwind CSS
- Axios

### Backend:
- Node.js
- Express.js
- MongoDB (with Mongoose)
- JWT (JSON Web Token) for Authentication
- Multer (for Image Upload)

---

## 🌐 Live Demo

👉 [https://staygenie-t5kx.onrender.com](https://staygenie-t5kx.onrender.com)

---

## 🔧 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/AirbnbClone
cd AirbnbClone
```


### 2.start the backend
```bash
cd backend
npm install
npm run dev
```

### 3.start the frontend
```bash
cd frontend
npm install
npm run dev
```

### Create a `.env` file in the `backend` folder and add the following:
```env
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```


