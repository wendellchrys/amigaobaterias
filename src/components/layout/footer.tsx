import { siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-gray-600">
          © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
