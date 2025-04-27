/*_____________________________*\
* Meal.jsx
*
*   Descripción:
*   Este componente carga la portada de la página "Nuestros platos"
*   
*   Estructura:
*   - Imagen de fondo
*   - Título de la página
*_______________________________*/

import './Meal.css'

/**
 * Este componente principal muestra la portada de la página "Nuestros platos"
 * 
 * @prop {String} className - Nombre de la clase
*/

// Componente principal para renderizar la portada de la página "Nuestros platos"
const Meal = ()=>{
    return(
        <>
        <div className="Meal">
            {/* Imagen de fondo */}
            <div className="Meal-background">
                <source srcSet="/public/assets/main-images/plato-con-tosta.webp" type="image/jpg"/>
                <img src="/public/assets/main-images/plato-con-tosta.jpg" alt="Background" className="Meal-img" />
            </div>
            {/* Título */}
            <h1 className="Meal-h1">Decir <span className='Meal-italic'>“Qué como hoy”</span> será cosa del pasado</h1>
        </div>
        </>
    )
}

export default Meal