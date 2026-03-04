import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin } from "lucide-react";
import logoImg from "@/assets/logo-transparent.png";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logoImg} alt="Estela Duarte" className="h-14 w-auto" />
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Psicoterapia com acolhimento, profundidade e ética. Um espaço seguro para o seu autoconhecimento.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-sans font-medium text-foreground tracking-wider uppercase">Navegação</h4>
            <div className="flex flex-col gap-2.5">
              {[
                { to: "/sobre", label: "Sobre Mim" },
                { to: "/abordagem", label: "Abordagem Terapêutica" },
                { to: "/areas-de-atendimento", label: "Áreas de Atendimento" },
                { to: "/como-funciona", label: "Como Funciona" },
                { to: "/artigos", label: "Artigos" },
                { to: "/faq", label: "Perguntas Frequentes" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-sans font-medium text-foreground tracking-wider uppercase">Contato</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:+5511999999999" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone size={14} /> (11) 99999-9999
              </a>
              <a href="mailto:contato@esteladuarte.com.br" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail size={14} /> contato@esteladuarte.com.br
              </a>
              <p className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin size={14} className="mt-0.5 shrink-0" /> Rua Augusta, 1234 — Sala 56<br />Consolação, São Paulo — SP
              </p>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="text-sm font-sans font-medium text-foreground tracking-wider uppercase">Horários</h4>
            <div className="text-sm text-muted-foreground space-y-1.5">
              <p>Segunda a Sexta</p>
              <p className="text-foreground">8h às 20h</p>
              <p className="mt-3">Sábado</p>
              <p className="text-foreground">9h às 14h</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 Estela Duarte — Psicóloga Clínica — CRP 06/123456
          </p>
          <div className="flex items-center gap-6">
            <Link to="/politica-de-privacidade" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Política de Privacidade
            </Link>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              Feito com <Heart size={10} className="text-primary" /> em São Paulo
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
