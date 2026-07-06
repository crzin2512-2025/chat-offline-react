# Tasks — Implementação de múltiplas conversas

## Fase 1 — Preparação e estrutura do estado

### Objetivo
Estabelecer a base do estado global para suportar múltiplas conversas e a conversa ativa.

### Tarefas
- [ ] Criar a pasta `src/stores`.
- [ ] Implementar a store Zustand com:
  - [ ] `conversations`
  - [ ] `activeConversationId`
  - [ ] `createConversation`
  - [ ] `selectConversation`
  - [ ] `addMessage`
- [ ] Definir o tipo `Conversation` e integrar o tipo `Message` existente.
- [ ] Garantir que a store esteja acessível pelos componentes principais.

### Critério de conclusão
A aplicação consegue inicializar com estado de conversas definido e sem conversa ativa no início.

---

## Fase 2 — Adaptar a UI para o modelo multi-chat

### Objetivo
Transformar a interface atual para suportar uma estrutura com sidebar, área principal e estado vazio.

### Tarefas
- [ ] Criar a estrutura visual com:
  - [ ] sidebar à esquerda;
  - [ ] área principal de conteúdo;
  - [ ] botão de hambúrguer para alternar a sidebar.
- [ ] Implementar o empty state para quando não houver conversa ativa.
- [ ] Ajustar o layout para que o conteúdo principal ocupe o restante da tela.
- [ ] Garantir que a interface funcione em telas pequenas e grandes.

### Critério de conclusão
A tela exibe corretamente o estado inicial sem conversa ativa e a estrutura de navegação está presente.

---

## Fase 3 — Sidebar e navegação entre conversas

### Objetivo
Permitir que o usuário veja e navegue entre várias conversas.

### Tarefas
- [ ] Implementar a sidebar com a lista de conversas.
- [ ] Exibir o ID de cada conversa como identificação.
- [ ] Adicionar botão para criar uma nova conversa.
- [ ] Destacar visualmente a conversa atualmente ativa.
- [ ] Implementar a seleção de uma conversa existente.

### Critério de conclusão
O usuário consegue visualizar todas as conversas, criar novas e alternar entre elas pela sidebar.

---

## Fase 4 — Histórico de mensagens por conversa

### Objetivo
Separar o histórico por conversa e manter o comportamento do chat atual.

### Tarefas
- [ ] Ajustar o fluxo de envio para adicionar mensagens à conversa ativa.
- [ ] Garantir que cada conversa tenha seu próprio histórico.
- [ ] Atualizar a renderização da lista de mensagens para refletir a conversa selecionada.
- [ ] Verificar que ao trocar de conversa o histórico correto é exibido.

### Critério de conclusão
Cada conversa mantém seu próprio histórico e a troca de conversa não mistura mensagens.

---

## Fase 5 — Estados de desabilitado e experiência final

### Objetivo
Melhorar a experiência do usuário quando não há conversa ativa e finalizar a feature.

### Tarefas
- [ ] Desabilitar o input quando não houver conversa ativa.
- [ ] Reduzir visualmente a opacidade do input e dos botões associados.
- [ ] Impedir o envio de mensagens sem conversa ativa.
- [ ] Ajustar feedback visual da conversa ativa e do empty state.
- [ ] Revisar responsividade da sidebar e comportamento de recolhimento.

### Critério de conclusão
A experiência final atende aos requisitos do PRD e o fluxo de múltiplas conversas funciona corretamente.

---

## Fase 6 — Validação e revisão

### Objetivo
Validar a implementação antes de considerar a feature concluída.

### Tarefas
- [ ] Testar os cenários principais do PRD:
  - [ ] inicialização sem conversa ativa;
  - [ ] criação de conversa;
  - [ ] alternância entre conversas;
  - [ ] envio de mensagem;
  - [ ] sidebar retrátil.
- [ ] Revisar se não há regressões no fluxo atual do chat.
- [ ] Ajustar detalhes visuais e de usabilidade.

### Critério de conclusão
A feature está pronta para revisão e pode ser entregue com os cenários do PRD validados.
