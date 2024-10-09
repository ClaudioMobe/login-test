import React, { useState } from 'react';

const Login = ({setIsAuth}) => {
    const [username, setUsername] = useState('azteca');
    const [pwd, setPwd] = useState('');
    const [mistakeCount, setMistakeCount] = useState(0);

    const handleChange = (e) => {
        const input = e.target.name;
        const value = e.target.value;
        switch (input) {
            case "username":
                setUsername(value);
                break;
            case "pwd":
                setPwd(value);
                break;
            default:
                break;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (mistakeCount>1) console.log('Contraseña incorrecta');
        if (username !== 'azteca'){
            alert('Usuario no encontrado');
            return;
        }
        if (pwd !== '12345'){
            if (mistakeCount > 2) {
                console.log('Contraseña incorrecta');
            } else {
                alert(`Contraseña incorrecta, te quedan ${2 - mistakeCount} intentos`);
                setMistakeCount(mistakeCount + 1);
            }
            return;
        }
        setIsAuth(true);
    }

    return (
        <div className='formContainer'>
            <h2>¡Bienvenido!</h2>
            <form onSubmit={handleSubmit}>
                <div className='inputContainer'>
                    <label htmlFor="username">Usuario:</label>
                    <input id="username" type="text" name="username" value={username} onChange={handleChange}/>
                </div>
                <div className='inputContainer'>
                    <label htmlFor="pwd">Contraseña:</label>
                    <input id="pwd" type="password" name="pwd" value={pwd} onChange={handleChange} />
                </div>
                <button type="submit" disabled={mistakeCount>2}>Iniciar sesión</button>
            </form>
        </div>
    );
}
 
export default Login;