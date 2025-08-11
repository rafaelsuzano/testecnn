describe('Acessar a 8ª chamada da seção "Mais Lidas" da CNN Brasil', () => {
  it('Deve rolar até a seção "Mais Lidas" e clicar na 8ª notícia', () => {
    // Visita o site
    cy.visit('https://www.cnnbrasil.com.br/');

    // Espera o carregamento
    cy.get('body', { timeout: 10000 }).should('be.visible');

    // Rola para baixo
    cy.scrollTo('bottom', { duration: 2000 });
    cy.wait(3000);

    // Rola até o título da seção "Mais Lidas"
    cy.contains('Mais Lidas', { matchCase: false })
      .scrollIntoView({ duration: 1000 })
      .should('be.visible');

    // Aguarda o bloco de mais lidas carregar e procura os links lá dentro
    cy.get('section')
      .contains('Mais Lidas')
      .parents('section') // pega o section inteiro
      .find('a') // busca os links
      .should('have.length.at.least', 8) // garante que existam pelo menos 8
      .eq(7) // seleciona a 8ª
      .should('have.attr', 'href')
      .then((href) => {
        // Vai para a página da notícia
        cy.visit(href);
      });
  });

  describe('Cenário 2 - Acessar vídeo na seção Shorts via menu Ao Vivo > Esportes', () => {
    it('Deve abrir modal de vídeo ao clicar em um Shorts', () => {
      cy.visit('https://www.cnnbrasil.com.br/');
  
      // 1. Clica no link visível "Ao Vivo" no menu superior
      cy.get('nav')
        .contains('Ao Vivo', { matchCase: false })
        .click({ force: true });
  
      // 2. Espera o conteúdo aparecer (modal, iframe, vídeo ao vivo)
      cy.get('iframe, video, div[class*="video"], div[class*="modal"]', { timeout: 10000 })
        .should('be.visible');
  
      // 3. Agora tenta localizar e clicar em "Esportes"
      cy.get('nav')
        .contains('Esportes', { matchCase: false })
        .click({ force: true });
  
      // 4. Espera novo conteúdo carregar
      cy.wait(3000);
  
      // 5. Localiza a seção Shorts
      cy.contains('Shorts', { matchCase: false })
        .scrollIntoView()
        .should('be.visible');
  
      // 6. Clica no primeiro vídeo da seção Shorts
      cy.contains('Shorts')
        .parents('section')
        .find('a, video, img')
        .first()
        .click({ force: true });
  
      // 7. Verifica se o modal de vídeo foi aberto
      cy.get('div[class*="modal"], iframe, video')
        .should('be.visible');
    });
  });

describe('Cenário 3 - Buscar "avião", ir para página 2 e abrir uma matéria', () => {
  it('Deve buscar, paginar, abrir uma matéria e validar o conteúdo', () => {
    // 1. Acessa o site da CNN Brasil
    cy.visit('https://www.cnnbrasil.com.br/');

    // 2. Clica na lupa do campo de busca
    cy.get('button')
      .filter(':visible')
      .first()
      .click({ force: true });

    // 3. Digita "avião" e pressiona Enter
    cy.get('input[type="search"]', { timeout: 10000 })
      .should('be.visible')
      .type('avião{enter}');

    // 4. Confirma que a URL mudou para busca
    cy.url().should('include', 'search=');
    cy.wait(3000);

    // 5. Clica na página 2 dos resultados
    cy.contains('a', '2', { timeout: 10000 })
      .scrollIntoView()
      .click({ force: true });

    cy.wait(4000); // Aguarda carregamento dos resultados

    // 6. Clica no primeiro link visível da lista
    cy.get('a[href^="https://www.cnnbrasil.com.br"]', { timeout: 10000 })
      .filter(':visible')
      .eq(0)
      .then(($link) => {
        const href = $link.attr('href');
        cy.visit(href);
      });

    // 7. Verifica se algum conteúdo visível da matéria foi carregado
    cy.get('article, h1, h2', { timeout: 10000 })
      .filter(':visible')
      .first()
      .should('be.visible');

    // 8. Valida que o título visível não está vazio
    cy.get('h1, h2')
      .filter(':visible')
      .first()
      .invoke('text')
      .should('not.be.empty');

    // 9. Valida status HTTP da página da matéria
    cy.url().then((url) => {
      cy.request(url).its('status').should('eq', 200);
    });

    // 10. Captura screenshot da matéria
    cy.screenshot('materia-aviao');
  });
});

     
});

  







