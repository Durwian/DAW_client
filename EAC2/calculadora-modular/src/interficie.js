import { suma, resta, multiplica, divideix } from "./operacions.js";

function formatNumero(n) {
  // Evita resultats com 0.30000000000000004
  const fix = Number.isInteger(n) ? n.toString() : n.toFixed(10);
  return parseFloat(fix).toString();
}

export function inicialitzaInterficie() {
  const form = document.getElementById("calc-form");
  const aInput = document.getElementById("a");
  const bInput = document.getElementById("b");
  const opSelect = document.getElementById("op");
  const resultat = document.getElementById("resultat");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const a = parseFloat(aInput.value);
    const b = parseFloat(bInput.value);
    const op = opSelect.value;

    try {
      let valor;
      switch (op) {
        case "suma": valor = suma(a, b); break;
        case "resta": valor = resta(a, b); break;
        case "multiplica": valor = multiplica(a, b); break;
        case "divideix": valor = divideix(a, b); break;
        default: throw new Error("Operació desconeguda");
      }
      resultat.textContent = "";
      resultat.innerHTML = `Resultat: <strong>${formatNumero(valor)}</strong>`;
    } catch (err) {
      resultat.textContent = err.message || "S'ha produït un error.";
    }
  });
}