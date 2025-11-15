import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function LoginPage({ setUser }) {
  const navigate = useNavigate();

  // Controlled inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      // Save user info + token
      localStorage.setItem("user", JSON.stringify(res.data));
      setUser(res.data);

      // Navigate to main chat page
      navigate("/home");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#F3F4F6", // gray-50
      }}
    >
      <form
        onSubmit={handleLogin}
        style={{
          backgroundColor: "#FFFFFF",
          padding: "24px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          borderRadius: "16px",
          width: "320px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h2
          style={{
            fontSize: "18px",
            fontWeight: "600",
            marginBottom: "16px",
            color: "#111827",
          }}
        >
          Login
        </h2>

        {error && (
          <p style={{ color: "red", fontSize: "14px", marginBottom: "12px" }}>
            {error}
          </p>
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            border: "1px solid #D1D5DB",
            padding: "10px",
            marginBottom: "12px",
            borderRadius: "8px",
            fontSize: "14px",
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            border: "1px solid #D1D5DB",
            padding: "10px",
            marginBottom: "12px",
            borderRadius: "8px",
            fontSize: "14px",
          }}
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            backgroundColor: "#4F46E5",
            color: "#FFFFFF",
            padding: "10px",
            borderRadius: "12px",
            border: "none",
            cursor: "pointer",
            fontWeight: "600",
            fontSize: "14px",
            opacity: loading ? 0.7 : 1,
          }}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p
          style={{
            marginTop: "12px",
            fontSize: "12px",
            color: "#6B7280",
            textAlign: "center",
          }}
        >
          Don’t have an account?{" "}
          <Link
            to="/register"
            style={{
              color: "#4F46E5",
              textDecoration: "none",
              fontWeight: "500",
            }}
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}
