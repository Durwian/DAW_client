// Funcions pures d'operacions matemàtiques bàsiques
    export function suma(a, b) { return a + b; }
    export function resta(a, b) { return a - b; }
    export function multiplica(a, b) { return a * b; }
    export function divideix(a, b) {
      if (b === 0) return "No es pot dividir entre zero.";
      return a / b;
    }