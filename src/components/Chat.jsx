import React, { useState } from "react";

const Chat = () => {
  const [input, setInput] = useState("");
  const [conversation, setConversation] = useState([]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setConversation([...conversation, { user: input }]);
    setInput("");
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col h-64 bg-white rounded-lg shadow-lg overflow-y-scroll">
        {conversation.map((message, i) => (
          <div
            key={i}
            className={`p-4 mb-2 ${
              message.user ? "bg-blue-300" : "bg-gray-300"
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <form
        onSubmit={handleSubmit}
        className="mt-4 bg-gray-200 rounded-lg shadow-lg p-4"
      >
        <input
          type="text"
          value={input}
          onChange={handleInput}
          className="w-full p-2"
        />
        <button type="submit" className="mt-2 p-2 bg-blue-500 text-white">
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;


