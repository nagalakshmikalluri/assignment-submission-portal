Project Overview : 


The Assignment Submission Portal is a web application designed to facilitate the management and submission of assignments for users and administrators. This portal allows users to register, log in, and submit their assignments, while administrators can review, accept, or reject submissions. The application is built using Node.js, Express, and MongoDB, leveraging Mongoose for data modeling.



Features :


User Registration and Authentication: Users can register and log in securely to access their profiles.
Assignment Management: Users can submit assignments, and administrators can review and manage these submissions.
Role-Based Access Control: Different functionalities are provided based on user roles (admin and user).
RESTful API: The application exposes a RESTful API for all operations, making it easy to integrate with other services or front-end frameworks.



Technologies Used :



Backend: Node.js, Express.js
Database: MongoDB, Mongoose
Environment: Node.js runtime




Installation :


Clone the repository:


git clone https://github.com/naveenkalluri1/assignment-submission-portal.git



Navigate to the project directory:



cd assignment-submission-portal



Install dependencies:



npm install
Run MongoDB: Ensure that you have MongoDB running locally.



Start the server:


npm start
Access the application: The server will be running on http://localhost:5000.



API Endpoints:



User Registration: POST /api/users/register


User Login: POST /api/users/login


Admin Registration: POST /api/admins/register


Admin Login: POST /api/admins/login


Upload Assignment: POST /api/users/upload


Get Assignments: GET /api/admins/assignments


Accept Assignment: POST /api/admins/assignments/:id/accept


Reject Assignment: POST /api/admins/assignments/:id/reject


( Screenshots of API's working was uploded in the project folder )



Conclusion
The Assignment Submission Portal aims to streamline the assignment submission process, providing an efficient way for users to submit their work and for administrators to manage these submissions effectively. The project showcases the integration of various technologies to create a functional web application.

