/*_____________________________*\
* OurMeals.jsx
*
*   Descripción:
*   Este componente carga el listado de todos los platos con información sobre ellos
*   
*   Estructura:
*   - Título de la sección
*   - Lista de platos: platos obtenidos desde una API
*   - Botón de acción: redirigir a la página "Iniciar sesión"
*   - Imagen al fondo
*
*   Componentes: 
*   - OurMeals:
*     Componente principal
*   - Meal: 
*     Componente que representa cada plato
*   - Info:
*     Componente que representa la información concreta de cada plato
*_______________________________*/

import { useState, useEffect } from 'react'
import './OurMeals.css'

/**
 * Este componente principal muestra el listado de platos
 * 
 * @prop {String} className - Nombre de la clase
 * @prop {Array} meals - Lista de platos obtenidos desde una API
 * @hook {useState} meals - Manejo del estado local para almacenar los platos
 * @hook {useEffect} operationData - Llamada a la función para obtener los datos de la API
 */

// Componente principal para renderizar los platos
const OurMeals =()=>{
    
    // useState para manejar el estado de los platos
    const [meals, setMeals] = useState([])

    // Función para variable de entorno
    const baseUrl = import.meta.env.VITE_API

    // Función para obtener los datos desde la API
    const operationData = async()=>{
        let controller = new AbortController()
        let options ={
            method: 'get',
            signal: controller.signal
        }
        
        const urlMeals = `${baseUrl}/meals`

        await fetch(urlMeals, options)
        .then(res => res.json()
        .then(data => setMeals(data))
        .catch(err=> console.log(err))
        .finally(()=>controller.abort())
    )
    }
    // Hook que ejecuta operationData
    useEffect(()=>{
        operationData()
    },[])

    return(
        <>
        <div className="Meals">
            {/* Título */}
            <h2 className="Meals-h2">Nuestros platos</h2>
            {/* Lista de platos */}
            <ul className="Meals-ul">
                {meals && meals.map(eachMeal =>
                    <Meal key={eachMeal.id}{...eachMeal}/>
                )}
            </ul>
            {/* Botón de acción */}
            <div className="Meals-button">
                <a href={'/login'} title="Ir a la página de inicio de sesión" className="Meals-a Button">Comienza tu pedido</a>
            </div>
        </div>
        {/* Imagen final */}
        <picture>
            <source srcSet="/assets/main-images/alimentos-en-una-mesa.webp" type="image/jpg"/>
            <img src="/assets/main-images/alimentos-en-una-mesa.jpg" alt="Imagen de alimentos sobre una mesa" className="Meals-img Meals-img--bottom" />
        </picture>
        </>
    )
}

/**
 * Este componente renderiza cada plato
 *
 * @prop {Number} id - Id de cada plato
 * @prop {String} image - URL de la imagen del plato
 * @prop {String} name - Nombre del plato
 * @prop {Number} price - Precio del plato
 * @prop {String} ingredients - Ingredientes del plato
 * @prop {Array} allergens - Iconos de los alérgenos que contiene el plato
 */

// Componente que renderiza cada plato
const Meal =(props)=>{

    const{id,image, name, price, ingredients, allergens} = props

    return(
        <>
        <li className="Meals-li">
            {/* Imagen del plato */}
            <picture>
            <img src={image} alt="Imagenes de los plato" className="Meals-img" />
            </picture>
            {/* Información restante sobre el plato */}
            <Info
            key={id} 
            name={name}
            price={price}
            ingredients={ingredients}
            allergens={allergens}
            />
        </li>
        </>
    )
}

/**
 * Este componente renderiza la información de cada plato
 *
 * @prop {String} name - Nombre del plato
 * @prop {Number} price - Precio del plato
 * @prop {String} ingredients - Ingredientes del plato
 * @prop {Array} allergens - Iconos de los alérgenos que contiene el plato
 */

//Componente que renderiza la información de cada plato
const Info =(props)=>{

    const {name, price, ingredients, allergens} = props

    return(
        <>
        <div className="Meals-details">
                <div className="Meals-info">
                    {/* Nombre del plato*/}
                    <h3 className="Meals-h3">{name}</h3>
                    {/* Ingredientes del plato */}
                    <p className="Meals-p">{ingredients}</p>
                </div>
                <div className="Meals-extra">
                    {/* Precio del plato*/}
                    <span className="Meals-price">{price} €</span>
                    {/* Listado con alérgenos */}
                    <ul className="Meals-allergens">
                        <li className="Meals-allergen">
                            {allergens && allergens.map(eachIcon=>
                            <img key={eachIcon.id} src={eachIcon.icon} alt="Iconos de alérgenos" className="Meals-icons" />
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default OurMeals