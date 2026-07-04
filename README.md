# Chat Offline React

Aplicação de chat em React + TypeScript construída com Vite, com interface simples e responsiva para enviar mensagens em uma conversa local.

## Sobre o projeto

Este projeto simula um chat em que o usuário pode:

- escolher se a mensagem será enviada como usuário ou como robô;
- digitar mensagens em uma área de texto com ajuste automático de altura;
- visualizar as mensagens em uma lista com estilo de bolha;
- interagir totalmente no frontend, sem backend ou persistência externa.

É uma aplicação ideal para praticar estados, componentes e UI com React.

## Funcionalidades

- Alternância entre remetente “Usuário” e “Robô”
- Envio de mensagens com botão ou tecla Enter
- Layout centralizado e responsivo
- Estilização com Tailwind CSS
- Rolagem automática para a última mensagem
- Interface sem dependência de servidor

## Tecnologias

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Oxlint

## Estrutura do projeto

- src/App.tsx: ponto de entrada da aplicação
- src/components/Chat.tsx: controla o estado da conversa e o remetente
- src/components/ChatInput.tsx: campo de entrada e envio de mensagens
- src/components/MessageList.tsx: lista de mensagens
- src/components/MessageBubble.tsx: exibição visual das mensagens
- src/components/SenderToggle.tsx: alternador de remetente
- src/types/message.ts: tipos compartilhados de mensagem

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
npm run dev
npm run build
npm run lint
npm run preview
```

## Observação

As mensagens ficam apenas na sessão atual do navegador. Não há armazenamento persistido nem integração com backend.
