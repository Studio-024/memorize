
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
   * [Demonstração](#demonstracao)
   * [Instalação](#instalacao)
      * [Pré-requisitos](#pre-requisitos)
      * [Como usar](#como-usar)
   * [Tecnologias utilizadas](#tecnologias)
   * [Contribuidor](#contribuidor)
   * [Autores](#autores)
<!--te-->

---
## Funcionalidades

- [x] Criar cards
- [x] Verificar cards
- [x] Cadastro de usuário
- [x] Login de usuário

---
## Demonstração do Sistema

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
## Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [SASS](https://sass-lang.com/)
- [TypeScript](https://www.typescriptlang.org/)

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


## API Requests 
Resquest | Method | Route URI | Query parameters | Body | Response 
--- | --- | --- | --- | --- |--- 
Review Card | PUT | /card/review | cod=num | ` { "userGrade" : num } `| null 
Get Cards | GET | /card | null | null | ` [{ "cod": num, "front": string, "back": string, "interval_time": num, "review_cod": num }] `
Add Card | POST | /card | null | `{ "front": string, "back": string }` | null


