"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { FormEvent } from "react";
import { useMemo, useState } from "react";
import { siteConfig } from "@/src/config/site";
import styles from "@/src/features/home/portfolio-page.module.css";
import { useSupportsHover } from "@/src/lib/use-supports-hover";

type ContactValues = {
  name: string;
  email: string;
  phone: string;
  project: string;
};

type ContactErrors = Partial<Record<keyof ContactValues, string>>;

const initialValues: ContactValues = {
  name: "",
  email: "",
  phone: "",
  project: "",
};

function validate(values: ContactValues) {
  const errors: ContactErrors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Digite seu nome.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Digite um e-mail válido.";
  }

  if (values.phone.trim() && values.phone.trim().replace(/\D/g, "").length < 8) {
    errors.phone = "Digite um telefone válido ou deixe em branco.";
  }

  if (values.project.trim().length < 20) {
    errors.project = "Descreva o projeto com um pouco mais de detalhe.";
  }

  return errors;
}

export function ContactForm() {
  const supportsHover = useSupportsHover();
  const [values, setValues] = useState<ContactValues>(initialValues);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [mailtoHref, setMailtoHref] = useState("");

  const canSend = useMemo(() => Object.keys(validate(values)).length === 0, [values]);

  const updateField = (field: keyof ContactValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setSubmitted(false);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSending(true);

    const subject = `Projeto para ${values.name.trim()}`;
    const body = [
      `Nome: ${values.name.trim()}`,
      `E-mail: ${values.email.trim()}`,
      `Telefone: ${values.phone.trim() || "não informado"}`,
      "",
      values.project.trim(),
    ].join("\n");

    setMailtoHref(`mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
    window.setTimeout(() => {
      setIsSending(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className={styles.contactLayout}>
      <div className={styles.contactCopy}>
        <p className={styles.sectionKicker}>Contato</p>
        <h2>Vamos tirar seu próximo produto do papel com foco em resultado real.</h2>
        <p className={styles.sectionLead}>
          Formulário com validação em tempo real, animação de sucesso e envio via e-mail sem backend.
        </p>
        <ul className={styles.contactPoints}>
          <li>Resposta direta para produtos digitais, sistemas e integrações.</li>
          <li>Foco em escopo, risco e decisão técnica antes de qualquer execução.</li>
          <li>Fluxo simples para abrir conversa sem perder a camada premium da experiência.</li>
        </ul>
      </div>

      <motion.form className={styles.contactForm} onSubmit={handleSubmit} noValidate>
        <div className={styles.fieldGrid}>
          <label className={styles.field}>
            <span>Nome</span>
            <input
              type="text"
              value={values.name}
              onChange={(event) => updateField("name", event.target.value)}
              onBlur={() => setErrors((current) => ({ ...current, ...validate(values) }))}
              placeholder="Seu nome"
            />
            {errors.name ? <small>{errors.name}</small> : null}
          </label>

          <label className={styles.field}>
            <span>E-mail</span>
            <input
              type="email"
              value={values.email}
              onChange={(event) => updateField("email", event.target.value)}
              onBlur={() => setErrors((current) => ({ ...current, ...validate(values) }))}
              placeholder="voce@empresa.com"
            />
            {errors.email ? <small>{errors.email}</small> : null}
          </label>

          <label className={styles.field}>
            <span>Telefone</span>
            <input
              type="tel"
              value={values.phone}
              onChange={(event) => updateField("phone", event.target.value)}
              onBlur={() => setErrors((current) => ({ ...current, ...validate(values) }))}
              placeholder="(00) 00000-0000"
            />
            {errors.phone ? <small>{errors.phone}</small> : null}
          </label>
        </div>

        <label className={styles.field}>
          <span>Projeto</span>
          <textarea
            rows={6}
            value={values.project}
            onChange={(event) => updateField("project", event.target.value)}
            onBlur={() => setErrors((current) => ({ ...current, ...validate(values) }))}
            placeholder="Conte o objetivo, prazo e tipo de entrega que você tem em mente."
          />
          {errors.project ? <small>{errors.project}</small> : null}
        </label>

        <div className={styles.contactActions}>
          <motion.button
            type="submit"
            className={styles.primaryButton}
            whileHover={canSend && supportsHover ? { scale: 1.03 } : undefined}
            whileTap={canSend ? { scale: 0.98 } : undefined}
            disabled={!canSend || isSending}
          >
            {isSending ? "Preparando envio..." : "Solicitar orçamento"}
          </motion.button>
          <span className={styles.contactHint}>Ou escreva diretamente para {siteConfig.contactEmail}</span>
        </div>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              className={styles.successState}
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8 }}
            >
              <div>Mensagem preparada com sucesso. O próximo passo é abrir seu cliente de e-mail.</div>
              <a className={styles.secondaryButton} href={mailtoHref || `mailto:${siteConfig.contactEmail}`}>
                Abrir e-mail
              </a>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.form>
    </div>
  );
}
