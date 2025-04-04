# LifeBridge Application

This is a Node.js application that connects donors with people in need. It uses MongoDB for database storage, Express.js for the web framework, and Passport.js for user authentication.

## Tech Stack

- **Frontend:** EJS (Embedded JavaScript Templates)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Atlas or Local)
- **Authentication:** Passport.js
- **Templating Engine:** EJS Mate
- **Session Management:** Express-session, Connect-flash

## Prerequisites

Before running the project, make sure you have installed:

- [Node.js](https://nodejs.org/) (v14 or above)
- [MongoDB](https://www.mongodb.com/) (MongoDB Atlas or local installation)
- [npm](https://www.npmjs.com/)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/prathampmp23/Life-Bridge.git
   cd Life-Bridge
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add:

   ```env
   ATLASDB_URL=your-mongodb-atlas-url
   SECRET=your-session-secret
   MAP_TOKEN=your-mapbox-token
   ```

   Replace the placeholder values with your actual credentials.

4. **Run the app locally:**

   ```bash
   node app.js
   ```

   By default, the app runs on [http://localhost:3000](http://localhost:3000)

## Routes Overview

- `/` — Home page
- `/lifeBridge` — Donor listings
- `/lifeBridge/awareness` — Awareness and information
- `/lifeBridge/filtered` — Location-based donor search
- `/lifeBridge/upcomingCamp` — Upcoming camps
- `/lifeBridge//user/dashboard` — Dashboard page
- `/register` — User registration
- `/login` — User login

## Features

- **Authentication** with Passport.js
- **MongoDB Integration** using Mongoose
- **Session Management** with express-session and connect-flash
- **Templating** using EJS and ejs-mate layout engine
- **Static Assets** served from the `/public` directory

## Troubleshooting

- **MongoDB connection error?**
  - Check your `ATLASDB_URL` in the `.env` file.
- **Port 3000 already in use?**
  - Modify the port in `app.listen()` inside `app.js`.
