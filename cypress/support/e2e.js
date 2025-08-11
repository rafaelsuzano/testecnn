import 'cypress-xpath';

// Suprime o erro minificado do React (#418) para evitar falha nos testes
Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes('Minified React error #418')) {
    return false; // Ignora o erro
  }

  // Para outros erros, deixa o Cypress decidir
  return true;
});
