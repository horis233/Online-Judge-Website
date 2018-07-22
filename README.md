# COJ_project
- [Demo](http://ec2-54-152-115-171.compute-1.amazonaws.com/home)

# Collaborative-Online-Judge-System

    • Implemented a web-based collaborative code editor which supports multiple user editing simultaneously (ACE, Socket.io, Redis);

    • Designed and developed a single-page web application for coding problems (Angular2, Auth0, Node.js, MongoDB);

    • Built a user-code executor service which can build and execute user’s code (Docker, Flask);

    • Refactored and Improved system throughput by decoupling services using RESTful API and loading balancing by Nginx (REST API, Nginx).

## System Overview
![](https://github.com/horis233/Online-Judge-Website/blob/master/images_for_readme/1.JPG)

## System Design Diagram
![](https://github.com/horis233/Online-Judge-Website/blob/master/images_for_readme/2.JPG)

***
## How a request was sent from frontend to backend and back to browser

- DataService(FrontEnd) call a Http Request
- for example getProblems()
- api Request send to server.js
- Server.js send request to RestRouter to find a right ProblemService
- Problem help to get data from ProblemSchema
- ProblemModel search the data from Database and send back to RestRouter
- RestRouter get the problems data and chagne it to a JSON file
- Send it back to DataService
- Since problem-list have subscripted, the chagne will call to frontend angular cli
- By data binding with html, frontend contents change
