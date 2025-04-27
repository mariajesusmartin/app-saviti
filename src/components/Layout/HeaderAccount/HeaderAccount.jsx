/*_____________________________*\
* HeaderAccount.jsx
*
*   Descripción:
*   Este componente carga el header especial para cuando el usuario tenga iniciada la sesión
*   
*   Estructura:
*   - Imagen del logo
*   - Menú de navegación
*
*   Componentes: 
*   - HeaderAccount:
*     Componente principal
*_______________________________*/

import { NavLink } from 'react-router-dom'
import './HeaderAccount.css'

/**
 * Este componente muestra el header especial para cuando el usuario tenga iniciada la sesión
 * 
 * @prop {String} className - Nombre de la clase
*/

// Componente principal que renderiza el header especial para cuando el usuario tenga iniciada la sesión
const HeaderAccount = () =>{
    return(
        <>
        <header className='HeaderAccount'>
            <div className="HeaderAccount-logo">
                {/* Imagen del logo */}
                <a href={'/'} className="HeaderAccount-a">
                    <img src="/assets/saviti.png" alt="logotipo de saviti" className='HeaderAccount-img'/>
                </a>
            </div>
            <div className='HeaderAccount-menu'>
                {/* Menú de navegación */}
                <nav className="HeaderAccount-nav">
                    <div className="HeaderAccount-wrapper">
                        <div className="HeaderAccount-link"><NavLink to={'/mi-cuenta'} title='Ir a tu cuenta'>Mi cuenta</NavLink></div>
                        <div className="HeaderAccount-link Header-li--login">
                            <NavLink to={'/carrito'} title='Ir al carrito'>Carrito</NavLink>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
        </>
    )
}
export default HeaderAccount

