// components/auth/RegisterForm.jsx
import React, { useState } from "react";

export default function RegisterForm() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Register with:", form);
  };

  return (
    <form
      onSubmit={handleRegister}
      style={{ display: "flex", flexDirection: "column", gap: "16px" }}
    >
      <input
        name="username"
        placeholder="Username"
        value={form.username}
        onChange={handleChange}
        style={inputStyle}
      />
      <input
        name="email"
        type="email"
        placeholder="Email address"
        value={form.email}
        onChange={handleChange}
        style={inputStyle}
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        style={inputStyle}
      />

      <button type="submit" style={buttonStyle}>
        Create Account
      </button>

      <p style={{ textAlign: "center", fontSize: "13px", color: "#6B7280" }}>
        Already have an account?{" "}
        <a href="/login" style={{ color: "#4F46E5", fontWeight: "500" }}>
          Login
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
