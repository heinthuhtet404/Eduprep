export default function ChatMessages({ messages }) {
    return (
        <div
            style={{
                flex: 1,
                overflowY: "auto",
                margin: "0px 120px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                padding: "40px 0",
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
                            whiteSpace: "pre-line",
                        }}
                    >
                        {msg.text}
                    </div>
                </div>
            ))}
        </div>
    );
}
