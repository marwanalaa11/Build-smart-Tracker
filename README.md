# Build Smart Tracker

An AI Co-Pilot for Construction Material Sourcing in the UAE, powered by the Google Gemini API.

## Description

This web application provides a streamlined interface for tracking construction material prices, comparing suppliers in the UAE, and analyzing market trends. It features an integrated AI assistant, the "SmartBuild Assistant," to provide detailed information on any construction material.

This project was bootstrapped with a simple HTML/React setup using ES Modules and does not require a complex build step for development.

## Features

-   **Categorized Material Listings:** Browse materials across Construction, Finishing, Plumbing, Electrical, and A/C categories.
-   **Live Price Comparison:** View a sorted list of suppliers with real-time (simulated) pricing, stock availability, and ratings.
-   **Price Trend Analysis:** Visualize the 30-day average price history for each material with an interactive chart.
-   **AI-Powered Assistant:** Chat with the "SmartBuild Assistant" (powered by Gemini) to get comprehensive details about any material.
-   **Responsive Design:** A clean, mobile-first interface that works beautifully on all devices.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need a modern web browser and a simple local server to run this project. Running `index.html` directly from the file system may cause issues with module loading (CORS policy).

The easiest way to run a local server is using the `serve` package:
```bash
# Install serve globally if you don't have it
npm install -g serve

# Run a server in the project's root directory
serve .
```
Then, you can access the app at the URL provided (usually `http://localhost:3000`).

### Setting Up Your API Key

The AI features of this application require a Google Gemini API key.

1.  **Get an API Key:** If you don't have one, create a key from [Google AI Studio](https://aistudio.google.com/app/apikey).

2.  **Create an Environment File:** In the root directory of the project, create a new file named `.env`.

3.  **Add Your Key:** Copy the contents from `.env.example` into your new `.env` file and replace the placeholder with your actual API key. The file should look like this:

    ```
    API_KEY="YOUR_GEMINI_API_KEY_HERE"
    ```
    **Important:** The AI Studio development environment automatically handles this for you. This step is necessary for running the app on your own machine or when deploying it.

## Deployment

To get a permanent, public URL for your application, you need to host it. Services like Vercel and Netlify offer free tiers that are perfect for this.

1.  **Push to GitHub:** Create a new repository on [GitHub](https://github.com) and push your project code to it.

2.  **Connect to a Hosting Service:**
    -   Sign up for a free account with [Vercel](https://vercel.com) or [Netlify](https://www.netlify.com).
    -   Create a "New Project" and connect it to your GitHub repository.
    -   The service will likely auto-detect the project type. Since there's no build step, the default settings should work.

3.  **Add Environment Variable:** This is the most important step!
    -   In your Vercel or Netlify project dashboard, find the "Settings" tab and go to the "Environment Variables" section.
    -   Add a new variable with the **Name** `API_KEY` and the **Value** being your actual Gemini API key.
    -   Save the variable and redeploy the project if necessary.

Your application will now be live at the URL provided by the hosting service, with all AI features fully functional!

## Using on Your iPhone (as a Free App)

Once deployed, you can add the app to your iPhone's home screen for an app-like experience:

1.  Open the live URL in **Safari**.
2.  Tap the **Share** icon.
3.  Scroll down and select **"Add to Home Screen"**.
4.  Confirm by tapping **"Add"**.

The app icon will now be on your home screen, ready to launch in full-screen anytime.
