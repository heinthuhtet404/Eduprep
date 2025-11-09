import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import "./ScrollHide.css";

export default function ChatArea() {
  const messages = [
    { sender: "ai", text: "👋 Welcome to EduPrep AI! Ask me anything about your exams or textbooks." },
    { sender: "user", text: "Hi! Can you generate some Physics questions for me?" },
    { sender: "ai", text: "Sure! What topic in Physics are you studying right now?" },
    { sender: "user", text: "I’m learning about Newton’s Laws." },
    { sender: "ai", text: "Got it ⚙️ Here are a few questions based on Newton’s Laws of Motion." },
    { sender: "ai", text: "1. What is Newton's First Law of Motion?\n2. How does mass affect acceleration according to Newton's Second Law?\n3. Can you explain Newton's Third Law with an example?" },
    { sender: "ai", text: "👋 Welcome to EduPrep AI! Ask me anything about your exams or textbooks." },
    { sender: "user", text: "Hi! Can you generate some Physics questions for me?" },
    { sender: "ai", text: "Sure! What topic in Physics are you studying right now?" },
    { sender: "user", text: "I’m learning about Newton’s Laws." },
    { sender: "ai", text: "Got it ⚙️ Here are a few questions based on Newton’s Laws of Motion." },
    { sender: "ai", text: "1. What is Newton's First Law of Motion?\n2. How does mass affect acceleration according to Newton's Second Law?\n3. Can you explain Newton's Third Law with an example?" },
    { sender: "ai", text: "👋 Welcome to EduPrep AI! Ask me anything about your exams or textbooks." },
    { sender: "user", text: "Hi! Can you generate some Physics questions for me?" },
    { sender: "ai", text: "Sure! What topic in Physics are you studying right now?" },
    { sender: "user", text: "I’m learning about Newton’s Laws." },
    { sender: "ai", text: "Got it ⚙️ Here are a few questions based on Newton’s Laws of Motion." },
    { sender: "ai", text: "1. What is Newton's First Law of Motion?\n2. How does mass affect acceleration according to Newton's Second Law?\n3. Can you explain Newton's Third Law with an example?" },
  ];

  return (
    <div
      style={{
        backgroundColor: "#dee1ec",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
      }}
    >
      <ChatHeader title="Physics - Newton’s Laws" />

      <ChatMessages messages={messages} />

      <ChatInput />
    </div>
  );
}
