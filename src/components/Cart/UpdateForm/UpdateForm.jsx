/*_____________________________*\
* UpdateForm.jsx
*
*   Descripción:
*   Este componente carga el formulario para editar un plato creado por el usuario, actualizando nombre, ingredientes y cantidad
*   
*   Estructura:
*   - Formulario: edición de un plato creado en el carrito de la compra y en la bbdd
*
*   Componentes: 
*   - UpdateForm:
*     Componente principal
*_______________________________*/

import './UpdateForm.css'

/**
 * Este componente principal muestra el formulario de edición de los platos creados por el usuario que han sido añadidos al carrito
 * 
 * @prop {String} className - Nombre de la clase
 * @prop {Object} updateMeal - Referencia al formulario de actualización de platos creados
 * @prop {Function} putCreatedMeal - Función para guardar los cambios de un plato editado y actualizar en la BBDD
 */

// Componente principal que renderiza el formulario de edición
const UpdateForm =(props)=>{

    const {updateMeal, putCreatedMeal} = props

    return(
        <>
        <div className="UpdateForm">
            {/* Formulario */}
            <form className="UpdateForm-form" ref={updateMeal} onSubmit={putCreatedMeal}>
                {/* Campo para editar el nombre del plato */}
                <input type="text" className="UpdateForm-input" placeholder='Nombre del plato'/>
                {/* Campo para editar los ingredientes */}
                <input type="text" className="UpdateForm-input" placeholder='Ingredientes'/>
                {/* Campo para editar el número de platos */}
                <input type="number" className="UpdateForm-input" placeholder='Cantidad de platos'/>
                {/* Botón para actualizar*/}
                <input type="submit" className="UpdateForm-button " value='Guardar cambios'/>
        </form>
        </div>
        </>
    )
}

export default UpdateForm