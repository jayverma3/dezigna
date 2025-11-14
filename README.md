# Dezigna Authentication Project

This project is a modern web application with a React frontend and a PHP backend, featuring a secure, server-based authentication system.

## Project Structure

- `/src`: Contains the React frontend application.
- `/backend`: Contains the PHP backend API files.
- `vite.config.js`: Vite configuration, including the proxy to the backend.
- `database_schema.sql`: The SQL schema for the `users` table.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js and npm**: For running the React frontend.
- **A local web server with PHP and MySQL**: We recommend [XAMPP](https://www.apachefriends.org/index.html) or a similar stack.
- **A database management tool**: Like phpMyAdmin (included with XAMPP) or MySQL Workbench.

---

## Setup Instructions

### 1. Backend Setup (PHP Server)

The PHP backend handles user registration, verification, and login.

**Step 1: Place the Backend Files**

- Copy the `backend` folder from this project into the `htdocs` directory of your XAMPP installation (or the equivalent for your web server).
- Rename the folder to `dezigna-backend`. Your API will be accessible at `http://localhost/dezigna-backend/`.

**Step 2: Create the Database**

- Open phpMyAdmin.
- Create a new database named `dezigna_db`.
- Select the `dezigna_db` database and go to the "Import" tab.
- Upload and import the `database_schema.sql` file from this project to create the `users` table.

**Step 3: Configure Database Connection**

- Open the `backend/config.php` file.
- Update the database credentials with your own.

```php
<?php
// Database credentials
define('DB_HOST', 'localhost');
define('DB_USER', 'root'); // Your database username (default for XAMPP is 'root')
define('DB_PASS', '');    // Your database password (default for XAMPP is empty)
define('DB_NAME', 'dezigna_db'); // The database name you created
```

**Step 4: Update Vite Proxy Configuration**

- Open `vite.config.js` in the project root.
- Make sure the `target` in the proxy configuration matches your backend URL.

```javascript
// vite.config.js
export default defineConfig({
  // ... other config
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost/dezigna-backend', // This should match your backend folder in htdocs
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
```

### 2. Frontend Setup (React App)

The React app is built with Vite and provides the user interface.

**Step 1: Install Dependencies**

- Open your terminal in the project root directory and run:
  ```bash
  npm install
  ```

**Step 2: Run the Development Server**

- After the installation is complete, run:
  ```bash
  npm run dev
  ```

- Your React application will now be running at `http://localhost:5173` (or another port if 5173 is busy).

---

## How It Works

You can now open your browser and navigate to `http://localhost:5173`. When you register or log in, the React application will send API requests to `/api/...`. The Vite development server will intercept these requests and forward them to your PHP backend at `http://localhost/dezigna-backend/`, which will then interact with the database.

This setup allows for seamless communication between the frontend and backend during development.