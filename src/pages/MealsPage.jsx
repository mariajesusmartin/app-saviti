/*_____________________________*\
*MealsPage.jsx
*
*   Compontentes:
*   - Header: 
*     Encabezado general de la aplicación
*   - Meal:
*     Portada de la página "Nuestros platos"
*   - OurMeals:
*     Listado de todos los platos con información sobre ellos
*_______________________________*/

// Importación de componentes
import Meal from '../components/Meals/Meal/Meal'
import OurMeals from '../components/Meals/OurMeals/OurMeals'
import Header from '../components/Layout/Header/Header.jsx'

// Componente que define la estructura de la página "Nuestros platos"
export const MealsPage = () =>{
    return(
        <>
        {/*Encabezado general de la aplicación*/}
        <header><Header /></header>
        {/*Portada de la página "Nuestros platos"*/}
        <Meal />
        {/*Listado de todos los platos con información sobre ellos*/}
        <OurMeals />
        </>
    )
}