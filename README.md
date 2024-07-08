# Telegram clone 

This project is a web application for chat management and messaging, developed using React. It features a search functionality to filter chats, night mode toggle, and message viewing capabilities.

# Features
    
Chat Listing: View a list of available chats.

Chat Filtering: Search and filter chats based on the chat creator's name.

Night Mode: Toggle between night mode and light mode.

Message Viewing: View messages within a selected chat.

Escape Key Handling: Close the active chat tab by pressing the Escape key.

#Technologies Used

React: Frontend library
FontAwesome: Icons
ReactJS Popup: Popup library

# Getting Started

# Prerequisites

Node.js
npm (Node Package Manager)

# Installation

Clone the repository:

git clone https://github.com/your-username/beyondchats-web-app.git

cd tele-clone

# Install the dependencies:

npm install

# Running the App
To start the development server, run:

npm start
This will start the application on http://localhost:3000.

# Building the App
To build the app for production, run:

npm run build
This will create a build directory with the production build of the app.

# Code Structure

src/components/ChatItem.js: Component for rendering individual chat items.

src/components/MessageItem.js: Component for rendering individual messages.

src/components/LandingPage.js: Main component containing the chat list, search input, and message viewing area.

src/index.css: Styles for the application.

# API Endpoints

https://devapi.beyondchats.com/api/get_all_chats?page=1: Fetches all chats.

https://devapi.beyondchats.com/api/get_chat_messages?chat_id=<id>: Fetches messages for a specific chat.

# Key Functions

getChats(): Fetches all chats from the API and sets the state.

getChatById(id): Fetches messages for a specific chat and sets the state.

handleSearchInput(event): Updates the search input value in the state.