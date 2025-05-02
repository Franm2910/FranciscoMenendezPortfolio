
import { act, useState } from "react"
import { cn } from "../lib/utils"

const skills = [
    { name: "Cebar Mates", level: 35, category: "Social"},
    { name: "Cocinar", level: 75, category: "Social"},
    { name: "Alto capo soy", level: 100, category: "Social"},
    //otracategoria
    { name: "Leer", level: 35, category: "Nerd"},
]

const categories = ["Todas", "Social", "Nerd"]

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