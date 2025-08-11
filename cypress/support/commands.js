// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// ***********************************************
// Comandos personalizados para melhorar a estabilidade dos testes
// ***********************************************

// Comando para aguardar página carregar completamente
Cypress.Commands.add('waitForPageLoad', () => {
  cy.document().should("have.property", "readyState").and("eq", "complete");
  cy.wait(2000); // Aguarda adicional para scripts dinâmicos
});

// Comando para aceitar cookies automaticamente
Cypress.Commands.add('acceptCookies', () => {
  cy.get('body').then(($body) => {
    const cookieSelectors = [
      '[data-testid="cookie-banner"]',
      '.cookie-banner',
      '#cookie-banner',
      '[class*="cookie"]',
      '[id*="cookie"]'
    ];
    
    cookieSelectors.forEach(selector => {
      if ($body.find(selector).length > 0) {
        cy.get(`${selector} button, ${selector} [role="button"]`)
          .first()
          .click({ force: true });
      }
    });
  });
});

// Comando para scroll suave até elemento
Cypress.Commands.add('scrollToElement', (selector, options = {}) => {
  const defaultOptions = {
    duration: 1000,
    offset: 0,
    ...options
  };
  
  cy.get(selector)
    .should('be.visible')
    .scrollIntoView(defaultOptions);
});

// Comando para clicar com retry
Cypress.Commands.add('clickWithRetry', (selector, maxRetries = 3) => {
  let retries = 0;
  
  const attemptClick = () => {
    cy.get(selector)
      .should('be.visible')
      .should('not.be.disabled')
      .click({ force: true })
      .then(() => {
        // Sucesso
      })
      .catch((error) => {
        retries++;
        if (retries < maxRetries) {
          cy.wait(1000);
          attemptClick();
        } else {
          throw error;
        }
      });
  };
  
  attemptClick();
});

// Comando para verificar se elemento existe antes de interagir
Cypress.Commands.add('safeClick', (selector) => {
  cy.get('body').then(($body) => {
    if ($body.find(selector).length > 0) {
      cy.get(selector)
        .should('be.visible')
        .click({ force: true });
    } else {
      cy.log(`Elemento ${selector} não encontrado`);
    }
  });
});

// Comando para aguardar elemento aparecer
Cypress.Commands.add('waitForElement', (selector, timeout = 10000) => {
  cy.get(selector, { timeout }).should('be.visible');
});

// Comando para verificar performance
Cypress.Commands.add('checkPerformance', (maxLoadTime = 10000) => {
  cy.window().then((win) => {
    const performance = win.performance;
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    
    cy.log(`Tempo de carregamento: ${loadTime}ms`);
    expect(loadTime).to.be.lessThan(maxLoadTime);
  });
});

// Comando para tirar screenshot com nome automático
Cypress.Commands.add('takeScreenshot', (name) => {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  cy.screenshot(`${name}-${timestamp}`);
});

// Override do comando visit para melhor estabilidade
Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
  const defaultOptions = {
    timeout: 30000,
    failOnStatusCode: false,
    ...options
  };
  
  return originalFn(url, defaultOptions);
});