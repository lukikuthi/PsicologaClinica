import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, Monitor, Lock, Shield } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Layout from "@/components/Layout";

const ComoFunciona = () => {
  const steps = [
    {
      number: "01",
      icon: Calendar,
      title: "Primeira Sessão",
      text: "A primeira sessão é um momento de acolhimento e escuta. Vamos nos conhecer, entender suas necessidades e expectativas. Não há pressão — é um espaço para você se sentir à vontade e decidir se deseja iniciar o processo terapêutico. Geralmente, essa sessão tem duração de 50 minutos.",
    },
    {
      number: "02",
      icon: Clock,
      title: "Frequência das Sessões",
      text: "A frequência ideal é semanal, especialmente no início do processo. Com o tempo, podemos avaliar juntos se faz sentido espaçar as sessões. O importante é manter uma regularidade que permita aprofundamento e continuidade no trabalho terapêutico.",
    },
    {
      number: "03",
      icon: Monitor,
      title: "Online e Presencial",
      text: "Ofereço atendimento presencial no consultório em São Paulo e online por videochamada. As sessões online seguem os mesmos princípios éticos e terapêuticos, com a mesma qualidade e profundidade. A escolha da modalidade depende da sua rotina e preferência.",
    },
    {
      number: "04",
      icon: Lock,
      title: "Confidencialidade",
      text: "Tudo o que é compartilhado em sessão é protegido pelo sigilo profissional, conforme o Código de Ética do Conselho Federal de Psicologia. Você pode se sentir seguro(a) para se abrir. O consultório — físico ou virtual — é um espaço protegido.",
    },
    {
      number: "05",
      icon: Shield,
      title: "Ética Profissional",
      text: "Minha prática é regida pelo Código de Ética Profissional do Psicólogo e pelas resoluções do Conselho Federal de Psicologia. Atuo com responsabilidade, respeito e compromisso com o bem-estar de cada paciente, garantindo um atendimento humano e profissional.",
    },
  ];

  return (
    <Layout>
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <AnimatedSection>
            <div className="w-px h-12 bg-primary/40 mb-8" />
            <p className="text-sm font-sans tracking-[0.2em] uppercase text-primary mb-4">Como Funciona</p>
            <h1 className="text-4xl md:text-5xl font-serif font-light text-foreground leading-tight mb-6">
              Transparência em<br />
              <span className="italic text-primary">cada etapa.</span>
            </h1>
            <p className="text-muted-foreground leading-relaxed max-w-2xl">
              Entenda como funciona o processo terapêutico, da primeira consulta ao acompanhamento contínuo.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <div className="space-y-16">
            {steps.map((step, i) => (
              <AnimatedSection key={i} delay={0.05}>
                <div className="flex gap-8">
                  <div className="shrink-0">
                    <span className="text-3xl font-serif text-primary/30 font-light">{step.number}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <step.icon size={20} className="text-primary" strokeWidth={1.5} />
                      <h2 className="text-xl font-serif font-medium text-foreground">{step.title}</h2>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{step.text}</p>
                  </div>
                </div>
                {i < steps.length - 1 && <div className="border-b border-border/30 mt-16 ml-16" />}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-accent">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-serif font-light text-foreground mb-4">
              Tem alguma dúvida?
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              Confira as perguntas frequentes ou entre em contato diretamente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/faq" className="px-8 py-3.5 bg-primary text-primary-foreground font-sans text-sm rounded-sm hover:opacity-90 transition-opacity">
                Perguntas Frequentes
              </Link>
              <Link to="/contato" className="inline-flex items-center gap-2 px-8 py-3.5 border border-primary/30 text-foreground font-sans text-sm rounded-sm hover:bg-primary/5 transition-colors">
                Entrar em Contato <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default ComoFunciona;
