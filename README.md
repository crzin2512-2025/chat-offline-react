# Chat Offline React

Aplicação de chat multi-conversas em React + TypeScript construída com Vite, com sidebar retrátil e interface responsiva para gerenciar múltiplas conversas independentes.

## Sobre o projeto

Este projeto simula um chat com suporte a múltiplas conversas, onde o usuário pode:

- criar, selecionar e excluir conversas independentes;
- enviar mensagens como usuário ou como robô;
- digitar mensagens em uma área de texto com ajuste automático de altura;
- visualizar o histórico de mensagens separado por conversa;
- usar uma sidebar retrátil para navegar entre conversas;
- interagir totalmente no frontend, sem backend ou persistência externa.

## Funcionalidades

- Múltiplas conversas independentes com histórico separado
- Sidebar retrátil com overlay (mobile e desktop)
- Criação e exclusão de conversas
- Alternância entre remetente “Usuário” e “Robô”
- Envio de mensagens com botão ou tecla Enter
- Input desabilitado quando não há conversa ativa
- Layout responsivo (320px+)
- Estilização com Tailwind CSS
- Rolagem automática para a última mensagem

## Tecnologias

- React 19
- TypeScript
- Zustand (estado global)
- Vite
- Tailwind CSS
- Oxlint

## Estrutura do projeto

```
src/
├── App.tsx                   # Ponto de entrada da aplicação
├── main.tsx                  # Renderização do React
├── index.css                 # Estilos globais
├── stores/
│   └── chatStore.ts          # Store Zustand (conversas, sender, sidebar)
├── types/
│   ├── message.ts            # Tipos Sender e Message
│   └── conversation.ts       # Tipo Conversation
└── components/
    ├── Chat.tsx              # Layout principal (sidebar + conteúdo)
    ├── Sidebar.tsx           # Sidebar com lista de conversas
    ├── EmptyState.tsx        # Estado vazio sem conversa ativa
    ├── ChatInput.tsx         # Campo de entrada e envio de mensagens
    ├── MessageList.tsx       # Lista de mensagens
    ├── MessageBubble.tsx     # Exibição visual das mensagens
    └── SenderToggle.tsx      # Alternador de remetente
```

## Como executar

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

3. Abra o endereço exibido no terminal no navegador.

## Scripts disponíveis

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build de produção
npm run lint     # Verificação de código
npm run preview  # Preview da build de produção
```

## Observação

As mensagens e conversas ficam apenas na sessão atual do navegador. Não há armazenamento persistido nem integração com backend.
