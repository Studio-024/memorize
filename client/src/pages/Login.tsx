import '../css/Login.css'


const Login = () => {

  return(

    <div>
      <header>MEMORIZE</header>
      <main>
       <form>
          <input type="email" placeholder="Email"/>
         <input type="password" placeholder="Senha"/>
         <button>Entrar</button>
         <a href="#">Esqueci a senha</a>
        </form>
       <span>Criar Conta</span>
      </main>
    </div>

)
}

export default Login;