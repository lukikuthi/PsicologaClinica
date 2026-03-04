/**
 * Estela Duarte - Psicóloga Clínica
 * Site Institucional
 *
 * @author Lucas Kikuthi
 * @version 1.0.0
 * @description Entry point da aplicação React
 */

import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);