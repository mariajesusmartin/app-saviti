/** 
* Este contexto se utiliza para gestionar la funcionalidad del carrito de la compra 
*
* @context
* @property {string} meals - Platos disponibles en la aplicación
* @property {function} setMeals - Función para actualizar los platos disponibles en la aplicación
* @property {array} selectedMeals - Platos seleccionados por el usuario
* @property {function} setSelectedMeals - Función para actualizar los platos seleccionados por el usuario
* @property {array} createdMeals - Platos creados por el usuario
* @property {function} setCreatedMeals - Función para actualizar los platos creados por el usuario
*/

import { useState, createContext, useEffect} from 'react'

// Creación del contexto para gestionar el carrito de la compra
export const ContextCart = createContext()

// Componente proveedor del contexto
export const OperationCart = ({children})=>{
    //Estado para manejar los platos disponibles
    const [meals, setMeals]= useState("")
    //Estado para manejar los platos seleccionados por el usuario
    const [selectedMeals, setSelectedMeals] = useState(()=>{
        return JSON.parse(localStorage.getItem('selectedMeals')) || []
    })
    //Estado para manejar los platos creados por el usuario
    const [createdMeals, setCreatedMeals] = useState(()=>{
        return JSON.parse(localStorage.getItem('createdMeals')) || []
    })

    // Efecto para sincronizar el estado selectedMeals con localStorage
    useEffect(() => {
        localStorage.setItem('selectedMeals', JSON.stringify(selectedMeals))
    }, [selectedMeals]);

    // Efecto para sincronizar el estado createdMeals con localStorage
    useEffect(() => {
        localStorage.setItem('createdMeals', JSON.stringify(createdMeals))
    }, [createdMeals]);


    return( 
        <>
        <ContextCart.Provider value={{
            selectedMeals,
            setSelectedMeals,
            createdMeals,
            setCreatedMeals,
            meals,
            setMeals
            }}>
            {children}
        </ContextCart.Provider>

        </>
    )
}
