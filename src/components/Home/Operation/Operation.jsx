/*_____________________________*\
* Operation.jsx
*
*   Descripción:
*   Este componente carga los pasos generales para hacer pedido
*   
*   Estructura:
*   - Texto introductorio: explica el propósito del proceso de compra
*   - Lista de pasos: pasos básicos obtenidos desde una API
*   - Botón de acción: redirigir a la página "Nuestros platos"
*
*   Componentes: 
*   - Operation:
*     Componente principal
*   - Steps: 
*     Componente que representa cada paso individual con icono, título y descripción
*_______________________________*/

import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './Operation.css'

/**
 * Este componente principal muestra el proceso de compra simplificado
 * 
 * @prop {String} className - Nombre de la clase
 * @prop {Array} steps - Lista de pasos básicos obtenidos desde una API
 * @hook {useState} steps - Manejo del estado local para almacenar los pasos
 * @hook {useEffect} operationData - Llamada a la función para obtener los datos de la API
 */


// Componente principal para renderizar los pasos generales para hacer pedido
const Operation =()=>{

    // useState para manejar el estado de los pasos
    const [steps,setSteps] = useState([])

    // Función para variable de entorno
    const baseUrl = import.meta.env.VITE_API

    // Función para obtener los datos desde la API
    const operationData = async()=>{
        let controller = new AbortController()
        let options ={
            method: 'get',
            signal: controller.signal
        }

        const urlBasicSteps = `${baseUrl}/basicsteps`

        await fetch(urlBasicSteps, options)
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
            <div className="Operation">
                {/* Texto introductorio */}
                <div className="Operation-text">
                    <h2 className="Operation-h2">Te lo ponemos fácil</h2>
                    <p className="Operation-p Operation-p--title">Hemos diseñado el proceso de compra pensando en ti. En solo unos pocos clics tendrás tu menú semanal listo para calentar en el microondas.</p>
                </div>
                {/* Lista de pasos */}
                <ul className="Operation-ul">
                    {steps && steps.map(eachStep=>
                    <Steps key={eachStep.id}{...eachStep}/>   
                    )}
                </ul>
                {/* Botón que redirige a la página "Nuestros-platos" */}
                <div className="Operation-button">
                    <button className="Operation-a Button" title="Ir a la página de nuestros platos"><NavLink to={'/nuestros-platos'}>Nuestros platos</NavLink></button>
                </div>
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

// Componente que renderiza cada paso básico del proceso
const Steps = (props) =>{

    const {icon,title,info} = props

    return(
        <>
        <li className="Operation-li">
            {/* Imagen del paso */}
            <picture>
            <img src={icon} alt="Pasos a seguir para hacer un pedido" className="Operation-img" />
            </picture>
            {/*  Título del paso */}
            <h3 className="Operation-h3">{title}</h3>
            {/* Descripción del paso */}
            <p className="Operation-p">{info}</p>
        </li>
        </>
    )
}
export default Operation
