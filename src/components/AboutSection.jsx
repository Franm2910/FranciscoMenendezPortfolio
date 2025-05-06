import { Code } from "lucide-react"
import { useCallback } from "react"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'


const images = [
    "/FotoFran.jpg",
    "/FotoAmigos.jpeg",
    "/FotoFamilia.jpeg",
    "/FotoFacu.jpeg",
    "/FotoIng.jpeg",
    "/FotoViaje.jpeg"
    
  ]
  const images2 = [
    "/1.jpg",
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg"
    
  ]
  

export const AboutSection = () => {
    
    const autoplay = Autoplay({ delay: 4000, stopOnInteraction: false })

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay])
    
    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

    
    return (
    <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text4xl font-bold mb-12 text-center">
                Sobre <span className="text-primary"> Mi</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Quien es Fran?</h3>
                    <p className="text-muted-foreground">
                    Soy una persona apasionada por la tecnología, con una actitud positiva y muchas ganas de aprender. Me gusta mantenerme activo yendo al gimnasio, compartir momentos con amigos, 
                    hablar, escuchar y crear vínculos reales. Disfruto leer ciencia ficción, jugar juegos de mesa y siempre tengo algún dato curioso para sumar a la conversación.
                    </p>
                    <p className="text-muted-foreground">
                    Me mueve la curiosidad, 
                    el deseo de entender el mundo y la intención de aportar desde lo que soy. Busco rodearme de personas con propósito y seguir creciendo en ambientes donde pueda ser yo mismo, crear, conectar y disfrutar el proceso.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#projects" className="cosmic-button">
                            Experiencia
                        </a>
                        <a href="/Francisco Menendez CV.pdf" download="Francisco Menendez CV" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            Curriculum
                        </a>
                    </div>
                </div>
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                        {images2.map((src, index) => (
                        <div className="min-w-full flex-shrink-0 p-2" key={index}>
                            <img
                            src={src}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-64 object-contain rounded-2xl shadow-lg max-w-full sm:max-w-[720px] md:max-w-[1024px]"
                            />
                        </div>
                        ))}
                    </div>

                    <div className="flex justify-between mt-4">
                        <button
                        onClick={scrollPrev}
                        className="px-4 py-2 bg-[#41125e] text-white rounded-lg"
                        >
                        ◀
                        </button>
                        <button
                        onClick={scrollNext}
                        className="px-4 py-2 bg-[#41125e] text-white rounded-lg"
                        >
                        ▶
                        </button>
                    </div>
                    </div>

            </div>
        </div>

    </section>)
}
