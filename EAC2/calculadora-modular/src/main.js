import "./style.css";
import { inicialitzaInterficie } from "./interficie.js";

// Inicia l'app quan el DOM està llest
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", inicialitzaInterficie);
} else {
  inicialitzaInterficie();
}