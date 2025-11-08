import Sidebar from "../components/Sidebar";
import ChatArea from "../components/ChatArea";

export default function Home() {
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
          // borderRight: "1px solid #E5E7EB", // light gray border
          boxSizing: "border-box",
        }}
      >
        <Sidebar />
      </div>

      {/* Chat Area (3/4 width) */}
      <div
        style={{
          width: "75%", // 3/4 of screen
          boxSizing: "border-box",
        }}
      >
        <ChatArea />
      </div>
    </div>
  );
}
