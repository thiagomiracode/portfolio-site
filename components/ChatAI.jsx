import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req) {
  const { messages } = await req.json();

  const systemMessage = {
    role: "system",
    content: `Você é o assistente inteligente do Thiago Mira. 
    Serviços: Desenvolvimento Web, Aplicativos Mobile, Consultoria em IA.
    Preços: Landing Pages a partir de R$ 2k, Sistemas complexos sob consulta.
    Tecnologias: React, Next.js, PHP (Laravel), Flutter, MySQL.
    Estilo: Profissional, prestativo e direto. 
    Se não souber algo, direcione para o WhatsApp: 5571991266746.`
  };

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini", // Mais barato e rápido
      messages: [systemMessage, ...messages],
    });

    return NextResponse.json({ content: response.choices[0].message.content });
  } catch (error) {
    return NextResponse.json({ error: "Erro na IA" }, { status: 500 });
  }
}