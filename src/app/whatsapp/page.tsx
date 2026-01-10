import { redirect } from "next/navigation";
import { siteConfig } from "@/lib/data";

export default function WhatsAppRedirect() {
  const message = encodeURIComponent(
    "Olá! Vim seu anúncio e gostaria de solicitar um orçamento"
  );

  redirect(`https://wa.me/${siteConfig.whatsapp}?text=${message}`);
}
