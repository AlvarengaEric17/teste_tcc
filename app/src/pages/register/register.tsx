import './style.css'
import Logo from '../../assets/logoteste.png'

function Register() {

    function enviar(){
        alert("login efetuado com sucesso!")
    }

    return (
        <div className="container">
            <div className="login">
                <div className="card">
                    <img src={Logo} alt="Logo da empresa" id='logo' className='logo' />
                    <h2>Cadastro</h2>
                    <h1>Login</h1>

                    <div className='forms'>

                        <input type="email" required placeholder='Email' id='email' />

                        <input type="password" required id="password" placeholder='Senha' />
                    </div>

                    <div className="logar">
                        <a id='esqueciSenha' href="/">Esqueci minha senha </a>
                        <a id='criarConta' href='#'>Criar conta</a>
                    </div>


                    <button onClick={enviar} type='submit'>Login</button>
                </div>
            </div>

            <div className="image">

            </div>
        </div>


    )
}

export default Register
