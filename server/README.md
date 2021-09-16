## API Requests 

  
Resquest | Method | Route URI | Headers | Query parameters | Body | Response 
--- | --- | --- | --- | --- | --- |--- 
Get Cards | <div align="center"> ![GET](https://img.shields.io/badge/GET-green?style=flat) </div>| /card | x-access-token=string | <div align="center">null</div> | <div align="center">null</div> | ` [{ "cod": num, "front": string, "back": string, "interval_time": num, "review_cod": num }] `
Add Card | <div align="center"> ![GET](https://img.shields.io/badge/POST-yellow?style=flat) </div>| /card | x-access-token=string | <div align="center">null</div> | ` { "front": string, "back": string } ` | <div align="center">null</div>
Review Card |<div align="center">  ![GET](https://img.shields.io/badge/POST-yellow?style=flat) </div>| /card/review | x-access-token=string | cod=num | ` { "userGrade" : num } `| <div align="center">null</div> 
SignUp User |<div align="center">  ![GET](https://img.shields.io/badge/POST-yellow?style=flat) </div>| /user/signUp | <div align="center">null</div> | <div align="center">null</div> | ` { "name": string, "email": string, "password": string } ` | <div align="center">null</div>
Login User |<div align="center">  ![GET](https://img.shields.io/badge/POST-yellow?style=flat) </div>| /user/login | <div align="center">null</div> | <div align="center">null</div> | ` { "email": string, "password": string } ` | ` { "statusCode": num, "data": string } `
  
