"use client";
import { useState } from "react";
import { Github, Linkedin, MessageCircle } from "lucide-react";
// 1. Importe o hook do seu contexto
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  pt: {
    title: "Vamos escalar seu",
    highlight: "próximo projeto?",
    description: "Precisa de um especialista em IA, PHP ou React? Mande uma mensagem direta no meu WhatsApp e vamos conversar sobre sua ideia.",
    quickReply: "Resposta rápida via WhatsApp",
    nameLabel: "Seu Nome",
    namePlaceholder: "Ex: João Silva",
    projectLabel: "Tipo de Projeto",
    projects: [
      "Inteligência Artificial",
      "Desenvolvimento Web",
      "Aplicativo Mobile",
      "Consultoria Técnica",
    ],
    button: "Chamar no WhatsApp",
    footer: "Seguro e Direto • Sem Spam",
    message: (name, project) =>
      `Olá Thiago! Meu nome é ${name}. Gostaria de falar sobre um projeto de ${project}. Vi seu portfólio e gostaria de trocar uma ideia!`,
  },
  en: {
    title: "Let’s scale your",
    highlight: "next project?",
    description: "Looking for an expert in AI, PHP or React? Send me a direct message on WhatsApp and let’s talk about your idea.",
    quickReply: "Fast reply via WhatsApp",
    nameLabel: "Your Name",
    namePlaceholder: "e.g. John Smith",
    projectLabel: "Project Type",
    projects: [
      "Artificial Intelligence",
      "Web Development",
      "Mobile App",
      "Technical Consulting",
    ],
    button: "Message me on WhatsApp",
    footer: "Secure & Direct • No Spam",
    message: (name, project) =>
      `Hi Thiago! My name is ${name}. I’d like to talk about a ${project} project. I saw your portfolio and would love to connect!`,
  },
};

export default function Contact() {
  // 2. Acesse o idioma global aqui
  const { lang } = useLanguage();
  
  const t = translations[lang];
  const [name, setName] = useState("");
  
  // Importante: Inicialize o projeto com o valor da tradução atual
  const [project, setProject] = useState(t.projects[0]);

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const phone = "5571991266746";
    const message = t.message(name, project);
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="py-24 bg-[#0f172a]" id="contato">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <h2 className="text-4xl font-black text-white mb-6">
              {t.title}{" "}
              <span className="text-blue-500">{t.highlight}</span>
            </h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              {t.description}
            </p>
            {/* ... restante do código permanece igual ... */}
            <div className="space-y-6">
               <div className="flex items-center gap-4 text-slate-300">
                 <div className="bg-blue-500/10 p-3 rounded-lg text-blue-500">
                   <MessageCircle size={24} />
                 </div>
                 <span>{t.quickReply}</span>
               </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-[#1e293b]/40 p-8 rounded-2xl border border-white/10 backdrop-blur-md shadow-2xl">
            <form onSubmit={handleWhatsApp} className="space-y-5">
              <div>
                <label className="text-slate-300 text-sm mb-2 block">
                  {t.nameLabel}
                </label>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.namePlaceholder}
                  className="w-full bg-[#0f172a] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-500 outline-none transition-all"
                />
              </div>

              <div>
                <label className="text-slate-300 text-sm mb-2 block">
                  {t.projectLabel}
                </label>
                <select
                  value={project}
                  onChange={(e) => setProject(e.target.value)}
                  className="w-full bg-[#0f172a] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-500 outline-none transition-all"
                >
                  {t.projects.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-[#25d366] hover:bg-[#128c7e] text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-3 shadow-lg shadow-green-900/20"
              >
                {t.button} <MessageCircle size={20} />
              </button>

              <p className="text-[10px] text-center text-slate-500 uppercase tracking-widest font-bold">
                {t.footer}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}