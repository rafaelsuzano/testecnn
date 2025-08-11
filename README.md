

# Teste de Automação para Portal de Notícias

Este projeto apresenta um exemplo de automação de testes para um portal de notícias, utilizando o [Cypress](https://www.cypress.io/) para validar as funcionalidades críticas da aplicação.

## 🚀 Sobre o Projeto

O objetivo deste repositório é demonstrar uma suíte de testes automatizados para um portal de notícias como o da CNN Brasil. O foco é garantir a qualidade, estabilidade, performance e a boa experiência do usuário em diferentes dispositivos e navegadores.

### ✨ Funcionalidades Testadas

  * **Busca de Artigos:** Validação do campo de busca e da exibição de resultados.
  * **Paginação:** Verificação da navegação entre as páginas de resultados.
  * **Acesso a Artigos:** Garantia de que os artigos podem ser abertos corretamente a partir da página de busca.

### 🛠️ Tecnologias Utilizadas

  * [Cypress](https://www.cypress.io/): Framework de testes end-to-end.
  * [Node.js](https://nodejs.org/en/): Ambiente de execução JavaScript.
  * [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript): Linguagem de programação para os scripts de teste.

## 🏁 Começando

Siga as instruções abaixo para rodar o projeto em sua máquina local.

### ✅ Pré-requisitos

Antes de começar, certifique-se de que você tem o [Node.js](https://nodejs.org/en/) e o [npm](https://www.npmjs.com/) (ou [Yarn](https://yarnpkg.com/)) instalados.

### 📦 Instalação

1.  Clone o repositório:
    ```sh
    git clone https://github.com/rafaelsuzano/testecnn.git
    ```
2.  Navegue até o diretório do projeto:
    ```sh
    cd testecnn
    ```
3.  Instale as dependências:
    ```sh
    npm install
    ```

## 🧪 Executando os Testes

Para executar os testes automatizados, utilize um dos comandos abaixo:

  * **Para abrir a interface do Cypress (recomendado):**
    ```sh
    npx cypress open
    ```
  * **Para rodar os testes em modo headless (via terminal):**
    ```sh
    npx cypress run
    ```

## 🎯 Estratégia de Testes

A estratégia de testes adotada busca cobrir as áreas mais críticas de um portal de notícias, que se caracteriza pelo alto tráfego e conteúdo dinâmico.

  * **Tipos de Testes Propostos:**

      * **Funcionais:** Para validar as principais funcionalidades (busca, login, comentários).
      * **Integração:** Para garantir a comunicação entre diferentes componentes.
      * **UI (Interface do Usuário):** Para assegurar a consistência visual.
      * **Responsividade:** Para validar a adaptação em diferentes tamanhos de tela.
      * **Performance:** Para medir o tempo de carregamento e a resposta da aplicação.

  * **Ferramentas Sugeridas (expansão do projeto):**

      * **Testes de Componentes:** [Jest](https://jestjs.io/), [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).
      * **Performance:** [Lighthouse](https://developers.google.com/web/tools/lighthouse).
      * **Testes Visuais:** [Percy](https://percy.io/), [Applitools](https://applitools.com/).

  * **Métricas e Relatórios:**

      * Acompanhamento da taxa de sucesso dos testes.
      * Cobertura de funcionalidades críticas (mínimo de 80%).
      * Relatórios gerados com os resultados de cada execução para análise de falhas.

## 🤝 Contribuições

Contribuições são bem-vindas\! Se você tiver sugestões para melhorar este projeto, sinta-se à vontade para criar um "fork" do repositório e abrir um "pull request".

1.  Faça um "Fork" do projeto.
2.  Crie uma nova "branch" (`git checkout -b feature/sua-feature`).
3.  Faça o "commit" de suas alterações (`git commit -m 'Adiciona nova feature'`).
4.  Faça o "push" para a "branch" (`git push origin feature/sua-feature`).
5.  Abra um "Pull Request".

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

-----
