﻿# Server Spring Boot
Spring Boot h2 DB

# Getting Started

## Start the Server

To start the Spring Boot server, run:

```bash
./mvnw spring-boot:run
```

---

## H2 DB

```
http://localhost:8080/db

```

---

## H2 Credentials
- **Saved Settings:** `Generic H2 (Embedded)`
- **Setting Name:** ``Generic H2 (Embedded)``
- **Driver Class:** `org.h2.Driver`
- **JDBC URL:** `jdbc:h2:mem:testdb`
- **Username:** `user`
- **Password:** *(empty)*

---

## API's

```
GET TWEET => http://localhost:8080/api/tweets
SAVE TWEET => http://localhost:8080/api/save
```


# Client Angular

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.8.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


