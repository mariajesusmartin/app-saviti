/*_____________________________*\
* MyAccount.jsx
*
*   Descripción:
*   Este componente carga la portada de la página "Mi cuenta"
*   
*   Estructura:
*   - Imagen de fondo
*   - Título de la página
*_______________________________*/

import { useState, useEffect } from 'react'
import './MyAccount.css'

/**
 * Este componente muestra la portada de la página "Mi cuenta"
 * 
 * @prop {String} className - Nombre de la clase
 * @hook {useState} user - Manejo del nombre de usuario
 * @hook {useEffect} - Recupera el nombre del usuario desde localStorage
*/

// Componente principal para renderizar la portada de la página "Mi cuenta"
const MyAccount =()=>{

    // useState para manejar el nombre de usuario
    const[user,setUser] = useState("")

    // Hook para obtener el usuario del localStorage
    useEffect(()=>{
        const userUser = localStorage.getItem("user")
        // Condicional si existe o no el nombre de usuario
        if(userUser){
            setUser(userUser)
        }else{
            setUser("Usuario")
        }
    },[])

    return(
        <>

        <div className="MyAccount">
            {/* Imagen de fondo */}
            <div className="MyAccount-background">
                <picture>
                    <source srcSet="/assets/main-images/ensalada-de-salmon.webp" type="image/jpg"/>
                    <img src="/assets/main-images/ensalada-de-salmon.jpg" alt="Imagen de fondo con una ensalada de salmón ahumado" className="MyAccount-img" />
                </picture>
            </div>
            {/* Título con nombre de usuario que ha iniciado sesión */}
            <h1 className="MyAccount-h1">Qué bien que estés de vuelta {user}</h1>
        </div>        
        
        </>
    )
}


export default MyAccount