# Student Management REST API

Simple Express.js API for managing student records. Uses an in-memory array so no database setup is needed.

## Setup

```bash
npm install
npm start
```

Runs on `http://localhost:3000` by default.

## Endpoints

| Method | URL | Description |
|--------|-----|-------------|
| POST | /students | Add a new student |
| GET | /students | Get all students |
| GET | /students/:id | Get student by ID |
| PUT | /students/:id | Update student by ID |
| DELETE | /students/:id | Delete student by ID |

## Request Body

`POST` and `PUT` expect JSON with these fields:

```json
{
  "name": "Alice",
  "age": 20,
  "grade": "A"
}
```

All three fields are required.

## Error Responses

All errors return JSON in this format:

```json
{
  "success": false,
  "error": "Error message here"
}
```

| Status | When |
|--------|------|
| 400 | Missing required fields |
| 404 | Student not found or unknown route |
| 500 | Internal server error |

## Note

Data lives in memory only — it resets when the server restarts.
