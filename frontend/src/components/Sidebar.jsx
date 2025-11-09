import React, { useState } from "react";
import { BookmarkIcon } from "@heroicons/react/24/solid";
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
    padding: collapsed ? "16px 10px" : "0px",
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
    // borderRadius: "8px",
    cursor: "pointer",
    fontSize: "14px",
    color: "#374151",
    transition: "background-color 0.2s ease",
    borderBottom: "0.1px solid lightgray",
  };

  const hoverChat = (e) => (e.currentTarget.style.backgroundColor = "#f3e6d8");
  const leaveChat = (e) => (e.currentTarget.style.backgroundColor = "transparent");

  const [hoveredChat, setHoveredChat] = useState(null); // track hovered list
  const [openMenu, setOpenMenu] = useState(null); // track open three-dot menu

  return (
    <div style={sidebarStyle}>
      {/* Header */}
      {!collapsed && (
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            margin: "20px",
            textAlign: "center",
            color: "#3b2f2f",
          }}
        >
          EduPrep
        </h2>
      )}

      {/* New Chat Button */}
      <button
        style={{
          display: "flex",
          alignItems: "center",
          // justifyContent: collapsed ? "center" : "flex-start",
          // width: "100%",
          background: "linear-gradient(135deg, #6366F1, #4F46E5)", // smooth gradient
          color: "white",
          border: "none",
          borderRadius: "10px",
          padding: collapsed ? "10px" : "10px 16px",
          cursor: "pointer",
          fontWeight: "500",
          fontSize: "15px",
          boxShadow: "0 4px 12px rgba(99, 102, 241, 0.3)", // indigo glow
          transition: "all 0.25s ease-in-out",
          margin: "0px 20px 20px 20px",
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = "translateY(-2px)";
          e.target.style.boxShadow = "0 6px 16px rgba(99, 102, 241, 0.45)";
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = "translateY(0)";
          e.target.style.boxShadow = "0 4px 12px rgba(99, 102, 241, 0.3)";
        }}
      >
        <PlusCircleIcon
          style={{
            width: "20px",
            height: "20px",
            marginRight: collapsed ? "0" : "10px",
            filter: "drop-shadow(0 1px 1px rgba(0,0,0,0.2))",
          }}
        />
        {!collapsed && "New Chat"}
      </button>

      {!collapsed && (
        <h3
          style={{
            fontSize: "0.875rem",
            fontWeight: 600,
            margin: "0px 20px 0px 20px",
            color: "#4B5563",

          }}
        >
          Previous Chats
        </h3>
      )}

      {/* Chats Section */}
      <div
        style={{
          margin: "15px",
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
            "Exam Practice",
            "Physics Notes",
            "AI Quiz",
            "Math Revision",
            "Essay Helper",
            "Study Group",
            "Group Project",
            "Japanese book",
            "Love book",
          ].map((chat, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "13px 12px",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "background-color 0.2s ease, transform 0.1s ease",
                backgroundColor:
                  hoveredChat === index ? "#E0E7FF" : "transparent",
                position: "relative",
              }}
              onMouseEnter={() => setHoveredChat(index)}
              onMouseLeave={() => {
                setHoveredChat(null);
                setOpenMenu(null);
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <ChatBubbleLeftIcon
                  style={{
                    width: "18px",
                    height: "18px",
                    marginRight: collapsed ? "0" : "8px",
                    color: "#4F46E5",
                  }}
                />
                {!collapsed && (
                  <span style={{ color: "#1F2937", fontSize: "15px" }}>{chat}</span>
                )}
              </div>

              {/* Three-dot button */}
              {!collapsed && hoveredChat === index && (
                <div
                  style={{
                    position: "relative",
                  }}
                >
                  {/* Three-dot button */}
                  <div
                    style={{
                      cursor: "pointer",
                      color: "#6B7280",
                      // fontWeight: "bold",
                      // fontSize: "18px",
                      // padding: "0px 6px",
                      // borderRadius: "50%",
                      // transition: "background-color 0.2s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = "#E0E7FF")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "transparent")
                    }
                    onClick={(e) => {
                      e.stopPropagation(); // prevent parent click
                      setOpenMenu(openMenu === index ? null : index);
                    }}
                  >
                    ⋮
                  </div>

                  {/* Popup menu — visible only when clicked */}
                  {openMenu === index && (
                    <div
                      style={{
                        position: "absolute",
                        right: "35px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        background: "rgba(255, 255, 255, 0.85)", // translucent white
                        backdropFilter: "blur(10px)", // glass effect
                        borderRadius: "12px",
                        boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                        padding: "6px 0",
                        zIndex: 1000,
                        minWidth: "130px",
                        animation: "fadeIn 0.15s ease-in-out",
                        border: "1px solid rgba(229,231,235,0.5)", // soft border
                        transition: "all 0.2s ease",
                      }}
                    >
                      {/* Bookmark */}
                      <div
                        style={{
                          padding: "10px 16px",
                          cursor: "pointer",
                          fontSize: "14px",
                          color: "#111827",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          transition: "all 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#EEF2FF";
                          e.currentTarget.style.transform = "translateX(3px)";
                          e.currentTarget.querySelector("svg").style.transform = "scale(1.2)";
                          e.currentTarget.querySelector("svg").style.transition = "transform 0.2s ease";

                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "transparent";
                          e.currentTarget.style.transform = "translateX(0)";
                          e.currentTarget.querySelector("svg").style.transform = "scale(1)";

                        }}
                        onClick={() => {
                          console.log("Bookmark clicked:", chat);
                          setOpenMenu(null);
                        }}
                      >
                        <BookmarkIcon style={{ width: "18px", height: "18px", color: "#4F46E5" }} />
                        Bookmark
                      </div>


                      {/* Divider line */}
                      <div
                        style={{
                          height: "1px",
                          backgroundColor: "rgba(229,231,235,0.8)",
                          margin: "4px 0",
                        }}
                      ></div>

                      {/* Delete */}
                      <div
                        style={{
                          padding: "10px 16px",
                          cursor: "pointer",
                          fontSize: "14px",
                          color: "#DC2626",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          transition: "all 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#FEE2E2";
                          e.currentTarget.style.transform = "translateX(3px)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "transparent";
                          e.currentTarget.style.transform = "translateX(0)";
                        }}
                        onClick={() => {
                          console.log("Delete clicked:", chat);
                          setOpenMenu(null);
                        }}
                      >
                        <span style={{ fontSize: "16px" }}>🗑</span> Delete
                      </div>
                    </div>
                  )}

                </div>
              )}

            </li>
          ))}
        </ul>
      </div>

      {/* Sidebar Bottom User Profile */}
      <div
        style={{
          // position: "absolute",
          // bottom: "20px",
          // left: "0",
          // width: "100%",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          padding: "12px 20px",
          // background: "",
          backdropFilter: "blur(10px)",
          borderTop: "1px solid rgba(0,0,0,0.05)",
          boxShadow: "0 -2px 10px rgba(0,0,0,0.05)",
        }}
      >
        {/* Profile Image */}
        <img
          src="https://i.pravatar.cc/40?img=3"
          alt="User Avatar"
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "1px solid #E0E7FF",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        />

        {/* Username & Status */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontSize: "15px",
              fontWeight: "600",
              color: "#111827",
            }}
          >
            Hein Thu Htet
          </span>
          <span
            style={{
              fontSize: "13px",
              color: "#6B7280",
            }}
          >
            Online 
          </span>
        </div>
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
