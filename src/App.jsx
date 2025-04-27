/*_____________________________*\
*App.jsx
*   Contextos:
*   - OperationCart: Contexto global para manejar el carrito
*   Enrutamiento:
*   - react-router-dom: Para gestionar las rutas
*   Rutas:
*     @route {/}                  Página principal (<HomePage />)
*     @route {/como-funciona}     Página "Cómo funciona" (<WorkingPage />) 
*     @route {/nuestros-platos}   Página "Nuestros platos" (<MealsPage />)
*     @route {/login}             Página de inicio de sesión (<LoginPage />) 
*     @route {/mi-cuenta}         Página de la cuenta del usuario (<AccountPage />) 
*     @route {/carrito}           Página del carrito de la compra (<CartPage />) 
*   Compontentes:
*   - Footer: Pie de página
*_______________________________*/


// Importación de herramientas, componentes y contexto para configurar el enrutamiento
import './App.css'
import {HomePage} from './pages/HomePage'
import {MealsPage} from './pages/MealsPage'
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'
import Footer from './components/Layout/Footer/Footer'
import {WorkingPage} from './pages/WorkingPage'
import {LoginPage} from './pages/LoginPage'
import {AccountPage} from './pages/AccountPage'
import {CartPage} from './pages/CartPage'
import {OperationCart} from './contexts/ContextCart/ContextCart'

// Componente principal que configura la aplicación
function App () {

  return(
    
    <BrowserRouter>
    <>
    {/*Contexto global*/}
    <OperationCart>
    {/*Configuración de rutas y navegación de la aplicación*/}
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/como-funciona' element={<WorkingPage />}/>
      <Route path='/nuestros-platos' element={<MealsPage />}/>
      <Route path='/login' element={<LoginPage />}/>
      <Route path='/mi-cuenta' element={<AccountPage/>}/>
      <Route path='/carrito' element={<CartPage />}/>
    </Routes>
    <footer><Footer /></footer>
    </OperationCart>
    
    </>
    </BrowserRouter>
  )
}


export default App