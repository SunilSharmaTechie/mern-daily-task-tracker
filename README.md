# 📆 Task Tracker

**Task Tracker** is a full-stack application built with the **MERN stack** (**MongoDB, Express, React,** and **Node.js**) that provides **user authentication (login/register), task creation, and management** via an intuitive dashboard.

This project leverages **Tailwind CSS** for rapid styling and **SASS (SCSS)** for custom style overrides, all organized in a **modular, expert-level folder structure**.

---

## 📜 Table of Contents

- [📆 Task Tracker](#-task-tracker)
  - [📜 Table of Contents](#-table-of-contents)
  - [🎯 Overview](#-overview)
  - [🚀 Features](#-features)
  - [🛠 Technologies Used](#-technologies-used)
    - [🌐 **Frontend (Client)**](#-frontend-client)
    - [🖥️ **Backend (Server)**](#️-backend-server)
  - [🚀 Why Vite Instead of Create React App (CRA)?](#-why-vite-instead-of-create-react-app-cra)
      - [✅Faster Development Builds](#faster-development-builds)
      - [✅Instant Hot Module Replacement (HMR)](#instant-hot-module-replacement-hmr)
      - [✅Optimized Production Build](#optimized-production-build)
      - [✅Lightweight \& Minimal Boilerplate](#lightweight--minimal-boilerplate)
    - [⚠️ CRA Might Be Preferred When](#️-cra-might-be-preferred-when)
  - [🏆 Why JSX Instead of TSX?](#-why-jsx-instead-of-tsx)
  - [📥 Getting Started](#-getting-started)
      - [🔧 Prerequisites](#-prerequisites)
      - [⚙️ Installation](#️-installation)
      - [🚀 Running the Application](#-running-the-application)
  - [📂 Folder Structure](#-folder-structure)
  - [🧪 Testing](#-testing)
      - [✅ Unit Testing](#-unit-testing)
      - [✅ E2E Testing (Cypress)](#-e2e-testing-cypress)
  - [📌 Linting \& Formatting](#-linting--formatting)
      - [✅ Check for Lint Errors](#-check-for-lint-errors)
      - [✅ Fix Lint Issues Automatically](#-fix-lint-issues-automatically)
      - [✅ Format Code with Prettier](#-format-code-with-prettier)
  - [📜 License](#-license)
  - [📞 Contact](#-contact)


---

## 🎯 Overview

**Task Tracker** enables users to:

- ✅ **Register/Login** securely with JWT authentication.
- ✅ **Manage tasks** (Create, Read, Update, Delete).
- ✅ **Personalized Dashboard** with real-time UI updates.
- ✅ **Modern UI** using **Tailwind CSS** + **SCSS** for styling.

---

## 🚀 Features

- 🔐 **User Authentication:** Secure login with JWT.
- ✅ **Task CRUD Operations:** Full API integration for task management.
- 📊 **Dashboard UI:** Easy-to-use, dynamic task management.
- 🎨 **Tailwind + SCSS:** Scalable styling with **utility classes + overrides**.

---

## 🛠 Technologies Used

### 🌐 **Frontend (Client)**

- **Vite** (for optimized React development)
- **React 19** (Component-based UI)
- **React Router** (Client-side navigation)
- **Tailwind CSS** (Utility-first styling)
- **SASS (SCSS)** (Custom styling overrides)
- **Jest & React Testing Library** (Unit testing)
- **Cypress** (End-to-End testing)
- **ESLint & Prettier** (Linting and formatting)

### 🖥️ **Backend (Server)**

- **Node.js** (JavaScript runtime)
- **Express.js** (Web framework for APIs)
- **MongoDB & Mongoose** (Database & ODM)
- **JWT** (Authentication)
- **bcrypt.js** (Password hashing)
- **dotenv** (Environment configuration)
- **Jest & Supertest** (Unit testing for API)
- **ESLint & Prettier** (Code linting and formatting)

---

## 🚀 Why Vite Instead of Create React App (CRA)?

In this project, we chose **Vite** over **Create React App (CRA)** due to the following reasons:

#### ✅Faster Development Builds

- **Vite** uses native **ES modules (ESM)**, meaning **no bundling** during development.
- **CRA** relies on **Webpack**, which slows down startup time.

#### ✅Instant Hot Module Replacement (HMR)

- Changes **instantly reflect** in the browser **without a full refresh**.
- **CRA**'s HMR can be sluggish, especially in **large projects**.

#### ✅Optimized Production Build

- **Vite** **splits the code more efficiently** for **better performance**.
- **CRA's Webpack bundler** produces **heavier builds**.

#### ✅Lightweight & Minimal Boilerplate

- **CRA installs unnecessary dependencies** by default, increasing project size.
- **Vite is more lightweight** and optimized for performance.

### ⚠️ CRA Might Be Preferred When

- If you're working on a **legacy React project** built with **Webpack**.
- If you need **default Webpack configurations** and prefer **not configuring Vite manually**.

---

## 🏆 Why JSX Instead of TSX?

We chose **JSX** over **TSX (TypeScript + JSX)** for the following reasons:

- **Faster development** without type annotations.
- **Simpler setup** (no TypeScript complexity).
- **Less boilerplate** (avoids strict typing in frontend).
- **Type safety is handled at the backend level** (MongoDB schemas & API validation).

> **If needed, TypeScript can be added later as the project scales.**

---

## 📥 Getting Started

Follow these steps to set up and run the Task Tracker application on your local machine.

#### 🔧 Prerequisites

- **Node.js & npm:**
  If you haven't installed Node.js yet, download and install it from the [official Node.js website](https://nodejs.org/). Make sure to choose the LTS version (v18 or later), which includes npm by default. Once installed, verify your setup by running:
  ```bash
  node -v
  npm -v
  ```
- **MongoDB:**
  Install MongoDB locally by downloading it from the [MongoDB Community Edition](https://www.mongodb.com/try/download/community) and running the `mongod` service, or use a cloud-based solution such as [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
- **Git:**
  Ensure you have [Git](https://git-scm.com/downloads) installed on your system to clone the repository. If you haven't installed it yet, you can download it from [here](https://git-scm.com/downloads).

#### ⚙️ Installation

- **Step 1:** Clone the Repository
  Clone the repository to your local machine:
  ```bash
  git clone https://github.com/SunilITXpert/mern-daily-task-tracker.git
  cd mern-daily-task-tracker
  ```
- **Step 2: Set Up Environment Variables:**
  Create a .env file (or server/config/config.env if you prefer separating server configuration) with the following contents, adjusting the values as needed:

  ```ini
  # .env
  PORT=5000
  HOST=localhost
  PROTOCOL=http
  MONGO_URI=mongodb://localhost:27017/task-tracker
  JWT_SECRET=your_jwt_secret_key
  VITE_API_BASE_URL=http://localhost:5000/api
  VITE_BASE_URL=http://localhost:3000

  ```

  Note: Ensure that your secret keys and sensitive information are kept secure and not committed to version control.

- **Step 3:** Install Server Dependencies
  Navigate to the server directory and install dependencies:
  ```bash
  cd server
  pnpm install
  # (Use with Caution) To update all dependencies to their latest versions, use: pnpm update --latest
  ```
- **Why use pnpm instead of npm or yarn?**

  - 🚀 **Faster Installations:** **pnpm** uses a content-addressable file system that stores all packages in a global store, which can significantly speed up the installation process.
  - 💾 **Disk Space Efficiency:** It avoids duplicating dependencies across projects by linking to a single store of packages, thereby saving disk space.
  - 🔒 **Strict Dependency Resolution:** **pnpm** enforces a strict version resolution, which helps avoid issues related to dependency conflicts and ensures a more consistent `node_modules` structure.
  - ⚡ **Better Performance on Large Projects:** Its efficient package linking and caching mechanism often result in faster dependency management compared to **npm** and **yarn**.

  Using **pnpm** can lead to a more **performant and reliable** development environment, especially in **large-scale projects**.

- **Step 4: Install Client Dependencies:**
  In a new terminal window/tab, navigate to the client directory and install dependencies:
  ```bash
  cd client
  pnpm install
  # (Use with Caution) To update all dependencies to their latest versions, use: pnpm update --latest
  ```

#### 🚀 Running the Application

You have two main options to run the application:

- **Option 1:** Run Server and Client Separately
  - **Start the Server:** Open a terminal, navigate to the server folder, and run:
  ```bash
  cd server
  pnpm run dev
  ```
  <small>The server should now be running (default: http://localhost:5000).</small>
  - **Start the Client:** In another terminal, navigate to the client folder, and run:
  ```bash
  cd client
  pnpm run dev
  ```
  <small>The React application will launch (default: http://localhost:3000).</small>
- **Option 2:** Run Both Concurrently
  If you prefer a single command to run both the client and server concurrently, ensure your root package.json is configured with the appropriate scripts (using the concurrently package). For example:

```json
// Root package.json
{
  "scripts": {
    "dev": "concurrently \"pnpm run server\" \"pnpm run client\"",
    "server": "cd server && pnpm run dev",
    "client": "cd client && pnpm run dev"
  },
  "devDependencies": {
    "concurrently": "^9.1.2"
  }
}
```

Then, from the root directory, run:

```bash
pnpm run dev
```

---

## 📂 Folder Structure

Below is a high-level overview of the project structure:

```plaintext
mern-daily-task-tracker/                           # Root project directory
├── client/                             # Frontend - React (Vite-based)
│   ├── public/                         # Static assets like images, favicons, manifest files
│   ├── src/                            # Source code for the frontend
│   │   ├── assets/                     # Fonts, images, icons, and global stylesheets
│   │   ├── components/                 # Reusable UI components (buttons, modals, forms)
│   │   ├── hooks/                      # Custom React hooks for reusability
│   │   ├── layouts/                    # Common page layouts (e.g., AuthLayout, DashboardLayout)
│   │   ├── pages/                      # Page components (Login, Register, Dashboard)
│   │   ├── routes/                     # React Router configurations
│   │   ├── styles/                     # Global styles or theme files (SCSS, CSS Modules)
│   │   ├── tests/                      # Unit tests using Jest & React Testing Library
│   │   │   ├── mocks/                  # Mock API responses for testing
│   │   ├── e2e/                        # End-to-end tests (Cypress, Playwright)
│   │   ├── i18n/                       # Internationalization (English, Hindi, Hinglish translations)
│   │   │   ├── en_us.json                 # English translations
│   │   │   ├── hi.json                 # Hindi translations
│   │   │   ├── hinglish.json           # Hinglish translations
│   │   ├── App.jsx                     # Main React application component
│   │   ├── main.jsx                    # Application entry point
│   ├── package.json                    # Frontend dependencies
│   └── README.md                       # Documentation for frontend setup and usage
├── server/                             # Backend - Express.js (Node.js)
│   ├── src/                            # Source code for backend
│   │   ├── config/                     # Configurations (database, environment, app settings)
│   │   ├── constants/                  # Centralized app-wide constants (status codes, messages)
│   │   ├── controllers/                # Business logic & request handlers (Auth, Tasks)
│   │   ├── middleware/                 # Express middleware (Auth, Error handling, Logging)
│   │   ├── models/                     # Database models (MongoDB with Mongoose, Prisma, Sequelize)
│   │   ├── routes/                     # API route handlers (Auth routes, Task routes)
│   │   ├── services/                   # Service layer for business logic (AuthService, TaskService)
│   │   ├── db/                         # Database folder (migrations, seeders)
│   │   │   ├── seeders/                # Initial database seed data (default users, roles)
│   │   ├── jobs/                       # Background tasks (cron jobs, queues)
│   │   ├── events/                     # Event-driven logic (WebSockets, notifications)
│   │   ├── utils/                      # Utility functions (JWT helpers, hashing, validation)
│   │   ├── logs/                       # Logging system (Winston, Pino logs)
│   │   ├── tests/                      # Unit tests (Jest, Supertest for API testing)
│   │   ├── i18n/                       # Internationalization (English, Hindi, Hinglish translations)
│   │   │   ├── en.json                 # English translations
│   │   │   ├── hi.json                 # Hindi translations
│   │   │   ├── hinglish.json           # Hinglish translations
│   ├── server.js                       # Express app initialization moved to root
│   ├── package.json                    # Backend dependencies
│   └── README.md                       # Documentation for backend setup and usage
├── infra/                              # DevOps & Infrastructure files
│   ├── docker/                         # Docker files and Docker Compose for containerization
│   ├── ci-cd/                          # CI/CD configurations (GitHub Actions, Jenkins, etc.)
│   ├── scripts/                        # Automation scripts for deployments, database setup
│   ├── terraform/                      # Infrastructure-as-Code (Terraform for cloud deployments)
│   ├── env/                            # Environment-specific configuration files
│   ├── k8s/                            # Kubernetes deployment configurations (YAML files)
│   ├── monitoring/                     # Monitoring setup (Grafana, Prometheus)
│   └── README.md                       # Documentation for infrastructure setup
├── docs/                               # Project documentation
│   ├── api/                            # API documentation (Swagger, Postman collections)
│   ├── architecture/                   # Architecture diagrams and system design docs
│   ├── README.md                       # Documentation index
├── package.json                        # Root package.json for monorepo setup
├── .gitignore                          # Global ignore rules for the monorepo
├── .env (optional)                     # Root environment variables (optional, for shared configs)
└── README.md                           # Project overview and setup guide
```

---

## 🧪 Testing

#### ✅ Unit Testing

```bash
pnpm run test
```

#### ✅ E2E Testing (Cypress)

```bash
pnpm run test:e2e
```

---

## 📌 Linting & Formatting

To ensure code consistency and avoid formatting issues, use the following commands:

#### ✅ Check for Lint Errors

```bash
pnpm run lint
```

#### ✅ Fix Lint Issues Automatically

```bash
pnpm run lint:fix
```

#### ✅ Format Code with Prettier

```bash
pnpm run format
```

---

## 📜 License

This project is licensed under the **[MIT License](LICENSE)**.

---

## 📞 Contact

- **GitHub:** [SunilSharmaTechie](**https://github.com/SunilITXpert**)
- **Email:** ✉️ [sunil2342@gmail.com](mailto:sunil2342@gmail.com)

---

🚀 **Keep Learning, Keep Building, Happy Coding!**
