import './style.css'
import Logo from './assets/logo (2).png'

function App() {

  return (
    <div className="container">
      <div className="login">
        <img src={Logo} alt="Logo da empresa" id='logo' />
        <h2>Bem-vindo(a) ao Stock Pro</h2>
        <h1>Login</h1>

        <div className='forms'>

          <input type="email" required placeholder='Email' id='email' />

          <input type="password" id="password" placeholder='Senha' />
        </div>

        <div className="logar">
          <a id='esqueciSenha' href="#">Esqueci minha senha </a>
          <a id='criarConta' href='#'>Criar conta</a>
        </div>


        <button type='submit'>Login</button>
      </div>

      <div className="image">

      </div>
    </div>


  )
}

export default App
