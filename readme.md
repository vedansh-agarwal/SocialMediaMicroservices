**Microservice Architecture Exploration - Social Media API**

This project serves as a test assignment for exploring microservice architecture using a simple social media API structure. The main goal of this project is to distribute key functionalities like users, profiles, and posts into separate services, all of which are containerized using Docker. Container orchestration and networking are managed through Docker Compose. Please note that this project does not include advanced error handling or input sanitation, as its primary purpose is to familiarize you with microservice architecture and container orchestration.

**Prerequisites**

Before you get started, ensure that you have the following prerequisites installed on your system:

Docker:[ ](https://docs.docker.com/get-docker/)[Install Docker](https://docs.docker.com/get-docker/)

Docker Compose:[ ](https://docs.docker.com/compose/install/)[Install Docker Compose](https://docs.docker.com/compose/install/)

**Getting Started**

Clone this repository to your local machine:

    git clone https://github.com/vedansh-agarwal/SocialMediaMicroservices.git

Change your working directory to the project root:

    cd SocialMediaMicroservices

To run the project, use the following command:

    docker-compose up

This command will start the microservices and any associated containers using Docker Compose. If you have a local MongoDB installation on your machine, the application will use that database. If not, a MongoDB container created via Docker Compose will be used.

**API Endpoints**

The project exposes various endpoints for different microservices. You can test these endpoints using Postman. To get started, import the provided Postman collection, which includes requests for interacting with the API.

**Project Structure**

- Users: Manages user-related functionality.
- Profiles: Handles user profiles and profile data.
- Posts: Deals with posting and managing user posts.

**Disclaimer**

This project is a simplified demonstration of microservice architecture and containerization. It is not production-ready and lacks many real-world features such as error handling, input validation, and security measures. It's intended for educational purposes and as a starting point for further exploration and development.

**Support and Contributions**

If you have questions, encounter issues, or wish to contribute to this project, please feel free to reach out to the project maintainers or submit a pull request. Your contributions are highly appreciated.

Happy coding! 🚀

