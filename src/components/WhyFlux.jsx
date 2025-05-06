import { useEffect, useRef, useState } from "react";
import { Castle, Code, Footprints, Users } from "lucide-react";

export const WhyFlux = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="WhyFlux"
      >
        <div className="min-h-[60vh] flex items-end justify-center px-8 transition-all duration-300 ease-in-out bg-gradient-to-b from-black via-[#41125e] to-[#f05a28] text-white">
            <h2 className=" text-5xl font-bold text-center">Como me veo en NaranjaX</h2>
        </div>

        {/* Aca va la info */}
        <div className="bg-[#f05a28] mx-auto">
            <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 bg-[#f05a28] items-center">
                    <div className="space-y-6 p-6">
                        <p className="text-muted-foreground text-xl text-justify font-bold">
                        Cuando pienso en mi vida Naranja me veo en un empresa con un espacio donde puedo desarrollarme 
                        técnicamente, aplicar mis habilidades para conectar con el usuario 
                        y contribuir con soluciones innovadoras. 
                        </p>
                        <p className="text-muted-foreground font-black text-xl text-[#41125e]">
                        Me siento listo para aportar con autonomía, compromiso y una mirada centrada en el cliente y la comunidad.
                        </p>
                    </div>
                <div className="grid grid-cols-1 gap-6 px-8 py-20 text-white">
                    <div className="gradient-border-violeta p-4 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Users className='h-6 w-6 text-primary'/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Conectando con los valores</h4>
                                <p className="text-muted-foreground">Me siento sumamente inspirados por los valores que impulsan a Naranja.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border-violeta p-4 card-hover">
                        <div>
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Castle className='h-6 w-6 text-primary'/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Un espacio de crecimiento</h4>
                                <p className="text-muted-foreground">Reconozco en Naranja un lugar para ampliar mi conocimiento y crecer como profesional</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="gradient-border-violeta p-4 card-hover">
                        <div>
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Footprints className='h-6 w-6 text-primary'/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Predipuesto a dar el primer paso</h4>
                                <p className="text-muted-foreground">No solo se trata de recibir trabajo quiero buscar la necesidad y satisfacerla</p>
                            </div>
                        </div>
                        </div>
                    </div>
            </div>
        </div>
        </div>
            
    </section>
  );
};
