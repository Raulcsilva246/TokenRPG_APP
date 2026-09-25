# TokenRPG APP

Aplicativo mobile para **criação, edição e gerenciamento de fichas de personagem de RPG de mesa**, desenvolvido com **React Native** e **Expo**. Todas as fichas ficam salvas localmente no próprio dispositivo, sem depender de internet ou servidor.

> Versão atual: **3.0**

## Sobre o projeto

O TokenRPG é uma ficha de personagem digital: em vez de preencher uma folha de papel, o jogador cria sua ficha pelo app, acompanha status em tempo real durante a sessão (vida, energia, sanidade), rola dados e gerencia inventário e habilidades — tudo em um único lugar.

## Funcionalidades

### Tela inicial (Home)
- Lista todas as fichas de personagem já criadas, exibindo nome, jogador, classe, nível e ID
- Acesso rápido para abrir uma ficha, criar uma nova (botão **+**) ou excluir uma ficha (botão **−**)

### Criação e edição de ficha
Ao criar ou editar um personagem, é possível preencher:
- **Informações básicas**: nome do personagem, nome do jogador, classe, raça e nível
- **Descrição**: descrição física, background (história) e observações gerais
- **Status iniciais**: vida máxima, energia máxima e sanidade máxima
- **Atributos**: Força (FOR), Agilidade (AGL), Vigor (VIG), Intelecto (INT) e Presença (PRE)
- **Reações**: CA base (classe de armadura), bloqueio, esquiva e deslocamento

### Ficha do personagem (abas)
Depois de criado, o personagem é aberto em uma tela com abas dedicadas:

| Aba | Funcionalidade |
|---|---|
| **Personagem** | Dados gerais e descritivos do personagem |
| **Status** | Controle de **vida**, **energia** e **sanidade** atuais, com botões para aumentar/diminuir cada valor sem ultrapassar o máximo definido na criação |
| **Atributos** | Visualização e edição dos atributos (FOR, AGL, VIG, INT, PRE) |
| **Habilidades** | Cadastro, listagem e exclusão de habilidades/poderes do personagem |
| **Inventário** | Cadastro, listagem e exclusão de itens carregados pelo personagem |
| **Dados** | Rolador de dados de RPG (veja abaixo) |

### Rolador de dados
- Suporta os dados clássicos de RPG: **d4, d6, d8, d10, d12, d20 e d100**
- Permite escolher a **quantidade de dados** a rolar
- Permite aplicar um **modificador** (positivo ou negativo) ao resultado
- Mostra o resultado total da rolagem e o valor individual de cada dado rolado

### Gerenciamento (criar / editar / excluir)
- Criação e exclusão de **fichas de personagem**
- Criação e exclusão de **habilidades**
- Criação e exclusão de **itens de inventário**
- Criação de **perícias** e de **atributos** personalizados

### Armazenamento
- Não usa banco de dados externo nem backend
- Todas as fichas são salvas em um arquivo `fichas.json` no armazenamento local do próprio dispositivo, através do módulo de sistema de arquivos do Expo
- Os dados persistem entre sessões, mas ficam restritos ao aparelho onde o app foi instalado

## Tecnologias utilizadas

- [React Native](https://reactnative.dev/) `0.81.5`
- [Expo](https://expo.dev/) `~54.0.35`
- [React Navigation](https://reactnavigation.org/) (Native Stack)
- [Expo File System](https://docs.expo.dev/versions/latest/sdk/filesystem/) — persistência local dos dados em JSON
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)
- [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/)
- [@react-native-picker/picker](https://github.com/react-native-picker/picker)

## Navegação (telas do app)

- **Home** — lista de fichas
- **Creat** — criação de ficha
- **Edit** — edição de ficha
- **Caracter** — visualização da ficha (com as abas Status, Atributos, Habilidades, Inventário, Dados e Personagem)
- **CreatH** / **DeleteH** — criar / excluir habilidade
- **CreatT** / **DeleteItem** — criar / excluir item do inventário
- **CreatP** — criar perícia
- **CreatA** — criar atributo
- **Delete** — excluir ficha

## Estrutura do projeto

```
TokenRPG_APP/
├── assets/                  # Ícones e imagens do app
├── src/
│   ├── routes/               # Rotas de navegação (Stack Navigator)
│   ├── screens/
│   │   ├── Home/              # Tela inicial (lista de fichas)
│   │   ├── CreateAndEdit/     # Telas de criação/edição de fichas, itens, habilidades e perícias
│   │   └── Caracter/          # Tela da ficha do personagem
│   │       └── Abas/           # Abas internas: Status, Atributos, Habilidades, Inventário, Dados, Personagem
│   ├── services/
│   │   └── Banco.js           # Camada de acesso/persistência dos dados (armazenamento local em JSON)
│   └── global_CSS.js         # Estilos globais compartilhados
├── App.js                   # Ponto de entrada do app
├── app.json                 # Configuração do Expo
└── eas.json                  # Configuração de build (EAS Build)
```

## 🚀 Como rodar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/more/expo-cli/) (instalado automaticamente via `npx`)
- App **Expo Go** no celular (opcional, para testar em dispositivo físico)

### Passos

```bash
# Clone o repositório
git clone https://github.com/Raulcsilva246/TokenRPG_APP.git

# Acesse a pasta do projeto
cd TokenRPG_APP

# Instale as dependências
npm install

# Inicie o projeto
npm start
```

Depois disso, você pode rodar em uma plataforma específica:

```bash
npm run android   # Executa no Android
npm run ios       # Executa no iOS
npm run web       # Executa no navegador
```

## Sobre

Este projeto foi criado para facilitar a criação e o gerenciamento de personagens de RPG de forma prática, direto do celular, com todos os dados salvos localmente no dispositivo.

## Licença

Este projeto ainda não possui uma licença definida.