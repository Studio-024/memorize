<img alt="Memorize. O memorize é um site para você criar e revisar os seus Flashcards quando e onde quiser!" src="./client/src/assets/readme/banner.png" />

<div align="center">
  <img src="https://img.shields.io/github/license/Studio-024/memorize"/> 
  <img src="https://img.shields.io/static/v1?label=Node.js&message=14.17.3&color=Green&style=flat"/> 
  <img src="https://img.shields.io/github/issues/Studio-024/memorize"/>
  <img src="https://img.shields.io/github/stars/Studio-024/memorize"/>
  <img src="https://img.shields.io/github/forks/Studio-024/memorize"/>
</div>




## API Requests 
Resquest | Method | Route URI | Query parameters | Body | Response 
--- | --- | --- | --- | --- |--- 
Review Card | PUT | /card/review | cod=num | ` { "userGrade" : num } `| null 
Get Cards | GET | /card | null | null | ` [{ "cod": num, "front": string, "back": string, "interval_time": num, "review_cod": num }] `
Add Card | POST | /card | null | `{ "front": string, "back": string }` | null
