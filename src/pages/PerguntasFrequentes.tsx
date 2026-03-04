import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import Layout from "@/components/Layout";

const faqs = [
  { q: "Nunca fiz terapia. Como é a primeira sessão?", a: "A primeira sessão é um momento de acolhimento. Vamos conversar sobre o que te trouxe até aqui, suas expectativas e como funciona o processo. Não há obrigação de continuar — é uma oportunidade para nos conhecermos e você decidir com calma." },
  { q: "Quanto tempo dura o processo terapêutico?", a: "Não existe um tempo definido. Cada processo é único. Algumas demandas podem ser trabalhadas em períodos mais curtos, enquanto outras pedem um acompanhamento mais longo. O importante é respeitar o seu ritmo." },
  { q: "Qual a diferença entre psicólogo e psiquiatra?", a: "O psicólogo trabalha com psicoterapia — o tratamento através da escuta, do diálogo e de técnicas terapêuticas. O psiquiatra é médico e pode prescrever medicamentos. Em muitos casos, o trabalho em conjunto é recomendado." },
  { q: "O atendimento online é tão eficaz quanto o presencial?", a: "Sim. Pesquisas científicas demonstram que a psicoterapia online é tão eficaz quanto a presencial para a maioria das demandas. O mais importante é a qualidade do vínculo terapêutico, que pode ser construído em ambas as modalidades." },
  { q: "Como funciona o sigilo profissional?", a: "O sigilo é um princípio ético fundamental. Tudo que você compartilha em sessão é protegido por lei e pelo Código de Ética do Psicólogo. Nenhuma informação é compartilhada sem a sua autorização expressa." },
  { q: "Atende por convênio?", a: "Atualmente trabalho com atendimento particular. Os valores são informados no primeiro contato. Entendo que o investimento em terapia é significativo e estou aberta a conversar sobre isso." },
  { q: "Posso cancelar ou remarcar uma sessão?", a: "Sim, desde que o cancelamento ou remarcação seja feito com pelo menos 24 horas de antecedência. Essa política existe para garantir a organização da agenda e o respeito ao tempo de todos." },
  { q: "A terapia de casal substitui a terapia individual?", a: "Não. São processos complementares. Na terapia de casal, o foco é a relação entre os parceiros. A terapia individual trabalha questões pessoais. Em alguns casos, é recomendável que ambos os processos aconteçam simultaneamente." },
];

const PerguntasFrequentes = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Layout>
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <AnimatedSection>
            <div className="w-px h-12 bg-primary/40 mb-8" />
            <p className="text-sm font-sans tracking-[0.2em] uppercase text-primary mb-4">FAQ</p>
            <h1 className="text-4xl md:text-5xl font-serif font-light text-foreground leading-tight">
              Perguntas <span className="italic text-primary">frequentes</span>
            </h1>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="border-b border-border/50">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full py-6 flex items-center justify-between text-left gap-4"
                  >
                    <span className="font-serif text-lg text-foreground">{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`text-primary shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PerguntasFrequentes;
