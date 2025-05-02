

//Una Star va a tener un id, size, x, y, opacidad, animation duration
//Un meteor va a tener un id, size, x, y, delay, animation duration


import { useEffect } from "react";
import { useState } from "react";

export const StartBackground = () => {
    //Este stars va a ser una lista de objetos tipo Stars
    const [stars, setStars] = useState([])
    const [meteors, setMeteors] = useState([])
    
    //Cuando se monta el componente, genero las estrellas
    useEffect(() => {
        generateStars();
        generateMeteors();
        
        const handleResize = () => {
            generateStars();
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    },[])

    const generateStars = () => {
        // Cuantas estrellas genero? dependende de la pantalla
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000);
        
        const newStars = [];

        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1, // Tamaño entre 1 y 4
                x: Math.random() * 100,
                y: Math.random() * 100, // El 100 es un porcentaje por lo tanto lo estamos en cualquier ubicacion entre 0 y 100
                opacity: Math.random() * 0.5 + 0.5, // Opacidad entre 0.5 y 1
                animationDuration: Math.random() * 4 + 2 // Duración entre 2 y 6 segundos
            });
        }
        setStars(newStars);
    }


    const generateMeteors = () => {
        // Cuantas meteors genero? dependende de la pantalla
        const numberOfMeteors = 4;
        
        const newMeteors = [];

        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1, // Tamaño entre 1 y 4
                x: Math.random() * 100,
                y: Math.random() * 20, // El 100 y 20 es un porcentaje por lo tanto lo estamos en cualquier ubicacion entre 0 y 100
                delay: Math.random() * 15, 
                animationDuration: Math.random() * 3+3 
            });
        }
        setMeteors(newMeteors);
    }

    return(
        <>
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => (
                <div key={star.id} className='star animate-pulse-subtle' style={{
                    width:  star.size + 'px',
                    height: star.size + 'px',
                    left: star.x + '%',
                    top: star.y + '%',
                    opacity: star.opacity,
                    animationDuration: star.animationDuration + 's'
                }}
                />
            ))}
            {meteors.map((meteor) => (
                <div key={meteor.id} className='meteor animate-meteor' style={{
                    width:  meteor.size * 15 + 'px',
                    height: meteor.size + 'px',
                    left: meteor.x + '%',
                    top: meteor.y + '%',
                    delay: meteor.delay,
                    animationDuration: meteor.animationDuration + 's'
                }}
                />
            ))}
        </div>
        </>
    )
}