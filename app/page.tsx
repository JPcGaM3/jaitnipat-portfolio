import ContactSection from './components/contact-section';
import ExperienceSection from './components/experience-section';
import HeroSection from './components/hero-section';
import LayoutShell from './components/layout-shell';
import ProjectsSection from './components/projects-section';

export default function HomePage() {
  return (
    <LayoutShell>
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </LayoutShell>
  );
}
