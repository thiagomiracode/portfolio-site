import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ProjectsSection from "../components/ProjectsSection";
import Contact from "../components/Contact"; // Importando a nova seção de WhatsApp
import ChatAI from "../components/ChatAI";

export default function Home() {
  return (
    <main className="bg-[#0f172a] min-h-screen font-sans overflow-x-hidden relative">
      <Navbar />

      {/* 1. Introdução e Foto */}
      <Hero />

      {/* 2. Grid de Projetos (IA, SaaS, Dashboard) */}
      <ProjectsSection />

      {/* 3. Nova Seção: Contato Direto para o WhatsApp */}
      <Contact />

      <Footer />

      {/* 4. Chatbot IA flutuante */}
      <ChatAI />
    </main>
  );
}