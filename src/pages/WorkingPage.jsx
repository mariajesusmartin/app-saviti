/*_____________________________*\
*WorkingPage.jsx
*
*   Compontentes:
*   - Header: 
*     Encabezado general de la aplicación
*   - Easy:
*     Portada de la página "Cómo funciona"
*   - HowBuy:
*     Pasos específicos para hacer pedido
*   - Action:
*     Botones de acción para iniciar sesión o ver nuestros platos
*_______________________________*/

// Importación de componentes
import Easy from '../components/Working/Easy/Easy'
import HowBuy from '../components/Working/HowBuy/HowBuy'
import Action from '../components/Working/Action/Action'
import Header from '../components/Layout/Header/Header.jsx'

// Componente que define la estructura de la página "Cómo funciona"
export const WorkingPage =()=>{

    return(
        <>
        {/*Encabezado general de la aplicación*/}
        <header><Header /></header>
        {/*Portada de la página "Cómo funciona"*/}
        <Easy />
        {/*Pasos específicos para hacer pedido*/}
        <HowBuy />
        {/*Botones de acción para iniciar sesión o ver nuestros platos*/}
        <Action />
        </>
    )
}