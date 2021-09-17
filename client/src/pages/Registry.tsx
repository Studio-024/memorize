import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import '../css/Registry.css';
import { signUpUser } from '../service/api';
import { errorHelper } from '../utils/errorHelper';

const Registry = () => {
	const [name, setName] = useState('')
	const [password, setPassWord] = useState('')
	const [email, setEmail] = useState('')

	const history = useHistory()

  const  HandleSubmit = async (event: any) => {
  event.preventDefault();

	if(!name) return errorHelper.missingParameter('nome')
	if(!email) return errorHelper.missingParameter('email')
	if(!password) return errorHelper.missingParameter('senha')

	const userSbmit = {
        name,
        email,
        password
	}

	signUpUser(userSbmit) 
		.then( ()=> {
			history.push('/login')
		})

    .catch(err => errorHelper.apiError(err.response.statusCode))

}
  
return (
	<>
  <ToastContainer />
	<div className='registry'>
		<div id='registry_background' />
		<header className='registry_header'>MEMORIZE</header>

		<main className='registry_main'>
			<form className='registry_main_form' onSubmit={HandleSubmit}>
				<input type='name' className='registry_main_input' placeholder='Nome' 
					onChange={event => setName(event.target.value)} 
				/>
				<input type='email' className='registry_main_input' placeholder='Email'
					onChange={event => setEmail(event.target.value)}
				/>	
				<input type='password' className='registry_main_input' placeholder='Senha'
					onChange={event => setPassWord(event.target.value)}
				/>
				  <button className='registry_main_submit'>
					  Criar Conta
				  </button>
			</form>
          <Link to="/login" className="registry_main_login">Já tenho uma conta!</Link>
		</main>
	</div>
	</>
)
}

export default Registry