import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"


export const ContactSection = () => {
    
    return(
        <section
            id = "contact"
            className="py-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Contactame!
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Si te gusto lo que viste no dudes en contactarme!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">
                            Informacion de contacto
                        </h3>
                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium text-left">Email</h4>
                                    <a href="mailto:franm2910@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                        Franm2910@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium text-left">Telefono</h4>
                                    <a href="tel:+543515403599" className="text-muted-foreground hover:text-primary transition-colors">
                                        +54 351 5403599
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium text-left">Ubicacion</h4>
                                    <a  className="text-muted-foreground hover:text-primary transition-colors">
                                        Cordoba, Cordoba, Argentina
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4> Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/franciscomenendez29/">
                                    <Linkedin />
                                </a>
                                <a href="https://www.instagram.com/fran.menendezz/">
                                    <Instagram />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>




        </section>
    )

}