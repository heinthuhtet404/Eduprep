// components/ChatArea.js
import { useState } from "react";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import "./ScrollHide.css";
import { processUserPrompt } from "../utils/chatProcessor";

export default function ChatArea() {
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      sender: "bot", 
      text: "👋 Let's test intent detection! I'll understand what you want to do.", 
      analysis: null 
    },
  ]);

  const handleSendMessage = async (messageText) => {
    const processingResult = processUserPrompt(messageText);
    
    const userMessage = {
      id: Date.now(),
      sender: "user", 
      text: messageText,
      analysis: processingResult.data,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    const aiResponse = generateAIResponse(processingResult);
    
    const aiMessage = {
      id: Date.now() + 1,
      sender: "bot", 
      text: aiResponse,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, aiMessage]);
  };

  // ✅ Updated to show intent
  const generateAIResponse = (processingResult) => {
    if (!processingResult.success) {
      return "❌ Analysis failed. Please try again.";
    }

    const { language, sentences, keywords, intent } = processingResult.data;
    
    let response = `🔍 Analysis Result:\n`;
    response += `• Language: ${language}\n`;
    response += `• Sentences: ${sentences.length}\n`;
    response += `• Keywords: ${keywords.length} found\n`;
    response += `• Intent: ${intent}\n\n`;  // ✅ NEW: Show intent
    
    if (keywords.length > 0) {
      response += `🔑 Important Keywords:\n`;
      keywords.forEach((keyword, index) => {
        response += `  ${index + 1}. "${keyword}"\n`;
      });
      response += `\n`;
    }
    
    if (sentences.length > 0) {
      response += `📝 Sentences:\n`;
      sentences.forEach((sentence, index) => {
        response += `  ${index + 1}. "${sentence}"\n`;
      });
      response += `\n`;
    }
    
    // ✅ Add intent-specific message
    response += `🎯 Based on your intent, I understand you want: `;
    switch(intent) {
      case 'explain':
        response += `an explanation about "${keywords[0] || 'this topic'}"`;
        break;
      case 'question':
        response += `questions or exercises`;
        break;
      case 'example':
        response += `examples or demonstrations`;
        break;
      case 'calculate':
        response += `help with calculations`;
        break;
      default:
        response += `general assistance`;
    }
    
    return response;
  };

  return (
    <div style={{ backgroundColor: "#dee1ec", height: "100%", display: "flex", flexDirection: "column" }}>
      <ChatHeader title="Step 4: Intent Detection" /> {/* ✅ Updated title */}
      <ChatMessages messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
}