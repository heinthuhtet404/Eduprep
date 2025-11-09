import { useState } from "react";
import { BookmarkIcon, Bars3Icon } from "@heroicons/react/24/outline";

export default function ChatHeader({ title, isBookmarked }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            {/* Header */}
            <div
                style={{
                    padding: "13px 50px",
                    borderBottom: "1px solid #E5E7EB",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    position: "sticky",
                    top: 0,
                    zIndex: 20,
                    //   backgroundColor: "#fff",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
                }}
            >
                {/* Left: Bookmark */}
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <BookmarkIcon
                        style={{
                            width: "20px",
                            height: "20px",
                            color: isBookmarked ? "#4F46E5" : "#9CA3AF",
                            cursor: "pointer",
                        }}
                        onClick={() => console.log("Toggle bookmark")}
                    />
                </div>

                {/* Center: Title */}
                <h2
                    style={{
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "#111827",
                        textAlign: "center",
                        flex: 1,
                    }}
                >
                    {title}
                </h2>

                {/* Right: Hamburger Menu */}
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Bars3Icon
                        style={{
                            width: "24px",
                            height: "24px",
                            color: "#4B5563",
                            cursor: "pointer",
                        }}
                        onClick={() => setIsMenuOpen(true)}
                    />
                </div>
            </div>

            {/* Slide panel */}
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    right: isMenuOpen ? 0 : "-300px", // hidden when false
                    height: "100vh",
                    width: "300px",
                    backgroundColor: "#fff",
                    boxShadow: "-4px 0 12px rgba(0,0,0,0.1)",
                    transition: "right 0.3s ease-in-out",
                    zIndex: 30,
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <button
                        style={{
                            border: "none",
                            background: "transparent",
                            fontSize: "20px",
                            cursor: "pointer",
                        }}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        ✕
                    </button>
                </div>
                <h3 style={{ fontSize: "16px", fontWeight: "600", marginTop: "10px" }}>
                    Options
                </h3>
                <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
                    {[
                        { label: "Save Messages", action: () => console.log("Save messages") },
                        { label: "Mark Chats", action: () => console.log("Mark chats") },
                        { label: "Theme", action: () => console.log("Toggle theme") },
                        { label: "Setting", action: () => console.log("Open settings") },
                    ].map((btn, idx) => (
                        <button
                            key={idx}
                            onClick={btn.action}
                            style={{
                                width: "100%",
                                padding: "12px 16px",
                                borderRadius: "12px",
                                border: "1px solid #E5E7EB",
                                backgroundColor: "#F9FAFB",
                                cursor: "pointer",
                                textAlign: "left",
                                fontSize: "14px",
                                fontWeight: "500",
                                color: "#111827",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
                                transition: "all 0.2s ease-in-out",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = "#EEF2FF";
                                e.currentTarget.style.transform = "translateX(3px)";
                                e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.12)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = "#F9FAFB";
                                e.currentTarget.style.transform = "translateX(0)";
                                e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.08)";
                            }}
                        >
                            {btn.label}
                            <span style={{ fontSize: "16px", color: "#4F46E5" }}>→</span>
                        </button>
                    ))}
                </div>

            </div>
        </>
    );
}
