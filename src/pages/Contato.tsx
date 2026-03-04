import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";

const Contato = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", mensagem: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Mensagem enviada!", description: "Entrarei em contato em breve. Obrigada!" });
    setForm({ nome: "", email: "", telefone: "", mensagem: "" });
  };

  return (
    <Layout>
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <AnimatedSection>
            <div className="w-px h-12 bg-primary/40 mb-8" />
            <p className="text-sm font-sans tracking-[0.2em] uppercase text-primary mb-4">Contato</p>
            <h1 className="text-4xl md:text-5xl font-serif font-light text-foreground leading-tight mb-6">
              Vamos <span className="italic text-primary">conversar?</span>
            </h1>
            <p className="text-muted-foreground leading-relaxed max-w-2xl">
              Estou à disposição para esclarecer dúvidas e agendar sua primeira consulta. 
              Escolha a forma de contato mais confortável para você.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <AnimatedSection>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-sans text-foreground mb-2">Nome completo</label>
                  <input
                    type="text"
                    required
                    value={form.nome}
                    onChange={(e) => setForm({ ...form, nome: e.target.value })}
                    className="w-full px-4 py-3 bg-card border border-border rounded-sm text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary/50"
                    placeholder="Seu nome"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-sans text-foreground mb-2">E-mail</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 bg-card border border-border rounded-sm text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary/50"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-sans text-foreground mb-2">Telefone</label>
                    <input
                      type="tel"
                      value={form.telefone}
                      onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                      className="w-full px-4 py-3 bg-card border border-border rounded-sm text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary/50"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-sans text-foreground mb-2">Mensagem</label>
                  <textarea
                    required
                    rows={5}
                    value={form.mensagem}
                    onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                    className="w-full px-4 py-3 bg-card border border-border rounded-sm text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 resize-none"
                    placeholder="Conte um pouco sobre como posso ajudar..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-sans text-sm rounded-sm hover:opacity-90 transition-opacity"
                >
                  Enviar Mensagem <Send size={14} />
                </button>
              </form>
            </AnimatedSection>

            {/* Info */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h3 className="font-serif text-xl font-medium text-foreground mb-4">Informações de Contato</h3>
                  <div className="space-y-4">
                    <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                      <Phone size={16} className="text-primary" /> (11) 99999-9999 — WhatsApp
                    </a>
                    <a href="mailto:contato@esteladuarte.com.br"
                      className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                      <Mail size={16} className="text-primary" /> contato@esteladuarte.com.br
                    </a>
                    <p className="flex items-start gap-3 text-sm text-muted-foreground">
                      <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                      Rua Augusta, 1234 — Sala 56<br />Consolação, São Paulo — SP, 01304-001
                    </p>
                    <p className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Clock size={16} className="text-primary mt-0.5 shrink-0" />
                      Segunda a Sexta: 8h às 20h<br />Sábado: 9h às 14h
                    </p>
                  </div>
                </div>

                {/* Map embed */}
                <div className="rounded-sm overflow-hidden border border-border/50">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975925454!2d-46.65506!3d-23.5535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c0776a!2sRua%20Augusta%20-%20Consola%C3%A7%C3%A3o%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Localização do consultório"
                  />
                </div>

                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-8 py-3.5 bg-[#25D366] text-primary-foreground font-sans text-sm rounded-sm hover:opacity-90 transition-opacity"
                >
                  Conversar pelo WhatsApp
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contato;
