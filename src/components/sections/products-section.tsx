"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Battery, Star, Zap, Clock, Shield } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Bateria Moura 60Ah",
    brand: "Moura",
    capacity: "60Ah",
    voltage: "12V",
    warranty: "18 meses",
    price: "R$ 450,00",
    features: ["Alta durabilidade", "Tecnologia prata", "Livre de manutenção"],
    popular: true,
    inStock: true,
  },
  {
    id: 2,
    name: "Bateria Heliar 70Ah",
    brand: "Heliar",
    capacity: "70Ah",
    voltage: "12V",
    warranty: "24 meses",
    price: "R$ 580,00",
    features: ["Super potência", "Start-stop ready", "Alta reserva"],
    popular: false,
    inStock: true,
  },
  {
    id: 3,
    name: "Bateria Tudor 50Ah",
    brand: "Tudor",
    capacity: "50Ah",
    voltage: "12V",
    warranty: "18 meses",
    price: "R$ 380,00",
    features: ["Econômica", "Boa performance", "Confiável"],
    popular: false,
    inStock: true,
  },
  {
    id: 4,
    name: "Bateria Moura 80Ah",
    brand: "Moura",
    capacity: "80Ah",
    voltage: "12V",
    warranty: "24 meses",
    price: "R$ 720,00",
    features: ["Alta capacidade", "Para veículos pesados", "Máxima potência"],
    popular: true,
    inStock: true,
  },
  {
    id: 5,
    name: "Bateria ACDelco 60Ah",
    brand: "ACDelco",
    capacity: "60Ah",
    voltage: "12V",
    warranty: "18 meses",
    price: "R$ 480,00",
    features: ["Qualidade GM", "Longa vida útil", "Selo Inmetro"],
    popular: false,
    inStock: true,
  },
  {
    id: 6,
    name: "Bateria Bosch 70Ah",
    brand: "Bosch",
    capacity: "70Ah",
    voltage: "12V",
    warranty: "24 meses",
    price: "R$ 650,00",
    features: ["Tecnologia alemã", "Alta performance", "Eco-friendly"],
    popular: false,
    inStock: false,
  },
];

export function ProductsSection() {
  return (
    <section id="produtos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-2">
        <div className="mb-12 text-center space-y-4">
          <Badge className="bg-blue-600 text-white text-4xl p-4 hover:bg-blue-700">
            Nossos Produtos
          </Badge>
          <h2 className="text-3xl font-bold text-gray-600">
            Baterias para Todos os Veículos
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Trabalhamos apenas com marcas líderes de mercado. Todas as baterias
            com garantia de fábrica e instalação gratuita.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card
              key={product.id}
              className={`relative overflow-hidden transition-all hover:shadow-xl ${
                product.popular ? "border-blue-600 border-2" : ""
              }`}
            >
              {product.popular && (
                <Badge className="absolute top-4 right-4 bg-yellow-500 text-blue-900 border-0">
                  <Star className="h-3 w-3 mr-1" />
                  Mais Vendido
                </Badge>
              )}

              {!product.inStock && (
                <Badge className="absolute top-4 right-4 bg-red-500 text-white border-0">
                  Sob Encomenda
                </Badge>
              )}

              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Battery className="h-8 w-8 text-blue-600" />
                  <span className="text-sm font-medium text-gray-600">
                    {product.brand}
                  </span>
                </div>
                <CardTitle className="text-xl">{product.name}</CardTitle>
                <CardDescription>
                  {product.capacity} • {product.voltage} • Garantia{" "}
                  {product.warranty}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-blue-600">
                    {product.price}
                  </span>
                  <span className="text-sm text-gray-500">à vista</span>
                </div>

                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <Zap className="h-4 w-4 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="grid grid-cols-2 gap-2 pt-4 border-t">
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <Clock className="h-4 w-4 text-blue-600" />
                    <span>Entrega rápida</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <Shield className="h-4 w-4 text-blue-600" />
                    <span>Instalação grátis</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex gap-2">
                <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                  Comprar Agora
                </Button>
                <Button variant="outline" className="flex-1">
                  Mais Detalhes
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Não encontrou o modelo ideal?</p>
          <Button size="lg" variant="outline">
            Ver Todos os Produtos
          </Button>
        </div>
      </div>
    </section>
  );
}
