"use client";

// 1. Importe o seu hook customizado
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  pt: {
    rights: "Todos os direitos reservados.",
    email: "Email",
  },
  en: {
    rights: "All rights reserved.",
    email: "Email",
  },
};

export default function Footer() {
  // 2. Substitua o useState pelo useLanguage
  const { lang } = useLanguage(); 
  const t = translations[lang];

  return (
    <footer className="bg-blue-900 text-white p-6 mt-12 text-center">
      <p className="text-sm">
        © 2026 Thiago dos Santos Mira — {t.rights}
      </p>

      <p className="mt-2 text-sm">
        <a
          href="mailto:thiagomiracode@gmail.com"
          className="underline hover:text-blue-300 transition-colors"
        >
          {t.email}
        </a>
        {" | "}
        <a
          href="https://github.com/thiagomiracode"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-300 transition-colors"
        >
          GitHub
        </a>
        {" | "}
        <a
          href="https://www.linkedin.com/in/thiago-mira-5b3006187/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-300 transition-colors"
        >
          LinkedIn
        </a>
      </p>
    </footer>
  );
}