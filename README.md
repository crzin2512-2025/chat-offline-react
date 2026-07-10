# Chat Offline React

Aplicação de demonstração de chat multi-conversas desenvolvida com React, TypeScript e Vite. A interface permite criar várias conversas independentes, alternar o remetente da mensagem e manter o histórico localmente no navegador, sem depender de backend.

## Visão geral

Este projeto simula um ambiente de chat offline com foco em experiência de uso simples e responsiva. O usuário pode:

- criar novas conversas;
- selecionar e excluir conversas existentes;
- alternar entre mensagens enviadas por usuário e por robô;
- digitar mensagens com ajuste automático de altura;
- visualizar o histórico separado por conversa;
- navegar entre chats por meio de uma sidebar retrátil;
- manter os dados persistidos localmente no navegador.

## Principais funcionalidades

- Múltiplas conversas independentes com histórico separado
- Sidebar retrátil com overlay para mobile e desktop
- Criação e exclusão de conversas
- Alternância entre remetente "Usuário" e "Robô"
- Envio de mensagens por botão ou pela tecla Enter
- Input desabilitado quando não há conversa ativa
- Layout responsivo para telas pequenas
- Estilização com Tailwind CSS
- Rolagem automática para a última mensagem
- Persistência local das conversas e do remetente com Zustand

## Stack tecnológica

- React 19
- TypeScript
- Zustand
- Vite
- Tailwind CSS 4
- Oxlint

## Arquitetura do projeto

A lógica principal de estado está centralizada em `src/stores/chatStore.ts`, utilizando o middleware `persist` do Zustand para salvar os dados no armazenamento local do navegador.

```text
src/
├── App.tsx                   # Componente principal
├── main.tsx                  # Entrada da aplicação React
├── index.css                 # Estilos globais
├── stores/
│   └── chatStore.ts          # Store Zustand com persistência local
├── types/
│   ├── message.ts            # Tipos de mensagem e remetente
│   └── conversation.ts       # Tipo de conversa
└── components/
    ├── Chat.tsx              # Layout principal e lógica de envio
    ├── Sidebar.tsx           # Sidebar com navegação e gerenciamento de conversas
    ├── EmptyState.tsx        # Estado vazio quando nenhuma conversa está ativa
    ├── ChatInput.tsx         # Entrada de texto com envio e auto-resize
    ├── MessageList.tsx       # Lista de mensagens e scroll do histórico
    ├── MessageBubble.tsx     # Renderização visual das mensagens
    └── SenderToggle.tsx      # Alternador entre usuário e robô
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

3. Acesse a URL exibida no terminal no navegador.

## Scripts disponíveis

```bash
npm run dev      # Inicia o servidor de desenvolvimento
npm run build    # Gera a build de produção
npm run lint     # Executa a checagem de lint
npm run preview  # Abre a build de produção em preview
```

## Persistência local

O armazenamento de dados é realizado no navegador com `localStorage`, usando a chave `chat-offline-storage`. Isso permite que conversas, mensagens ativas e o remetente selecionado permaneçam disponíveis entre recargas da página.

## Observação

O projeto é totalmente frontend e não possui integração com backend, API ou banco de dados. Toda a experiência de chat fica restrita ao navegador do usuário.
