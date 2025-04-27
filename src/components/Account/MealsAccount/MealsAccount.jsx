/*_____________________________*\
* MealsAccount.jsx
*
*   Descripción:
*   Este componente carga el listado de todos los platos con información sobre ellos y un botón dentro de cada plato para poder añadir al carrito.
*   Además también carga el enlace que te lleva al formulario para crear un plato nuevo
*   
*   Estructura:
*   - Título de la sección
*   - Botón: redirige al formulario para crear un palto nuevo
*   - Lista de platos: platos obtenidos desde una API con un botón de añadir en cada uno
*
*   Componentes: 
*   - MealsAccount:
*     Componente principal
*   - Meal: 
*     Componente que representa cada plato
*   - Info:
*     Componente que representa la información concreta de cada plato
*_______________________________*/

import { useEffect, useContext} from 'react'
import {ContextCart} from '../../../contexts/ContextCart/ContextCart'
import './MealsAccount.css'

/**
 * Este componente principal muestra el listado de platos
 * 
 * @prop {String} className - Nombre de la clase
 * @hook {useContext} ContextCart - Acceso al contexto global para manejar el carrito
 * @hook {useState} selectedMeals - Manejo de los platos seleccionados por el usuario
 * @hook {useState} meals - Manejo del estado local para almacenar los platos
 * @hook {useEffect} operationData - Llamada a la función para obtener los datos de la API
 * @function addMeals - Función para añadir los platos al carrito
*/

// Componente principal para renderizar los platos
const MealsAccount = () =>{    
    
    const {VITE_MEALS}= import.meta.env

    // Deconstrucción del contexto global para gestionar estados de carrito y platos
    const {selectedMeals, setSelectedMeals, meals, setMeals} = useContext(ContextCart)

    /** 
     * Función para añadir platos al carrito
     * 
     * @param {Object} eachMeal - Representa al plato seleccionado
    */
    const addMeals = (eachMeal)=>{
        // Condicional para añadir plato al carrito y si ya están en el carrito subes la cantidad
        if(selectedMeals.find(item => item.id === eachMeal.id)){
            const products = selectedMeals.map(item =>
                item.id === eachMeal.id
                    ? {...item, amount: item.amount + 1}
                    : item
            )
            return setSelectedMeals([...products])
        }
        setSelectedMeals([...selectedMeals, eachMeal])
    }

    // Función para obtener los datos desde la API
    const operationData = async()=>{
        let controller = new AbortController()
        let options ={
            method: 'get',
            signal: controller.signal
        }

        await fetch(VITE_MEALS, options)
        .then(res => res.json())
        .then(data => setMeals(data))
        .catch(err=> console.log(err))
        .finally(()=>controller.abort())
    
    }
    // Hook que ejecuta operationData
    useEffect(()=>{
        operationData()
    },[])
    
    return(
        <>
        <div className="MealsAccount">
            <div className="MealsAccount-create">
                {/* Título de la sección */}
                <h2 className="MealsAccount-h2">Añade tus favoritos o crea el tuyo propio</h2>
                {/* Botón que redirige al formulario para crear palto */}
                <div className="MealsAccount-button">
                    <a  href="#Crear-plato" title="Ir al formulario para crear tu plato" className="MealsAccount-button--create Button">Crear plato</a>
                </div>
            </div>
            {/* Listado de platos */}
            <ul className="MealsAccount-ul">
                {meals && meals.map(eachMeal =>
                    <Meal key={eachMeal.id} {...eachMeal} eachMeal={eachMeal} addMeals={addMeals}/>
                )}
            </ul>
        </div>
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
 * @prop {Function} addMeals - Función para añadir los platos al carrito
 * @prop {Object} eachMeal - Representa al plato seleccionado
*/

// Componente que renderiza para plato
const Meal =(props)=>{

    const{id,image, name, price, ingredients, allergens, addMeals, eachMeal} = props

    return(
        <>
        <li className="MealsAccount-li">
            {/* Imagen del plato */}
            <picture>
                <img src={image} alt="Imagen del plato" className="MealsAccount-img" />
            </picture>
            {/* Información restante sobre el plato */}
            <Info
            key={id} 
            name={name}
            price={price}
            ingredients={ingredients}
            allergens={allergens}
            eachMeal={eachMeal}
            addMeals={addMeals}
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
 * @prop {Function} addMeals - Función para añadir los platos al carrito
 * @prop {Object} eachMeal - Representa al plato seleccionado 
 */

// Componente que renderiza la información de cada plato y ejecuta la función de añadir al carrito
const Info =(props)=>{

    const {name, price, ingredients, allergens, eachMeal, addMeals} = props

    return(
        <>
        <div className="MealsAccount-details">
                <div className="MealsAccount-info">
                    {/* Nombre del plato*/}
                    <h3 className="MealsAccount-h3">{name}</h3>
                    {/* Ingredientes del plato */}
                    <p className="MealsAccount-p">{ingredients}</p>
                </div>
                <div className="MealsAccount-extra">
                    {/* Precio del plato*/}
                    <span className="MealsAccount-price">{price}€</span>
                    {/* Listado con alérgenos */}
                    <ul className="MealsAccount-allergens">
                        <li className="MealsAccount-allergen">
                            {allergens && allergens.map(eachIcon=>
                            <img key={eachIcon.id} src={eachIcon.icon} alt="Iconos de alérgenos" className="Meals-icons" />
                            )}
                        </li>
                    </ul>
                </div>
                {/* Botón para añdir al carrito */}
                <div className="MealsAccount-button">
                    <button className="MealsAccount-add Button" title="Crear un plato y añadirlo al carrito" onClick={()=> addMeals(eachMeal)}>Añadir</button>
                </div>
            </div>
        </>
    )
}

export default MealsAccount