import { Code } from "lucide-react"

export const AboutSection = () => {
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
                    Soy alguien apasionado por la tecnología, que disfruta de ir al gimnasio para mantenerse activo, 
                    y valoro mucho pasar tiempo con amigos. Me gusta tanto hablar como escuchar, 
                    siempre buscando compartir buenos momentos. Tengo una actitud alegre y positiva ante la vida.
                    </p>
                    <p className="text-muted-foreground">
                        jrkejskjfdek
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Contacto
                        </a>
                        <a href="src/assets/Francisco Menendez CV.pdf" download="Francisco Menendez CV" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            Curriculum
                        </a>
                    </div>
                </div>
            <div className="grid grid-cols-1 gap 6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className='h-6 w-6 text-primary'/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Desarrollo</h4>
                                <p className="text-muted-foreground">Señor presidente si yo no soy mujer, porque su hermana parece una travesti? AMOR</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div>
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className='h-6 w-6 text-primary'/>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div>
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className='h-6 w-6 text-primary'/>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </section>)
}