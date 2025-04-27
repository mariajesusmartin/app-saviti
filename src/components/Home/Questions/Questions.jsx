/*_____________________________*\
* Questions.jsx
*
*   Descripción:
*   Este componente muestra una lista de preguntas frecuentes por parte de los usuarios con respuestas que pueden expandirse y contraerse dinácamente
*   
*   Estructura:
*   - Título
*   - Listado de preguntas que se compone de: pregunta, iconos de expandir y contraer y respuesta
*
*   Componentes: 
*   - Questions:
*     Componente principal
*   - Question: 
*     Componente que detala cada pregunta con su respuesta
*_______________________________*/

import './Questions.css'
import {Svgplus, Svgminus} from '../../Svg/Svg'
import { useState } from 'react'

/**
 * Este componente principal muestra una lista de preguntas frecuentes por parte de los usuarios con respuestas que pueden expandirse y contraerse dinácamente
 * 
 * @prop {String} className - Nombre de la clase
*/

// Componente principal para renderizar las preguntas frecuentes de los usuarios
const Questions =()=>{

    return(
        <>
        <div className="Questions">
            {/* Título de la sección */}
            <h2 className="Questions-h2">Preguntas más frecuentes</h2>
            {/* Listado de preguntas */}
            <ul className="Questions-ul">
              <Question />  
            </ul>
        </div>
        </>
    )
}

/**
 * Este componente representa una pregunta individual y su respuesta
 * @prop {String} className - Nombre de la clase
 * @hook {useState} question - almacena el estado de la pregunta seleccionada (expandida o contraída)
*/

const Question =() =>{
    
    // useState para manejar el estado de las preguntas
    const [question, setQuestion] = useState ()

    // Función para cambiar el estado y expandir o contraer la respuesta
    const openQuestion = (valor) => setQuestion(valor)
    
    return(
        <>
        {/* Sección pregunta 1 */}
        <li className="Questions-li">
        <div className="Questions-menu">
            {/* Pregunta */}
            <h3 className="Questions-h3">¿Cuánto tiempo tardan en entregar los pedidos?</h3>
            <div className="Questions-icons">
                {/* Botón para expandir la respuesta */}
                <button className={`Questions-button Questions-button--plus ${question === 0 ?'isActive' : ''}`} onClick={()=>openQuestion(0)}>
                <Svgplus />
                </button>
                {/* Botón para contraer la respuesta */}
                <button className={`Questions-button Questions-button--minus ${question === 0 ?'' : 'isActive'} ${question === 1 ?'isActive' : ''}`} onClick={()=>openQuestion(1)}>
                <Svgminus />
                </button>
            </div>
        </div>
        {/* Respuesta */}
        <p className={`Questions-p ${question === 0 ?'isActive' : ''}`}>Nuestro equipo de esfuerza por entregar los pedidos en un plazo de 24 a 48 horas. Siempre recibirás un correo de confirmación.</p>
        </li>
        {/* Sección pregunta 2 */}
        <li className="Questions-li">
            <div className="Questions-menu">
                {/* Pregunta */}
                <h3 className="Questions-h3">¿Cuánto duran los platos en el frigo?</h3>
                <div className="Questions-icons">
                    {/* Botón para expandir la respuesta */}
                    <button className={`Questions-button Questions-button--plus ${question === 2 ?'isActive' : ''}`} onClick={()=>openQuestion(2)}>
                    <Svgplus />
                    </button>
                    {/* Botón para contraer la respuesta */}
                    <button className={`Questions-button Questions-button--minus ${question === 2 ?'' : 'isActive'} ${question === 3 ?'isActive' : ''}`} onClick={()=>openQuestion(3)}>
                    <Svgminus />
                    </button>
                </div>
            </div>
            {/* Respuesta */}
            <p className={`Questions-p ${question === 2 ?'isActive' : ''}`}>Nuestros platos están diseñados para mantenerse frescos hasta 7 días en el frigorífico, siempre que se sigan las instrucciones de almacenamiento que proporcionamos en el paquete.</p>
        </li>
        {/* Sección pregunta 3 */}
        <li className="Questions-li">
            <div className="Questions-menu">
                {/* Pregunta */}
                <h3 className="Questions-h3">¿Tiene suscripción o puedo pedir de forma puntual?</h3>
                <div className="Questions-icons">
                    {/* Botón para expandir la respuesta */}
                    <button className={`Questions-button Questions-button--plus ${question === 4 ?'isActive' : ''}`} onClick={()=>openQuestion(4)}>
                    <Svgplus />
                    </button>
                    {/* Botón para contraer la respuesta */}
                    <button className={`Questions-button Questions-button--minus ${question === 4 ?'' : 'isActive'} ${question === 5 ?'isActive' : ''}`} onClick={()=>openQuestion(5)}>
                    <Svgminus />
                    </button>
                </div>
            </div>
            {/* Respuesta */}
            <p className={`Questions-p ${question === 4 ?'isActive' : ''}`}>No contamos con la opción de suscripción. Podrás hacer tu pedido de forma puntual siempre. En tu cuenta quedarán registrados tus pedidos para que puedas repetir el pedido cuando quieras.</p>
        </li>
    </>
    )
}

export default Questions

