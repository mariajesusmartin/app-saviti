/*_____________________________*\
* Testimonials.jsx
*
*   Descripción:
*   Este componente carga los testimonios de otros usuarios
*   
*   Estructura:
*   - Título de la sección
*   - Lista con los testimonios de los usuarios
*
*   Componentes: 
*   - Testimonials:
*     Componente principal
*   - Testimony: 
*     Componente que representa cada testimonio con puntuación, texto y nombre del usuario
*_______________________________*/

import { useEffect, useState } from 'react'
import './Testimonials.css'

/**
 * Este componente principal muestra los testimonios de otros usuarios
 * 
 * @prop {String} className - Nombre de la clase
 * @prop {Array} testimonials - Lista de testimonios obtenidos desde una API
 * @hook {useState} testimonials - Manejo del estado local para almacenar los datos de los testimonios
 * @hook {useEffect} operationData - Llamada a la función para obtener los datos de la API
 */

// Componente principal para renderizar los testimonios de otros usuarios
const Testimonials =()=>{

    // useState para manejar el estado de los testimonios
    const [testimonials,setTestimonials] = useState([])

    // Función para variable de entorno
    const baseUrl = import.meta.env.VITE_API

    // Función para obtener los datos desde la API
    const operationData = async () => {
        let controller = new AbortController()
        let options ={
            method: 'get',
            signal: controller.signal
        }

        const urlTestimonials = `${baseUrl}/testimonials`

        await fetch (urlTestimonials, options)
        .then(res => res.json())
        .then(data => setTestimonials(data))
        .catch(err => console.log(err))
        .finally(()=> controller.abort())
    } 
    
    // Hook que ejecuta operationData
    useEffect(()=>{
        operationData()
    },[])

    return(
    <>
    <div className="Testimonials">
        {/* Título de la sección */}
        <h2 className="Testimonials-h2">Lo que dicen nuestros clientes</h2>
        {/* Lista de testimonios */}
        <ul className="Testimonials-ul">
            {testimonials && testimonials.map(eachTestimony =>
            <Testimony key={eachTestimony.id}{...eachTestimony}/>
            )}
        </ul>
    </div>
    </>
    )
}

/**
 * Este componente renderiza cada testimonio
 * 
 * @prop {String} customer - Nombre de los usuarios que escriben los testimonios
 * @prop {String} note - Nota del 1 al 5
 * @prop {String} stars - Imagen de las estrellas rellenas que corresponde a la notaç
 * @prop {String} testimony - Texto que escriben los usuarios sobre su experiencia de cliente
 * 
 */

// Componente que renderiza cada testimonio escrito por el usuario
const Testimony = (props)=>{

    const {customer, note, stars, testimony} = props

    return(
        <>
        <li className="Testimonials-li">
            {/* Sección con la nota y la imagen de las estrellas del 1 al 5 */}
            <div className="Testimonials-note">
                <img src={stars} alt="stars" className="Testimonials-img" />
                <span className="Testimonials-span">{note}/5</span>
            </div>
            {/* Texto escrito por el usuario */}
            <p className="Testimonials-p">{testimony}</p>
            {/* Nombre del usuario */}
            <span className="Testimonials-name">{customer}</span>
        </li>
        </>
    )
}


export default Testimonials