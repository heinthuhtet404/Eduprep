import React, { useState } from "react";
import "./ScrollHide.css";
import {
  PlusCircleIcon,
  ChatBubbleLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const sidebarStyle = {
    backgroundColor: "#dee1ec",
    color: "#1F2937",
    height: "100vh",
    width: collapsed ? "80px" : "100%",
    display: "flex",
    flexDirection: "column",
    padding: collapsed ? "16px 10px" : "20px",
    boxSizing: "border-box",
    boxShadow: "2px 0 6px rgba(0,0,0,0.08)",
    borderRight: "1.5px solid lightgray",
    fontFamily: "Inter, system-ui, sans-serif",
    transition: "all 0.3s ease",
  };

  const buttonStyle = {
    backgroundColor: "#4F46E5",
    color: "white",
    padding: "10px 14px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: collapsed ? "center" : "flex-start",
    fontSize: "14px",
    fontWeight: 500,
    transition: "background-color 0.2s ease",
  };

  const chatItemStyle = {
    display: "flex",
    alignItems: "center",
    padding: "8px 10px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "14px",
    color: "#374151",
    transition: "background-color 0.2s ease",
  };

  const hoverChat = (e) => (e.currentTarget.style.backgroundColor = "#f3e6d8");
  const leaveChat = (e) => (e.currentTarget.style.backgroundColor = "transparent");

  return (
    <div style={sidebarStyle}>
      {/* Header */}
      {!collapsed && (
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: "20px",
            textAlign: "center",
            color: "#3b2f2f",
          }}
        >
          EduPrep
        </h2>
      )}

      {/* New Chat Button */}
      <button
        style={buttonStyle}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#4338CA")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#4F46E5")}
      >
        <PlusCircleIcon
          style={{
            width: "20px",
            height: "20px",
            marginRight: collapsed ? "0" : "10px",
          }}
        />
        {!collapsed && "New Chat"}
      </button>

      {/* Chats Section */}
      <div
        style={{
          marginTop: "24px",
          flex: 1,
          overflowY: "auto",
          padding: "10px",
          borderRadius: "10px",
          boxShadow: `0 4px 6px rgba(0, 0, 0, 0.1),
                      inset 0 0 6px rgba(255, 255, 255, 0.3)`,
          // border: "1px solid rgba(255, 255, 255, 0.4)",
          backdropFilter: "blur(8px)",
          // scrollbarWidth: "thin",
        }}
        className="scroll-hide"
      >
        {!collapsed && (
          <h3
            style={{
              fontSize: "0.875rem",
              fontWeight: 600,
              marginBottom: "12px",
              color: "#4B5563",
              
            }}
          >
            Previous Chats
          </h3>
        )}
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }} >
          {[
            "Exam Practice",
            "Physics Notes",
            "AI Quiz",
            "Math Revision",
            "Essay Helper",
            "Study Group",
            "Group Project",
            "Japanese book",
            "Love book",
            "Billionaire",
            "mama",
            "hein thu htet",
            "hello myanmar",
            "lar p naw",
          ].map((chat, index) => (
            <li
              key={index}
              style={chatItemStyle}
              onMouseEnter={hoverChat}
              onMouseLeave={leaveChat}
            >
              <ChatBubbleLeftIcon
                style={{
                  width: "18px",
                  height: "18px",
                  marginRight: collapsed ? "0" : "8px",
                  color: "#4F46E5",
                }}
              />
              {!collapsed && chat}
            </li>
          ))}
        </ul>
      </div>


      {/* Collapse Button */}
      {/* <button
        onClick={() => setCollapsed(!collapsed)}
        style={{
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
          color: "#4B5563",
          display: "flex",
          alignItems: "center",
          justifyContent: collapsed ? "center" : "flex-end",
          marginTop: "auto",
          padding: "8px 0",
        }}
      >
        {collapsed ? (
          <ChevronRightIcon style={{ width: "20px", height: "20px" }} />
        ) : (
          <ChevronLeftIcon style={{ width: "20px", height: "20px" }} />
        )}
      </button> */}
    </div>
  );
}
