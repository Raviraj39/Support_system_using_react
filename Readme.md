
# Support System for End Users

Welcome to the Support System for End Users! This project aims to provide a comprehensive support system for different user roles including End Users, Tech Support, and Admins.

## Table of Contents
- [Support System for End Users](#support-system-for-end-users)
	- [Table of Contents](#table-of-contents)
	- [Introduction](#introduction)
	- [Features](#features)
	- [Technologies Used](#technologies-used)
	- [Task Requirements](#task-requirements)
	- [Setup Instructions](#setup-instructions)
	- [Testing](#testing)
	- [API Documentation](#api-documentation)
		- [User Registration](#user-registration)
		- [User Login](#user-login)
	- [License](#license)

## Introduction
This project facilitates communication between End Users and Tech Support/Admins through a web-based support system. Users can register, log in, create support tickets, and more.

## Features
- User authentication system with registration and login functionalities.
- Creation of support tickets by End Users.
- Login and registration functionalities for End Users.
- **API Integration Completed**: API endpoints for user registration and login.

## Technologies Used
- React.js
- Context API (for state management)
- React-router-dom (for routing)
- Bootstrap (styling)
- Git (for version control)

## Task Requirements
1. User Registration:
✅ Implemented user registration functionality.
✅ Collects and stores essential user information (e.g., name, email, password).
✅ Implemented necessary validation and error handling.
2. User Login:
✅ Enabled users to log in securely.
✅ Authenticated user credentials against stored data.
✅ Provided appropriate feedback for successful and unsuccessful login attempts.
3. Tech Support
   ⬜️ Work in progress...

4. Admin 
   ⬜️ Work in progress...


## Setup Instructions
To set up and run the project locally, follow these steps:

1. **Clone the Repository**: 
   ```
   git clone https://github.com/Raviraj39/Support_system_using_react
   ```
2. **Install Dependencies**: 
   ```
   cd api
   npm install
   ```
3. **Start the API Server**: 
   ```
   nodemon server.js
   ```
4. **Start the Frontend Development Server** (if applicable):
   ```
   cd frontend
   npm install
   npm start
   ```
5. **Open Your Browser**: 
   Open your web browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## Testing
To test the application, you can use the following credentials:
- Username: testuser
- Password: testpassword

You can also register a new account if needed.

## API Documentation
### User Registration
- **Endpoint:** `/register`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "username": "exampleuser",
    "password": "examplepassword",
    "role": "end_user"
  }
  ```
- **Response:**
  ```json
  {
    "message": "User registered successfully",
    "user": {
      "id": 4,
      "username": "exampleuser",
      "password": "examplepassword",
      "role": "end_user"
    }
  }
  ```

### User Login
- **Endpoint:** `/login`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "username": "exampleuser",
    "password": "examplepassword"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Login successful",
    "user": {
      "id": 4,
      "username": "exampleuser",
      "role": "end_user"
    }
  }
  ```


## License
This project is licensed under the [MIT License](LICENSE).

---

