import React, { createContext, useState } from 'react';

// Create the context
export const ProjectContext = createContext();

const fakeProjects = [
    {
        id: 1,
        title: "Paisaje Sereno",
        description: "Una hermosa vista de un paisaje natural sereno.",
        imageUrl: "https://img.freepik.com/fotos-premium/pintura-paisaje-sereno_805816-481.jpg",
        date: "2023-01-15",
        url: "https://www.ejemplo.com/proyecto1",
        favorito: false,
    },
    {
        id: 2,
        title: "Retrato en Blanco y Negro",
        description: "Un retrato artístico en blanco y negro de una persona.",
        imageUrl: "https://www.blogdelfotografo.com/wp-content/uploads/2015/04/5122311859_1f597b4b77_o.jpg",
        date: "2023-02-20",
        url: "https://www.ejemplo.com/proyecto2",
        favorito: false,
    },
    {
        id: 3,
        title: "Arquitectura Moderna",
        description: "Fotografías de edificios de arquitectura moderna.",
        imageUrl: "https://media.admagazine.com/photos/6500da527021aeab60241525/master/w_1600%2Cc_limit/arquitectura-moderna-villa-savoye.jpg",
        date: "2023-03-10",
        url: "https://www.ejemplo.com/proyecto3",
        favorito: true,
    },
    {
        id: 4,
        title: "Naturaleza en Primavera",
        description: "Capturas de la belleza de la naturaleza en primavera.",
        imageUrl: "https://i.pinimg.com/736x/4a/26/7f/4a267fcd9366ff35bebbb29b109d1096.jpg",
        date: "2023-04-05",
        url: "https://www.ejemplo.com/proyecto4",
        favorito: false,
    },
    {
        id: 5,
        title: "Retratos de Animales",
        description: "Retratos de animales en su entorno natural.",
        imageUrl: "https://img.freepik.com/vector-gratis/retratos-animales-dibujados-mano_1284-9766.jpg",
        date: "2023-05-15",
        url: "https://www.ejemplo.com/proyecto5",
        favorito: true,
    },
    {
        id: 6,
        title: "Ciudad Nocturna",
        description: "Fotografías de la ciudad iluminada por la noche.",
        imageUrl: "https://cdn.bitlysdowssl-aws.com/wp-content/uploads/2022/08/Amsterdam-Red-Light-Districts-EDMred.jpg",
        date: "2023-06-20",
        url: "https://www.ejemplo.com/proyecto6",
        favorito: false,
    },
    {
        id: 7,
        title: "Aventuras al Aire Libre",
        description: "Imágenes de emocionantes aventuras al aire libre.",
        imageUrl: "https://www.mexicodesconocido.com.mx/sites/default/files/fichas-destino/aventuras-aire-libre-tlapacoyan-veracruz.jpg",
        date: "2023-07-12",
        url: "https://www.ejemplo.com/proyecto7",
        favorito: true,
    },
    {
        id: 8,
        title: "Arte Abstracto",
        description: "Obras de arte abstracto en diferentes medios.",
        imageUrl: "https://cdn.pixabay.com/photo/2022/02/05/09/00/abstract-art-6994330_1280.png",
        date: "2023-08-30",
        url: "https://www.ejemplo.com/proyecto8",
        favorito: false,
    },
    {
        id: 9,
        title: "Viajes Exóticos",
        description: "Fotografías de viajes a destinos exóticos de todo el mundo.",
        imageUrl: "https://viajes.nationalgeographic.com.es/medio/2018/01/29/bali_b8898044.jpg",
        date: "2023-09-25",
        url: "https://www.ejemplo.com/proyecto9",
        favorito: true,
    },
    {
        id: 10,
        title: "Comida Deliciosa",
        description: "Fotos de platos de comida deliciosos y tentadores.",
        imageUrl: "https://cnnespanol.cnn.com/wp-content/uploads/2017/07/la-mejor-comida-del-mundo-paises9-mexico.jpg?quality=100&strip=info",
        date: "2023-10-18",
        url: "https://www.ejemplo.com/proyecto10",
        favorito: false,
    },
];



// Create a provider component
export const ProjectProvider = ({ children }) => {
    // Set the initial state with the fakeProjects data
    const [projects, setProjects] = useState(fakeProjects);
    const [sesionIniciada, setSesionIniciada] = useState(false); // Agregar el estado de sesión iniciada
    const iniciarSesion = () => {
        // Simulación de lógica de inicio de sesión
        setSesionIniciada(true);
      };
      const cerrarSesion = () => {
        // Simulación de cierre de sesión
        setSesionIniciada(false);
      };
      return (
        <ProjectContext.Provider value={{ projects, sesionIniciada, iniciarSesion, cerrarSesion }}>
          {children}
        </ProjectContext.Provider>
      );
};
