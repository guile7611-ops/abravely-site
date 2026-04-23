"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { ChevronRight, ChevronLeft, Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";

export function BottleneckForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    teamSize: "",
    mainService: "",
    biggestBottleneck: "",
    currentSystem: "",
    attemptedSolutions: "",
    idealScenario: "",
  });

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 11) value = value.slice(0, 11);
    
    if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    }
    if (value.length > 9) {
      value = `${value.slice(0, 10)}-${value.slice(10)}`;
    }
    
    updateField("phone", value);
  };

  const nextStep = () => {
    if (step === 1) {
      if (!formData.name || !formData.email || !formData.company) {
        setError("Por favor, preencha os campos obrigatórios (Nome, E-mail e Empresa).");
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setError("Por favor, insira um e-mail válido.");
        return;
      }
      if (formData.phone && formData.phone.replace(/\D/g, "").length < 10) {
        setError("Por favor, insira um telefone válido com DDD.");
        return;
      }
    }
    if (step === 2 && (!formData.industry || !formData.teamSize || !formData.mainService)) {
      setError("Por favor, preencha todos os campos desta etapa.");
      return;
    }
    setError(null);
    setStep((s) => Math.min(s + 1, 3));
  };

  const prevStep = () => {
    setError(null);
    setStep((s) => Math.max(s - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.biggestBottleneck || !formData.idealScenario) {
      setError("Por favor, descreva seu gargalo e o cenário ideal.");
      return;
    }

    setError(null);
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/gargalos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Erro ao enviar formulário. Tente novamente mais tarde.");
      
      setIsSuccess(true);
    } catch (err: any) {
      setError(err.message || "Ocorreu um erro inesperado. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full bg-[var(--surface-2)] border border-[var(--border)] rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors text-[var(--foreground)] placeholder:text-[var(--foreground-muted)]";
  const labelClasses = "block text-sm font-medium text-[var(--foreground-muted)] mb-1.5";

  if (isSuccess) {
    return (
      <GlassCard className="w-full max-w-2xl mx-auto p-12 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary">
            <CheckCircle2 className="w-8 h-8" />
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-4 text-[var(--foreground)]">Diagnóstico Recebido!</h3>
        <p className="text-[var(--foreground-muted)] mb-8">
          Agradecemos por compartilhar seus desafios conosco. Nossa equipe vai analisar seu cenário e entrará em contato em breve com os próximos passos.
        </p>
        <Button onClick={() => window.location.href = "/"} variant="outline" className="h-11 px-8">
          Voltar para a Home
        </Button>
      </GlassCard>
    );
  }

  return (
    <GlassCard className="w-full max-w-2xl mx-auto overflow-hidden relative">
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-[var(--border)]">
        <div 
          className="h-full bg-primary transition-all duration-500 ease-in-out"
          style={{ width: `${(step / 3) * 100}%` }}
        />
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">
          {step === 1 && "Passo 1: Seus Dados"}
          {step === 2 && "Passo 2: Sobre a Empresa"}
          {step === 3 && "Passo 3: Seus Gargalos"}
        </h3>
        <p className="text-sm text-[var(--foreground-muted)]">
          {step === 1 && "Como podemos falar com você?"}
          {step === 2 && "Qual é o contexto do seu negócio hoje?"}
          {step === 3 && "Onde estão os maiores bloqueios de crescimento?"}
        </p>
      </div>

      {error && (
        <div className="mb-6 p-4 rounded-md bg-red-500/10 border border-red-500/20 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
          <p className="text-sm text-red-500">{error}</p>
        </div>
      )}

      <form onSubmit={step === 3 ? handleSubmit : (e) => e.preventDefault()}>
        <div className="min-h-[320px]">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-5"
              >
                <div>
                  <label className={labelClasses}>Nome Completo *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    className={inputClasses}
                    placeholder="João da Silva"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClasses}>E-mail *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      className={inputClasses}
                      placeholder="joao@empresa.com"
                    />
                  </div>
                  <div>
                    <label className={labelClasses}>WhatsApp</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      className={inputClasses}
                      placeholder="(11) 99999-9999"
                      maxLength={15}
                    />
                  </div>
                </div>
                <div>
                  <label className={labelClasses}>Nome da Empresa *</label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => updateField("company", e.target.value)}
                    className={inputClasses}
                    placeholder="Minha Empresa LTDA"
                  />
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-5"
              >
                <div>
                  <label className={labelClasses}>Segmento / Mercado *</label>
                  <input
                    type="text"
                    value={formData.industry}
                    onChange={(e) => updateField("industry", e.target.value)}
                    className={inputClasses}
                    placeholder="Ex: Tecnologia, Varejo, Saúde..."
                  />
                </div>
                <div>
                  <label className={labelClasses}>Tamanho da Equipe *</label>
                  <select
                    value={formData.teamSize}
                    onChange={(e) => updateField("teamSize", e.target.value)}
                    className={inputClasses}
                  >
                    <option value="" disabled className="bg-zinc-900 text-white">Selecione uma opção</option>
                    <option value="1-5" className="bg-zinc-900 text-white">1 a 5 pessoas</option>
                    <option value="6-20" className="bg-zinc-900 text-white">6 a 20 pessoas</option>
                    <option value="21-50" className="bg-zinc-900 text-white">21 a 50 pessoas</option>
                    <option value="50+" className="bg-zinc-900 text-white">Mais de 50 pessoas</option>
                  </select>
                </div>
                <div>
                  <label className={labelClasses}>Principal Serviço ou Produto *</label>
                  <input
                    type="text"
                    value={formData.mainService}
                    onChange={(e) => updateField("mainService", e.target.value)}
                    className={inputClasses}
                    placeholder="O que vocês mais vendem hoje?"
                  />
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-5"
              >
                <div>
                  <label className={labelClasses}>Qual é o principal problema que você enfrenta hoje? *</label>
                  <textarea
                    required
                    value={formData.biggestBottleneck}
                    onChange={(e) => updateField("biggestBottleneck", e.target.value)}
                    className={`${inputClasses} min-h-[100px] resize-y`}
                    placeholder="Descreva o que está impedindo sua empresa de crescer mais rápido..."
                  />
                </div>
                <div>
                  <label className={labelClasses}>Você usa algum sistema atualmente? Qual?</label>
                  <textarea
                    value={formData.currentSystem}
                    onChange={(e) => updateField("currentSystem", e.target.value)}
                    className={`${inputClasses} min-h-[80px] resize-y`}
                    placeholder="Ex: Planilhas, Trello, ERP próprio..."
                  />
                </div>
                <div>
                  <label className={labelClasses}>O que você já tentou fazer para resolver?</label>
                  <textarea
                    value={formData.attemptedSolutions}
                    onChange={(e) => updateField("attemptedSolutions", e.target.value)}
                    className={`${inputClasses} min-h-[80px] resize-y`}
                    placeholder="Ferramentas, consultorias, mudanças internas..."
                  />
                </div>
                <div>
                  <label className={labelClasses}>Qual seria o cenário ideal para você? *</label>
                  <textarea
                    required
                    value={formData.idealScenario}
                    onChange={(e) => updateField("idealScenario", e.target.value)}
                    className={`${inputClasses} min-h-[80px] resize-y`}
                    placeholder="Onde você quer chegar resolvendo esse problema?"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-between mt-10 pt-6 border-t border-[var(--border)]">
          {step > 1 ? (
            <Button
              type="button"
              variant="outline"
              onClick={prevStep}
              className="h-11 px-6 bg-[var(--surface)] hover:bg-[var(--surface-2)] text-[var(--foreground)]"
            >
              <ChevronLeft className="w-4 h-4 mr-2" /> Voltar
            </Button>
          ) : (
            <div></div> // Spacer to keep Next button aligned right
          )}

          {step < 3 ? (
            <Button
              type="button"
              onClick={nextStep}
              className="h-11 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              Próximo Passo <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button
              type="submit"
              disabled={isSubmitting}
              className="h-11 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-[var(--accent-brand-shadow)]"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Enviando...
                </>
              ) : (
                <>
                  Enviar Diagnóstico <Send className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          )}
        </div>
      </form>
    </GlassCard>
  );
}
