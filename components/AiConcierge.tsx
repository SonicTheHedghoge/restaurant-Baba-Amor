import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { generateConciergeResponse } from '../services/ai';
import { ChatMessage } from '../types';

const AiConcierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Marhba! I am Amor's Spirit. How can I guide your appetite today?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userText = inputValue;
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    const responseText = await generateConciergeResponse(userText);

    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 bg-djerba-blue text-white p-4 rounded-full shadow-2xl hover:bg-blue-800 transition-all hover:scale-110 flex items-center gap-2 ${isOpen ? 'hidden' : 'flex'}`}
      >
        <Sparkles size={24} className="animate-pulse" />
        <span className="font-bold hidden md:inline">Ask the Chef AI</span>
      </button>

      {/* Modal Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[90vw] md:w-96 h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col border border-stone-200 animate-fade-in-up overflow-hidden">
          
          {/* Header */}
          <div className="bg-djerba-blue p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <Sparkles size={20} className="text-djerba-gold" />
              <div>
                <h3 className="font-serif font-bold">Amor's Spirit</h3>
                <p className="text-xs text-blue-200">Virtual Maître d'</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-red-200 transition-colors">
              <X size={24} />
            </button>
          </div>

          {/* Chat Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-stone-50 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-djerba-clay text-white rounded-br-none' 
                      : 'bg-white text-slate-700 shadow-sm border border-stone-100 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                 <div className="bg-white p-3 rounded-2xl rounded-bl-none shadow-sm flex gap-2 items-center text-slate-400 text-xs">
                    <Loader2 size={16} className="animate-spin" />
                    <span>Thinking...</span>
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-stone-100">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about our couscous..."
                className="flex-1 bg-stone-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-djerba-blue/50 text-slate-800"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-djerba-blue text-white p-2 rounded-full hover:bg-blue-800 disabled:opacity-50 transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AiConcierge;