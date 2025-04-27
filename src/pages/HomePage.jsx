/*_____________________________*\
*HomePage.jsx
*
*   Compontentes:
*   - Header: 
*     Encabezado general de la aplicación
*   - Health:
*     Portada de la página "Inicio"
*   - Testimonials:
*     Testimonios de otros usuarios
*   - Operation:
*     Pasos generales para hacer pedido
*   - Questions:
*     Preguntas frecuentes de los usuarios
*_______________________________*/


// Importación de componentes
import Health from '../components/Home/Health/Health.jsx'
import Testimonials from '../components/Home/Testimonials/Testimonials.jsx'
import Operation from '../components/Home/Operation/Operation.jsx'
import Questions from '../components/Home/Questions/Questions.jsx'
import Header from '../components/Layout/Header/Header.jsx'

// Componente que define la estructura de la página "Inicio"
export const HomePage =()=>{
    return(
        <>
        {/*Encabezado general de la aplicación*/}
        <header><Header /></header>
        {/*Portada de la página "Inicio"*/}
        <Health />
        {/*Testimonios de otros usuarios*/}
        <Testimonials />
        {/*Pasos generales para hacer pedido*/}
        <Operation />
        {/*Preguntas frecuentes de los usuarios*/}
        <Questions />
        </>
    )
}