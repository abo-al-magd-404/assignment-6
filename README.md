# Assignment 6

**Prepared by:** abo al magd  
**Group:** Node_C45_Mon&Thurs_8:30pm_(Online)  

---

## Overview

This project is a modular Node.js/Express REST API using modern ES modules and environment-driven setup. The API manages resources for books, collections, and logs—leveraging MongoDB as the backend data store. Each resource group is encapsulated in its own module for scalability and maintainability.

## Features

- **RESTful API** for Books, Collections, and Logs
- Robust **error handling** and clear API responses
- Modularized routing and controller logic (`src/modules/*`)
- Production and development launch modes
- Environment configuration with `dotenv`
- MongoDB and Express integration

## Core Endpoints

### Collection Management (Prefix: `/collection`)
- `POST /books` — Create a books collection.
- `POST /authors` — Create an authors collection using provided data.
- `POST /logs/capped` — Create a capped logs collection.
- `POST /books/index` — Create indexes on the books collection.

### Book Management (Prefix: `/books`)
- `POST /` — Add a book.
- `POST /batch` — Add multiple books.
- `PATCH /:title` — Update a book's publication year.
- `GET /title?title=...` — Fetch a book by title.
- `GET /year?from=...&to=...` — Get books within a year range.
- `GET /genre?genre=...` — Find books by genre.
- `GET /skip-limit` — Paginated fetch of books.
- `GET /year-integer` — Get books with integer year fields.
- `GET /exclude-genres` — Filter out books of specific genres.
- `DELETE /before-year?year=...` — Remove books published before specified year.
- Several **aggregation endpoints** for advanced querying.

### Logs (Prefix: `/logs`)
- `POST /` — Insert a new log entry.

## Architecture

- **Entry Point:** `src/main.js` *(invokes bootstrap function)*
- **Bootstrap:** `src/app.bootstrap.js` (sets up Express app, middleware, routing, and error handling)
- **Modules:** Clean separation under `src/modules/`, each providing router/controller/service for major resources.
- **Configuration:** Centralized via `config/`; uses environment variables for runtime options.

## Technology Stack

- **Node.js** with ECMAScript Modules (`type: "module"`)
- **Express** (v5+)
- **MongoDB** (`mongodb` driver)
- **dotenv** for environment management
- **cross-env** for environment single-sourcing in scripts

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/abo-al-magd-404/assignment-6.git
   cd assignment-6
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment**
   - Copy `.env.example` to `.env` and update the required environment variables (see `config` directory for details).

4. **Run the app**
   - Development: `npm run start:dev`
   - Production: `npm run start:prod`

5. The server runs on the port configured in your environment settings.

## Scripts

- `start:dev` – Run the server in development mode with automatic reload.
- `start:prod` – Run the server in production mode.

## Contributing

Contributions are welcome. Please fork the repository and work on a feature branch before submitting PRs.

---

**Note:** This repository was built as part of coursework for Node_C45_Mon&Thurs_8:30pm_(Online). Please refer to individual source files in `src/` for detailed API implementation.
