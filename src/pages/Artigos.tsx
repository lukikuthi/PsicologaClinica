import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Layout from "@/components/Layout";

export const artigos = [
  {
    slug: "ansiedade-como-lidar",
    title: "Ansiedade: como aprender a conviver com ela",
    excerpt: "Entenda o que é a ansiedade, por que ela existe e como a terapia pode ajudar você a encontrar equilíbrio emocional.",
    date: "15 de Janeiro, 2026",
    readTime: "8 min de leitura",
    content: [
      "A ansiedade é uma emoção natural e essencial para nossa sobrevivência. Ela nos mantém alertas diante de situações de perigo e nos ajuda a tomar decisões importantes. No entanto, quando se torna constante e desproporcional, passa a ser um obstáculo ao invés de uma aliada.",
      "Vivemos em uma sociedade que nos cobra produtividade, disponibilidade e perfeição o tempo todo. Não é surpreendente que a ansiedade tenha se tornado uma das queixas mais comuns nos consultórios de psicologia. O ritmo acelerado, a pressão por resultados e a dificuldade de se desconectar criam um terreno fértil para o sofrimento emocional.",
      "Na psicoterapia, o primeiro passo é compreender a sua ansiedade. De onde ela vem? O que ela está tentando comunicar? Quais são os gatilhos que a intensificam? Esse processo de autoconhecimento é fundamental para que você possa desenvolver estratégias mais saudáveis de enfrentamento.",
      "Técnicas de respiração, mindfulness e reestruturação cognitiva podem ser aliadas importantes nesse processo. Mas mais do que técnicas, o que realmente transforma é a compreensão profunda de si mesmo — e isso acontece no espaço seguro da terapia.",
      "Se você sente que a ansiedade está controlando sua vida, saiba que é possível mudar essa relação. Não se trata de eliminar a ansiedade, mas de aprender a conviver com ela de forma equilibrada, resgatando sua liberdade e seu bem-estar.",
    ],
  },
  {
    slug: "autoconhecimento-jornada",
    title: "A jornada do autoconhecimento: por onde começar",
    excerpt: "O autoconhecimento é um processo contínuo de descoberta. Descubra como a psicoterapia pode ser o ponto de partida para uma vida mais autêntica.",
    date: "28 de Fevereiro, 2026",
    readTime: "6 min de leitura",
    content: [
      "Conhecer a si mesmo parece simples, mas é uma das tarefas mais desafiadoras e recompensadoras que podemos empreender. O autoconhecimento não é um destino — é uma jornada contínua de descoberta, aceitação e transformação.",
      "Muitas vezes, vivemos de acordo com expectativas que não são nossas. Repetimos padrões que herdamos da família, da cultura, das experiências passadas. E nem sempre percebemos que estamos agindo de forma automática, sem questionar se aquilo realmente faz sentido para quem somos.",
      "A psicoterapia oferece um espaço privilegiado para esse questionamento. Com o apoio de um profissional, é possível olhar para si mesmo com mais clareza e gentileza, identificar crenças limitantes e descobrir potencialidades que estavam adormecidas.",
      "O autoconhecimento não é um luxo — é uma necessidade. Quando nos conhecemos de verdade, tomamos decisões mais alinhadas com nossos valores, nos relacionamos de forma mais saudável e encontramos um sentido mais profundo para nossa existência.",
      "Se você sente que está vivendo no piloto automático, que algo não faz sentido ou que precisa se reconectar consigo mesmo, a terapia pode ser o início de uma jornada transformadora.",
    ],
  },
  {
    slug: "terapia-online-funciona",
    title: "Terapia online: funciona de verdade?",
    excerpt: "Com o avanço da tecnologia, a terapia online se tornou uma realidade. Entenda como funciona e por que ela pode ser tão eficaz quanto a presencial.",
    date: "10 de Março, 2026",
    readTime: "5 min de leitura",
    content: [
      "A terapia online deixou de ser uma alternativa temporária para se tornar uma modalidade consolidada e reconhecida pelo Conselho Federal de Psicologia. Mas ainda é comum ouvir a pergunta: será que funciona de verdade?",
      "A resposta, respaldada por pesquisas científicas, é sim. Diversos estudos demonstram que a psicoterapia online apresenta resultados equivalentes à presencial para a maioria das demandas clínicas, incluindo ansiedade, depressão, estresse e dificuldades relacionais.",
      "O que torna a terapia eficaz não é o espaço físico, mas a qualidade do vínculo terapêutico. A empatia, a escuta ativa e a confiança podem ser construídas independentemente da distância — o que importa é a presença emocional.",
      "A terapia online também oferece vantagens práticas: maior flexibilidade de horários, eliminação do deslocamento, acesso para quem vive em cidades sem profissionais especializados e a possibilidade de realizar sessões no conforto do seu espaço.",
      "Se você tem interesse em iniciar um processo terapêutico online, o mais importante é escolher um profissional com quem você se sinta acolhido e seguro. A tecnologia é apenas o meio — o que transforma é a relação humana.",
    ],
  },
];

const Artigos = () => {
  return (
    <Layout>
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <AnimatedSection>
            <div className="w-px h-12 bg-primary/40 mb-8" />
            <p className="text-sm font-sans tracking-[0.2em] uppercase text-primary mb-4">Blog</p>
            <h1 className="text-4xl md:text-5xl font-serif font-light text-foreground leading-tight">
              Reflexões sobre <span className="italic text-primary">saúde emocional</span>
            </h1>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <div className="space-y-12">
            {artigos.map((artigo, i) => (
              <AnimatedSection key={artigo.slug} delay={i * 0.1}>
                <Link to={`/artigos/${artigo.slug}`} className="group block">
                  <article className="p-8 bg-card border border-border/50 rounded-sm hover:border-primary/20 transition-colors">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <span className="flex items-center gap-1"><Calendar size={12} /> {artigo.date}</span>
                      <span className="flex items-center gap-1"><Clock size={12} /> {artigo.readTime}</span>
                    </div>
                    <h2 className="text-2xl font-serif font-medium text-foreground group-hover:text-primary transition-colors mb-3">
                      {artigo.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">{artigo.excerpt}</p>
                    <span className="inline-flex items-center gap-2 text-sm text-primary font-sans">
                      Ler artigo <ArrowRight size={14} />
                    </span>
                  </article>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Artigos;

export const ArtigoDetalhe = () => {
  const { slug } = useParams();
  const artigo = artigos.find((a) => a.slug === slug);

  if (!artigo) {
    return (
      <Layout>
        <section className="py-24">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-3xl font-serif text-foreground">Artigo não encontrado</h1>
            <Link to="/artigos" className="text-primary mt-4 inline-block">Voltar aos artigos</Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <AnimatedSection>
            <Link to="/artigos" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft size={14} /> Voltar aos artigos
            </Link>
            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
              <span className="flex items-center gap-1"><Calendar size={12} /> {artigo.date}</span>
              <span className="flex items-center gap-1"><Clock size={12} /> {artigo.readTime}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-serif font-light text-foreground leading-tight">
              {artigo.title}
            </h1>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <div className="space-y-6">
            {artigo.content.map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <p className="text-muted-foreground leading-[1.85]">{p}</p>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="mt-16 pt-8 border-t border-border/50 text-center">
              <p className="text-foreground font-serif text-xl mb-4">Este artigo ressoou com você?</p>
              <Link to="/contato" className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-sans text-sm rounded-sm hover:opacity-90 transition-opacity">
                Agendar Consulta <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};
