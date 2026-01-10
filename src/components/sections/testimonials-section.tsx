"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Raul",
    content: "Recomendo! Top demais!",
    rating: 5,
    initials: "RA",
  },
  {
    name: "Christian",
    content: "Socorro muito rápido!",
    rating: 5,
    initials: "CH",
  },
  {
    name: "João Oliveira",
    content:
      "Já sou cliente há 3 anos. Sempre compro aqui pois sei que posso confiar na qualidade das baterias.",
    rating: 5,
    initials: "JO",
  },
];

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-20 bg-gray-200">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center space-y-4">
          <Badge className="bg-blue-600 text-white text-xl lg:text-4xl py-2 px-4 hover:bg-blue-700">
            Depoimentos
          </Badge>
          <h2 className="text-lg lg:text-3xl font-bold text-gray-600">
            O que nossos clientes dizem
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Centenas de clientes satisfeitos em toda a região
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-0 shadow-lg bg-blue-950 hover:shadow-xl transition-all"
            >
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="h-16 w-16 text-blue-600" />
              </div>

              <CardContent className="relative p-6 space-y-4">
                {/* Rating */}
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-200 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t">
                  <Avatar className="h-10 w-10 bg-gradient-to-br from-blue-500 to-blue-600">
                    <AvatarFallback className="text-white font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-gray-300">
                      {testimonial.name}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Google Reviews Badge */}
        <div className="mt-12 flex justify-center">
          <Card className="inline-flex items-center gap-4 p-6 border-2 border-yellow-200 bg-white shadow-lg">
            <div className="flex flex-col items-center gap-2">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-6 w-6 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-sm font-semibold text-gray-600">Google</p>
            </div>
            <div className="border-l pl-4">
              <p className="text-2xl font-bold text-gray-900">5.0</p>
              <p className="text-xs text-gray-500">Avaliação</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
