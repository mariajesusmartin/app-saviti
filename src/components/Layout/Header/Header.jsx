/*_____________________________*\
* Header.jsx
*
*   Descripción:
*   Este componente carga el header general de la aplicación
*   
*   Estructura:
*   - Imagen del logo
*   - Menú de navegación
*
*   Componentes: 
*   - Header:
*     Componente principal
*_______________________________*/

import './Header.css'
import { NavLink } from 'react-router-dom'

/**
 * Este componente muestra el header general
 * 
 * @prop {String} className - Nombre de la clase
*/

// Componente principal que renderiza el header general de la aplicación
const Header = () =>{
    return(
        <>
        <header className="Header">
            <div className="Header-logo">
                {/* Imagen del logo */}
                <a href={'/'} className="Header-a">
                    <img src="././public/assets/saviti.png" alt="logotipo de saviti" className='Header-img'/>
                </a>
            </div>
            <div className='Header-menu'>
                {/* Menú de navegación */}
                <nav className="Header-nav">
                    <ul className="Header-ul">
                        <li className="Header-li"><NavLink to={'/como-funciona'}>Cómo funciona</NavLink></li>
                        <li className="Header-li"><NavLink to={'/nuestros-platos'}>Nuestros platos</NavLink></li>
                        <li className="Header-li Header-li--login"><NavLink to={'/login'}>Iniciar sesión</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
        </>
    )
}
export default Header

