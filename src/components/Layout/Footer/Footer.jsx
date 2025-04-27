/*_____________________________*\
* Footer.jsx
*
*   Descripción:
*   Este componente carga el footer de la aplicación
*   
*   Estructura:
*   - Footer general: copyright, imagen del logo y contacto
*   - Footer para responsive: imagen del logo, contacto y copyright
*
*   Componentes: 
*   - Footer:
*     Componente principal
*   - FooterMobile:
*     Componente para renderizar el footer con responsive
*_______________________________*/

import './Footer.css'

/**
 * Este componente muestra el footer
 * 
 * @prop {String} className - Nombre de la clase
*/

// Componente principal que renderiza el footer general de la aplicación
const Footer =()=>{
    return(
        <>
        <div className="Footer">
            {/* Copyright */}
            <span className="Footer-span">Copyright 2025</span>
            {/* Imagen logo */}
            <img src="/assets/saviti.png" alt="logotipo de saviti" className="Footer-img" />
            {/* Contacto */}
            <span className="Footer-span Footer-span--phone">900 000 000</span>
        </div>
        <FooterMobile />

        </>
    )

}

// Componente que renderiza el footer responsive
const FooterMobile =() =>{

    return(
        <>
        <div className="FooterMobile">
            {/* Imagen logo */}
            <img src="/assets/saviti.png" alt="logotipo de saviti" className="FooterMobile-img" />
            {/* Contacto */}
            <span className="FooterMobile-span">900 000 000</span>
            {/* Copyright */}
            <span className="FooterMobile-span">Copyright 2025</span>
        </div>
        </>
    )
}


export default Footer