/*_____________________________*\
* Health.jsx
*
*   Descripción:
*   Este componente carga la portada de la página "Inicio"
*   
*   Estructura:
*   - Imagen de fondo
*   - Título y texto de la portada con botón hacia la página "Nuestros platos"
*_______________________________*/

import './Health.css'
import { NavLink } from 'react-router-dom'

/**
 * Este componente muestra la portada de la página "Inicio"
 * 
 * @prop {String} className - Nombre de la clase
*/

// Componente principal para renderizar la portada de la página "Inicio"
const Health = () => {
    return(
        <>
            <div className="Health">
                {/* Imagen de fondo */}
                <div className="Health-background">
                <picture>
                    <source srcSet="/assets/main-images/bols-de-comidas.webp" type="image/jpg"/>
                    <img src="/assets/main-images/bols-de-comidas.jpg" alt="background" className="Health-img" />
                </picture>
                </div>
                {/*Título y texto de la portada con botón hacia la página "Nuestros platos"*/}
                <div className="Health-text">
                    <h1 className="Health-h1">Gana salud, vida y tiempo</h1>
                    <p className="Health-p">Sabemos lo valioso que es tu tiempo y no queremos que lo pierdas. En saviti te lo ponemos fácil para que comas sano sin cocinar.</p>
                    <div className="Health-button">
                        <button className="Health-a Button" title="Ir a la página de nuestros platos"><NavLink to={'/nuestros-platos'}>Conoce nuestros platos</NavLink></button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Health
