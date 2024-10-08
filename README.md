# Restaurent Project

## Description

The Restaurent project is a comprehensive web application designed to enhance the dining experience for users by providing an intuitive platform to browse menus, place orders, and manage their accounts. Built using modern web technologies, this application comprises a dynamic frontend and a robust backend, ensuring smooth user interactions and efficient data management.

### Key Features

- **User-Friendly Interface:** A responsive frontend that allows users to navigate effortlessly through the restaurant's offerings.
- **Menu Browsing:** Users can view detailed descriptions, prices, and images of various dishes available at the restaurant.
- **Order Management:** Users can easily place, modify, or cancel their orders directly through the application.
- **Account Management:** Users can create and manage their accounts, enabling personalized experiences and order tracking.
- **Backend Integration:** A powerful backend that handles requests, processes orders, and communicates with a MongoDB database for data persistence.

### Technologies Used

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Package Manager:** npm

## Instructions for Cloning and Running the Project

Follow the steps below to clone the repository and run the application locally.

### 1. Clone the Repository

Open your terminal and run the following command to clone the repository:

````bash
git clone https://github.com/nitin12sai/Restaurent.git

     ```

2. **Navigate into the cloned repository:**
   - Run:
     ```bash
     cd Restaurent
     ```

### Running the Frontend

1. **Open the `home.html` file in your web browser:**
   - You can do this by double-clicking the file or using the following command:
     ```bash
     start Front-End/home.html  # For Windows
     ```

### Running the Backend

1. **Make sure you have [Node.js](https://nodejs.org/) installed on your machine.**

2. **Navigate to the backend directory:**

   - Run:
     ```bash
     cd Backend
     ```

3. **Install the necessary packages:**

   - Run:
     ```bash
     npm install
     ```

4. **Change the Mongoose URL in `server.js`:**

   - Open `server.js` in a code editor and update the Mongoose connection URL to point to your MongoDB instance.

5. **Start the server:**
   - Run:
     ```bash
     node server.js
     ```

### Additional Information

- Ensure that you have MongoDB running locally or that you have access to a remote MongoDB instance.
- For any issues, refer to the project documentation or raise an issue in the repository.
````
