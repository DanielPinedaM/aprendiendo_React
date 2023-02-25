// @ts-nocheck

/* 
App.js                          componente principal, los nombres de los componentes empiezan con mayuscula para q React los reconozca
BrowserRouter                   modulo principal de react router 
Route                           definir ruta (url) y mostrar componente
Routes                          es para v6
Navigate                        redireccionar a otra URL existente */
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

// interfaz con las paginas a las q redirecciono
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import UsersPage from './pages/UsersPage';
import UserPage from './pages/UserPage';
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <BrowserRouter>

     {/* componente Navbar se muestra en todas las paginas */}
     <Navbar/>

      {/*
      PROPIEDADES DE Route:
      path                                =ruta 
      element (en v6) y component (en v5) =componente q se ejecuta cuando se abre el link */}
      <Routes>
        {/* en v5 element={HomePage}
            en v6 element={<HomePage/>} */}
        <Route path="/" element={<HomePage/>} />          {/* ruta raiz localhost:3000 */}
        <Route path="/about" element={<AboutPage/>} />    {/* localhost:3000/about */}

        <Route path="/users" element={<UsersPage/>} />    {/* localhost:3000/users */}
        <Route path="/usuarios" element={<Navigate to="/users"/>} />
        {/* <Route path="/usuarios" element={<Navigate replace to="/users"/>} /> */}

        <Route path="/users/:id" element={<UserPage/>} />  {/* mostrar un usuario con ID en especifico localhost:3000/10 */}
        <Route path="/users/new" element={<p>new</p>} /> {/* localhost:3000/users/new */}

        {/* cerrar sesion y ruta anidada (sub-ruta) */}
        <Route path="/dashboard/*" element={<Dashboard />}>
           <Route path="welcome" element={<p>Welcome!</p>} /> {/* http://localhost:3000/dashboard/welcome */}
          <Route path="goodbye" element={<p>goodye</p>} />   {/* http://localhost:3000/dashboard/goodye */}
        </Route>
        {/* <Route path="/dashboard" element={<Dashboard/>} /> */}
        
        <Route path="*" element={<NotFoundPage/>} />       {/* ruta inexistente (error 404) */}
      </Routes>
    </BrowserRouter>
  );
}
