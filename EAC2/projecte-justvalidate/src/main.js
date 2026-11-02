import JustValidate from 'just-validate';
import "./style.css";

const validator = new JustValidate('#formulariContacte');

validator
  .addField('#nom', [
    { rule: 'required', errorMessage: 'El nom és obligatori' },
    { rule: 'minLength', value: 3, errorMessage: 'Mínim 3 caràcters' },
  ])
  .addField('#email', [
    { rule: 'required', errorMessage: 'El correu és obligatori' },
    { rule: 'email', errorMessage: 'El correu no és vàlid' },
  ])
  .addField('#edat', [
    { rule: 'required', errorMessage: "L'edat és obligatòria" },
    { rule: 'number', errorMessage: 'Només es permeten números' },
    { rule: 'minNumber', value: 18, errorMessage: "Has de ser major d'edat" },
  ])
  .onSuccess(() => {
    document.getElementById('missatge').textContent = 'Formulari correcte!';
  });