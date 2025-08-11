# 🧪 Estratégia de Testes – Portal de Notícias (CNN Brasil)

## 📌 Visão Geral

O projeto avaliado é um portal de notícias, como a CNN Brasil, cujo propósito é fornecer informações atualizadas sobre política, economia, esportes, entretenimento e outros temas. 

### 🎯 Características-chave:
- Alto volume de tráfego e atualizações em tempo real
- Conteúdo dinâmico (carregamento via JavaScript)
- Diversidade de dispositivos e tamanhos de tela
- Links internos e externos (matérias, vídeos, banners)
- Páginas com vídeos, imagens e texto estruturado

### ⚠️ Possíveis falhas ou gargalos:
- **Links quebrados** ou redirecionamentos incorretos
- **Lazy-loading** mal implementado, impactando SEO e testes automatizados
- **Elementos invisíveis ou ocultos via CSS**, dificultando interação automatizada
- **Desempenho lento** em redes móveis
- **Problemas de acessibilidade** (ex: textos escondidos ou mal rotulados)
- **Cross-browser issues** com layouts inconsistentes

---

## 🧩 Estratégia de Testes

### ✅ Objetivo
Garantir que o portal funcione corretamente em diferentes dispositivos, navegadores e cenários de uso real, com foco em **estabilidade, performance e experiência do usuário**.

---

## 🔎 Tipos de Testes Aplicáveis

| Tipo de Teste         | Justificativa |
|-----------------------|----------------|
| **Testes Funcionais** | Verificar se as funcionalidades básicas funcionam como esperado (busca, navegação, acesso às matérias). |
| **Testes de Integração** | Verificar se os sistemas internos (CMS, vídeos, links externos) estão integrados corretamente. |
| **Testes de Interface (UI)** | Garantir que os elementos estejam visíveis, acessíveis e interativos. |
| **Testes de Responsividade** | Validação visual e funcional em diferentes resoluções (mobile, tablet, desktop). |
| **Testes de Performance** | Avaliar tempo de carregamento, TTI e impacto de elementos pesados (vídeos, banners). |
| **Testes de Usabilidade** | Verificar se o usuário consegue realizar ações com facilidade. |
| **Testes de Acessibilidade** | Garantir compatibilidade com leitores de tela e navegação por teclado. |
| **Testes de Regressão** | Automatizados para evitar que correções causem novos problemas. |

---

## 🧪 Cobertura de Testes

- Cobertura mínima de **80% das funcionalidades críticas**
- Validação de **componentes dinâmicos**, como:
  - Campo de busca
  - Navegação paginada
  - Abertura de matérias
  - Vídeos e modais
- Validação de links em destaques, rodapés e menus
- Diferentes perfis de usuários simulados (leitor rápido, leitor que pesquisa, leitor que consome vídeo)
- Testes em **resoluções múltiplas (mobile/desktop)** usando `viewport` do Cypress

---

## 🛠️ Ferramentas e Tecnologias Sugeridas

| Ferramenta          | Finalidade |
|---------------------|------------|
| **Cypress**         | Testes end-to-end e UI com boa visualização de erros |
| **Jest**            | Testes unitários se o portal usar React ou similar |
| **Lighthouse / PageSpeed** | Avaliação de performance, SEO, PWA |
| **Percy / Applitools** | Testes visuais automatizados |
| **axe-core + Cypress-axe** | Testes de acessibilidade |
| **Allure / Mochawesome** | Relatórios visuais de execução de testes |
| **GitHub Actions / GitLab CI** | Execução contínua dos testes a cada pull request |

---

## 📊 Métricas e Relatórios

| Métrica                         | Objetivo |
|--------------------------------|----------|
| ✅ **Taxa de Sucesso dos Testes**       | % de testes que passaram por build |
| 🧪 **Cobertura de Funcionalidades**     | Quais páginas/casos estão cobertos |
| ⚠️ **Falhas Recorrentes**              | Casos que falham frequentemente |
| ⏱️ **Tempo Médio de Execução**         | Tempo total dos testes end-to-end |
| 📉 **Performance (Lighthouse Score)** | Medir performance, SEO e acessibilidade |
| 🧼 **Clean Run Ratio**                | Quantidade de execuções sem erro |

📁 Relatórios seriam entregues em:
- **Dashboard Allure/Mochawesome** (automático por CI/CD)
- **PDF semanal**
- **Planilhas de rastreio para cobertura manual**

---

## 📋 Plano de Testes – Cenário 3 (Automatizado com Cypress)

### 🎯 Objetivo:
Testar a jornada de busca por uma palavra-chave, paginação e abertura de matéria.

### 🔸 Cenário:
> No menu de navegação superior, clicar na lupa para ativar o campo de busca. Pesquisar por “avião”. Ir até a página 2 dos resultados, abrir a primeira matéria visível e verificar se a matéria foi carregada corretamente.

---

### ✅ Casos de Teste:

| ID | Etapa | Ação | Resultado Esperado |
|----|-------|------|--------------------|
| TC01 | Acessar o site | `cy.visit()` | Página inicial carregada |
| TC02 | Abrir busca | Clicar na lupa | Campo de busca aparece |
| TC03 | Buscar por termo | Digitar “avião” + Enter | Página de busca é carregada |
| TC04 | Navegar para página 2 | Clicar na paginação | Resultados atualizados |
| TC05 | Selecionar matéria | Clicar na primeira matéria visível | Página da matéria é aberta |
| TC06 | Validar título | Verificar `<h1>` ou `<h2>` visível e não vazio | Conteúdo carregado corretamente |
| TC07 | Validar status HTTP | `cy.request(url)` | Deve retornar `200 OK` |
| TC08 | Captura visual | `cy.screenshot()` | Screenshot da matéria salva |

---

## ✅ Conclusão

A estratégia acima garante testes eficientes e sustentáveis para um portal de notícias como a CNN Brasil, combinando:
- Testes rápidos com **feedback visual**
- Ferramentas modernas como **Cypress**
- Cobertura de **caminhos reais de usuários**

Essa abordagem contribui diretamente para:
- Melhorar a qualidade percebida pelo usuário
- Reduzir bugs de produção
- Aumentar a confiança em cada deploy

---
=======
# testecnn
>>>>>>> dc63707d3b6a5cac79145ed84118db15c22e5910
