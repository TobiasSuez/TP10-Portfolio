import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Componentes/NavBar'
import Footer from './Componentes/Footer';
import { ProjectProvider } from './Context/AuthContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ProjectProvider>
  <React.StrictMode>
    <NavBar/>
    <App />
    <Footer/>
  </React.StrictMode>,
  </ProjectProvider>
)
