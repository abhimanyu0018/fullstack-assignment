  

# Fullstack Assignment

  

This repository contains the full-stack assignment for Abhimanyu Kanaujia]. It includes both the frontend and backend implementations as per the provided instructions.

  

## Table of Contents

-  [Project Overview](#project-overview)

-  [Frontend](#frontend)

-  [React Assignment](#react-assignment)

-  [Running the Frontend](#running-the-frontend)

-  [Backend](#backend)

-  [Help Center API](#help-center-api)

-  [Running the Backend](#running-the-backend)

-  [Installation](#installation)

-  [Technologies Used](#technologies-used)


## Project Overview

  

This project demonstrates a full-stack application comprising a React frontend and a Node.js backend. The frontend includes a user interface resembling a provided design with data fetched from the server. The backend implements a RESTful API to manage Help Center cards.

  

## Frontend

  

### React Assignment

  

-  **Shared Functionality:** Implemented shared functionality across the component tree using React's state management and context API.

-  **useState Hook:** Utilized the `useState` hook for handling state in complex components, ensuring efficient state updates and re-rendering.

-  **UI Design:** Designed a user interface based on the provided design. Fetched data from the server and dynamically rendered information cards. Implemented search functionality for easy navigation.

  

### Running the Frontend

  

1. Navigate to the `frontend` folder.

2. Install dependencies: `npm install`

3. Start the development server: `npm run dev`

  

The frontend will be accessible at `http://localhost:3000`.

  

## Backend

  

### Help Center API

  

-  **Card Model:** Created a model for Help Center cards with fields such as `id`, `title`, and `description`.

-  **API Endpoints:** Implemented endpoints to create, retrieve all, and retrieve a specific card by title.

-  `POST /cards`: Add a new Help Center card.

-  `GET /cards`: Retrieve all Help Center cards.

-  `GET /cards/:title`: Retrieve a specific card by title.

-  **Error Handling:** Implemented error handling for validation errors and non-existent cards.

  

### Running the Backend

  

1. Navigate to the `backend` folder.

2. Install dependencies: `npm install`

3. Start the server: `npm run dev`

  

The backend server will run on `http://localhost:8000`.

  

## Installation

  

To run the project locally:

  

1. Clone the repository:

```

git clone https://github.com/abhimanyu0018/fullstack-assignment.git

cd fullstack-assignment

```

  

2. Install dependencies for both frontend and backend:

```

cd frontend

npm install

cd ../backend

npm install

```

  

3. Run the frontend and backend servers simultaneously.

  

## Technologies Used

  

-  **Frontend:** React, Tailwind CSS

-  **Backend:** Node.js, Express, Mongoose

-  **Database:** MongoDB

  

