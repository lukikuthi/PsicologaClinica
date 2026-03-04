import { Link } from "react-router-dom";
import { ArrowRight, Brain, CloudRain, Heart, Users, Flame, Sparkles } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Layout from "@/components/Layout";

const areas = [
  {
    icon: CloudRain,
    title: "Ansiedade",
    slug: "ansiedade",
    summary: "Compreender e acolher sua ansiedade para encontrar equilíbrio.",
    text: "A ansiedade é uma resposta natural do organismo, mas quando se torna excessiva, pode comprometer sua qualidade de vida. No processo terapêutico, vamos explorar as raízes da sua ansiedade, compreender seus gatilhos e desenvolver estratégias saudáveis para lidar com ela. Não se trata de eliminar a ansiedade — mas de aprender a conviver com ela de forma equilibrada, resgatando sua sensação de segurança interior.",
  },
  {
    icon: Heart,
    title: "Depressão",
    slug: "depressao",
    summary: "Encontrar luz mesmo nos momentos mais difíceis.",
    text: "A depressão afeta profundamente a forma como nos relacionamos com a vida, com nós mesmos e com o mundo ao redor. É mais do que tristeza — é um estado que precisa de acolhimento e compreensão. Na terapia, vamos juntos olhar para o que está por trás desse sofrimento, validar suas emoções e reconstruir, passo a passo, o sentido e a vitalidade que a depressão pode ter obscurecido.",
  },
  {
    icon: Users,
    title: "Relacionamentos",
    slug: "relacionamentos",
    summary: "Construir vínculos mais saudáveis e autênticos.",
    text: "Nossos relacionamentos refletem muito do que somos e do que carregamos. Dificuldades em se conectar, dependência emocional, conflitos recorrentes — tudo isso pode ser compreendido e transformado no processo terapêutico. Vamos explorar seus padrões relacionais, entender suas necessidades emocionais e construir formas mais saudáveis e verdadeiras de se relacionar.",
  },
  {
    icon: Brain,
    title: "Autoconhecimento",
    slug: "autoconhecimento",
    summary: "Descobrir quem você realmente é, além das máscaras.",
    text: "O autoconhecimento é a base de qualquer transformação genuína. Muitas vezes vivemos no piloto automático, repetindo padrões que não nos pertencem verdadeiramente. A terapia é um convite para olhar para dentro — com coragem e gentileza — e descobrir suas potencialidades, seus valores e o que realmente faz sentido para você.",
  },
  {
    icon: Flame,
    title: "Burnout",
    slug: "burnout",
    summary: "Recuperar sua energia e reconectar com o que importa.",
    text: "O burnout vai além do cansaço profissional. É um esgotamento emocional, físico e mental que afeta todas as áreas da vida. Na terapia, vamos compreender os fatores que levaram a esse ponto, trabalhar a relação com o trabalho e com a produtividade, e reconstruir hábitos e limites que protejam sua saúde emocional. Você merece viver sem estar constantemente à beira do colapso.",
  },
  {
    icon: Sparkles,
    title: "Terapia para Casais",
    slug: "terapia-casais",
    summary: "Fortalecer o vínculo e resgatar a conexão genuína.",
    text: "A terapia de casal é um espaço seguro para que ambos possam ser ouvidos, compreendidos e acolhidos. Trabalhamos juntos para melhorar a comunicação, resolver conflitos de forma respeitosa e fortalecer o vínculo afetivo. Não se trata de encontrar culpados — mas de construir, juntos, uma relação mais consciente, empática e verdadeira.",
  },
];

const AreasAtendimento = () => {
  return (
    <Layout>
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <AnimatedSection>
            <div className="w-px h-12 bg-primary/40 mb-8" />
            <p className="text-sm font-sans tracking-[0.2em] uppercase text-primary mb-4">Áreas de Atendimento</p>
            <h1 className="text-4xl md:text-5xl font-serif font-light text-foreground leading-tight mb-6">
              Cada pessoa traz<br />
              <span className="italic text-primary">uma história única.</span>
            </h1>
            <p className="text-muted-foreground leading-relaxed max-w-2xl">
              Atendo diversas demandas emocionais com profundidade, respeito e acolhimento. 
              Conheça as principais áreas em que posso ajudar.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
          <div className="space-y-16">
            {areas.map((area, i) => (
              <AnimatedSection key={area.slug} delay={0.05}>
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-start ${i % 2 === 1 ? 'lg:text-right' : ''}`}>
                  <div className={`lg:col-span-3 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className={`w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center ${i % 2 === 1 ? 'lg:ml-auto' : ''}`}>
                      <area.icon size={28} className="text-primary" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className={`lg:col-span-9 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <h2 className="text-2xl font-serif font-medium text-foreground mb-2">{area.title}</h2>
                    <p className="text-sm text-primary mb-4 italic">{area.summary}</p>
                    <p className="text-muted-foreground leading-relaxed">{area.text}</p>
                  </div>
                </div>
                {i < areas.length - 1 && <div className="border-b border-border/50 mt-16" />}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-serif font-light text-primary-foreground mb-4">
              Não encontrou sua demanda aqui?
            </h2>
            <p className="text-primary-foreground/80 max-w-lg mx-auto mb-10">
              Essas são apenas algumas das áreas em que atuo. Entre em contato e podemos conversar sobre suas necessidades específicas.
            </p>
            <Link to="/contato" className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary-foreground text-primary font-sans text-sm rounded-sm hover:opacity-90 transition-opacity">
              Fale Comigo <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default AreasAtendimento;
