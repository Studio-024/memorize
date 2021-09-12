
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
<div id="test">
  <div class="profile">
    <img alt="Memorize. O memorize é um site para você criar e revisar os seus Flashcards quando e onde quiser!" src="./client/src/assets/readme/AlexandreProfile.jpeg" class="profile_photo"/> 
    <h3 class="profile_name">Alexandre Costa Belettini</h3>
    <div class="profile_describle">
      <img src="https://img.shields.io/static/v1?&label=Linkedin&message=Alexandre Costa Belettini&color=d2cbc3&labelColor=blue&style=flat&url=https://www.linkedin.com/in/alexandrexyz/" /> <br>
      <img src="https://img.shields.io/static/v1?&label=GitHub&message=AlexandreXYZ&color=d2cbc3&labelColor=2f2e2c&style=flat&url=https://github.com/k1vz" /> 
    </div>
  </div>
  <div class="profile">
    <img alt="Memorize. O memorize é um site para você criar e revisar os seus Flashcards quando e onde quiser!" src="./client/src/assets/readme/PedroProfile.jpeg" class="profile_photo"/> 
    <h3 class="profile_name">Pedro Otávio Furtado Duarte</h3>
    <div class="profile_describle">
      <img src="https://img.shields.io/static/v1?&label=Linkedin&message=Pedro Duarte&color=d2cbc3&labelColor=blue&style=flat&url=https://www.linkedin.com/in/pedro-duarte-5b5356214/"/> <br>
      <img src="https://img.shields.io/static/v1?&label=GitHub&message=k1vz&color=d2cbc3&labelColor=2f2e2c&style=flat&url=https://github.com/k1vz" /> 
    </div>
  </div>
  <div class="profile">
    <img alt="Memorize. O memorize é um site para você criar e revisar os seus Flashcards quando e onde quiser!" src="./client/src/assets/readme/ViniciusProfile.jpeg" class="profile_photo"/> 
    <h3 class="profile_name">Vinicius Gregorine Menegon</h3>
    <div class="profile_describle">
      <img src="https://img.shields.io/static/v1?&label=Linkedin&message=Vinicius Gregorine Menegon&color=d2cbc3&labelColor=blue&style=flat&url=https://www.linkedin.com/in/vinicius-gregorine-menegon-92428b210/"/> <br>
      <img src="https://img.shields.io/static/v1?&label=GitHub&message=ViniciusGregorine&color=d2cbc3&labelColor=2f2e2c&style=flat&url=https://github.com/ViniciusGregorine"/> 
    </div>
  </div>
</div>
<table>
<tr>
  <td width="200px" align="center">
    <img alt="Memorize. O memorize é um site para você criar e revisar os seus Flashcards quando e onde quiser!" src="./client/src/assets/readme/AlexandreProfile.jpeg"/> 
    <h4>Alexandre Costa Belettini</h4> 

  [![Linkedin Badge](https://img.shields.io/badge/-Alexandre%20Costa%20Belettini-white?style=flat-square&logo=linkedin&logoColor=blue&link=https://www.linkedin.com/in/alexandrexyz/)](https://www.linkedin.com/in/alexandrexyz/)
  [![Linkedin Badge](https://img.shields.io/badge/-AlexandreXYZ-white?style=flat-square&logo=GitHub&logoColor=black&link=https://github.com/AlexandreXYZ)](https://github.com/AlexandreXYZ)
  </td>
</tr>
</table>


## API Requests 
Resquest | Method | Route URI | Query parameters | Body | Response 
--- | --- | --- | --- | --- |--- 
Review Card | PUT | /card/review | cod=num | ` { "userGrade" : num } `| null 
Get Cards | GET | /card | null | null | ` [{ "cod": num, "front": string, "back": string, "interval_time": num, "review_cod": num }] `
Add Card | POST | /card | null | `{ "front": string, "back": string }` | null


