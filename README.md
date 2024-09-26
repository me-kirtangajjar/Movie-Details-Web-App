# Movie Details Web App

## Overview

Movie Details Web App is a Node.js application that allows users to search for movie information using the OMDB API. Users can enter a movie name, and the app will display detailed information about the movie, including its poster, rating, cast, plot, and more.

## Features

- Simple and intuitive user interface
- Real-time movie search using OMDB API
- Responsive design for mobile and desktop
- Error handling and user feedback
- Security measures including rate limiting and HTTP headers

## Technologies Used

- Node.js
- Express.js
- EJS (Embedded JavaScript templates)
- Axios for API requests
- Helmet for security headers
- Express-rate-limit for rate limiting

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js (version 12.0 or later)
- You have an OMDB API key (you can get one at [https://www.omdbapi.com](https://www.omdbapi.com))

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/me-kirtangajjar/Movie-Details-Web-App.git
   ```

2. Navigate to the project directory:

   ```
   cd Movie-Details-Web-App
   ```

3. Install the dependencies:

   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add the following:
   ```
   PORT = 3000
   OMDB_API_KEY = your_omdb_api_key_here
   ```
   Replace `your_omdb_api_key_here` with your actual OMDB API key.

## Usage

To run the application in development mode:

```
npm run dev
```

To run the application in production mode:

```
npm start
```

Then, open your web browser and navigate to `http://localhost:3000` (or whatever port you specified in your .env file).
