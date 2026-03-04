import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Layout from "@/components/Layout";
import approachImage from "@/assets/approach-image.jpg";

const AbordagemTerapeutica = () => {
  return (
    <Layout>
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <AnimatedSection>
            <div className="w-px h-12 bg-primary/40 mb-8" />
            <p className="text-sm font-sans tracking-[0.2em] uppercase text-primary mb-4">Abordagem Terapêutica</p>
            <h1 className="text-4xl md:text-5xl font-serif font-light text-foreground leading-tight mb-6">
              Uma abordagem que respeita<br />
              <span className="italic text-primary">quem você é.</span>
            </h1>
            <p className="text-muted-foreground leading-relaxed max-w-2xl">
              Meu trabalho é fundamentado na Psicologia Humanista, com influências da abordagem 
              centrada na pessoa de Carl Rogers e elementos da Terapia Cognitivo-Comportamental, 
              formando uma prática integrativa e personalizada.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-12">
              <AnimatedSection>
                <h2 className="text-2xl font-serif font-medium text-foreground mb-4">Linha Teórica</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A Psicologia Humanista compreende o ser humano como um todo — corpo, mente, emoções e 
                  espiritualidade. Parto do princípio de que cada pessoa possui em si a capacidade de 
                  crescimento e transformação, desde que encontre as condições adequadas para isso.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Na prática, isso significa que nosso trabalho juntos será pautado pela empatia, 
                  pela aceitação incondicional e pela autenticidade. Não ofereço respostas prontas — 
                  ofereço um espaço onde você pode encontrar as suas próprias respostas.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                <h2 className="text-2xl font-serif font-medium text-foreground mb-4">O Processo Terapêutico</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A terapia é um processo colaborativo. Juntos, vamos explorar seus pensamentos, 
                  sentimentos e comportamentos, identificando padrões que podem estar limitando 
                  seu bem-estar e sua realização pessoal.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  O ritmo do processo é respeitado integralmente. Não há pressão por resultados 
                  rápidos — há um compromisso genuíno com a profundidade e a autenticidade de cada 
                  sessão. A mudança acontece naturalmente quando você se permite estar presente.
                </p>
              </AnimatedSection>
            </div>

            <AnimatedSection delay={0.2}>
              <div className="sticky top-28">
                <img src={approachImage} alt="Ambiente terapêutico" className="w-full rounded-sm" />
                <div className="mt-8 p-8 bg-card border border-border/50 rounded-sm">
                  <h3 className="font-serif text-xl font-medium text-foreground mb-3">O que esperar das sessões</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      Um ambiente seguro e livre de julgamentos
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      Escuta empática e ativa durante toda a sessão
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      Reflexões e insights que promovem autoconhecimento
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      Técnicas adaptadas às suas necessidades específicas
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      Confidencialidade total, garantida pelo código de ética
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-serif font-light text-primary-foreground mb-4">
              Pronto para começar?
            </h2>
            <p className="text-primary-foreground/80 max-w-lg mx-auto mb-10">
              Agende sua primeira sessão e descubra como a psicoterapia pode transformar sua relação consigo mesmo.
            </p>
            <Link to="/contato" className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary-foreground text-primary font-sans text-sm rounded-sm hover:opacity-90 transition-opacity">
              Agendar Consulta <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default AbordagemTerapeutica;
