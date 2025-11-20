import ContactSection from './components/contact-section';
import CertificatesSection from './components/certificates-section';
import ExperienceSection from './components/experience-section';
import HeroSection from './components/hero-section';
import LayoutShell from './components/layout-shell';
import ProjectsSection from './components/projects-section';
import SkillsSection from './components/skills-section';

export default function HomePage() {
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
