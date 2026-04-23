/** Número do WhatsApp da Abravely — inclui código do país */
export const WA_PHONE = "5519981896312";

/** Gera a URL do WhatsApp com mensagem opcional */
export function waLink(message = "Olá! Gostaria de saber mais sobre os serviços da Abravely.") {
  return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(message)}`;
}

/** URL padrão sem mensagem personalizada */
export const WA_URL = waLink();
