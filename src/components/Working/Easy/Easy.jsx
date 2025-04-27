/*_____________________________*\
* Easy.jsx
*
*   Descripción:
*   Este componente carga la portada de la página "Cómo funciona"
*   
*   Estructura:
*   - Imagen de fondo
*   - Título de la página
*_______________________________*/

import './Easy.css'

/**
 * Este componente principal muestra la portada de la página "Cómo funciona"
 * 
 * @prop {String} className - Nombre de la clase
*/

// Componente principal para renderizar la portada de la página "Cómo funciona"
const Easy =()=>{
    return(
        <>
        <div className="Easy">
            {/* Imagen de fondo */}
            <div className="Easy-background">
                <picture>
                <source srcSet="/assets/main-images/bol-de-ensalada.webp" type="image/jpg"/>
                <img src="/assets/main-images/bol-de-ensalada.jpg" alt="Imagen de fondo con un bol de ensalada" className="Easy-img" />
                </picture>
            </div>
            {/* Título */}
            <h1 className="Easy-h1">Te lo ponemos fácil</h1>
        </div>
        </>
    )
}

export default Easy