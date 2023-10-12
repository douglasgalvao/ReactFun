import './index.css';
import { ProfileIcon } from '../../Icons/ProfileIcon/Index'
import { LockIcon } from '../../Icons/LockIcon/Index'

export const LoginPage = () => {
    return (
        <div className="login-container">
            <div className="login-box">
                <h1 className="login-title">Iniciar Sessão</h1>
                <form id="formLogin" className="login-form">
                    <div className="form-group">
                        <div className='userLabel'>
                            <ProfileIcon fontSize='large' color='white' />
                            <label htmlFor="username">User name:</label>
                        </div>
                        <input type="text" id="username" name="username" />
                    </div>
                    <div className="form-group">
                        <div className='userLabel'>
                            <LockIcon fontSize='large' color='white' />
                            <label htmlFor="password">Password:</label>
                        </div>
                        <input type="password" id="password" name="password" />
                    </div>
                </form>
                <button type="submit" form='formLogin' className="login-button">Entrar</button>
            </div>
        </div>
    );
}


