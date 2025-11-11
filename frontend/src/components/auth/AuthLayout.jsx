// components/auth/AuthLayout.jsx
import React from "react";
import AuthHeader from "./AuthHeader";

export default function AuthLayout({ children }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #6366F1, #4F46E5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "20px",
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
          width: "100%",
          maxWidth: "420px",
          padding: "40px 35px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <AuthHeader />
        <div style={{ width: "100%", marginTop: "20px" }}>{children}</div>
      </div>
    </div>
  );
}
