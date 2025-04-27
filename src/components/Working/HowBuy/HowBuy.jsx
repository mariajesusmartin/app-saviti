/*_____________________________*\
* HowBuy.jsx
*
*   Descripción:
*   Este componente carga los pasos específicos para hacer pedido
*   
*   Estructura:
*   - Título de la sección
*   - Lista de pasos: pasos específicos obtenidos desde una API
*
*   Componentes: 
*   - HowBuy:
*     Componente principal
*   - Steps: 
*     Componente que representa cada paso individual con icono, título y descripción
*_______________________________*/

import { useState, useEffect } from 'react'
import './HowBuy.css'

/**
 * Este componente principal muestra el proceso de compra más específico
 * 
 * @prop {String} className - Nombre de la clase
 * @prop {Array} steps - Lista de pasos específicos obtenidos desde una API
 * @hook {useState} steps - Manejo del estado local para almacenar los pasos
 * @hook {useEffect} operationData - Llamada a la función para obtener los datos de la API
 */

// Componente principal para renderizar los pasos específicos para hacer pedido
const HowBuy =()=>{

    // useState para manejar el estado de los pasos
    const [steps, setSteps] = useState([])

    // Importación de variables de entorno
    const {VITE_SPECIFICSTEPS}= import.meta.env

    // Función para obtener los datos desde la API
    const operationData = async()=>{
        let controller = new AbortController()
        let options ={
            method: 'get',
            signal: controller.signal
        }

        await fetch(VITE_SPECIFICSTEPS, options)
        .then(res => res.json())
        .then(data => setSteps(data))
        .catch(err=>console.log(err))
        .finally(()=>controller.abort())
    }
    // Hook que ejecutar operationData
    useEffect(()=>{
        operationData()
    }, [])

    return(
        <>
        <div className="HowBuy">
            {/* Título de la sección */}
            <h2 className="HowBuy-h2">Pasos para comenzar tu pedido</h2>
            {/* Lista de pasos */}
            <ul className="HowBuy-ul">
                {steps && steps.map(eachStep =>
                    <Steps key={eachStep.id}{...eachStep}/>
                )}
            </ul>
        </div>
        </>
    )
}

/**
 * Este componente renderiza cada paso
 *
 * @prop {String} icon - URL de la imagen relacionada con el paso
 * @prop {String} title - Título del paso
 * @prop {String} info - Descripción del paso 
 */

// Componente que renderiza cada paso específico del proceso
const Steps =(props)=>{

    const {icon, title, info} = props

    return(
        <>
        <li className="HowBuy-li">
            {/* Imagen del paso */}
            <picture>
            <img src={icon} alt="Pasos a seguir para hacer un pedido" className="HowBuy-img" />
            </picture>
            {/*  Título del paso */}
            <h3 className="HowBuy-h3">{title}</h3>
            {/* Descripción del paso */}
            <p className="HowBuy-p">{info}</p>
        </li>
        </>
    )
}

export default HowBuy