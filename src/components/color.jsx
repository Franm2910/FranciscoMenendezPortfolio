import { useEffect, useRef, useState } from "react";
import { Code } from "lucide-react";

const ColorSection = () => {
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
      id="contacto"
      >
        <div className="min-h-[45vh] flex items-center justify-center px-8 transition-all duration-300 ease-in-out bg-gradient-to-b from-black via-[#41125e] to-[#f05a28] text-white">
            <h2 className="text-5xl font-bold text-center">Porque quiero ser Fluxer</h2>
        </div>

        {/* Aca va la info */}
        <div className="grid grid-cols-1 gap-6 min-h-screen px-8 py-20 bg-[#f05a28] text-white">
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
    </section>
  );
};

export default ColorSection;
