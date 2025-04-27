/*_____________________________*\
* Cart.jsx
*
*   Descripción:
*   Este componente carga el contenido principal del carrito. Listados de platos seleccionados y creados para poder eliminar o editar según si es de una categoría u otra
*   
*   Estructura:
*   - Imagen de fondo de la portada
*   - Título de la página
*   - Lista de platos seleccionados
*   - Lista de platos creados
*
*   Componentes: 
*   - Cart:
*     Componente principal
*   - CartInfo: 
*     Componente que representa cada plato selecionado con información sobre él y un botón para eliminar
*   - CartNewInfo:
*     Componente que representa cada plato creados con información sobre él y dos botones, eliminar o editar
*_______________________________*/

import './Cart.css'
import { useState, useEffect, useContext, useRef } from 'react'
import {ContextCart} from '../../../contexts/ContextCart/ContextCart'
import UpdateForm from '../UpdateForm/UpdateForm'

/**
 * Este componente principal muestra el listado del carrito de la compra con los platos seleccionados y creados
 * 
 * @prop {String} className - Nombre de la clase
 * @hook {useContext} ContextCart - Acceso al contexto global para manejar el carrito
 * @hook {useState} editingMeal - Manejo del estado del plato en proceso de edición
 * @hook {useRef} updateMeal - Referencia al formulario de actualización de platos creados
*/

// Componente principal para renderizar el carrito de la compra
const Cart =()=>{

    // Función para variable de entorno con parámetros
    const baseUrlUserMeals = import.meta.env.VITE_API

    // useState para manejar el estado del plato en proceso de edición
    const [editingMeal, setEditingMeal] = useState(null)

     // Deconstrucción del contexto global para gestionar estados de carrito y platos
    const {selectedMeals, setSelectedMeals, createdMeals, setCreatedMeals} = useContext(ContextCart)
    
    // Referencia para actualizar los valores del formulario
    const updateMeal = useRef()

    /** 
     * Función para eliminar platos seleccionados del carrito
     * 
     * @param {Object} eachMeal - Representa al plato seleccionado
    */
    const deleteMeal = (eachMeal) =>{
        const results = selectedMeals.filter(item => item.id !== eachMeal.id)
        
        setSelectedMeals(results)
    }

    // Función para obtener todos los platos creados por el usuario desde la API
    const getCreatedMeal =async()=>{

        const urlMeals = `${baseUrlUserMeals}/user-meals`
        let controller = new AbortController()
        let options ={
            method: 'get',
            signal: controller.signal
        }

        await fetch(urlMeals, options)
        .then(res => res.json())
        .then(data =>setCreatedMeals(data))
        .catch(err=>console.log(err))
        .finally(()=> controller.abort())
    }

    /** 
     * Función para eliminar platos creados por el usuario
     * 
     * @param {String} id - Representa el ID del plato creado para eliminar
    */
    const deleteCreatedMeal = async(id)=>{

        const urlMealsId = `${baseUrlUserMeals}/user-meals/${id}`

        let controller = new AbortController()
        let options = {
          method:'delete',
          signal: controller.signal
        }
    
        await fetch(urlMealsId, options)
        .then (res => res.json())
        .then(data => setCreatedMeals(data))
        .catch(err=>console.log(err))
        .finally(()=>controller.abort())
      }

    /** 
     * Función para cargar los datos de un plato creado al formulario de edición
     * 
     * @param {String} id - Representa el ID del plato creado a cargar en el formulario
    */
    const updateButton = (id)=>{
        const search = createdMeals.find(eachMeal => eachMeal.id === id)

        const {current: formUserMeals} = updateMeal

        const [nameInput, ingredientsInput, amountInput] = formUserMeals

        nameInput.value = search.name
        ingredientsInput.value = search.ingredients
        amountInput.value = search.amount
    }

    /** 
     * Función para actualizar un plato creado enviando los nuevos datos a la API
     * 
     * @param {Event} e - Evento que previene la recarga automática
    */
    const putCreatedMeal = async(e)=>{
        e.preventDefault()

        const {current:formUserMeals} = updateMeal

        const [nameInput, ingredientsInput, amountInput] = formUserMeals

        const update = {
            id: editingMeal,
            name: nameInput.value,
            ingredients: ingredientsInput.value,
            amount: Number(amountInput.value)
        }

        const urlMealsId = `${baseUrlUserMeals}/user-meals/${update.id}`

        let controller = new AbortController()
        let options = {
            method: 'put',
            signal: controller.signal,
            headers: {'Content-type':'application/json'},
            body: JSON.stringify(update)
        }

        await fetch(urlMealsId, options)
            .then(res=>res.json())
            .then(data =>
                setCreatedMeals(data),
                setEditingMeal(null))
            .catch(err=>console.log(err))
            .finally(()=> controller.abort())

    }
    
    // Hook que ejecuta getCreatedMeal
    useEffect (()=>{
      getCreatedMeal()
    },[])
    
    return(
        <>
        <div className="CartCover">
            {/* Imagen de fondo de la portada*/}
            <picture className='CartCover-background'>
                <source srcSet="/assets/main-images/mesa-madera.webp" type="image/jpg"/>
                <img src="/assets/main-images/mesa-madera.jpg" alt="Imagen de fondo mesa de madera" className="CartCover-img" />
            </picture>
            {/* Título de la página */}
            <h1 className="CartCover-h1">Lista de platos seleccionados y creados</h1>
        </div>
        <div className="CartInfo">
            <div className="CartInfo-container">
                {/* Listado de platos seleccionados por el usuario */}
                <div className="CartInfo-selected">
                    <h3 className="CartInfo-h3">Platos seleccionados</h3>
                    <ul className="CartInfo-ul">
                    {selectedMeals.length
                    ? <CartInfo selectedMeals={selectedMeals} deleteMeal={deleteMeal}/>
                    : <p className="CartInfo-p">No tienes platos seleccionados</p>}
                    </ul>
                </div>
                {/* Listado de platos creados por el usuario */}
                <div className="CartInfo-created">
                    <h3 className="CartInfo-h3">Platos creados</h3>
                    <ul className="CartInfo-ul">
                    {createdMeals.length
                    ? <CartNewInfo
                        createdMeals={createdMeals}
                        deleteMeal={deleteMeal}
                        editingMeal={editingMeal}
                        setEditingMeal={setEditingMeal}
                        deleteCreatedMeal={deleteCreatedMeal}
                        updateMeal={updateMeal}
                        putCreatedMeal={putCreatedMeal}/>
                    : <p className="CartInfo-p">No tienes platos creados</p>}
                    </ul>
                </div>
            </div>

        </div>
        
        </>
    )
}

    /** 
     * Este componente renderiza cada platos seleccionados por el usuario y su información correspondiente
     * 
     * @prop {Array} selectedMeals - Listado de platos seleccionados
     * @prop {Function} deleteMeal - Función para eliminar los platos seleccionados
    */

