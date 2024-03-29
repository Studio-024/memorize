
<img alt="Memorize. O memorize é um site para você criar e revisar os seus Flashcards quando e onde quiser!" src="./client/src/assets/readme/banner.png" />
<div align="center">
  <img src="https://img.shields.io/static/v1?labelColor=6C117B&label=License&message=MIT&color=57B536&style=for-the-badge"/> 
  &nbsp
  <img src="https://img.shields.io/static/v1?labelColor=6C117B&label=Node.js&message=14.17.3&color=57B536&style=for-the-badge"/> 
  &nbsp
  <img src="https://img.shields.io/static/v1?labelColor=6C117B&label=Status&message=Concluido&color=57B536&style=for-the-badge"/>
</div>

---

## Tabela de conteúdos

<!--ts-->
   * [Sobre](#sobre)
   * [Funcionalidades](#funcionalidades)
   * [Demonstração](#demonstração)
   * [Instalação](#instalação)
      * [Pré-requisitos](#pré-requisitos)
      * [Como usar](#como-usar)
   * [Tecnologias utilizadas](#tecnologias)
   * [Contribuidores](#contribuidores)
   * [Autores](#autores)
<!--te-->

---

## Sobre

> Memorize é um projeto sobre um site de *Flashcards*, o qual foi produzido com o intuito de juntar um time e construir um projeto completo, tanto no login, registro, Interface de Usuário (UI) e Experiência do Usuário (UX) quanto na análise de mercado. 
> Durante o planejamento sua proposta foi que fosse fácil de usar, rápido de revisar, prático e eficiênte, para isso além de toda a interface simples também foi criado um [algoritmo de revisão](https://github.com/Studio-024/revison-algorithm) que vai ordenar os cards pela ordem de prioridade de revisão.

---

## Funcionalidades

[![GIT Badge](https://img.shields.io/badge/Criação%20Cards-darkgreen?style=for-the-badge&logoColor=white)](#criação-de-cards)
[![GIT Badge](https://img.shields.io/badge/Verificação%20Cards-Green?style=for-the-badge&logoColor=white)](#revisão-dos-cards)
[![GIT Badge](https://img.shields.io/badge/Algoritmo%20de%20Revisão-purple?style=for-the-badge&logoColor=white)](https://github.com/Studio-024/revison-algorithm)
[![GIT Badge](https://img.shields.io/badge/Revisão%20dos%20Cards-b874b6?style=for-the-badge&logoColor=white)](#revisão-dos-cards)
[![GIT Badge](https://img.shields.io/badge/Cadastro%20de%20Usuários-blue?style=for-the-badge&logoColor=white)](#cadastro-de-usuário)
[![GIT Badge](https://img.shields.io/badge/Login%20de%20Usuários-darkblue?style=for-the-badge&logoColor=white)](#login-de-usuário)

---

## Demonstração

<div align="center">
  
  ### Cadastro de usuário
  <img src="./client/src/assets/readme/signup.png" />
  <br/>
  
  ### Login de usuário
  <img src="./client/src/assets/readme/login.png" />
  <br/>
  
  ### Revisão dos cards
  <img src="./client/src/assets/readme/card.png" />
  <br/>
  
  ### Criação de cards
  <img src="./client/src/assets/readme/addcard.png" />
  <br/>
  
</div>

---

## Instalação
Nesse capitulo vamos te mostrar como rodar essa aplicação na sua máquina!

### Pré-requisitos

:heavy_check_mark: Você precisa ter o [NodeJS 14.17.3](https://nodejs.org/en/download/) ou superior instalado na sua máquina para a aplicação em geral;
<br>
:heavy_check_mark: Você precisa ter o [Yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable) instalado na sua máquina para iniciar a aplicação em geral;
<br>
:heavy_check_mark: Você precisa ter o [Git](https://git-scm.com/downloads) instalado na sua máquina para conseguir baixar o repositório;
<br>
:heavy_check_mark: Você precisa ter o [Xampp](https://www.apachefriends.org/pt_br/download.html) instalado em sua máquina para iniciar o Banco de Dados.


### Como usar

Após já ter completado os pré-requisitos você deverá abrir o terminal/cmd da sua máquina e digitar:
```
git clone https://github.com/Studio-024/memorize.git
```
Você tem todos os arquivos que precisa em sua máquina! Agora entre na pasta do projeto e instale as dependências da raiz do projeto:
```
yarn install
```
Vamos ligar o servidor primeiro, entre na pasta server e instale as dependências do server:
```
yarn install
```
Inicie o banco de dados:

**Linux**
```
yarn db:start
```
**Windows**
1. Abra o XAMPP Control Panel;
2. De start nos serviços: `apache` e `MySQL`.


Antes de inciar a API, precisamos ter o banco de dados criado.
1. Abra o phpMyAdmin;
2. Cole o código que está nesta pasta [server/scripts/db/all_db_script.sql](https://github.com/Studio-024/memorize/blob/refactor/db-scripts/server/scripts/db/all_db_script.sql).

Vamos criar o arquivo `.env` na raiz da pasta server.
- Na própria raiz da pasta há um `.env.example` com todas as informações necessárias para conectar com o banco de dados;
- Crie o arquivo chamado `.env` e copie e cole as informações do `.env.example` substituindo as chaves de acordo com seu banco de dados.
- Para encontrar as informações necessárias no phpMyAdmin: Seleciona o banco de dados criado e na parte superior da tela selecione o campo "privilégios"
  > Em caso de dúvidas com relação a esta etapa, esse [post](https://blog.rocketseat.com.br/variaveis-ambiente-nodejs/) pode ajudar

Agora você tem que abrir um novo terminal ou cmd pra deixar ele rodando a API: 
```
yarn dev
```
A API e o banco de dados estão ativados! Agora vamos voltar para a pasta raiz do projeto e entrar na pasta *Client* e instalar as dependências:
```
yarn install
```
Vamos ativar o client agora:
```
yarn start
```
Espere um pouco até abrir uma nova aba do seu navegador com a URL `http://localhost:3000` ou coloque essa URL direto em seu navegador, espere um pouco e o projeto estará funcionando!


---
## Tecnologias

  ### Ferramentas Gerais
  ![Yarn Badge](https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white) 
  ![GIT Badge](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
  ![VsCode Badge](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white) 
  
  ### Frameworks
  ![React Badge](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) 
  ![Sass Badge](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white) 
  ![TypeScript Badge](https://img.shields.io/badge/TypeScript-blue?style=for-the-badge&logo=TypeScript&logoColor=white)     
  ![NodeJS Badge](https://img.shields.io/badge/NodeJS-339933?style=for-the-badge&logo=Node.JS&logoColor=white) 
  ![ExpressJS Badge](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) 
  ![MySQL Badge](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white) 
  
---

## Contribuidores

<table>
<tr>
  <td width="200px" align="center">
    
  <img  alt="Foto de Nicolas Fernando Matsdorf Kisner" src="./client/src/assets/readme/NicolasProfile.jpeg"/> 
    
  #### Nicolas Fernando Matsdorf Kisner
  [![Instagram Badge](https://img.shields.io/badge/-nicolas__matsdorf-white?style=flat-square&logo=instagram&logoColor=Pink&link=https://www.instagram.com/nicolas_matsdorf/?utm_medium=copy_link)](https://www.instagram.com/nicolas_matsdorf/?utm_medium=copy_link)
  </td>
</tr>
</table>

---

## Autores

<table>
<tr >
  <td width="200px" align="center">
    
  <img  alt="Foto de Alexandre Costa Belettini" src="./client/src/assets/readme/AlexandreProfile.jpeg"/> 
    
  #### Alexandre Costa Belettini
  [![Linkedin Badge](https://img.shields.io/badge/-Alexandre%20Costa%20Belettini-white?style=flat-square&logo=linkedin&logoColor=blue&link=https://www.linkedin.com/in/alexandrexyz/)](https://www.linkedin.com/in/alexandrexyz/)
    <br>
  [![GitHub Badge](https://img.shields.io/badge/-AlexandreXYZ-white?style=flat-square&logo=GitHub&logoColor=black&link=https://github.com/AlexandreXYZ)](https://github.com/AlexandreXYZ)
  </td>

  <td width="200px" align="center">
  
  <img alt="Foto de Pedro Otávio Furtado Duarte" src="./client/src/assets/readme/PedroProfile.jpeg"/> 

  #### Pedro Otávio Furtado Duarte 
  [![Linkedin Badge](https://img.shields.io/badge/-Pedro%20Duarte-white?style=flat-square&logo=linkedin&logoColor=blue&link=https://www.linkedin.com/in/pedro-duarte-5b5356214/)](https://www.linkedin.com/in/pedro-duarte-5b5356214/)
    <br>
  [![GitHub Badge](https://img.shields.io/badge/-k1vz-white?style=flat-square&logo=GitHub&logoColor=black&link=https://github.com/k1vz)](https://github.com/k1vz)
    
  </td>

  <td  width="200px"align="center">
    
  <img alt="Foto do GitHub de Vinicius Gregorine Menegon" src="./client/src/assets/readme/ViniciusProfile.jpeg"/> 

  #### Vinicius Gregorine Menegon
  [![Linkedin Badge](https://img.shields.io/badge/-Vinicius%20Gregorine%20Menegon-white?style=flat-square&logo=linkedin&logoColor=blue&link=https://www.linkedin.com/in/vinicius-gregorine-menegon-92428b210/)](https://www.linkedin.com/in/vinicius-gregorine-menegon-92428b210/)
    <br>
  [![GitHub Badge](https://img.shields.io/badge/-ViniciusGregorine-white?style=flat-square&logo=GitHub&logoColor=black&link=https://github.com/ViniciusGregorine)](https://github.com/ViniciusGregorine)
  </td>

</tr>
</table>
