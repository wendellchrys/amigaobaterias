"use client";

import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/data";

export function CTASection() {
  return (
    <section id="contato" className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700" />

      {/* Animated circles */}
      <div className="absolute top-10 right-10 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl animate-pulse" />
      <div className="absolute bottom-10 left-10 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl animate-pulse delay-1000" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          {/* Heading */}
          <div className="space-y-4">
            <h2 className="text-2xl lg:text-4xl font-bold tracking-tight text-white">
              Ficou com alguma dúvida?
            </h2>
            <p className="text-lg text-blue-100 lg:text-xl">
              Nossa equipe está pronta para te ajudar a encontrar a bateria
              ideal para seu veículo. Entre em contato agora mesmo!
            </p>
          </div>

          {/* Contact Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              className="bg-green-500 text-white hover:bg-green-600 shadow-lg shadow-green-500/50 gap-2"
              asChild
            >
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp: {siteConfig.phone}
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm gap-2"
              asChild
            >
              <a href={`tel:+55${siteConfig.whatsapp}`}>
                <Phone className="h-5 w-5" />
                Ligar Agora
              </a>
            </Button>
          </div>

          {/* Additional Info */}
          <div className="grid gap-4 sm:grid-cols-3 text-white pt-8">
            <div className="space-y-1">
              <p className="text-sm text-blue-200">Horário de Funcionamento</p>
              <p className="font-semibold">Seg-Sex: 8h às 18h</p>
              <p className="text-sm text-blue-200">Sáb: 8h às 14h</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-blue-200">Atendimento Emergencial</p>
              <p className="font-semibold">24 horas por dia</p>
              <p className="text-sm text-blue-200">Todos os dias da semana</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-blue-200">Tempo de Resposta</p>
              <p className="font-semibold">Até 15 minutos</p>
              <p className="text-sm text-blue-200">Via WhatsApp</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
