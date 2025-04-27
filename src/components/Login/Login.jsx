/*_____________________________*\
* Login.jsx
*
*   Descripción:
*   Este componente permite a los usuarios iniciar sesión ingresando su correo electrónico y contraseña.
*   Verifica las credenciales a través de una API y redirige al usuario a su cuenta si tiene éxito.
*   
*   Estructura:
*   - Imagen de portada
*   - Título del formulario
*   - Formulario: Incluye campos de email, contraseña y botón de envío
*   - Mensaje de error si el usuario no existe
*
*   Componentes: 
*   - Login:
*     Componente principal
*_______________________________*/

import { useRef, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

/**
 * Este componente principal muestra el formulario de autenticación de inicio de sesión
 * 
 * @prop {String} className - Nombre de la clase
 * @hook {useState} email - Manejo del estado del correo electrónico ingresado por el usuario
 * @hook {useState} password - Manejo del estado de la contraseña ingresada por el usuario
 * @hook {useState} error - Manejo del estado de los errores relacionados con el inicio de sesión
 * @hook {useNavigate} operationData - Redirección a una ruta dentro de la aplicación
 */

// Componente principal para renderizar el formulario de inicio de sesión
const Login =()=>{

    //useState para manejar los valores del formulario y posibles errores
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    // Importación de variables de entorno
    const {VITE_USERS}= import.meta.env

    // Hook para redirigir al usuario tras iniciar sesión correctamente
    const navigate = useNavigate()

    /** 
     * Función para manejar el envío del formulario
     * Valida las credenciales enviándolas al servidor y gestiona la respuesta
     * 
     * @param {Event} e - Evento del envío del formulario que previene, evita la recarga automática
     */

    const handleSubmit = async(e)=>{
        e.preventDefault()

        // Configuración para el inicio de sesión
        try{
            // Función para hacer una llamada a una API que contiene las credenciales de los usuarios
            const response = await fetch(VITE_USERS, {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({email, password})
            })
            const data = await response.json()
            // Condicional para gestionar la acción según las credenciales son válidas o no
            if(data.success){
                localStorage.setItem("user", data.user)
                navigate("/mi-cuenta")
            }else{
                setError(data.message)
            }
        // Manejo de errores relacionados con la conexión o la llamada
        }catch(err){
            setError("Error al conectar")
        }
    }


    return(
        <>
        <div className="Login">
            {/* Imagen de portada */}
            <picture>
                <source srcSet="/assets/main-images/alimentos-en-una-mesa-02.webp" type="image/jpg"/>
                <img src="/assets/main-images/alimentos-en-una-mesa-02.jpg" alt="Imagen de alimentos sobre una mesa" className="Login-img" />
            </picture>
            {/* Formulario de inicio de sesión */}
            <div className="Login-login">
                {/* Título */}
                <h2 className='Login-h2'>Inicia sesión y empieza a saborear</h2>
                {/* Formulario */}
                <form className="Login-form" onSubmit={handleSubmit}>
                    {/* Campo para el email */}
                    <label className="Login-label">Email</label>
                    <input
                    type="email"
                    placeholder='Ingresar email'
                    className='Login-input'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}/>
                    {/* Campo para la contraseña */}
                    <label className="Login-label">Contraseña</label>
                    <input
                    type="password"
                    placeholder='Ingresar contraseña'
                    className='Login-input'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}/>
                    {/* Botón de envío */}
                    <button className='Login-button ButtonForm' type="submit">Iniciar sesión</button>
                </form>
                {error && <p className="Login-p Login-p--nouser">El usuario no existe</p>}
            </div>
        </div>
        
        </>
    )
}


export default Login