import '../css/Registry.css';

const Registry = () => {
  
  
  
  return(
    
    <>
    <div className="registry">
      <header className="registry_header">MEMORIZE</header>
      <main className="registry_main">
        <form className='registry_main_container_input'>
          <input type="name" className="registry_main_input" placeholder="Nome"/>
          <input type="email" className="registry_main_input" placeholder="Email"/>
          <input type="password" className="registry_main_input" placeholder="Senha"/>
          <button className="registry_main_submit">Criar Conta</button>
        </form>
      </main>   
    </div>
    </>

  )
}

export default Registry;