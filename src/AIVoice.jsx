import React, { useState } from "react";

const VoiceOrder = () => {
  const [order, setOrder] = useState("");
  const [isListening, setIsListening] = useState(false);

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();
  recognition.lang = "en-IN"; // or "en-US"
  recognition.continuous = false;
  recognition.interimResults = false;

  recognition.onstart = () => {
    setIsListening(true);
    console.log("🎤 Listening...");
  };

  recognition.onresult = (event) => {
    const voiceInput = event.results[0][0].transcript;
    console.log("You said:", voiceInput);
    setOrder(voiceInput);
    setIsListening(false);
  };

  recognition.onerror = (event) => {
    console.error("Speech recognition error:", event.error);
    setIsListening(false);
  };

  recognition.onend = () => {
    setIsListening(false);
    console.log("🛑 Stopped listening");
  };

  const handleVoiceOrder = () => {
    setOrder("");
    recognition.start();
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-bold text-gray-800">🎙️ Voice Order</h2>

      <button
        onClick={handleVoiceOrder}
        className="px-6 py-2 bg-amber-500 text-white rounded hover:bg-amber-600"
        disabled={isListening}
      >
        {isListening ? "Listening..." : "Speak Now"}
      </button>

      {order && (
        <div className="mt-4">
          <h3 className="font-semibold text-gray-700">📝 Your Order:</h3>
          <p className="text-lg text-gray-900 mt-1">{order}</p>
        </div>
      )}
    </div>
  );
};

export default VoiceOrder;
