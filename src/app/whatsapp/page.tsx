'use client'

import { siteConfig } from "@/lib/data";
import { useEffect } from "react";

export default function WhatsAppRedirect() {
  const message = encodeURIComponent(
    "Olá! Vim através do site e gostaria de solicitar um orçamento para bateria."
  );

  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${message}`;

  useEffect(() => {
    window.location.replace(whatsappUrl);
  }, [whatsappUrl]);

  return (
    <html>
      <head>
        <meta httpEquiv="refresh" content={`0;url=${whatsappUrl}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.location.href="${whatsappUrl}";`,
          }}
        />
      </head>
      <body>
        <div style={{ display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f9fafb' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ animation: 'spin 1s linear infinite', borderRadius: '9999px', height: '48px', width: '48px', borderBottom: '2px solid #16a34a', margin: '0 auto 16px' }}></div>
            <p style={{ color: '#4b5563' }}>Redirecionando para o WhatsApp...</p>
            <a 
              href={whatsappUrl}
              style={{ marginTop: '16px', display: 'inline-block', color: '#16a34a', textDecoration: 'underline' }}
            >
              Clique aqui se não for redirecionado
            </a>
          </div>
        </div>
        <style dangerouslySetInnerHTML={{
          __html: `@keyframes spin { to { transform: rotate(360deg); } }`
        }} />
      </body>
    </html>
  );
}
