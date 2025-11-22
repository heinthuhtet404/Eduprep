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
      text: "👋 Let's test parameter extraction! I'll detect years, subjects, and grades from your message.", 
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

  // ✅ Updated to show parameters
  const generateAIResponse = (processingResult) => {
    if (!processingResult.success) {
      return "❌ Analysis failed. Please try again.";
    }

    const { language, sentences, keywords, intent, parameters } = processingResult.data;
    
    let response = `🔍 Analysis Result:\n`;
    response += `• Language: ${language}\n`;
    response += `• Sentences: ${sentences.length}\n`;
    response += `• Keywords: ${keywords.length} found\n`;
    response += `• Intent: ${intent}\n`;
    response += `• Parameters: ${Object.keys(parameters).length} detected\n\n`;  // ✅ NEW
    
    // ✅ Show parameters section
    if (Object.keys(parameters).length > 0) {
      response += `📊 Extracted Parameters:\n`;
      for (const [key, value] of Object.entries(parameters)) {
        response += `  • ${key}: ${value}\n`;
      }
      response += `\n`;
    }
    
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
    
    // Smart summary based on analysis
    response += `🎯 I understand you want `;
    
    if (parameters.subject) response += `${parameters.subject} `;
    if (parameters.year) response += `from ${parameters.year} `;
    if (parameters.grade) response += `for grade ${parameters.grade} `;
    
    switch(intent) {
      case 'explain':
        response += `explanations`;
        break;
      case 'question':
        response += `questions`;
        break;
      case 'example':
        response += `examples`;
        break;
      case 'calculate':
        response += `calculations`;
        break;
      default:
        response += `assistance`;
    }
    
    return response;
  };

  return (
    <div style={{ backgroundColor: "#dee1ec", height: "100%", display: "flex", flexDirection: "column" }}>
      <ChatHeader title="Step 5: Parameter Extraction" /> {/* ✅ Updated title */}
      <ChatMessages messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
}