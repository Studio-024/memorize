<style>
.profile{
  display:flex;
  flex-direction: column;
  width: 15rem;
  margin-inline: 1rem;
  margin-top:2.5rem;
}
.profile_name{
  text-align:center;
  margin-top: 0.5rem;
}
.profile_photo{
  height:15rem;
  width: 15rem;
  border: 4px solid #6C117B;
}
.profile_describle{
  text-align:center;
  /* margin-top:.2rem; */
}
#test{
  display:flex;
  flex-wrap: wrap;
}
#Alexandre
</style>

<img alt="Memorize. O memorize é um site para você criar e revisar os seus Flashcards quando e onde quiser!" src="./client/src/assets/readme/banner.png" />
<div align="center">
  <img src="https://img.shields.io/static/v1?labelColor=6C117B&label=License&message=MIT&color=57B536&style=for-the-badge"/> 
  &nbsp
  <img src="https://img.shields.io/static/v1?labelColor=6C117B&label=Node.js&message=14.17.3&color=57B536&style=for-the-badge"/> 
  &nbsp
  <img src="https://img.shields.io/static/v1?labelColor=6C117B&label=Status&message=Concluido&color=57B536&style=for-the-badge"/>
</div>

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


## Funcionalidades

- [x] Criar cards
- [x] Verificar cards
- [x] Cadastro de usuário
- [x] Login de usuário


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


## Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [SASS](https://sass-lang.com/)
- [TypeScript](https://www.typescriptlang.org/)


## Autores

<div id="test">
  <div class="profile">
    <img alt="Memorize. O memorize é um site para você criar e revisar os seus Flashcards quando e onde quiser!" src="./client/src/assets/readme/AlexandreProfile.jpeg" class="profile_photo"/> 
    <h3 class="profile_name">Alexandre Costa Belettini</h3>
    <div class="profile_describle">
      <img src="https://img.shields.io/static/v1?&label=Linkedin&message=AlexandreXYZ&color=d2cbc3&labelColor=blue&style=flat&url=https://www.linkedin.com/in/alexandrexyz/" /> <br>
      <img src="https://img.shields.io/static/v1?&label=GitHub&message=AlexandreXYZ&color=d2cbc3&labelColor=2f2e2c&style=flat&url=https://github.com/k1vz" /> 
    </div>
  </div>
  <div class="profile">
    <img alt="Memorize. O memorize é um site para você criar e revisar os seus Flashcards quando e onde quiser!" src="./client/src/assets/readme/PedroProfile.jpeg" class="profile_photo"/> 
    <h3 class="profile_name">Pedro Otávio Furtado Duarte</h3>
    <div class="profile_describle">
      <img src="https://img.shields.io/static/v1?&label=Linkedin&message=Pedro Duarte&color=d2cbc3&labelColor=blue&style=flat&url=https://www.linkedin.com/in/pedro-duarte-5b5356214/"/> <br>
      <img src="https://img.shields.io/static/v1?&label=GitHub&message=k1vz&color=d2cbc3&labelColor=2f2e2c&style=flat&url=https://github.com/AlexandreXYZ" /> 
    </div>
  </div>
  <div class="profile">
    <img alt="Memorize. O memorize é um site para você criar e revisar os seus Flashcards quando e onde quiser!" src="./client/src/assets/readme/AlexandreProfile.jpeg" class="profile_photo"/> 
    <h3 class="profile_name">Alexandre Costa Belettini</h3>
    <div class="profile_describle">
      <img src="https://img.shields.io/static/v1?&label=Linkedin&message=AlexandreXYZ&color=d2cbc3&labelColor=blue&style=flat&url=https://www.linkedin.com/in/alexandrexyz/" /> <br>
      <img src="https://img.shields.io/static/v1?&label=GitHub&message=AlexandreXYZ&color=d2cbc3&labelColor=2f2e2c&style=flat&url=https://github.com/AlexandreXYZ" /> 
    </div>
  </div>
</div>



## API Requests 
Resquest | Method | Route URI | Query parameters | Body | Response 
--- | --- | --- | --- | --- |--- 
Review Card | PUT | /card/review | cod=num | ` { "userGrade" : num } `| null 
Get Cards | GET | /card | null | null | ` [{ "cod": num, "front": string, "back": string, "interval_time": num, "review_cod": num }] `
Add Card | POST | /card | null | `{ "front": string, "back": string }` | null


