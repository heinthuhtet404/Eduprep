import "./ScrollHide.css";

export default function ChatArea() {
  // Temporary sample messages (later you can make this dynamic)
  const messages = [
    { sender: "ai", text: "👋 Welcome to EduPrep AI! Ask me anything about your exams or textbooks." },
    { sender: "user", text: "Hi! Can you generate some Physics questions for me?" },
    { sender: "ai", text: "Sure! What topic in Physics are you studying right now?" },
    { sender: "user", text: "I’m learning about Newton’s Laws." },
    { sender: "ai", text: "Got it ⚙️ Here are a few questions based on Newton’s Laws of Motion." },
    { sender: "ai", text: "1. What is Newton's First Law of Motion?\n2. How does mass affect acceleration according to Newton's Second Law?\n3. Can you explain Newton's Third Law with an example?" },
    { sender: "user", text: "Thanks! Can you also help me with some Chemistry notes?" },
    { sender: "ai", text: "Absolutely! What specific area in Chemistry do you need notes on?" },
    { sender: "user", text: "I'm focusing on Organic Chemistry, especially reaction mechanisms." },
    { sender: "ai", text: "Great choice! Here are some key points on Organic Chemistry reaction mechanisms:\n\n1. Nucleophilic Substitution (SN1 and SN2)\n2. Electrophilic Addition\n3. Free Radical Substitution\n4. Elimination Reactions (E1 and E2)\n\nWould you like detailed notes on any of these topics?" },
    { sender: "ai", text: "Sure! What topic in Physics are you studying right now?" },
    { sender: "user", text: "I’m learning about Newton’s Laws." },
    { sender: "ai", text: "Got it ⚙️ Here are a few questions based on Newton’s Laws of Motion." },
    { sender: "ai", text: "1. What is Newton's First Law of Motion?\n2. How does mass affect acceleration according to Newton's Second Law?\n3. Can you explain Newton's Third Law with an example?" },
  ];

  return (
    <div
      style={{
        backgroundColor: "#dee1ec", // soft gray (chatGPT-like background)
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "16px",
        boxSizing: "border-box",
      }}
    >
      {/* Chat messages container */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          margin: "0px 50px 0px 50px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          padding: "50px",
        }}

        className="scroll-hide"
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: msg.sender === "user" ? "flex-end" : "flex-start",
            }}
          >
            <div
              style={{
                backgroundColor:
                  msg.sender === "user" ? "#E0E7FF" : "#F3F4F6",
                color: "#1F2937",
                padding: "10px 14px",
                borderRadius:
                  msg.sender === "user"
                    ? "12px 12px 0px 12px"
                    : "12px 12px 12px 0px",
                maxWidth: "70%",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                fontSize: "15px",
                lineHeight: "1.5",
              }}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input box */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          borderRadius: "40px",
          backgroundColor: "white",
          padding: "18px 40px",
          boxShadow: `0 4px 6px rgba(0, 0, 0, 0.1),
                      inset 0 0 6px rgba(255, 255, 255, 0.3)`,
          border: "1px solid rgba(255, 255, 255, 0.4)",
          backdropFilter: "blur(8px)",
          margin: "0px 50px 20px 50px",
        }}
      >
        <input
          type="text"
          placeholder="Type your question..."
          style={{
            flex: 1,
            border: "none",
            outline: "none",
            fontSize: "15px",
            backgroundColor: "transparent",
            color: "#374151",
          }}
        />
        <button
          style={{
            background: "linear-gradient(135deg, #6366F1, #4F46E5)", // subtle gradient
            color: "#FFFFFF",
            border: "none",
            borderRadius: "40px", // smoother rounded corners
            padding: "10px 30px",
            cursor: "pointer",
            fontWeight: "500",
            fontSize: "15px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.15)", // subtle shadow
            transition: "all 0.2s ease-in-out",
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "scale(1.05)";
            e.target.style.boxShadow = "0 6px 10px rgba(0,0,0,0.2)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0 4px 6px rgba(0,0,0,0.15)";
          }}
        >
          Send
        </button>

      </div>
    </div>
  );
}
