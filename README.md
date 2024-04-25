# Chit Chat App - Server Side

Welcome to the Server-side repository of Chit Chat App! This repository contains the backend-end codebase for the Chit Chat application, a web based messaging app to communicate with friends and folks through messages as well as calls too.

---

## Live Preview

Live preview of the web app is [Here](https://pradip-chit-chat.vercel.app/).

---

![chatapp](https://github.com/basnetrajpradip/readme-images/assets/119044572/b5a3e294-f1d2-43f6-8573-ff14b662c87d)

---

## About Chit Chat App

Chit Chat App is a modern web application designed to provide a seamless and intuitive messaging experience. If your'e looking to find a safe secure web based messaging platform to communicate with friends and folks, Chit Chat is your go-to destination for connecting with friends.

---

## Features

- **User Authentication:** Secure user authentication system for registering, logging in, and managing user accounts.
- **Video Calls and Screen Sharing:** You can not only chat with friends but also can have realtime calls and video calls along with sharing screens.
- **Chit Chat with Friends:** Chit Chat with friends directly on web without the need of downloading app.
- **Responsive Design:** Mobile-friendly design ensures a seamless browsing experience across devices of all sizes.

---

## Technologies Used

- **Next JS:** Front-end React framework for building production ready dynamic and interactive user interfaces.
- **Express JS:** Lightweight back-end framework of Node JS for server side application.
- **Socket.IO:** A library that enables real-time, bidirectional and event-based communication between the browser and the server.
- **LiveKit:** Open-source WebRTC stack for building scalable, real-time audio and video experiences.
- **Zustand:** A small, fast, and scalable bearbones state management solution.
- **MongoDB:** Non relational database deployed at Mongo Atlas.
- **Tailwind CSS:** A utility-first CSS framework for rapidly building modern websites.
- **Next Auth:** Secured and flexible authentication library designed to sync with any OAuth service.
- **Daisy UI:** A component library that functions as a plugin for TailwindCSS.
- **Axios:** Promise-based HTTP client for making API requests to the server-side backend.

---

## Getting Started

To get started with the DevDash Blog client-side application, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone <repository-url>
   ```

2. Install dependencies using npm:

   ```bash
   npm install
   ```

> **Note:** This Next JS app uses a MongoDB database hosted on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).So inorder to make the app function, add the connection string which you got while setting up client side by creating .env file at root of the project as:

```bash
# .env file
MONGODB_URI= <your mongo db connection string>
```

3. Similarly we need to add some more environment variables inorder to get the client app up and running. Add the following env variable in the .env file along with MONGODB_URI.

```bash
# .env file
PORT = 4000
ORIGIN_URL=<client app url (i.e http://localhost:3000)>
```

4. Finally, start the dev server as:

   ```bash
   npm run dev
   ```
