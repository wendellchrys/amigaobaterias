'use client'

import { useEffect } from 'react'
import { siteConfig } from '@/lib/data'

export default function WhatsAppRedirect() {
  useEffect(() => {
    const message = encodeURIComponent(
      'Olá! Vim através do site e gostaria de solicitar um orçamento para bateria.'
    )
    
    window.location.href = `https://wa.me/${siteConfig.whatsapp}?text=${message}`
  }, [])

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecionando para o WhatsApp...</p>
      </div>
    </div>
  )
}
