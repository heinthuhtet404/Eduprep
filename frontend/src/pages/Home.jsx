import Sidebar from "../components/Sidebar";
import ChatArea from "../components/ChatArea";

export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="w-1/3 border-r">
        <Sidebar />
      </div>
      <div className="w-2/3">
        <ChatArea />
      </div>
    </div>
  );
}
