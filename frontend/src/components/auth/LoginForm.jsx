// components/auth/LoginForm.jsx
import React, { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login with:", { email, password });
  };

  const handleGoogleLogin = () => {
    console.log("Login with Google");
  };

  return (
    <form
      onSubmit={handleLogin}
      style={{ display: "flex", flexDirection: "column", gap: "16px" }}
    >
      <button
        type="button"
        onClick={handleGoogleLogin}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          backgroundColor: "white",
          border: "1px solid #E5E7EB",
          borderRadius: "8px",
          padding: "10px",
          cursor: "pointer",
          fontWeight: "500",
          fontSize: "14px",
          color: "#374151",
          boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
          transition: "all 0.2s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#F9FAFB")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "white")}
      >
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google"
          style={{ width: "18px", height: "18px" }}
        />
        Sign in with Google
      </button>

      <div style={{ textAlign: "center", fontSize: "13px", color: "#9CA3AF" }}>
        or continue with email
      </div>

      <input
        type="email"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={inputStyle}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={inputStyle}
      />

      <button type="submit" style={buttonStyle}>
        Login
      </button>

      <p style={{ textAlign: "center", fontSize: "13px", color: "#6B7280" }}>
        Don’t have an account?{" "}
        <a href="/register" style={{ color: "#4F46E5", fontWeight: "500" }}>
          Register
        </a>
      </p>
    </form>
  );
}

const inputStyle = {
  padding: "10px 12px",
  borderRadius: "8px",
  border: "1px solid #E5E7EB",
  fontSize: "14px",
  outline: "none",
  transition: "border 0.2s",
};
const buttonStyle = {
  background: "linear-gradient(135deg, #6366F1, #4F46E5)",
  color: "white",
  border: "none",
  borderRadius: "8px",
  padding: "10px",
  fontSize: "15px",
  fontWeight: "600",
  cursor: "pointer",
  boxShadow: "0 4px 12px rgba(99, 102, 241, 0.3)",
  transition: "all 0.25s ease-in-out",
};
