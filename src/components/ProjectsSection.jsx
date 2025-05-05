import { Description } from "@radix-ui/react-toast"

const video = {
    id:1,
    title: "Video de mi experiencia",
    description: "En este video se presenta toda mi experiencia con mi trabajo",
    video: "/PresentaciónNaranjaXfinal.mp4",
    tags:["trabajo", "Looker Studio", "IA", "Capacitaciones"]
}


export const ProjectsSection = () => {
 
    return(
        <section id="projects" className="py-24 px-4 relative flex flex-col items-center"> {/* Agregamos flex flex-col items-center */}
    
            <div className="container mx-auto max-w-5xl text-center"> {/* Agregamos text-center para centrar el texto */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4"> Mis <span className="text-primary"> Proyectos</span></h2>
                <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Aqui podes conocer un poco de mi trabajo durante mi pasantia en Holcim y mi 2024
                </p>
            </div>
    
            <div className= "relative w-full max-w-2xl aspect-video rounded-md overflow-hidden shadow-lg"> {/* Quitamos flex justify-center items-center de aquí */}
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    controls
                    muted
                    loop
                >
                    <source src={video.video} type="video/mp4" />
                </video>
            </div>
    
        </section>
    )
}