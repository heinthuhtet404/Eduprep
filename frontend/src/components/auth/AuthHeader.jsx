// components/auth/AuthHeader.jsx
import React from "react";

export default function AuthHeader() {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "28px",
          fontWeight: "700",
          color: "#111827",
          marginBottom: "6px",
        }}
      >
        Welcome Back 👋
      </h1>
      <p style={{ fontSize: "14px", color: "#6B7280" }}>
        Please sign in or create a new account.
      </p>
    </div>
  );
}
