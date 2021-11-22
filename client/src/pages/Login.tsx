import { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import '../css/Login.css'
import { IUserLogin } from '../domain/entities/User';
import { loginUser } from '../service/api';
import { isAuthenticated } from '../service/auth';
import { errorHelper } from '../utils/errorHelper';

const Login = () => {
  const [password, setPassWord] = useState('')
  const [email, setEmail] = useState('')
  const history = useHistory()

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if(!email) return errorHelper.missingParameter('email')
    if(!password) return errorHelper.missingParameter('senha')

    const userSbmit: IUserLogin = {
          email,
          password
    }
	  
    loginUser(userSbmit)
      .then(() => history.push('/dashboard'))
      .catch(err => errorHelper.apiError(err.response.statusCode))
  }

  return(
    <>
    <ToastContainer/>
    <div className="login">
      <div id="login_background"/>
      <header className="login_header">MEMORIZE</header>
      <main className="login_main">
       <form className="login_main_form" onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" className="login_main_form_input"
            onChange={event => setEmail(event.target.value)}
          />
          <input type="password" placeholder="Senha" className="login_main_form_input"
            onChange={event => setPassWord(event.target.value)}
          />
        <button className="login_main_form_submit">Entrar</button>
        </form>
       <Link to='/sign' id="login_main_createAccont"> Criar Conta </Link>
      </main>
    </div>
    </>
		)
}

export default Login
