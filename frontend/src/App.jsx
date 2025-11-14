import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  const [user, setUser] = useState(null);

  // Load user from localStorage at start
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  return (
    <Routes>
      {/* Default route - check login and redirect */}
      <Route
        path="/"
        element={<Navigate to={user ? "/home" : "/login"} />}
      />

      {/* Login Page */}
      <Route
        path="/login"
        element={
          user ? <Navigate to="/home" /> : <LoginPage setUser={setUser} />
        }
      />

      {/* Register Page */}
      <Route
        path="/register"
        element={
          user ? <Navigate to="/home" /> : <RegisterPage setUser={setUser} />
        }
      />

      {/* Home Page - Protected */}
      <Route
        path="/home"
        element={user ? <Home user={user} /> : <Navigate to="/login" />}
      />
    </Routes>
  );
}

export default App;
