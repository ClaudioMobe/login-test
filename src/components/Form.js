import React, { useState } from 'react';
import { fetchUserById } from '../api/fetchUser';

const Form = () => {
    const [ userId, setUserId ] = useState('');
    const [ userData, setUserData ] = useState({
        id: '',
        name: '',
        firstLastname: '',
        secondLastname: ''
    });

    const handleIdChange = (e) => {
        const value = Number(e.target.value);
        if (!isNaN(value)) setUserId(value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const fetchedUserData = await fetchUserById(userId);
            setUserData(fetchedUserData);
            console.log(userData);
        } catch (error) {
            alert(error);
            setUserData({
                id: '',
                name: '',
                firstLastname: '',
                secondLastname: ''
            });
        }
    }
    
    return (
        <div className='formContainer'>
            <h2>Accede a la información</h2>
            <form onSubmit={handleSubmit}>
                <div className='inputContainer'>
                    <label htmlFor="id">Id:</label>
                    <input id="id" type="text" value={userId} onChange={handleIdChange}/>
                </div>
                <div className='inputContainer'>
                    <label htmlFor="name">Nombre:</label>
                    <input id='name' type="text" value={userData.name} disabled/>
                </div>
                <div className='inputContainer'>
                    <label htmlFor="firstLastname">Primer apellido:</label>
                    <input id='firstLastname' type="text" value={userData.firstLastname} disabled/>
                </div>
                <div className='inputContainer'>
                    <label htmlFor="secondLastname">Segundo apellido:</label>
                    <input id='secondLastname' type="text" value={userData.secondLastname} disabled/>
                </div>
                <button type="submit">Buscar usuario</button>
            </form>
        </div>
    );
}
 
export default Form;