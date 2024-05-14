# Memory Game App

Este é um aplicativo simples de jogo da memória desenvolvido em React Native.

## Visão Geral

O jogo da memória é um clássico jogo de tabuleiro no qual o jogador deve encontrar pares de cartas virando-as uma de cada vez. O objetivo é encontrar todos os pares de cartas combinando-as em pares correspondentes.

Este aplicativo implementa um jogo da memória com um conjunto de cartas contendo imagens de diferentes veículos. O jogador deve combinar os pares de cartas virando-as e memorizando sua posição para encontrar todas as combinações.

## Funcionalidades

- Interface de usuário simples e intuitiva.
- Cartões com imagens de veículos.
- Virar as cartas para revelar as imagens.
- Verificar se as cartas viradas correspondem.
- Alerta de vitória quando todos os pares de cartas são encontrados.
- Opção para reiniciar o jogo.

## Instalação

1. Certifique-se de ter o ambiente de desenvolvimento React Native configurado em sua máquina.
2. Clone este repositório.
3. Navegue até o diretório do projeto e execute `npm install` para instalar as dependências.
4. Execute o aplicativo em um emulador ou dispositivo usando `npm start` ou `react-native run-android` / `react-native run-ios`.

## Tecnologias Utilizadas

- React Native
- JavaScript
- JSX

## Estrutura do Projeto

- `App.js`: Contém a lógica principal do aplicativo, incluindo a configuração das cartas, manipulação de eventos e lógica de jogo.
- `components/Card.js`: Componente funcional para renderizar um único cartão.

## Como Jogar

- Abra o aplicativo.
- Toque em qualquer carta para virá-la e revelar a imagem.
- Toque em outra carta para virá-la e revelar sua imagem.
- Se as imagens das duas cartas coincidirem, elas permanecerão viradas.
- Se as imagens das duas cartas não coincidirem, elas serão viradas novamente após 2 segundos.
- Continue virando as cartas até encontrar todos os pares correspondentes.
- Quando todos os pares forem encontrados, uma mensagem de vitória será exibida.

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas para relatar bugs, sugerir melhorias ou enviar solicitações de pull request.
