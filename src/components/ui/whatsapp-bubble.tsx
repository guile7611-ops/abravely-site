"use client";

import { waLink } from "@/lib/whatsapp";

export function WhatsAppBubble() {
  const href = waLink("Olá! Vim pelo site da Abravely e gostaria de saber mais.");

  return (
    <>
      {/* Balão flutuante fixo */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar pelo WhatsApp"
        className="whatsapp-bubble group"
      >
        {/* Ícone WhatsApp SVG oficial */}
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7"
        >
          <path
            d="M24 4C12.954 4 4 12.954 4 24c0 3.68.997 7.13 2.737 10.09L4 44l10.19-2.676A19.916 19.916 0 0024 44c11.046 0 20-8.954 20-20S35.046 4 24 4z"
            fill="#25D366"
          />
          <path
            d="M34.65 29.27c-.46-.23-2.72-1.34-3.14-1.49-.42-.16-.73-.23-1.03.23-.3.46-1.18 1.49-1.44 1.8-.27.3-.54.34-1 .11-.46-.23-1.94-.71-3.7-2.27-1.37-1.22-2.29-2.72-2.56-3.18-.27-.46-.03-.7.2-.93.2-.2.46-.54.69-.8.23-.27.3-.46.46-.77.15-.3.08-.57-.04-.8-.12-.23-1.03-2.5-1.41-3.42-.37-.9-.75-.77-1.03-.79l-.87-.01c-.3 0-.8.11-1.22.57-.42.46-1.6 1.57-1.6 3.83 0 2.26 1.64 4.44 1.87 4.74.23.3 3.23 4.93 7.82 6.91 1.09.47 1.94.75 2.6.96.93.3 1.8.26 2.47.16.75-.11 2.32-.95 2.65-1.87.33-.92.33-1.7.23-1.87-.1-.16-.4-.27-.86-.5z"
            fill="#fff"
          />
        </svg>

        {/* Tooltip ao hover */}
        <span className="whatsapp-tooltip">
          Fale pelo WhatsApp
        </span>

        {/* Pulse ring */}
        <span className="whatsapp-pulse" aria-hidden />
      </a>

      <style>{`
        .whatsapp-bubble {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: #25D366;
          box-shadow: 0 4px 24px rgba(37,211,102,0.40), 0 2px 8px rgba(0,0,0,0.18);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          text-decoration: none;
        }
        .whatsapp-bubble:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 32px rgba(37,211,102,0.55), 0 2px 8px rgba(0,0,0,0.22);
        }

        /* Pulse ring */
        .whatsapp-pulse {
          position: absolute;
          inset: -3px;
          border-radius: 50%;
          border: 2px solid rgba(37,211,102,0.5);
          animation: wa-pulse 2.2s ease-out infinite;
          pointer-events: none;
        }
        @keyframes wa-pulse {
          0%   { opacity: 1; transform: scale(1); }
          80%  { opacity: 0; transform: scale(1.55); }
          100% { opacity: 0; transform: scale(1.55); }
        }

        /* Tooltip */
        .whatsapp-tooltip {
          position: absolute;
          right: calc(100% + 12px);
          white-space: nowrap;
          background: #1a1a1a;
          color: #fff;
          font-size: 13px;
          font-weight: 500;
          padding: 6px 12px;
          border-radius: 8px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.2);
          opacity: 0;
          pointer-events: none;
          transform: translateX(6px);
          transition: opacity 0.2s ease, transform 0.2s ease;
        }
        .whatsapp-tooltip::after {
          content: '';
          position: absolute;
          right: -6px;
          top: 50%;
          transform: translateY(-50%);
          border: 6px solid transparent;
          border-left-color: #1a1a1a;
          border-right: none;
        }
        .whatsapp-bubble:hover .whatsapp-tooltip {
          opacity: 1;
          transform: translateX(0);
        }

        /* Mobile: tooltip desativado, tamanho reduzido */
        @media (max-width: 640px) {
          .whatsapp-bubble {
            width: 52px;
            height: 52px;
            bottom: 20px;
            right: 20px;
          }
          .whatsapp-tooltip { display: none; }
        }
      `}</style>
    </>
  );
}
