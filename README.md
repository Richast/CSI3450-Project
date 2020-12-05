# CSI3450-Project

## Setup

### Database
This project uses a MySQL server for its database. The schema for the server can be found in [`src/main/resources/schema.sql`](./src/main/resources/schema.sql). The necesary user that our project uses to connect to the database server will be created from that schema file as well, so no additional setup is required. You will need to setup a MySQL server on whatever OS you are using, and then once connected to the server run `source ROOT/src/main/resources/schema.sql` where `ROOT` is the root folder of this project.

### Backend

This project uses [Gradle](https://gradle.org/) to build and run the backend. The backend is in Java and uses [Spring Boot](https://spring.io/projects/spring-boot) for the web server. You will need to have a [JDK version](https://openjdk.java.net/install/) (8+) installed and a [JAVA_HOME environment variable](https://www.baeldung.com/java-home-on-windows-7-8-10-mac-os-x-linux) setup in whatever OS you are using.

If you are on Linux or macOS, you can run: `./gradlew clean bootrun` in the root directory to run the backend server. If you are using Windows you can run the batch file, `gradlew.bat`. 

### Frontend

The frontend is written in Javascript and uses the React framework. It requires the node package manager (npm) to be installed for it to run. You can find the download for npm [here](https://www.npmjs.com/get-npm). It can be ran locally by navigating to [`src/main/react`](./src/main/react/) and running `npm i` and then `npm start`. This will start the frontend at `localhost:3000` by default. The frontend will by default look to `localhost:8080` for the backend, which is run on an embedded tomcat server through Spring. 