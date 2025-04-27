/*_____________________________*\
* Action.jsx
*
*   Descripción:
*   Este componente carga los botones de acción para iniciar sesión o ver nuestros platos desde la página "Cómo funciona"
*   
*   Estructura:
*   - Título: contiene pregunta para realizar una acción
*   - Enlaces: para ir a la página "Nuestros platos" ó "Iniciar sesión" según decida el usuario
*
*   Componentes: 
*   - Action:
*     Componente principal
*   - Links: 
*     Componente que expone las dos acciones posibles a través de enlaces
*_______________________________*/

import './Action.css'

/**
 * Este componente principal muestra los botones de acción para iniciar sesión o ver nuestros platos desde la página "Cómo funciona"
 * 
 * @prop {String} className - Nombre de la clase
*/

// Componente principal para renderizar el título y los botones de acción
const Action =()=>{
    return(
        <>
        <div className="Action">
            {/* Imagen de fondo */}
            <h2 className="Action-h2">
                <span className="Action-span">Una vez listo, empezamos a cocinar para ti.</span>
                <span className="Action-span">¿Por dónde empezamos?</span></h2>
            <ul className="Action-ul">
            {/* Enlaces */}
            <Links />
            </ul>

        </div>
        </>
    )
}

/**
 * Este componente muestra las dos acciones posibles a través de enlaces
 * 
 * @prop {String} className - Nombre de la clase
*/

//Componente para renderizar las dos acciones posibles a través de enlaces
const Links =()=>{

    return(
        <>
        {/* Enlace 1: ir a "Nuestros platos" */}
        <li className="Action-li">
            <a href={'/nuestros-platos'} title="Ir a la página de nuestros platos" className="Action-a Button">Ver los platos</a>
        </li>
        {/* Enlace 2: ir a "Iniciar sesión" */}
        <li className="Action-li">
            <a href={'/login'} title="Ir a la página de inicio de sesión" className="Action-a Button">Iniciar sesión</a>
        </li>
        </>
    )
}

export default Action