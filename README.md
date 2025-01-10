# Link Shortener Project

A simple and efficient URL shortening service built with **React** (frontend) and **Node.js** (backend). This project enables users to shorten long URLs and provides the shortened link for easy sharing.

## Table of Contents
- [Project Description](#project-description)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [License](#license)

---

## Project Description

This project allows users to input a long URL and retrieve a shortened version. It uses a backend service to process the URL shortening and displays the shortened URL on the webpage.

---

## Technologies Used

- **Frontend**: React, CSS
- **Backend**: Node.js, Express.js
- **HTTP Requests**: Axios
- **Styling**: Custom CSS

---

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v16 or above): [Download here](https://nodejs.org/).
- **npm** (comes with Node.js) or **yarn** for package management.

---

### Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/kesavan2252/link_shortener.git
    cd link-shortener
    ```

2. **Backend Setup**:

    Navigate to the backend folder and install dependencies:

    ```bash
    cd backend
    npm install
    ```

3. **Frontend Setup**:

    Navigate to the frontend folder and install dependencies:

    ```bash
    cd ../frontend
    yarn install   # If using npm, run: npm install
    ```

---

### Running the Application

1. **Start the Backend**:  

    In the `backend` directory, run:

    ```bash
    npm start
    ```

    The backend will run on `http://localhost:5000`.

2. **Start the Frontend**:  

    In the `frontend` directory, run:

    ```bash
    yarn start   # If using npm, run: npm start
    ```

    The frontend will run on `http://localhost:3000`.

---

## Usage

1. Open the application in your browser at `http://localhost:3000`.
2. Enter a URL (ensure it starts with `http://` or `https://`) in the input box and click the **Shorten** button.
3. The shortened URL will appear below the input box.

---

## Folder Structure

```
link-shortener/
├── backend/          # Backend Node.js server
│   ├── server.js     # Express server file
│   ├── package.json  # Backend dependencies
│   └── package-lock.json
├── frontend/         # Frontend React app
│   ├── src/          # Source files
│   │   ├── App.js    # Main component
│   │   ├── LinkShortener.js # Component for shortening URLs
│   │   ├── App.css   # Styling
│   │   └── index.js  # Entry point
│   ├── public/       # Static files
│   │   └── index.html
│   ├── package.json  # Frontend dependencies
│   └── yarn.lock
├── README.md         # Project documentation
```

---

## License

This project is licensed under the [MIT License](LICENSE).

