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
