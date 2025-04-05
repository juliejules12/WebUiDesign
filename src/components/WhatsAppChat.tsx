
import React, { useState, useEffect } from 'react';
import { MessageSquare, X } from 'lucide-react';

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasBeenOpened, setHasBeenOpened] = useState(false);
  const phoneNumber = "254791299625"; // Replace with your WhatsApp number
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!hasBeenOpened) {
      setHasBeenOpened(true);
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hello, I found your portfolio online and would like to discuss a potential project.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  // Auto-open the chat bubble after 5 seconds if it hasn't been opened yet
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasBeenOpened) {
        setIsOpen(true);
      }
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [hasBeenOpened]);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Chat widget */}
      {isOpen && (
        <div className="mb-4 bg-white rounded-lg shadow-2xl w-72 md:w-80 overflow-hidden animate-scale-up">
          <div className="bg-[#25D366] p-4 text-white flex justify-between items-center">
            <h3 className="font-medium">Chat with Juliet</h3>
            <button onClick={toggleChat} className="text-white hover:bg-white/10 rounded-full p-1">
              <X size={18} />
            </button>
          </div>
          <div className="p-4 bg-[#E5DDD5]">
            <div className="bg-white rounded-lg p-3 shadow-sm mb-2 max-w-[80%]">
              <p className="text-sm">Hi there! 👋</p>
              <p className="text-sm mt-1">Thanks for visiting my portfolio. How can I assist you today?</p>
              <span className="text-xs text-gray-500 block text-right mt-1">10:00 AM</span>
            </div>
            <div className="bg-[#DCF8C6] rounded-lg p-3 shadow-sm mb-2 max-w-[80%] ml-auto">
              <p className="text-sm">I'm interested in your services!</p>
              <span className="text-xs text-gray-500 block text-right mt-1">10:01 AM</span>
            </div>
            <div className="bg-white rounded-lg p-3 shadow-sm mb-2 max-w-[80%]">
              <p className="text-sm">Great! Feel free to reach out directly via WhatsApp.</p>
              <p className="text-sm mt-1">I typically respond within an hour.</p>
              <span className="text-xs text-gray-500 block text-right mt-1">10:02 AM</span>
            </div>
          </div>
          <div className="p-3 border-t">
            <button
              onClick={openWhatsApp}
              className="w-full bg-[#25D366] text-white py-2 px-4 rounded-md hover:bg-[#1EA952] transition-colors"
            >
              Continue on WhatsApp
            </button>
          </div>
        </div>
      )}
      
      {/* Chat button */}
      <button
        onClick={toggleChat}
        className="bg-[#25D366] hover:bg-[#1EA952] text-white rounded-full p-4 shadow-xl flex items-center justify-center animate-pulse-glow"
      >
        <MessageSquare size={24} />
      </button>
    </div>
  );
};

export default WhatsAppChat;
