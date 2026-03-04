import AnimatedSection from "@/components/AnimatedSection";
import Layout from "@/components/Layout";

const PoliticaPrivacidade = () => {
  return (
    <Layout>
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <AnimatedSection>
            <h1 className="text-4xl font-serif font-light text-foreground">Política de Privacidade</h1>
            <p className="text-muted-foreground mt-4">Última atualização: Março de 2026</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl space-y-8">
          {[
            { title: "1. Informações Coletadas", text: "Coletamos apenas as informações fornecidas voluntariamente por você através do formulário de contato: nome, e-mail, telefone e mensagem. Não coletamos dados sensíveis sem o seu consentimento explícito." },
            { title: "2. Uso das Informações", text: "As informações coletadas são utilizadas exclusivamente para entrar em contato com você, agendar consultas e responder às suas solicitações. Não compartilhamos seus dados com terceiros." },
            { title: "3. Sigilo Profissional", text: "Todas as informações compartilhadas durante o processo terapêutico são protegidas pelo sigilo profissional, conforme o Código de Ética Profissional do Psicólogo (Resolução CFP nº 010/2005) e pela Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018)." },
            { title: "4. Cookies", text: "Este site pode utilizar cookies para melhorar a experiência de navegação. Os cookies são pequenos arquivos armazenados no seu navegador que nos ajudam a entender como o site é utilizado. Você pode desabilitar os cookies nas configurações do seu navegador." },
            { title: "5. Segurança dos Dados", text: "Adotamos medidas de segurança adequadas para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, nenhuma transmissão de dados pela internet é completamente segura." },
            { title: "6. Seus Direitos", text: "Em conformidade com a LGPD, você tem o direito de acessar, corrigir, excluir ou portar seus dados pessoais. Para exercer esses direitos, entre em contato pelo e-mail contato@esteladuarte.com.br." },
            { title: "7. Contato", text: "Para dúvidas sobre esta política de privacidade, entre em contato: contato@esteladuarte.com.br ou (11) 99999-9999." },
          ].map((section, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <h2 className="text-xl font-serif font-medium text-foreground mb-3">{section.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{section.text}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default PoliticaPrivacidade;
