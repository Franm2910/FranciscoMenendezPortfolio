import { Description } from "@radix-ui/react-toast"
import { useState } from 'react'


const video = {
    id:1,
    title: "Video de mi experiencia",
    description: "En este video se presenta toda mi experiencia con mi trabajo",
    video: "/PresentaciónNaranjaXfinal.mp4",
    tags:["trabajo", "Looker Studio", "IA", "Capacitaciones"]
}

const imageData = [
    {
      src: "/FotoGlutty.jpeg",
      description: "Mi tesis es una aplicación para la comunidad celíaca, donde lo mejor de la tecnología se une a un diseño centrado en la experiencia y el bienestar de sus usuarios."
    },
    {
      src: "/FotoIA.jpeg",
      description: "Un proyecto de Inteligencia Artificial pensado para los Ejecutivos Comerciales de Holcim. Con mi equipo nos centramos en la gestión integral del proyecto."
    },
    {
      src: "/FotoLooker.jpeg",
      description: "Diseño de tableros con Looker Studio, enfocados en brindar la información que realmente necesita el usuario final."
    }
  ]


export const ProjectsSection = () => {
 
    const [activeIndex, setActiveIndex] = useState(null)

    const toggleDescription = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    return(
        <section id="projects" className="py-10 px-4 relative flex flex-col items-center"> {/* Agregamos flex flex-col items-center */}

            <div className="container mx-auto max-w-5xl text-center"> {/* Agregamos text-center para centrar el texto */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4"> Mis <span className="text-primary"> Proyectos</span></h2>
                <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
                Explora los proyectos que desarrollé en mi pasantía y a lo largo de 2024.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12 py-20">
                {imageData.map((item, index) => (
                <div
                key={index}
                className="relative group cursor-pointer"
                onClick={() => toggleDescription(index)}
                >
                <img
                    src={item.src}
                    alt={`Foto ${index + 1}`}
                    className="w-full h-64 object-cover rounded-xl shadow-md"
                />
                <div
                    className={`absolute inset-0 bg-black/60 text-white flex items-center justify-center text-center p-4 rounded-xl transition-opacity duration-300 ${
                    activeIndex === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                >
                    {item.description}
                </div>
                </div>
            ))}
            </div>

            <div className="relative w-full max-w-2xl aspect-video rounded-md overflow-hidden shadow-lg my-20">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    controls
                    muted
                    loop
                    poster="/FotoPoster.jpeg"
                >
                    <source src={video.video} type="video/mp4" />
                </video>
            </div>

    
        </section>
    )
}