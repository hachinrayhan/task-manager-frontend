import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AuthProvider from "./authProvider/AuthProvider.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes.jsx";
import { TaskProvider } from "./dashboard/TaskContext.jsx";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <TaskProvider>
        <DndProvider backend={HTML5Backend}>
          <RouterProvider router={router}></RouterProvider>
        </DndProvider>
      </TaskProvider>
    </AuthProvider>
  </React.StrictMode>
);
