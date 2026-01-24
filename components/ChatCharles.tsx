import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, Type, FunctionDeclaration } from '@google/genai';
import { calculateProjectFinancials } from '../services/emailService';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const ChatCharles: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hey, I'm Charles. I handle the strategy and engineering side of Studio Charles. Looking for a quote or have a question about our services?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Check if API key is configured
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const isConfigured = Boolean(apiKey);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const quoteFunction: FunctionDeclaration = {
    name: 'calculate_project_quote',
    description: 'Calculate an estimated project cost based on Studio Charles standards.',
    parameters: {
      type: Type.OBJECT,
      properties: {
        projectType: {
          type: Type.STRING,
          enum: ['Real Estate', 'Sports Doc', 'Brand Identity', 'TikTok/Viral', 'Event Aftermovie'],
          description: 'The niche of the project.'
        },
        shootScale: {
          type: Type.STRING,
          enum: ['Remote Only', 'Half Day (4h)', 'Full Day (8h)', 'High-End Production'],
          description: 'The scale of the physical shoot.'
        },
        urgency: {
          type: Type.STRING,
          enum: ['Standard (14 Days)', 'Priority (7 Days)', 'Express (48 Hours)'],
          description: 'Delivery timeline.'
        },
        music: {
          type: Type.STRING,
          enum: ['No Music', 'Stock Library', 'Custom Composition', 'Licensed Commercial Track'],
          description: 'Audio requirements.'
        },
        location: {
          type: Type.STRING,
          description: 'The city or area. Used to calculate travel fees (Sydney CBD has no travel fee).'
        }
      },
      required: ['projectType', 'shootScale', 'urgency', 'music', 'location']
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    if (!isConfigured) {
      setMessages(prev => [...prev,
        { role: 'user', text: input },
        { role: 'model', text: "The AI chat feature is currently unavailable. Please reach out directly at studiocharlesau@gmail.com or call 0410 745 738 for immediate assistance with quotes and inquiries." }
      ]);
      setInput('');
      return;
    }

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey });
      const chat = ai.chats.create({
        model: 'gemini-2.0-flash-exp',
        config: {
          systemInstruction: `You are Charles, the AI Studio Assistant for Reuben Charles's "Studio Charles".
          Reuben is a world-class social media creator and DaVinci Resolve master based in Sydney, Australia.
          Your tone is high-end, efficient, and professional Sydney-creative.
          If a user asks for a quote, you MUST gather their project type, shoot scale, urgency, music needs, and location.
          Once you have those details, use the calculate_project_quote tool.
          Always mention AUD (Australian Dollars) in pricing.
          Keep responses concise but premium.`,
          tools: [{ functionDeclarations: [quoteFunction] }]
        },
        history: messages.map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        }))
      });

      const response = await chat.sendMessage({ message: userMessage });

      if (response.functionCalls) {
        for (const fc of response.functionCalls) {
          if (fc.name === 'calculate_project_quote') {
            const financials = calculateProjectFinancials(fc.args as any);
            const toolResult = `Quote calculated: Total AUD $${financials.total}, Deposit AUD $${financials.deposit}. Breakdown: ${financials.breakdown.map(b => `${b.item}: $${b.cost}`).join(', ')}`;

            const toolResponse = await chat.sendMessage({
              message: toolResult
            });
            setMessages(prev => [...prev, { role: 'model', text: toolResponse.text || "Calculation complete." }]);
          }
        }
      } else {
        setMessages(prev => [...prev, { role: 'model', text: response.text || "I'm sorry, I couldn't process that." }]);
      }
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: "Systems are heavy right now. Reach out directly at studiocharlesau@gmail.com if you need an immediate quote." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-[90vw] sm:w-[380px] h-[500px] bg-zinc-950 border border-zinc-700 shadow-2xl rounded-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          <div className="bg-zinc-900 p-4 border-b border-zinc-700 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-black text-[10px] font-black">SC</span>
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-zinc-100">Charles AI</p>
                <p className="text-[8px] text-zinc-400 uppercase tracking-widest">Studio Strategy</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-zinc-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded-sm"
              aria-label="Close chat"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-4 no-scrollbar">
            {!isConfigured && (
              <div className="bg-amber-500/10 border border-amber-500/30 p-3 rounded-lg text-xs text-amber-200">
                AI chat is currently unavailable. Please contact us directly for quotes.
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 text-[12px] leading-relaxed rounded-xl ${m.role === 'user' ? 'bg-white text-black font-medium' : 'bg-zinc-800 text-zinc-200 border border-zinc-700'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-zinc-800 border border-zinc-700 p-3 rounded-xl flex gap-1">
                  <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-zinc-900 border-t border-zinc-700 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask Charles..."
              disabled={!isConfigured}
              className="flex-grow bg-black border border-zinc-700 rounded-lg px-3 py-2 text-xs text-zinc-100 placeholder-zinc-500 focus:border-white outline-none disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Chat message input"
            />
            <button
              onClick={handleSend}
              disabled={!isConfigured}
              className="bg-white text-black p-2 rounded-lg hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Send message"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-white text-black rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95 group relative focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
        aria-label={isOpen ? "Close AI chat" : "Open AI chat"}
      >
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-zinc-900 border-2 border-white rounded-full flex items-center justify-center">
          <div className={`w-1 h-1 ${isConfigured ? 'bg-green-500' : 'bg-red-500'} rounded-full animate-pulse`}></div>
        </div>
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>
    </div>
  );
};

export default ChatCharles;
