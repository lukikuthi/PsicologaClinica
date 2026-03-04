/**
 * Estela Duarte - Psicóloga Clínica
 *
 * @author Lucas Kikuthi
 * @description Componente principal da aplicação com roteamento
 */

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Index from "./pages/Index";
import SobreMim from "./pages/SobreMim";
import AbordagemTerapeutica from "./pages/AbordagemTerapeutica";
import AreasAtendimento from "./pages/AreasAtendimento";
import ComoFunciona from "./pages/ComoFunciona";
import PerguntasFrequentes from "./pages/PerguntasFrequentes";
import Artigos, { ArtigoDetalhe } from "./pages/Artigos";
import Contato from "./pages/Contato";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppRoutes = () => (
  <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/sobre" element={<SobreMim />} />
      <Route path="/abordagem" element={<AbordagemTerapeutica />} />
      <Route path="/areas-de-atendimento" element={<AreasAtendimento />} />
      <Route path="/como-funciona" element={<ComoFunciona />} />
      <Route path="/faq" element={<PerguntasFrequentes />} />
      <Route path="/artigos" element={<Artigos />} />
      <Route path="/artigos/:slug" element={<ArtigoDetalhe />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <LoadingScreen />
      <HashRouter>
        <AppRoutes />
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;