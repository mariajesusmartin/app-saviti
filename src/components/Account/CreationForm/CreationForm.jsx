/*_____________________________*\
* CreationForm.jsx
*
*   Descripción:
*   Este componente carga el formulario para crear un nuevo plato y añadirlo en el carrito
*   
*   Estructura:
*   - Título del formulario
*   - Formulario: creación de un plato nuevo en una bbdd y añadido al carrito
*   - Imagen al fondo
*
*   Componentes: 
*   - CreationForm:
*     Componente principal
*_______________________________*/

import './CreationForm.css'
import { useContext , useState, useRef} from 'react'
import {ContextCart} from '../../../contexts/ContextCart/ContextCart'

/**
 * Este componente principal muestra el formulario para crear un nuevo plato y añadirlo al carrito
 * 
 * @prop {String} className - Nombre de la clase
 * @hook {useContext} ContextCart - Acceso al contexto global para manejar el carrito
 * @hook {useRef} addUserMeals - Referencia al formulario para leer sus valores
 */

// Componente principal para renderizar el formulario de creación de platos
const CreationForm =()=>{

    // Deconstrucción del contexto global para gestionar estados de carrito y platos
    const {createdMeals, setCreatedMeals, amountMeals, setAmountMeals} = useContext(ContextCart)

    // Referencia para leer los valores del formulario
    const addUserMeals = useRef()

    // Función para variable de entorno con parámetros
    const baseUrlUserMeals = import.meta.env.VITE_API
    /** 
    * Función para manejar los datos del formulario, añadirlos a la API y al carrito
    * 
    * @param {Event} e - Evento que previene la recarga automática
    */
    const postUserMeals = async(e)=>{
        e.preventDefault()

        const {current:formUserMeals} = addUserMeals
        const [nameInput, ingredientsInput, amountInput] = formUserMeals

        const newMeal = {
            name:nameInput.value,
            ingredients:ingredientsInput.value,
            amount: amountInput.value,
        }

        nameInput.value = ''
        ingredientsInput.value = ''
        amountInput.value = ''

        const urlMeals = `${baseUrlUserMeals}/user-meals`

        let controller = new AbortController()
        let options = {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newMeal),
            signal: controller.signal
        }

        await fetch(urlMeals, options)
            .then(res => res.json())
            .then(data => {
                setCreatedMeals([...createdMeals,newMeal]);
            })
            .catch(err=> console.log(err))
            .finally(()=> controller.abort())

    }

    return(
        <>
        <div className="CreationForm">
        <div className="CreationForm-container" id='Crear-plato'>
            {/* Título del formulario */}
            <h3 className="CreationForm-h3">Rellena el formulario para crear tu plato</h3>
            {/* Formulario */}
            <form ref={addUserMeals} onSubmit={postUserMeals} className="CreationForm-form">
                {/* Campo para el nombre del plato */}
                <label className="CreationForm-label">Nombre del plato</label>
                <input type="text" placeholder='Añade el nombre de tu plato' className='CreationForm-input'/>
                {/* Campo para los ingredientes */}
                <label className="CreationForm-label">Ingredientes</label>
                <input type="text" placeholder='Añade los ingredientes' className='CreationForm-input'/>
                {/* Campo para el número de platos */}
                <label className="CreationForm-label">Número de platos</label>
                <input type="number" placeholder='Indica cuántos platos quieres'className='CreationForm-input'/>
                {/* Botón de creación y envío al carrito*/}
                <input type="submit" value="Crear" className="CreationForm-button ButtonForm"/>
            </form>
        </div>
        </div>
        {/*Imagen al fondo*/}
        <picture>
            <source srcSet="/assets/main-images/alimentos-en-una-mesa.webp" type="image/jpg"/>
            <img src="/assets/main-images/alimentos-en-una-mesa.jpg" alt="Imagen de alimentos sobre una mesa" className="CreationForm-img" />
        </picture>
        </>
    )
}

export default CreationForm