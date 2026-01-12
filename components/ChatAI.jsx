"use client";

import { useState, useEffect } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
// 1. Importar o contexto
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  pt: {
    welcome: 'Olá! Sou o assistente do Thiago. Como posso te ajudar hoje?',
    demoResponse: 'Essa é uma demonstração de integração de IA. No projeto real, eu processaria sua pergunta usando GPT-4 ou Claude.',
    placeholder: 'Digite sua dúvida...',
    online: 'Online Agora',
  },
  en: {
    welcome: "Hi! I'm Thiago's assistant. How can I help you today?",
    demoResponse: 'This is an AI integration demo. In the real project, I would process your question using GPT-4 or Claude.',
    placeholder: 'Type your message...',
    online: 'Online Now',
  }
};

export default function ChatAI() {
  const { lang } = useLanguage();
  const t = translations[lang];
  
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  
  // Inicializamos as mensagens
  const [messages, setMessages] = useState([
    { role: 'assistant', content: t.welcome }
  ]);

  // Efeito para traduzir a mensagem de boas-vindas se o usuário trocar o idioma com o chat aberto
  useEffect(() => {
    setMessages(prev => {
      const newMsgs = [...prev];
      if (newMsgs.length > 0 && newMsgs[0].role === 'assistant') {
        newMsgs[0].content = t.welcome;
      }
      return newMsgs;
    });
  }, [lang, t.welcome]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');

    setTimeout(() => {
      setMessages([...newMessages, { 
        role: 'assistant', 
        content: t.demoResponse 
      }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Botão Flutuante */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 hover:bg-blue-500 text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 active:scale-95 border border-white/20"
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </button>

      {/* Janela de Chat */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] md:w-[400px] bg-[#1e293b] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-blue-600 p-4 flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-lg">
              <Bot size={20} className="text-white" />
            </div>
            <div>
              <h3 className="text-white font-bold text-sm">Thiago AI Assistant</h3>
              <p className="text-blue-100 text-[10px] uppercase tracking-widest font-bold">{t.online}</p>
            </div>
          </div>

          {/* Área de Mensagens */}
          <div className="h-[400px] overflow-y-auto p-4 flex flex-col gap-4 bg-[#0f172a]/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-none' 
                    : 'bg-[#1e293b] text-slate-200 border border-white/5 rounded-tl-none'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 bg-[#1e293b] border-t border-white/10 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder={t.placeholder}
              className="flex-1 bg-[#0f172a] border border-white/10 rounded-xl px-4 py-2 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
            />
            <button 
              onClick={handleSend}
              className="bg-blue-600 hover:bg-blue-500 text-white p-2 rounded-xl transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}