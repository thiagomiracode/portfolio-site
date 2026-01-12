"use client";

import { useState } from "react";
import { Github, Linkedin, FileDown, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

/* Traduções */
const translations = {
  pt: {
    role: "Analista de Sistemas | PHP, React, Flutter, MySQL | Tech Lead",
    tagline: "Apaixonado por tecnologia e inovação.",
    download: "Download CV",
    selectLang: "Selecione o idioma do currículo",
    portuguese: "Currículo em Português",
    english: "Resume in English",
    cvLink: "/curriculo-pt.pdf" // Nome do seu arquivo na pasta public
  },
  en: {
    role: "Systems Analyst | PHP, React, Flutter, MySQL | Tech Lead",
    tagline: "Passionate about technology and innovation.",
    download: "Download CV",
    selectLang: "Select resume language",
    portuguese: "Portuguese Resume",
    english: "English Resume",
    cvLink: "/curriculo-en.pdf" // Nome do seu arquivo na pasta public
  },
};

export default function Hero() {
  const [openModal, setOpenModal] = useState(false);
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section className="relative bg-gradient-to-r from-[#1a2638] to-[#2b3a52] pt-24 overflow-hidden border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-end">

        {/* Foto */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img
            src="/profile.png"
            alt="Thiago Mira"
            className="w-[280px] md:w-[420px] h-auto object-contain drop-shadow-2xl"
          />
        </div>

        {/* Conteúdo */}
        <div className="w-full md:w-1/2 pb-16 text-center md:text-left text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">
            Thiago dos Santos Mira
          </h1>

          <p className="text-lg text-slate-300 mb-2 font-light">
            {t.role}
          </p>

          <p className="text-sm text-slate-400 mb-8 italic">
            {t.tagline}
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            <a
              href="https://github.com/thiagomiracode"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2b4480]/50 hover:bg-[#2b4480] border border-white/10 px-5 py-2 rounded-lg flex items-center gap-2"
            >
              <Github size={20} /> GitHub
            </a>

            <a
              href="https://linkedin.com/in/thiago-mira-050a993a4"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2b4480]/50 hover:bg-[#2b4480] border border-white/10 px-5 py-2 rounded-lg flex items-center gap-2"
            >
              <Linkedin size={20} /> LinkedIn
            </a>

            {/* Botão que abre o Modal */}
            <button
              onClick={() => setOpenModal(true)}
              className="bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-lg flex items-center gap-2 font-bold shadow-lg shadow-blue-500/20"
            >
              <FileDown size={20} />
              {t.download}
            </button>
          </div>
        </div>
      </div>

      {/* MODAL DE IDIOMA */}
      {openModal && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
          onClick={() => setOpenModal(false)}
        >
          <div
            className="bg-white rounded-xl w-full max-w-xs p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-gray-900 text-lg">
                {t.selectLang}
              </h3>
              <button 
                onClick={() => setOpenModal(false)}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="text-gray-500" />
              </button>
            </div>

            <div className="flex flex-col gap-3">
              {/* Opção Português - Usando tag <a> para abrir nova guia */}
              <a
                href="/curriculo-pt.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpenModal(false)}
                className="flex items-center gap-4 px-4 py-3 rounded-xl border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all text-gray-700 font-medium"
              >
                <img src="/flags/br.svg" alt="BR" className="w-6 h-4 rounded-sm shadow-sm" />
                {t.portuguese}
              </a>

              {/* Opção Inglês - Usando tag <a> para abrir nova guia */}
              <a
                href="/curriculo-en.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpenModal(false)}
                className="flex items-center gap-4 px-4 py-3 rounded-xl border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all text-gray-700 font-medium"
              >
                <img src="/flags/us.svg" alt="US" className="w-6 h-4 rounded-sm shadow-sm" />
                {t.english}
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}