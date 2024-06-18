# To-Do List Application

This is a To-Do List application built with Node.js, Express, and MongoDB. The application allows users to create, edit, delete, and mark tasks as completed. It includes both frontend and backend components.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js and npm.
- You have installed MongoDB and it's running on your local machine.

## Installation

### Clone the Repository

1. Open your terminal or command prompt.
2. Clone the repository to your local machine:
   
   git clone https://github.com/ridma1997/ToDoList.git

3. Navigate to the project directory
   
   cd your-repository-name

### Install Dependencies

Install the project dependencies using npm
  
  npm install

### Setup MongoDB
1. Ensure MongoDB is installed and running on your local machine.
2. By default, the application connects to MongoDB at mongodb://localhost:27017/LYXUX. If you need to change this, you can update the connection string in server.js.

## Create server.js File
1. Create a file named server.js in the project root directory and add the following content

![Referance Image](/Screenshots/server.png)

## Frontend

### Create ToDoList.html File

1. Create a directory named Frontend in the project root directory.

2. Inside the Frontend directory, create a file named ToDoList.html and add the following content:

![Referance Image](/Screenshots/ToDoListHTML.png)

## Running the Application
### Start the Backend Server

1. In your terminal or command prompt, navigate to the project directory.
2. Run the following command to start the backend server:

node server.js

3. The backend server will start running on http://localhost:5000.

### Open the Frontend
1. Open the Frontend/ToDoList.html file in your web browser.
2. You should see the To-Do List application interface.
