import Sidebar from "../components/Sidebar";
import ChatArea from "../components/ChatArea";
import { useNavigate } from "react-router-dom";

export default function Home({ user }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user"); // remove user data
    navigate("/login"); // redirect to login
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh", // full viewport height
      }}
    >
      {/* Sidebar (1/4 width) */}
      <div
        style={{
          width: "25%", // 1/4 of screen
          boxSizing: "border-box",
          position: "relative",
        }}
      >
        <Sidebar />
        {/* Optional: logout button at bottom */}
        <button
          onClick={handleLogout}
          style={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            padding: "8px 16px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#EF4444",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>

      {/* Chat Area (3/4 width) */}
      <div
        style={{
          width: "75%", // 3/4 of screen
          boxSizing: "border-box",
        }}
      >
        <ChatArea user={user} />
      </div>
    </div>
  );
}
