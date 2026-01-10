"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { menuItems } from "@/lib/data";
import * as Icons from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full z-50 bg-[#000d1a] sticky top-0 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="min-h-20 flex gap-4 flex-row items-center justify-between">
          <Link href="/" className="flex items-center gap-4 hover:opacity-60">
            <Image
              src="/logo/logo-amigao-200.png"
              alt="Amigão Baterias"
              width={100}
              height={100}
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 flex-1">
            {menuItems.map(({ label, href, icon }) => {
              const IconComponent = Icons[
                icon as keyof typeof Icons
              ] as React.ComponentType<{ className?: string }>;
              return (
                <Button
                  key={href}
                  variant="ghost"
                  size="default"
                  className="rounded-full text-gray-50 hover:bg-blue-950 font-semibold text-base h-auto py-2 px-4"
                  asChild
                >
                  <Link href={href} className="flex items-center gap-2">
                    {IconComponent && <IconComponent className="w-4 h-4" />}
                    {label}
                  </Link>
                </Button>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              className="p-2"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="lg:hidden border-t bg-white z-50 pb-4">
            <nav className="flex flex-col space-y-2 pt-4">
              {menuItems.map(({ href, label }) => (
                <Button
                  key={href}
                  variant="ghost"
                  size="sm"
                  className="justify-start font-semibold"
                  asChild
                  onClick={() => setIsOpen(false)}
                >
                  <Link href={href}>{label}</Link>
                </Button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
