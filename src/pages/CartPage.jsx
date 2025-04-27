/*_____________________________*\
*CartPage.jsx
*
*   Compontentes:
*   - HeaderAccount: 
*     Encabezado específico de la sección "Mi cuenta"
*   - Cart:
*     Lista de productos del carrito, tanto platos seleccionados como creados
*_______________________________*/

// Importación de componentes
import Cart from '../components/Cart/Cart/Cart'
import HeaderAccount from '../components/Layout/HeaderAccount/HeaderAccount'

//Componente que define la estructura de la página "Carrito"
export const CartPage =()=>{
    return(
        <>
        {/*Encabezado específico de la sección "Mi cuenta"*/}
        <header><HeaderAccount/></header>
        {/*Lista de productos del carrito, tanto platos seleccionados como creados*/}
        <Cart />
        </>
    )
}