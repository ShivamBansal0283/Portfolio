import React, { useState, useEffect } from "react";
import "../styles/terminal.css";

const TerminalBio = () => {
    const commandResponses = {
        "sudo": "\n🔒 Enter password: \n",
        "whoami": "\n👋 Hi, I'm Shivam Bansal\n",
        "skills": "\n💻 Web Development, Database Management, Software Engineer, Cybersecurity, Machine Learning\n",
        "interests": "\n🤖 Coding, Cricket, Volleyball, Table Tennis, Swimmiing, Video Games\n",
        "social-links": "\n🔗 GitHub: https://github.com/ShivamBansal0283\n🔗 LinkedIn: lhttps://www.linkedin.com/in/shivam-bansal-b2aba924b/\n",
        "exit": "\nSession terminated.\n"
    };

    const [history, setHistory] = useState([]);
    const [input, setInput] = useState("");
    const [typingIndex, setTypingIndex] = useState(0);
    const [typingResponse, setTypingResponse] = useState(null);
    const [expectingPassword, setExpectingPassword] = useState(false);
    const [isBooting, setIsBooting] = useState(true);

    const handleInput = (event) => {
        if (event.key === "Enter" && input.trim() === "sudo") {
            setHistory(prev => [...prev, "$ sudo", "\n🔒 Enter password: (Hint: Try my last name(use: whoami if you still don't know me)\n"]);
            setInput("");
            setTypingResponse(null);
            setExpectingPassword(true);
            return;
        }
        if (event.key === "Enter" && expectingPassword) {
            if (input.trim() === "Bansal" || input.trim() === "bansal") { 
                setHistory(prev => [...prev, "$ ********", "\n🎉 Congratulations! You unlocked the secret! 🎁\n"]);
            } else {
                setHistory(prev => [...prev, "$ ********", "\n❌ Incorrect password. Try again.\n"]);
            }
            setInput("");
            setExpectingPassword(false);
            return;
        }
        if (event.key === "Enter" && input.trim() === "exit") {
            setHistory(prev => [...prev, "$ exit", "Session terminated."]);
            setInput("");
            setTypingResponse(null);
            return;
        }
        if (event.key === "Enter" && !typingResponse) {
            const command = input.trim();
            const response = commandResponses[command] || "\n❌ Command not found. Try: whoami, sudo, skills, interests, social-links, exit\n";
            setHistory(prev => [...prev, `$ ${command}`]);
            setTypingResponse(response);
            setTypingIndex(0);
            setInput("");
        }
    };

    useEffect(() => {
        if (isBooting) {
            let i = 0;
            const bootMessages = ["Booting up...","Booting up...", "Initializing system modules...", "Loading user profile...", "System ready."];
            setHistory([]);
            const bootInterval = setInterval(() => {
                if (i < bootMessages.length) {
                    setHistory(prev => [...prev, bootMessages[i]]);
                    i++;
                } else {
                    clearInterval(bootInterval);
                    setIsBooting(false);
                }
            }, 1000);
            return () => clearInterval(bootInterval);
        }
        if (isBooting) {
            let i = 0;
            const bootMessages = ["Booting up...","Booting up...", "Initializing system modules...", "Loading user profile...", "System ready."];
            const bootInterval = setInterval(() => {
                if (i < bootMessages.length) {
                    setHistory(prev => (prev.length < bootMessages.length ? [...prev, bootMessages[i]] : prev));
                    i++;
                } else {
                    clearInterval(bootInterval);
                    setIsBooting(false);
                }
            }, 1000);
            return () => clearInterval(bootInterval);
        }
        if (typingResponse !== null) {
            if (typingIndex < typingResponse.length) {
                const timeout = setTimeout(() => {
                    setHistory(prev => {
                        const lastEntry = prev[prev.length - 1] || "";
                        const updatedHistory = [...prev.slice(0, -1), lastEntry + typingResponse[typingIndex]];
                        return updatedHistory;
                    });
                    setTypingIndex(prevIndex => prevIndex + 1);
                }, 50);
                return () => clearTimeout(timeout);
            } else {
                setTypingResponse(null);
                setHistory(prev => [...prev, ""]);
            }
        }
    }, [typingIndex, typingResponse]);

    return (
        <div className="terminal-container">
            <div className="terminal-header">$ Terminal</div>
            <pre className="terminal-content">
                {history.map((line, index) => (
                    <div key={index}>{line}</div>
                ))}
                {!typingResponse && !isBooting && history[history.length - 1] !== "Session terminated." && <span className="input-line">$ <input 
                    type="text" 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                    onKeyDown={handleInput} 
                    className="terminal-input" 
                    autoFocus
                /></span>}
            </pre>
        </div>
    );
};

export default TerminalBio;
