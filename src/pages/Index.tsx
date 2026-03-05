import { Link } from "react-router-dom";
import { ArrowRight, Heart, Shield, Sparkles, MessageCircle, Brain, Users, Award } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-image.jpg";
import aboutPhoto from "@/assets/about-photo.jpg";

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Organic shape background */}
        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
          <div className="absolute inset-0 bg-sage/40 rounded-bl-[120px]" />
          <img
            src={heroImage}
            alt="Espaço terapêutico acolhedor"
            className="absolute inset-0 w-full h-full object-cover rounded-bl-[120px] mix-blend-multiply opacity-60"
          />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-20">
          <div className="max-w-xl">
            {/* Vertical decorative line */}
            <div className="w-px h-16 bg-primary/40 mb-8" />

            <AnimatedSection>
              <p className="text-sm font-sans tracking-[0.2em] uppercase text-primary mb-6">
                Estela Duarte — Psicóloga Clínica
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light leading-[1.15] text-foreground mb-6">
                Um espaço seguro<br />
                para você se<br />
                <span className="italic text-primary">reconectar consigo.</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-base md:text-lg font-sans text-muted-foreground leading-relaxed mb-10 max-w-md">
                Psicoterapia humanizada, com escuta profunda e acolhimento genuíno. 
                Juntos, vamos construir um caminho de autoconhecimento e bem-estar emocional.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contato"
                  className="px-8 py-3.5 bg-primary text-primary-foreground font-sans text-sm tracking-wide rounded-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  Agendar Consulta <ArrowRight size={16} />
                </Link>
                <Link
                  to="/abordagem"
                  className="px-8 py-3.5 border border-primary/30 text-foreground font-sans text-sm tracking-wide rounded-sm hover:bg-primary/5 transition-colors text-center"
                >
                  Conheça Meu Trabalho
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Mobile hero image */}
        <div className="absolute bottom-0 right-0 w-full h-48 lg:hidden z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          <img src={heroImage} alt="" className="w-full h-full object-cover opacity-30" />
        </div>
      </section>

      {/* Para Quem é a Terapia */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="max-w-2xl">
              <p className="text-sm font-sans tracking-[0.2em] uppercase text-primary mb-4">Para quem é</p>
              <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground mb-6">
                A terapia é para quem deseja<br />
                <span className="italic">se conhecer mais profundamente.</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: Heart,
                title: "Quem busca acolhimento",
                text: "Para quem sente que precisa de um espaço seguro, livre de julgamentos, para expressar suas emoções e ser ouvido de verdade.",
              },
              {
                icon: Brain,
                title: "Quem quer se entender",
                text: "Para quem deseja compreender seus padrões emocionais, seus comportamentos e encontrar formas mais saudáveis de lidar com a vida.",
              },
              {
                icon: Sparkles,
                title: "Quem busca transformação",
                text: "Para quem está pronto para um processo de mudança genuína, construindo uma relação mais autêntica consigo e com o mundo.",
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="p-8 bg-background rounded-sm border border-border/50 h-full">
                  <item.icon size={24} className="text-primary mb-5" strokeWidth={1.5} />
                  <h3 className="text-xl font-serif font-medium text-foreground mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre resumo */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full bg-sage/30 rounded-sm" />
                <img
                  src={aboutPhoto}
                  alt="Estela Duarte - Psicóloga"
                  className="relative w-full max-w-md aspect-[3/4] object-cover rounded-sm"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                <p className="text-sm font-sans tracking-[0.2em] uppercase text-primary">Sobre mim</p>
                <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground leading-tight">
                  Acredito no poder da<br />
                  <span className="italic">escuta genuína.</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Sou Estela Duarte, psicóloga clínica com formação humanista e experiência em atendimento 
                  individual e de casais. Meu trabalho é pautado na ética, no respeito à singularidade de cada 
                  pessoa e na construção de um vínculo terapêutico seguro e acolhedor.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Com anos de experiência clínica, desenvolvi uma abordagem integrativa que combina 
                  profundidade teórica com sensibilidade prática, sempre respeitando o tempo e o ritmo de cada paciente.
                </p>
                <Link
                  to="/sobre"
                  className="inline-flex items-center gap-2 text-sm font-sans text-primary hover:gap-3 transition-all"
                >
                  Conheça minha trajetória <ArrowRight size={14} />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-24 bg-accent">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-sm font-sans tracking-[0.2em] uppercase text-primary mb-4">Diferenciais</p>
              <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground">
                Por que escolher este espaço?
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "Sigilo absoluto", text: "Total confidencialidade em um ambiente protegido e ético." },
              { icon: Heart, title: "Escuta empática", text: "Acolhimento genuíno, sem julgamentos, respeitando sua história." },
              { icon: MessageCircle, title: "Atendimento flexível", text: "Sessões presenciais ou online, adaptadas à sua rotina." },
              { icon: Users, title: "Abordagem integrativa", text: "Técnicas personalizadas para cada pessoa e momento de vida." },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="text-center p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon size={20} className="text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-serif font-medium text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Certificados */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <Award size={32} className="text-primary mx-auto mb-6" strokeWidth={1.5} />
              <p className="text-sm font-sans tracking-[0.2em] uppercase text-primary mb-4">Certificado</p>
              <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground mb-6">
                Projeto desenvolvido por<br />
                <span className="italic text-primary">Lucas Kikuthi</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Este projeto foi inteiramente desenvolvido por Lucas Kikuthi como demonstração de
                habilidades em design, desenvolvimento front-end e experiência do usuário. Todos os
                direitos reservados.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://github.com/lukikuthi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 border border-primary/30 text-foreground font-sans text-sm rounded-sm hover:bg-primary/5 transition-colors inline-flex items-center justify-center gap-2"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/lucaskikuthi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 border border-primary/30 text-foreground font-sans text-sm rounded-sm hover:bg-primary/5 transition-colors inline-flex items-center justify-center gap-2"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <p className="text-sm font-sans tracking-[0.2em] uppercase text-primary mb-4">Depoimentos</p>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground mb-12">
              Palavras de quem viveu o processo.
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "A terapia com a Estela mudou minha relação comigo mesma. Me sinto mais presente, mais leve e mais capaz de lidar com os desafios do dia a dia.",
                name: "M. S.",
                detail: "Paciente há 2 anos",
              },
              {
                text: "Encontrei um espaço de verdadeiro acolhimento. A Estela tem uma sensibilidade rara e uma capacidade incrível de me ajudar a enxergar o que eu não conseguia sozinha.",
                name: "C. R.",
                detail: "Paciente há 1 ano",
              },
              {
                text: "A terapia de casal nos ajudou a nos reconectar. Aprendemos a nos comunicar de uma forma mais saudável e a fortalecer nosso vínculo.",
                name: "A. & P.",
                detail: "Terapia de casal",
              },
            ].map((dep, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="p-8 bg-card border border-border/50 rounded-sm h-full flex flex-col">
                  <p className="text-muted-foreground leading-relaxed italic flex-1 text-sm">
                    "{dep.text}"
                  </p>
                  <div className="mt-6 pt-4 border-t border-border/50">
                    <p className="text-sm font-medium text-foreground">{dep.name}</p>
                    <p className="text-xs text-muted-foreground">{dep.detail}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-primary-foreground mb-4">
              Você merece esse cuidado.
            </h2>
            <p className="text-primary-foreground/80 max-w-lg mx-auto mb-10 leading-relaxed">
              O primeiro passo para uma vida com mais consciência e equilíbrio emocional pode começar agora. 
              Agende sua primeira sessão e permita-se esse encontro consigo.
            </p>
            <Link
              to="/contato"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary-foreground text-primary font-sans text-sm tracking-wide rounded-sm hover:opacity-90 transition-opacity"
            >
              Agendar Primeira Consulta <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
