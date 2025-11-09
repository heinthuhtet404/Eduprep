import { useRef } from "react";
import "./ScrollHide.css";

export default function ChatInput() {
  const textareaRef = useRef(null);

  const handleInput = (e) => {
    const ta = textareaRef.current;
    if (ta) {
      ta.style.height = "auto"; // reset height
      ta.style.height = Math.min(ta.scrollHeight, 120) + "px"; // max 120px
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        borderRadius: "40px",
        backgroundColor: "white",
        padding: "12px 20px",
        boxShadow: `0 4px 6px rgba(0, 0, 0, 0.1),
                    inset 0 0 6px rgba(255, 255, 255, 0.3)`,
        border: "1px solid rgba(255, 255, 255, 0.4)",
        backdropFilter: "blur(8px)",
        margin: "0px 50px 20px 50px",
        gap: "12px",
      }}
    >
      <textarea
        ref={textareaRef}
        placeholder="Type your question..."
        rows={1}
        onInput={handleInput}
        style={{
          flex: 1,
          border: "none",
          outline: "none",
          fontSize: "15px",
          backgroundColor: "transparent",
          color: "#374151",
          resize: "none",
          overflowY: "auto",
          maxHeight: "120px", // limit height
          lineHeight: "1.5",
        }}
        className="scroll-hide"
      />
      <button
        style={{
          background: "linear-gradient(135deg, #6366F1, #4F46E5)",
          color: "#FFFFFF",
          border: "none",
          borderRadius: "40px",
          padding: "10px 28px",
          cursor: "pointer",
          fontWeight: "600",
          fontSize: "15px",
          letterSpacing: "0.3px",
          boxShadow: "0 6px 15px rgba(99, 102, 241, 0.3)",
          transition: "all 0.25s ease-in-out",
          backdropFilter: "blur(4px)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-3px)";
          e.currentTarget.style.boxShadow =
            "0 10px 20px rgba(99, 102, 241, 0.45)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 6px 15px rgba(99, 102, 241, 0.3)";
        }}
      >
        Send
      </button>
    </div>
  );
}
