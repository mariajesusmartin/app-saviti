/*_____________________________*\
*LoginPage.jsx
*
*   Compontentes:
*   - Header: 
*     Encabezado general de la aplicación
*   - Login:
*     Formulario para iniciar sesión en una cuenta
*_______________________________*/

// Importación de componentes
import Login from '../components/Login/Login.jsx'
import Header from '../components/Layout/Header/Header.jsx'

// Componente que define la estructura de la página "Iniciar sesión"
export const LoginPage =()=>{
    return(
        <>
        {/*Encabezado general de la aplicación*/}
        <header><Header /></header>
        {/* Formulario para iniciar sesión en una cuenta*/}
        <Login />
        </>
    )
}