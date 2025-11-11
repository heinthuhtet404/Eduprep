import { useNavigate, Link } from "react-router-dom";

export default function LoginPage({ setUser }) {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const userData = { username: "hein", token: "abcd1234" };
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
    navigate("/home");
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

        <input
          type="text"
          placeholder="Username"
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
          style={{
            backgroundColor: "#4F46E5",
            color: "#FFFFFF",
            padding: "10px",
            borderRadius: "12px",
            border: "none",
            cursor: "pointer",
            fontWeight: "600",
            fontSize: "14px",
          }}
        >
          Login
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
