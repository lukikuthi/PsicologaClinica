import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Award, Heart } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Layout from "@/components/Layout";
import aboutPhoto from "@/assets/about-photo.jpg";

const SobreMim = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="space-y-6">
                <div className="w-px h-12 bg-primary/40" />
                <p className="text-sm font-sans tracking-[0.2em] uppercase text-primary">Sobre Mim</p>
                <h1 className="text-4xl md:text-5xl font-serif font-light text-foreground leading-tight">
                  Estela Duarte<br />
                  <span className="italic text-primary">Psicóloga Clínica</span>
                </h1>
                <p className="text-muted-foreground leading-relaxed">
                  Minha trajetória na psicologia começou muito antes da graduação. Sempre fui movida pela curiosidade 
                  sobre o comportamento humano, pela vontade de compreender o que nos faz ser quem somos e pelo 
                  desejo genuíno de ajudar pessoas a encontrarem equilíbrio emocional.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Graduada em Psicologia pela Universidade de São Paulo (USP), com especialização em Psicoterapia 
                  Humanista e formação complementar em Terapia Cognitivo-Comportamental. Ao longo dos anos, 
                  aprofundei meus estudos em abordagens integrativas, buscando oferecer a cada paciente um 
                  atendimento verdadeiramente personalizado.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative">
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-sage/30 rounded-sm" />
                <img src={aboutPhoto} alt="Estela Duarte" className="relative w-full aspect-[3/4] object-cover rounded-sm" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Formação */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <p className="text-sm font-sans tracking-[0.2em] uppercase text-primary mb-4">Formação</p>
            <h2 className="text-3xl font-serif font-light text-foreground mb-12">Minha jornada acadêmica</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: BookOpen, title: "Graduação em Psicologia", place: "Universidade de São Paulo (USP)", year: "2012" },
              { icon: Award, title: "Especialização em Psicoterapia Humanista", place: "Instituto de Psicologia Humanista — SP", year: "2015" },
              { icon: BookOpen, title: "Formação em Terapia Cognitivo-Comportamental", place: "Centro de Estudos em TCC — SP", year: "2017" },
              { icon: Award, title: "Formação em Terapia de Casais", place: "Instituto de Terapia Relacional — SP", year: "2020" },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="flex gap-4 p-6 bg-card border border-border/50 rounded-sm">
                  <item.icon size={22} className="text-primary shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-serif text-lg font-medium text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{item.place}</p>
                    <p className="text-xs text-primary mt-1">{item.year}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <p className="mt-8 text-sm text-muted-foreground">CRP 06/123456</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Valores */}
      <section className="py-24 bg-accent">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-sm font-sans tracking-[0.2em] uppercase text-primary mb-4">Valores</p>
              <h2 className="text-3xl font-serif font-light text-foreground">O que guia minha prática</h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Ética e sigilo", text: "A confiança é a base do processo terapêutico. Tudo que é compartilhado em sessão permanece protegido pelo sigilo profissional." },
              { title: "Respeito à singularidade", text: "Cada pessoa é única. Não existem fórmulas prontas — o processo terapêutico é construído respeitando seu tempo e sua história." },
              { title: "Acolhimento genuíno", text: "Ofereço um espaço livre de julgamentos, onde você pode ser vulnerável, questionar e se permitir sentir de verdade." },
            ].map((v, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="text-center p-8">
                  <Heart size={24} className="text-primary mx-auto mb-4" strokeWidth={1.5} />
                  <h3 className="font-serif text-xl font-medium text-foreground mb-3">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-serif font-light text-foreground mb-6">
              Vamos conversar?
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              Se você se identificou com minha abordagem, ficarei feliz em te acolher. 
              O primeiro passo é entrar em contato.
            </p>
            <Link to="/contato" className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-sans text-sm rounded-sm hover:opacity-90 transition-opacity">
              Entrar em Contato <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default SobreMim;
