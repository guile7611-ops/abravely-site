"use client";

import { useState, useEffect, useRef } from "react";

/**
 * Hook de typewriter estável.
 * Toda a máquina de estados roda em refs — o useEffect é montado UMA vez
 * e nunca cancela os timeouts de pausa por re-render.
 */
export function useTypewriter(
  phrases: string[],
  typingSpeed = 44,
  deletingSpeed = 18,
  pauseAfterType = 2800,
  pauseAfterDelete = 380
) {
  const [displayText, setDisplayText] = useState("");
  const [isBlinking, setIsBlinking] = useState(false); // cursor piscando = pausado

  // Estado do loop em refs (não causam re-render)
  const phraseIdx = useRef(0);
  const charIdx = useRef(0);
  const phase = useRef<"typing" | "deleting">("typing");
  const timer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    function tick() {
      const phrase = phrases[phraseIdx.current];

      if (phase.current === "typing") {
        if (charIdx.current < phrase.length) {
          charIdx.current += 1;
          setDisplayText(phrase.slice(0, charIdx.current));
          setIsBlinking(false); // sólido enquanto digita
          timer.current = setTimeout(tick, typingSpeed);
        } else {
          // Terminou de digitar → pausa (cursor pisca) → deleta
          setIsBlinking(true);
          timer.current = setTimeout(() => {
            setIsBlinking(false);
            phase.current = "deleting";
            tick();
          }, pauseAfterType);
        }
      } else {
        // deleting
        if (charIdx.current > 0) {
          charIdx.current -= 1;
          setDisplayText(phrase.slice(0, charIdx.current));
          timer.current = setTimeout(tick, deletingSpeed);
        } else {
          // Terminou de deletar → próxima frase
          phraseIdx.current = (phraseIdx.current + 1) % phrases.length;
          phase.current = "typing";
          timer.current = setTimeout(tick, pauseAfterDelete);
        }
      }
    }

    // Kick-off inicial
    timer.current = setTimeout(tick, 500);

    return () => clearTimeout(timer.current);
  }, []); // monta UMA vez — sem dependências

  return { displayText, isBlinking };
}
