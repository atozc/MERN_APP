# D&D Notes App using the MERN stack 

## About
This ongoing project uses the MERN stack and is secured with JWT-Based User Authentication and Authorization. This project will allow me, as a developer, to learn about the MERN stack. I also decided to create a note-taking app for D&D, as I couldn't find one I liked. 

## Features
- User can log in and/or register
- User can create/edit/delete notes
- Notes will have categories and/or tags (e.g. campaigns, music, images, characters, etc.)
- Notes can be linked together
- User can switch between GM or Player mode

## Tech Stack
- `Server`
  - `MongoDB`
    - `mongoose`: Object Data Modeling library
  - `Express.js`
    - `CORS`: middleware used to enable Cross-Origin Resource Sharing
    - `bcrypt`: used to hash the user's password
    - `cookie-parser`: handles cookie-based sessions
    - `jsonwebtoken`: helps to create and verify JSON Web Tokens
    - `dotenv`: Used to store configuration data in a `.env` file
  - `Node.js`
     - `nodemon`: auto restarts Node.js app whenever changes are made
- `Client`
  - `React.js`
     - `react-toastify`: used for notifications
     - `axios`: library used for asynchronous HTTP requests to REST endpoints
     - `react-cookie`: allows you to set, get, and delete cookies
     - `react-router-dom`: npm package for implementing dynamic routing
 

