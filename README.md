Problem Statement
This weather app allows users to search and view live weather information for any city using data fetched from a public API (OpenWeatherMap). It demonstrates integration with real-world APIs, dynamic data display, and responsive design, making it a great club project for learning web development and showcasing modern UI/UX techniques.

Tech Stack Used
Frontend: HTML, CSS, JavaScript

Backend (optional): Node.js, Express.js

API: OpenWeatherMap (for live weather data)

Icons: Bootstrap Icons (for weather condition symbols)

Deployment: GitHub (optionally Netlify, Vercel, or Render)

Steps to Run the Project
1. Clone the Repository
bash
git clone https://github.com/kc4732-cr7/Weather-App.git
cd Weather-App
2. Set Up and Run the Frontend
Open the folder in Visual Studio Code.

Install the Live Server extension.

Right-click index.html and select “Open with Live Server”.

The app will run in your web browser at http://127.0.0.1:5500/.

3. (Optional) Set Up and Run the Backend
Open a terminal in the backend folder.

Install required packages:

bash
npm install express node-fetch cors
Start the backend server:

bash
node index.js
Make sure the fetch URL in script.js matches the backend port (e.g., http://localhost:8080/weather?...).

4. Configure the API Key
Get your API key from OpenWeatherMap.

In script.js, replace 'YOUR_OPENWEATHER_KEY' with your actual key.

5. Use the App
Enter a city name in the search bar and click 'Search'.

The weather details will be displayed with dynamic UI and loading animation.

Toggle between light and dark modes for a creative user experience.

File Structure
text
Weather-App/
├── index.html       # Main frontend HTML file
├── style.css        # Styles for layout, dark mode, spinner, responsiveness
├── script.js        # JavaScript for API calls, dynamic rendering, dark mode
└── backend/
    └── index.js    # Express backend server 
