"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";

/* Traduções */
const translations = {
  pt: {
    title: "Projetos Estratégicos",
    subtitle:
      "Soluções de engenharia que unem inteligência artificial e alta performance.",
    view: "Ver Detalhes",
    projects: [
      {
        title: "DocIntelligence AI",
        description:
          "Análise inteligente de documentos PDF utilizando RAG e OpenAI para extração automática de dados.",
      },
      {
        title: "Predictive Dashboard",
        description:
          "Análise preditiva de faturamento e comportamento de estoque usando Machine Learning e integração SQL.",
      },
      {
        title: "SmartBot SaaS",
        description:
          "Plataforma de automação de atendimento via WhatsApp com processamento de linguagem natural.",
      },
    ],
  },
  en: {
    title: "Strategic Projects",
    subtitle:
      "Engineering solutions that combine artificial intelligence and high performance.",
    view: "View Details",
    projects: [
      {
        title: "DocIntelligence AI",
        description:
          "Intelligent PDF document analysis using RAG and OpenAI for automated data extraction.",
      },
      {
        title: "Predictive Dashboard",
        description:
          "Predictive revenue and inventory behavior analysis using Machine Learning and SQL integration.",
      },
      {
        title: "SmartBot SaaS",
        description:
          "Customer service automation platform via WhatsApp using natural language processing.",
      },
    ],
  },
};

/* Card */
function ProjectCard({ title, description, image, link, tags, viewLabel }) {
  return (
    <div className="group relative bg-[#1e293b]/40 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 flex flex-col h-full shadow-2xl">
      <div className="relative w-full aspect-video overflow-hidden border-b border-white/5 bg-slate-800">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          onError={(e) =>
            (e.currentTarget.src =
              "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800")
          }
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-60" />
      </div>

      <div className="p-5 md:p-6 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {title}
        </h3>

        <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
          {description}
        </p>

        <div className="mt-auto">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-500 text-white py-2.5 rounded-xl transition-all font-semibold text-sm shadow-lg shadow-blue-900/20"
          >
            {viewLabel} <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const [lang, setLang] = useState("pt");
  const t = translations[lang];

  const baseProjects = [
    {
      tags: ["AI", "Laravel", "Python"],
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800",
      link: "#",
    },
    {
      tags: ["React", "MySQL", "ML"],
      image:
        "https://images.unsplash.com/photo-1551288049-bbbda546697a?q=80&w=800",
      link: "#",
    },
    {
      tags: ["Node.js", "OpenAI", "SaaS"],
      image:
        "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=800",
      link: "#",
    },
  ];

  return (
    <section className="py-20 bg-[#0f172a]" id="projetos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
            {t.title.split(" ")[0]}{" "}
            <span className="text-blue-500">
              {t.title.split(" ").slice(1).join(" ")}
            </span>
          </h2>

          <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {baseProjects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              title={t.projects[index].title}
              description={t.projects[index].description}
              viewLabel={t.view}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
