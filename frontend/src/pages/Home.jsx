import Sidebar from "../components/Sidebar";
import ChatArea from "../components/ChatArea";

export default function Home({ user }) {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
      }}
    >
      {/* Sidebar (1/4 width) */}
      <div
        style={{
          width: "25%",
          boxSizing: "border-box",
        }}
      >
        <Sidebar />
      </div>

      {/* Chat Area (3/4 width) */}
      <div
        style={{
          width: "75%",
          boxSizing: "border-box",
        }}
      >
        <ChatArea user={user} />
      </div>
    </div>
  );
}