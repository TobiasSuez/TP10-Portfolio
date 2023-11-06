import React, { createContext, useState } from 'react';

// Create the context
export const ProjectContext = createContext();

const fakeProjects = [
    {
        id: 1,
        title: "Paisaje Sereno",
        description: "Una hermosa vista de un paisaje natural sereno.",
        imageUrl: "url-de-la-imagen-1.jpg",
        date: "2023-01-15",
        url: "https://www.ejemplo.com/proyecto1",
        favorito: false,
    },
    {
        id: 2,
        title: "Retrato en Blanco y Negro",
        description: "Un retrato artístico en blanco y negro de una persona.",
        imageUrl: "url-de-la-imagen-2.jpg",
        date: "2023-02-20",
        url: "https://www.ejemplo.com/proyecto2",
        favorito: false,
    },
    {
        id: 3,
        title: "Arquitectura Moderna",
        description: "Fotografías de edificios de arquitectura moderna.",
        imageUrl: "url-de-la-imagen-3.jpg",
        date: "2023-03-10",
        url: "https://www.ejemplo.com/proyecto3",
        favorito: true,
    },
    {
        id: 4,
        title: "Naturaleza en Primavera",
        description: "Capturas de la belleza de la naturaleza en primavera.",
        imageUrl: "url-de-la-imagen-4.jpg",
        date: "2023-04-05",
        url: "https://www.ejemplo.com/proyecto4",
        favorito: false,
    },
    {
        id: 5,
        title: "Retratos de Animales",
        description: "Retratos de animales en su entorno natural.",
        imageUrl: "url-de-la-imagen-5.jpg",
        date: "2023-05-15",
        url: "https://www.ejemplo.com/proyecto5",
        favorito: true,
    },
    {
        id: 6,
        title: "Ciudad Nocturna",
        description: "Fotografías de la ciudad iluminada por la noche.",
        imageUrl: "url-de-la-imagen-6.jpg",
        date: "2023-06-20",
        url: "https://www.ejemplo.com/proyecto6",
        favorito: false,
    },
    {
        id: 7,
        title: "Aventuras al Aire Libre",
        description: "Imágenes de emocionantes aventuras al aire libre.",
        imageUrl: "url-de-la-imagen-7.jpg",
        date: "2023-07-12",
        url: "https://www.ejemplo.com/proyecto7",
        favorito: true,
    },
    {
        id: 8,
        title: "Arte Abstracto",
        description: "Obras de arte abstracto en diferentes medios.",
        imageUrl: "url-de-la-imagen-8.jpg",
        date: "2023-08-30",
        url: "https://www.ejemplo.com/proyecto8",
        favorito: false,
    },
    {
        id: 9,
        title: "Viajes Exóticos",
        description: "Fotografías de viajes a destinos exóticos de todo el mundo.",
        imageUrl: "url-de-la-imagen-9.jpg",
        date: "2023-09-25",
        url: "https://www.ejemplo.com/proyecto9",
        favorito: true,
    },
    {
        id: 10,
        title: "Comida Deliciosa",
        description: "Fotos de platos de comida deliciosos y tentadores.",
        imageUrl: "url-de-la-imagen-10.jpg",
        date: "2023-10-18",
        url: "https://www.ejemplo.com/proyecto10",
        favorito: false,
    },
    {
        id: 11,
        title: "Paisajes Submarinos",
        description: "Explora la belleza de los paisajes submarinos en todo su esplendor.",
        imageUrl: "url-de-la-imagen-11.jpg",
        date: "2023-11-08",
        url: "https://www.ejemplo.com/proyecto11",
        favorito: true,
    },
    {
        id: 12,
        title: "Retratos de la Naturaleza",
        description: "Retratos de animales y plantas en su hábitat natural.",
        imageUrl: "url-de-la-imagen-12.jpg",
        date: "2023-12-04",
        url: "https://www.ejemplo.com/proyecto12",
        favorito: false,
    }
];




// Create a provider component
export const ProjectProvider = ({ children }) => {
    // Set the initial state with the fakeProjects data
    const [projects, setProjects] = useState(fakeProjects);


    return (
        <ProjectContext.Provider value={{ projects }}>
            {children}
        </ProjectContext.Provider>
    );
};
