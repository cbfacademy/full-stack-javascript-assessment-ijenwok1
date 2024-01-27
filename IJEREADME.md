# Ije’s Wedding Plan App 

## 1. Overview

### 1.1 Project Description

Ije’s Wedding Plan is a comprehensive wedding app designed to simplify and streamline wedding planning process by providing a one-stop platform for couples. The MVP for the app features a Vendor Directory and a feature to manage a Guest List which results in a cohesive platform to enhance the overall wedding planning experience.

The app can scale to include additional features such as a budget tracker, registry integration and a countdown timer, however due to timing constraints the focus will be on the features that are highly utilised which are the finding a particular vendor and managing the guest list.

https://ijesweddingplanfrontend.onrender.com 

###1.2 Features

**Vendor Directory**
-	A curated list of reputable vendors, including photographers, caterers, Makeup Artists, and more
-	Search and filter options to help users find vendors based on service

**Guest List Manager**
-	A tool to manage the guest list, including RSVP tracking

### 1.2 Project Goals

The main aim of the app is to:  
Couples often find wedding planning overwhelming due to the multitude of tasks involved. This app streamlines the process by consolidating essential features into one platform, reducing the need to use multiple tools or resources.

- Simplify wedding planning for couples.
- Provide a centralised planning tool for vendors and guests.
- Ensure a seamless and enjoyable wedding planning journey.


## 2. Design

### 2.1 User Stories 

User stories for the Minimum Viable Product (MVP) with a focus on the Vendors Directory and Guest List Manager

**Vendors Directory:**

1.	As a bride/groom, I want to be able to browse a curated list of wedding vendors, so I can easily find and compare different services for my wedding.
   - Acceptance Criteria:
     - The app should have a dedicated section for vendors.
     - Vendors should be categorized by service type (photography, catering, etc.).
     - Each vendor profile should include a brief description, and contact information.

2.	As a user, I want to be able to search for vendors based on service, so I can find options that fit my requirements.
   - Acceptance Criteria:
     - The app should have a search and filter functionality for vendors.
     - Users should be able to filter vendors by  service type,
     - Search results should be displayed in a user-friendly manner.

**Guest List Manager:**

1.	As a couple, I want to create and manage a guest list for my wedding, so I can keep track of attendees and plan accordingly.
   - Acceptance Criteria:
     - The app should provide a feature for creating and editing a guest list.
     - Users should be able to add guests 
     - Each guest entry should include space for RSVP status


### 2.2 User Flows: 

The user flows provide a step-by-step guide for users interacting with the app

**Vendor Directory**

1. **User navigates to Vendor Directory:**
   - From the home page the user selects "Vendor 

2. **User explores vendors:**
   - Presented with a list of vendors or can use filters to narrow down (service type,).

3. **User views a vendor's profile:**
   - Clicking on a vendor displays a detailed profile with a description and contact information.

4 **User returns to the homepage:**
   - Easily navigates back to the homepage

**Guest List Manager**

1. **User navigates to GuestList:**
   - From the homepage the user selects "GuestList ."

2. **User adds a new guest:**
   - Inputs guest details (name, contact information and RSVP).

3. **User tracks RSVP responses:**
   - Receives real-time updates as guests respond to the invitations.

4. **User edits guest details:**
   - Option to edit guest information, update RSVP status

5. **User returns to the homepage:**
   - Easily navigates back to the main homepage.


### 2.3 UI/UX Simple UI using Canva 

Canva Ije's Wedding Plan App Design - https://www.canva.com/design/DAF541QAvMI/m9oZwEIPxfGLLcQZA4-ucA/view?utm_content=DAF541QAvMI&utm_campaign=designshare&utm_medium=link&utm_source=editor



## 3. Development Process

### 3.1 Technology Stack
The Wedding App implemented the following technology stack following a basic three-tier architecture consisting of the client-side(front end), server-side (backend), and the database:

- **Frontend**: React.js – used for structure and an interactive user interface
- **Backend**: Node.js with Express – used for building the web application
- **Database**: MongoDB – connection to the database to store and retrieve data related to the Vendors and guests
- **Styling**: CSS – used for styling of the pages
- **API Communication**: Fetch API – used Fetch API to make asynchronous requests to the server

### 3.2 Project Structure

The standard project structure would include the React components un the front end folder and the backend code is kept on the backend folder. It was important to keep a clear separation between the frontend and backend code. A separate module for each feature was used to implement a monolithic logic and architecture.

-	**Frontend**: Was divided into the vendor and guest components and their related front pages. Navbar.js component was also created to ensure consistency on all pages. It also includes the App.js file, which is the home page and the css files for styling App.ss, styleTemplate.css and again to be consistent across all pages.

-	**Backend**: Consists of the modules Vendors and the GuestList which handles the CRUD operations. It also consists of the .env file that includes the connection string to the MongoDB database


### 3.3 Development Workflow – Integration of Frontend and Backend

1. **Backend Development**: Created API endpoints for vendors and guests using Node.js and Express.
2. **Frontend Development**: React components and pages were developed to interact with the backend API.
3. **Integration**: Backend and frontend were integrated using appropriate URLs, and data flow was established.

### 3.4 Version Control

GitHub was used as a repository and for version control, A number of branches were created for feature development, bug fixes, and testing.

## 4. Design Choices

### 4.1 User Interface (UI)

- **Clean and Intuitive**: The UI was designed to be simple, user-friendly, ensuring ease of navigation for couples, vendors, and guests.
- **Consistent Styling**: A consistent visual theme and styling were applied throughout the app for a unified look.

### 4.2 Database Design

- **MongoDB Atlas**: Has been used for its flexibility and scalability, providing a cloud-based database solution.
- **Collections**: Separate collections for the vendors and guests to organize data efficiently.

## 5. Features

### 5.1 Vendor Directory

- **Search Functionality**: Enables users to find vendors based on the service categories.

### 5.2 Guest List Manager

- **Search and Filter**: Facilitates easy guest management with search and filter options.
- **CRUD Operations**: Enables the addition, updating, and deletion of guest information.

## 6. Improvements and Future Enhancements

### 6.1 Additional Features

-	Register and Login feature – so a user can create an account to access and save personalised information
-	Guest List Manager – Send digital invitations and receive responses directly through the app
-	Vendor Directory – Each vendor to include portfolio, reviews and pricing information and advanced search based on location and budget preference
-	Budget Tracker – to help couples set and manage their wedding budget
-	Countdown Timer – A visual countdown to the wedding day, helping couples stay organised 
-	Integrate a calendar feature for scheduling appointments and important dates.
-	Registry Integration – Integration with popular wedding registries and keep track of gifts

### 6.2 Performance Optimization

- Implement better form designs to reduce invalid data being stored in the backend of the database

### 6.3 Security Enhancements

- Enhance server security with form input validation.

## 7. Conclusion

Ije’s Wedding Planning app aims to provide a robust and enjoyable wedding planning experience. Through thoughtful design choices and a commitment to user satisfaction, the app caters to the diverse needs of couples, vendors, and guests involved in the wedding planning process. Continuous improvement and updates are planned to make the app even more valuable for users.
