"use client";

import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

export default function Navbar() {
const { lang, setLang } = useLanguage();
  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-[#0f172a]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">

        {/* Logo */}
        <div className="font-bold text-lg tracking-tight text-white">
          Thiago<span className="text-blue-500">Mira</span>
        </div>

        {/* Menu + Idioma */}
        <div className="flex items-center space-x-8">

          <Link
            href="/"
            className="text-sm font-medium text-white hover:text-blue-400 transition-all"
          >
            {lang === "pt" ? "Home" : "Home"}
          </Link>

          <Link
            href="#projetos"
            className="text-sm font-medium text-slate-300 hover:text-white transition-all"
          >
            {lang === "pt" ? "Portfólio" : "Portfolio"}
          </Link>

          <Link
            href="#contato"
            className="text-sm font-medium text-slate-300 hover:text-white transition-all"
          >
            {lang === "pt" ? "Contato" : "Contact"}
          </Link>

          {/* Seletor de Idioma */}
          <div className="flex items-center gap-3 pl-4 border-l border-white/10">

            <button
              onClick={() => setLang("pt")}
              className={`transition-all ${
                lang === "pt" ? "opacity-100 scale-110" : "opacity-60 hover:opacity-100"
              }`}
              title="Português"
            >
              <img
                src="/flags/br.svg"
                alt="Português"
                className="w-6 h-4 rounded-sm"
              />
            </button>

            <button
              onClick={() => setLang("en")}
              className={`transition-all ${
                lang === "en" ? "opacity-100 scale-110" : "opacity-60 hover:opacity-100"
              }`}
              title="English"
            >
              <img
                src="/flags/us.svg"
                alt="English"
                className="w-6 h-4 rounded-sm"
              />
            </button>

          </div>
        </div>
      </div>
    </nav>
  );
}
