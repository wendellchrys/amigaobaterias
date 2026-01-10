"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Clock,
  Shield,
  Wrench,
  CreditCard,
  Truck,
  ThumbsUp,
  Headphones,
  Award,
} from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Entrega Rápida",
    description: "Receba sua bateria em até 2 horas na região metropolitana",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    icon: Shield,
    title: "Garantia Estendida",
    description: "Até 24 meses de garantia de fábrica em produtos selecionados",
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    icon: Wrench,
    title: "Instalação Gratuita",
    description:
      "Técnicos especializados instalam sua bateria sem custo adicional",
    color: "text-orange-600",
    bgColor: "bg-orange-100",
  },
  {
    icon: CreditCard,
    title: "Formas de Pagamento",
    description: "Parcele em até 12x sem juros ou ganhe desconto no PIX",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    icon: Truck,
    title: "Frete Grátis",
    description: "Entrega gratuita para compras acima de R$ 400",
    color: "text-red-600",
    bgColor: "bg-red-100",
  },
  {
    icon: ThumbsUp,
    title: "Produto Testado",
    description: "Todas as baterias são testadas antes da entrega",
    color: "text-cyan-600",
    bgColor: "bg-cyan-100",
  },
  {
    icon: Headphones,
    title: "Suporte 24/7",
    description: "Atendimento via WhatsApp para emergências",
    color: "text-pink-600",
    bgColor: "bg-pink-100",
  },
  {
    icon: Award,
    title: "Marcas Originais",
    description: "Trabalhamos apenas com distribuidores oficiais",
    color: "text-yellow-600",
    bgColor: "bg-yellow-100",
  },
];

export function BenefitsSection() {
  return (
    <div id="beneficios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center space-y-4">
          <Badge className="bg-blue-600 text-white text-xl lg:text-4xl py-2 px-4 hover:bg-blue-700">
            Por que escolher a Amigão Baterias?
          </Badge>
          <h2 className="text-lg lg:text-3xl text-gray-600 font-bold">
            Vantagens que fazem a diferença
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Mais de 10 anos de experiência oferecendo as melhores soluções em
            baterias automotivas para nossos clientes.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden bg-white border shadow-md transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <CardContent className="relative p-6 space-y-4">
                  <div
                    className={`inline-flex p-3 rounded-xl ${benefit.bgColor}`}
                  >
                    <Icon className={`h-6 w-6 ${benefit.color}`} />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg text-gray-900">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Hover effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform" />
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
