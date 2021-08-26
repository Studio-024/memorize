import '../css/Login.css'

const Login = () => {

  return(
    <div>
      <div id="login_background"/>
      <header className="login_header">
        <h1 className="login_header_title">MEMORIZE</h1>
      </header>
      <main className="login_main">
       <form className="login_main_form">
          <input type="email" placeholder="Email" className="login_main_form_input"/>
          <input type="password" placeholder="Senha" className="login_main_form_input"/>
          <button className="login_main_form_submit">Entrar</button>
        </form>
       <span className="login_main_createAccont">Criar Conta</span>
      </main>
    </div>

)
}

export default Login;