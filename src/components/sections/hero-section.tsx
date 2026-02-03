"use client";

import { Button } from "@/components/ui/button";
import { Truck, CreditCard, Star, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/data";

export function HeroSection() {
  return (
    <div
      id="inicio"
      className="relative overflow-hidden bg-[#001f3f] py-16 lg:py-24"
    >
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 lg:col-span-2">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
                A Entrega mais rápida da região,
                <br />
                em até <span className="text-yellow-400">30min</span> para
                Goiânia e Aparecida de Goiânia
              </h1>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-white">
                <Truck className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">
                    Entrega + Instalação{" "}
                    <span className="text-yellow-400">GRÁTIS</span> em Goiânia e
                    Região - GO
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-white">
                <CreditCard className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">
                    Pagamento em até{" "}
                    <span className="text-yellow-400">10X</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-white">
                <Star className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">
                    Loja com{" "}
                    <span className="text-yellow-400">NOTA MÁXIMA</span> no
                    Google
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-green-600 text-white hover:bg-green-700 shadow-lg font-bold"
                asChild
              >
                <Link
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Peça agora pelo Whatsapp
                </Link>
              </Button>
              <Button
                size="lg"
                className="bg-yellow-500 text-blue-900 hover:bg-yellow-400 shadow-lg font-bold"
                asChild
              >
                <Link
                  href={`tel:+${siteConfig.whatsapp}`}
                  className="flex items-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  Ligar Agora
                </Link>
              </Button>
            </div>
          </div>

          {/* Visual - Mobile Mockup */}
          <div className="relative lg:h-[600px] hidden lg:flex items-center justify-center">
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative w-[300px] h-[600px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Simulated phone content */}
                  <div className="h-full bg-gradient-to-b from-blue-600 to-blue-800 p-6 flex flex-col items-center justify-center text-center">
                    <div className="flex items-center mb-8">
                      <Image
                        src="/logo/logo-amigao-200.png"
                        alt="Amigão Baterias"
                        width={200}
                        height={200}
                        className="h-auto w-auto max-h-20"
                        priority
                      />
                    </div>
                    <h2 className="text-2xl font-bold text-yellow-400 mb-4">
                      Goiânia e Região
                    </h2>
                    <p className="text-white text-sm mb-6">
                      A loja mais recomendada em baterias da região!
                    </p>
                    <div className="w-full px-4">
                      <button className="w-full bg-white text-blue-900 py-3 px-6 rounded-full font-bold mb-4 border-2 border-blue-300">
                        Entrega Gratuita
                      </button>
                    </div>
                    {/* Brand logos placeholder */}
                    <div className="flex gap-2 mt-8 items-center justify-center flex-wrap">
                      <div className="bg-white px-3 py-2 rounded text-xs font-bold text-gray-800">
                        Moura
                      </div>
                      <div className="bg-yellow-400 px-3 py-2 rounded text-xs font-bold text-gray-800">
                        Heliar
                      </div>
                      <div className="bg-gray-800 px-3 py-2 rounded text-xs font-bold text-white">
                        Zetta
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
