import * as React from "react";
import { waLink } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="w-full border-t border-[var(--border)] bg-[var(--background)] py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2 flex flex-col gap-4">
          <span className="text-2xl font-bold tracking-tighter text-[var(--foreground)]">
            ABRAVELY
          </span>
          <p className="text-[var(--foreground-muted)] max-w-sm text-balance">
            Engenharia digital para operações B2B. Desenhamos, construímos e integramos plataformas que aceleram decisões industriais e de backoffice.
          </p>
          <div className="mt-4">
            <a
              href={waLink("Olá! Gostaria de entrar em contato com a Abravely.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-10 px-4 py-2 rounded-md text-sm font-medium border border-[var(--border-strong)] text-[var(--foreground-muted)] hover:bg-[var(--surface)] hover:text-[var(--foreground)] transition-all"
            >
              Entrar em Contato
            </a>
          </div>
        </div>
        
        <div className="flex flex-col gap-4">
          <h4 className="text-[var(--foreground)] font-semibold mb-2">Serviços</h4>
          <a href="#" className="text-[var(--foreground-muted)] hover:text-[var(--foreground)] text-sm transition-colors">Portais B2B</a>
          <a href="#" className="text-[var(--foreground-muted)] hover:text-[var(--foreground)] text-sm transition-colors">CRMs Customizados</a>
          <a href="#" className="text-[var(--foreground-muted)] hover:text-[var(--foreground)] text-sm transition-colors">Integração B2B (EDI/API)</a>
          <a href="#" className="text-[var(--foreground-muted)] hover:text-[var(--foreground)] text-sm transition-colors">Aplicações Internas</a>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-[var(--foreground)] font-semibold mb-2">Empresa</h4>
          <a href="#" className="text-[var(--foreground-muted)] hover:text-[var(--foreground)] text-sm transition-colors">Sobre Nós</a>
          <a href="#" className="text-[var(--foreground-muted)] hover:text-[var(--foreground)] text-sm transition-colors">Manifesto</a>
          <a href={waLink("Olá! Vim pelo site da Abravely e quero entrar em contato.")} target="_blank" rel="noopener noreferrer" className="text-[var(--foreground-muted)] hover:text-[var(--foreground)] text-sm transition-colors">Contato</a>
          <a href="#" className="text-[var(--foreground-muted)] hover:text-[var(--foreground)] text-sm transition-colors">Carreiras</a>
        </div>
      </div>
      
      <div className="container mx-auto px-6 max-w-7xl mt-16 pt-8 border-t border-[var(--border)] flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[var(--foreground-faint)] text-sm">
          &copy; {new Date().getFullYear()} Abravely. Todos os direitos reservados.
        </p>
        <div className="flex items-center gap-6">
          <a href="#" className="text-[var(--foreground-faint)] hover:text-[var(--foreground-muted)] text-sm transition-colors">Política de Privacidade</a>
          <a href="#" className="text-[var(--foreground-faint)] hover:text-[var(--foreground-muted)] text-sm transition-colors">Termos de Serviço</a>
        </div>
      </div>
    </footer>
  );
}
