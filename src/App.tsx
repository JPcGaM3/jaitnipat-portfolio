import CertificatesSection from './components/CertificatesSection';
import ContactSection from './components/ContactSection';
import ExperienceSection from './components/ExperienceSection';
import HeroSection from './components/HeroSection';
import LayoutShell from './components/LayoutShell';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';

export default function App() {
  return (
    <LayoutShell>
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificatesSection />
      <SkillsSection />
      <ContactSection />
    </LayoutShell>
  );
}
