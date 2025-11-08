# Todo List Web Application

A modern, feature-rich todo list application built with React.js, Bootstrap, and Spring Boot.

## Features

### Frontend (React.js + Bootstrap)
- ✅ Add, edit, and delete todos
- ✅ Mark todos as complete/incomplete
- ✅ Filter todos (All, Active, Completed)
- ✅ Priority levels (High, Medium, Low) with color coding
- ✅ Beautiful, responsive UI with Bootstrap
- ✅ Real-time todo statistics
- ✅ Smooth animations and transitions
- ✅ Error handling and loading states

### Backend (Spring Boot)
- ✅ RESTful API endpoints
- ✅ In-memory data storage
- ✅ CORS configuration for frontend
- ✅ Simple and efficient service layer

## Technology Stack

- **Frontend**: React.js 18, Bootstrap 5, Axios, Vite
- **Backend**: Spring Boot 3.2.0, Java 17
- **Build Tools**: Vite (frontend), Maven (backend)

## Project Structure

```
tea store/
├── frontend/          # React.js frontend application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── App.jsx        # Main app component
│   │   └── App.css        # Styling
│   └── package.json
├── backend/           # Spring Boot backend
│   ├── src/main/java/
│   │   └── com/teastore/todo/
│   │       ├── TodoApplication.java
│   │       ├── controller/    # REST controllers
│   │       ├── model/         # Data models
│   │       └── service/       # Business logic
│   └── pom.xml
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- Java 17 or higher
- Maven 3.6 or higher

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Build and run the Spring Boot application:
```bash
mvn spring-boot:run
```

The backend will start on `http://localhost:8080`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will start on `http://localhost:3000`

## API Endpoints

- `GET /api/todos` - Get all todos
- `GET /api/todos/{id}` - Get a specific todo
- `POST /api/todos` - Create a new todo
- `PUT /api/todos/{id}` - Update a todo
- `DELETE /api/todos/{id}` - Delete a todo

## Usage

1. Start the backend server first
2. Start the frontend development server
3. Open your browser to `http://localhost:3000`
4. Add todos, mark them complete, filter them, and manage your tasks!

## Features in Detail

### Todo Management
- **Add Todo**: Enter text and select priority, then click "Add"
- **Edit Todo**: Click the edit icon to modify todo text and priority
- **Delete Todo**: Click the delete icon to remove a todo
- **Complete Todo**: Check the checkbox to mark as complete

### Filtering
- **All**: Shows all todos
- **Active**: Shows only incomplete todos
- **Completed**: Shows only completed todos

### Priority Levels
- **High**: Red badge (urgent tasks)
- **Medium**: Yellow badge (normal tasks)
- **Low**: Green badge (low priority tasks)

## Development

### Building for Production

**Frontend:**
```bash
cd frontend
npm run build
```

**Backend:**
```bash
cd backend
mvn clean package
```

## License

This project is open source and available for personal and educational use.