// Componente que renderiza cada plato seleccionado
const CartInfo =(props)=>{

    const {selectedMeals, deleteMeal} = props

      return(
        <>
        {selectedMeals.map(eachMeal =>
            <li className="CartInfo-li" key={eachMeal._id}>
            <div className="CartInfo-info">
                <div className="CartInfo-names CartInfo-names--grid">
                    {/* Nombre del plato */}
                    <h4 className="CartInfo-h4">{eachMeal.name}</h4>
                    {/* Ingredientes del plato */}
                    <p className="CartInfo-ingredients">{eachMeal.ingredients}</p>
                </div>
                {/* Cantidad de platos del mismo */}
                <span className="CartInfo-amount">{eachMeal.amount} unid.</span>
                {/* Botón para eliminar el plato del carrito */}
                <div className="CartInfo-buttons CartInfo-buttons--grid">
                    <button className="CartInfo-button" title="Eliminar plato seleccionado" onClick={()=>deleteMeal(eachMeal)}>Eliminar</button>
                </div>
                </div>
        </li>
        )}
            
        </>
    )
}

/**
 * Este componente renderiza cada plato creado por el usuario
 *
 * @prop {Array} createdMeals - Listado de platos creados
 * @prop {String} editingMeal - ID del plato que está siendo editado
 * @prop {Function} setEditingMeal - Función para cambiar el estado del plato
 * @prop {Function} deleteCreatedMeal - Función para eliminar el plato creado
 * @prop {Object} updateMeal - Referencia al formulario de actualización de platos creados
 * @prop {Function} putCreatedMeal - Función para guardar los cambios de un plato editado y actualizar en la BBDD
*/

// Componente que renderiza cada plato creado
const CartNewInfo=(props)=>{

    const{createdMeals, editingMeal, setEditingMeal, deleteCreatedMeal, updateMeal, putCreatedMeal}=props

    /**
     * Función para mostrar y ocultar el fomulario de edición para un plato
     * 
     * @param {String} mealId - ID del plato a editar
     */
    const toggleEditForm = (mealId)=>{
        setEditingMeal((prevId) => (prevId === mealId ? null : mealId))
    }

    return(
        <>
        {createdMeals.map(eachMeal =>
        <li key={eachMeal._id} className="CartInfo-li" >
            <div className="CartInfo-info">
                <div className="CartInfo-names CartInfo-names--grid">
                    {/* Nombre del plato */}
                    <h4 className="CartInfo-h4">{eachMeal.name}</h4>
                    {/* Ingredientes del plato */}
                    <p className="CartInfo-ingredients">{eachMeal.ingredients}</p>
                </div>
                {/* Cantidad de platos del mismo */}
                <span className="CartInfo-amount">{eachMeal.amount} unid.</span>
                {/* Botones */}
                <div className="CartInfo-buttons CartInfo-buttons--grid">
                    {/* Botón para eliminar */}
                    <button className="CartInfo-button" title="Eliminar plato creado" onClick={()=>deleteCreatedMeal(eachMeal._id)}>Eliminar</button>
                    {/* Botón para desplegar formulario de edición */}
                    <button className="CartInfo-button" title="Editar plato creado" onClick={()=>toggleEditForm(eachMeal._id)}>Editar</button>
                </div>
            </div>
            {/* Formulario de edición */}
            {editingMeal === eachMeal._id &&(
            <div className="CartInfo-form">
            <UpdateForm
            updateMeal={updateMeal}
            putCreatedMeal={putCreatedMeal}/>
            </div>
            )}

        </li>)}
        </>
    )
}

export default Cart