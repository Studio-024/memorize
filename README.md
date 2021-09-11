<img alt="Memorize. O memorize é um site para você criar e revisar os seus Flashcards quando e onde quiser!" src="./client/src/assets/readme/banner.png" />
<div align="center">
  <img src="https://img.shields.io/static/v1?labelColor=6C117B&label=License&message=MIT&color=57B536&style=for-the-badge"/> 
  &nbsp
  <img src="https://img.shields.io/static/v1?labelColor=6C117B&label=Node.js&message=14.17.3&color=57B536&style=for-the-badge"/> 
  &nbsp
  <img src="https://img.shields.io/static/v1?labelColor=6C117B&label=Status&message=Concluido&color=57B536&style=for-the-badge"/>
</div>

Tabela de conteúdos
=================
<!--ts-->
   * [Sobre](#sobre)
   * [Funcionalidades](#funcionalidades)
   * [Demonstração](#demonstracao)
   * [Instalação](#instalacao)
      * [Pré-requisitos](#pre-requisitos)
      * [Como usar](#como-usar)
   * [Tecnologias utilizadas](#tecnologias)
   * [Autores](#autores)
<!--te-->


## Funcionalidades

- [x] Criar cards
- [x] Verificar cards
- [x] Cadastro de usuário
- [x] Login de usuário


## API Requests 
Resquest | Method | Route URI | Query parameters | Body | Response 
--- | --- | --- | --- | --- |--- 
Review Card | PUT | /card/review | cod=num | ` { "userGrade" : num } `| null 
Get Cards | GET | /card | null | null | ` [{ "cod": num, "front": string, "back": string, "interval_time": num, "review_cod": num }] `
Add Card | POST | /card | null | `{ "front": string, "back": string }` | null

