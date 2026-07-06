# PRD — Conversas múltiplas no chat offline

## 1. Visão geral

Este documento define a especificação funcional para evoluir o chat atual, que trabalha com uma única conversa, para um fluxo com múltiplas conversas independentes, mantendo o comportamento offline e local no frontend.

A solução deve permitir que o usuário crie, visualize e navegue entre diversas conversas, com cada uma mantendo seu próprio histórico de mensagens.

## 2. Contexto e objetivo

### Contexto atual
- O projeto possui um chat com uma única experiência de conversa.
- O estado da aplicação é gerenciado localmente no frontend.
- A feature descrita no brain dump define uma transição para um modelo de múltiplas conversas.

### Objetivo principal
- Transformar o chat de conversa única em uma experiência com múltiplas conversas, permitindo:
  - criar novas conversas;
  - alternar entre conversas;
  - manter mensagens separadas por conversa;
  - ter uma experiência de uso consistente em telas pequenas e grandes.

## 3. Escopo

### Dentro do escopo
- Implementação de uma store Zustand para armazenar:
  - o histórico de mensagens por conversa;
  - o ID da conversa ativa.
- Sidebar lateral com lista de conversas.
- Botão para criar uma nova conversa.
- Estado inicial sem conversa ativa, exibindo empty state.
- Input desabilitado quando não houver conversa ativa.
- Navegação entre conversas.
- Interface retrátil em telas pequenas e grandes.

### Fora do escopo
- Persistência de dados entre recarregamentos do navegador.
- Sincronização com backend ou serviço externo.
- Histórico global de todas as mensagens em uma única lista.
- Recursos de busca, exclusão de conversas ou renomeação.

## 4. Usuário alvo

Usuário do chat offline que precisa conversar em múltiplas threads independentes dentro da mesma interface, sem depender de persistência remota.

## 5. Requisitos funcionais

### 5.1 Estado inicial
- Ao abrir a aplicação, o sistema deve iniciar sem nenhuma conversa ativa.
- A interface deve exibir um empty state indicando que ainda não há uma conversa selecionada.

### 5.2 Criação de conversa
- O usuário deve poder criar uma nova conversa a partir de um botão na sidebar.
- Cada nova conversa deve receber um identificador único (ID).
- A nova conversa criada deve automaticamente se tornar a conversa ativa.

### 5.3 Lista de conversas
- A sidebar deve listar todas as conversas existentes.
- Cada item da lista deve representar uma conversa e ser identificado pelo seu ID.
- O item da conversa ativa deve receber destaque visual.

### 5.4 Alternância entre conversas
- O usuário deve poder selecionar qualquer conversa existente na sidebar.
- Ao trocar de conversa, a interface deve exibir o histórico correspondente à conversa selecionada.
- A conversa ativa deve ser armazenada no estado global.

### 5.5 Histórico por conversa
- O histórico de mensagens deve ser armazenado separadamente para cada conversa.
- O envio de mensagens deve impactar apenas a conversa ativa.
- Ao mudar de conversa, o usuário deve ver o histórico daquela conversa sem mistura com outras.

### 5.6 Input desabilitado sem conversa ativa
- Quando não houver conversa ativa, o input de mensagem deve estar desabilitado.
- O input deve apresentar visual de desabilitado, com opacidade reduzida.
- Os botões relacionados ao envio devem estar indisponíveis enquanto não houver conversa ativa.

### 5.7 Envio de mensagens
- Quando houver uma conversa ativa, o usuário deve poder enviar mensagens normalmente.
- A mensagem enviada deve ser adicionada ao histórico da conversa ativa.
- O fluxo de envio deve seguir o padrão atual do chat, sem necessidade de backend.

### 5.8 Sidebar retrátil
- A sidebar deve ser retrátil para melhorar a experiência em telas menores e maiores.
- Deve existir um botão de hambúrguer na parte superior esquerda para controlar a abertura/fechamento da sidebar.
- Em telas pequenas, a sidebar deve funcionar como painel colapsável/overlay.
- Em telas maiores, a sidebar deve poder ser recolhida sem perder o estado das conversas.

## 6. Requisitos de interface e experiência

### 6.1 Estrutura visual
- A sidebar deve ficar posicionada à esquerda da interface principal.
- O conteúdo principal deve ocupar o restante da tela.
- O layout deve manter a navegação entre conversas sempre acessível.

### 6.2 Estados visuais
- Empty state quando não houver conversa ativa.
- Estado de conversa selecionada com destaque visual.
- Estado de input desabilitado com feedback visual claro.

### 6.3 Identificação das conversas
- A identificação das conversas deve ser feita pelo próprio ID da conversa.
- Não é necessário exibir nome amigável para a conversa neste momento.

## 7. Modelo de dados

A store Zustand deve armazenar, no mínimo, as seguintes informações:

- `conversations`: um mapa/registro de conversas, onde cada conversa contém:
  - `id`: identificador único;
  - `messages`: lista de mensagens do tipo `Message`.
- `activeConversationId`: ID da conversa atualmente selecionada, ou `null` quando nenhuma estiver ativa.

### Exemplo conceitual
```ts
type Conversation = {
  id: string;
  messages: Message[];
};

type ChatStore = {
  conversations: Record<string, Conversation>;
  activeConversationId: string | null;
  createConversation: () => void;
  selectConversation: (id: string) => void;
  addMessage: (conversationId: string, message: Message) => void;
};
```

## 8. Critérios de aceitação

### Cenário 1 — Inicialização
- Ao abrir a aplicação, a tela deve iniciar sem conversa ativa.
- O input deve ficar desabilitado.
- A sidebar deve estar disponível para criação e navegação.

### Cenário 2 — Criação de conversa
- Ao clicar em “Nova conversa”, uma nova conversa deve ser criada.
- A nova conversa deve se tornar a conversa ativa.
- O histórico da conversa deve iniciar vazio.

### Cenário 3 — Alternar entre conversas
- Ao selecionar outra conversa na sidebar, o conteúdo principal deve mudar para o histórico daquela conversa.
- A conversa selecionada deve receber destaque na sidebar.

### Cenário 4 — Envio de mensagem
- Com uma conversa ativa, o usuário deve conseguir enviar mensagens.
- A mensagem deve aparecer apenas no histórico da conversa ativa.

### Cenário 5 — Sem conversa ativa
- Sem conversa ativa, o input deve ficar desabilitado e visualmente reduzido.
- Nenhuma mensagem deve poder ser enviada.

### Cenário 6 — Sidebar retrátil
- O usuário deve conseguir abrir e fechar a sidebar por meio do botão de hambúrguer.
- O estado da sidebar deve ser controlado de forma consistente em diferentes tamanhos de tela.

## 9. Requisitos não funcionais

- A implementação deve manter o comportamento local e offline.
- O estado deve ser reativo e atualizado automaticamente na interface.
- O código deve ser estruturado de forma modular, com a store em `src/stores`.
- A solução deve preservar a experiência atual do chat, ampliando-a para múltiplas conversas sem regressão significativa.

## 10. Entregáveis esperados

- Store Zustand com estado de conversas e conversa ativa.
- Sidebar com lista de conversas e botão para nova conversa.
- Fluxo de seleção de conversa e visualização de histórico.
- Input desabilitado sem conversa ativa.
- Interface retrátil com botão de hambúrguer.

## 11. Observações de implementação

- A implementação deve seguir o modelo de estado já previsto no brain dump.
- O identificador da conversa deve ser o próprio ID.
- A feature deve ser implementada sem depender de persistência externa.
