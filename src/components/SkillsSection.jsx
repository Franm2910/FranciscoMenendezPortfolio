
import { act, useState } from "react"
import { cn } from "../lib/utils"

const skills = [
    { name: "JavaScript", level: 70, category: "Técnico"},
    { name: "Python", level: 70, category: "Técnico"},
    { name: "SQL", level: 65, category: "Técnico"},
    { name: "Jupyter", level: 65, category: "Técnico"},
    { name: "VS Code", level: 85, category: "Técnico"},
    { name: "SAP", level: 80, category: "Técnico"},
    { name: "SCRUM", level: 90, category: "Técnico"},
    { name: "KanBan", level: 95, category: "Técnico"},
    { name: "Metodologías Agiles", level: 90, category: "Técnico"},
    //Categoría personal:
    { name: "Adaptabilidad", level: 95, category: "Blandas" },
    { name: "Comunicación", level: 90, category: "Blandas" },
    { name: "Trabajo en equipo", level: 85, category: "Blandas" },
    { name: "Autonomía", level: 90, category: "Blandas" },
    { name: "Empatía", level: 85, category: "Blandas" },
    { name: "Pensamiento creativo", level: 90, category: "Blandas" },
    { name: "Resolución de problemas", level: 80, category: "Blandas" },
    { name: "Gestión del tiempo", level: 80, category: "Blandas" },
    { name: "Escucha activa", level: 85, category: "Blandas" },
    { name: "Actitud positiva", level: 95, category: "Blandas" },
    { name: "Negociación", level: 65, category: "Blandas" },
    { name: "Pensamiento estratégico", level: 70, category: "Blandas" },
    { name: "Liderazgo de equipos", level: 60, category: "Blandas" }
]

const categories = ["Todas", "Técnico", "Blandas"]

export const SkillsSection = () => {

        const [activeCategory, setActiveCategory] = useState("Todas")

        const filteredSkills = skills.filter((skill)=> activeCategory === "Todas" || skill.category === activeCategory)

    return(
        <section id='skills' className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Habilidades
                </h2>


                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {
                        categories.map((category, key) => (
                            <button 
                            key={key} 
                            className={cn("px-5 py-2 rounded-full transition-color duration-300 capitalize",
                                activeCategory == category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-forefround hover:bd-secondary"
                            )}
                            onClick={()=>setActiveCategory(category)}
                            >{category}</button>
                        ))
                    }
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg"> {skill.name} </h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div 
                                className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out"
                                style={{width: skill.level + '%'}}
                                />
                            </div>
                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                        </div>

                    ))}
                </div>


            </div>
        </section>
    )
}