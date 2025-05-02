import { ThemeToggle } from "../components/ThemeToggle";
import { StartBackground } from "../components/StartBackground";
import { NavBar } from "../components/NavBar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
export const Home = () => {

return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    {/* Theme Toggle para cambiar de modo oscuro*/}
    <ThemeToggle/> 

    {/* Background Effects*/}
    <StartBackground/> 
    {/* Nav Bar */}
    <NavBar />
    {/* Main Content */}
    <main>
        {/* Hero Section */}
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
    </main>

    {/* Footer */}
</div>;

}