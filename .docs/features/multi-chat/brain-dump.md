## Feature: Single-chat to multi-chat

Preciso transformar o chat de conversa única para múltiplas conversas.

### Aspectos técnicos
Vamos usar a biblioteca Zustand para gerenciamento de estado.

Organização dos dados: 
-Store na biblioteca Zustand armazenando 2 informações:
    -Historico de cada conversa individualmente (com todas as informações do type Message ).
    -Qual chat está ativo (com um ID).

A store do zustand deve ficar no src/stores.

## Fluxo de informações

Ao Abrir o site, não estará em nenhuma conversa (empty state).


### Aspectos visuais

O input fica desabilitado quando não há conversas ativas (opacidade 50% e botões não funcionam)

A identificação do chat é o próprio ID dele.

No sidebar teremos a lista das conversas e um botão para criar uma nova conversa.

O sidebar ficará ao lado esquerdo, sendo retrátil no celular ( botão hamburguer no canto superior esquerdo )