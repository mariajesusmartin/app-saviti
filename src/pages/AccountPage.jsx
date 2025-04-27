/*_____________________________*\
*AccountPage.jsx
*
*   Compontentes:
*   - HeaderAccount: 
*     Encabezado específico de la sección "Mi cuenta"
*   - MyAccount:
*     Portada de la página de "Mi cuenta"
*   - MealsAccount:
*     Platos para que el usuario seleccione
*   - CreationForm:
*     Formulario para la creación de un nuevo plato por parte del usuario
*_______________________________*/

// Importación de componentes
import HeaderAccount from '../components/Layout/HeaderAccount/HeaderAccount'
import MyAccount from '../components/Account/MyAccount/MyAccount'
import MealsAccount from '../components/Account/MealsAccount/MealsAccount'
import CreationForm from '../components/Account/CreationForm/CreationForm'

// Componente que define la estructura de la página "Mi cuenta"
export const AccountPage =()=>{

    return(
        <>
        {/*Encabezado específico de la sección "Mi cuenta"*/}
        <header><HeaderAccount /></header>
        {/* Portada de la página de "Mi cuenta"*/}
        <MyAccount />
        {/* Platos para que el usuario seleccione*/}
        <MealsAccount />
        {/* Formulario para la creación de un nuevo plato por parte del usuario*/}
        <CreationForm />
        </>
    )
}