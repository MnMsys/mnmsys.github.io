import HeroSection from '../components/sections/HeroSection';
import ArchitectureSection from '../components/sections/ArchitectureSection';
import RoleAccessSection from '../components/sections/RoleAccessSection';
import DeploymentSection from '../components/sections/DeploymentSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import ZeroTrustSection from '../components/sections/ZeroTrustSection';
import CTASection from '../components/sections/CTASection';

export default function Main() {
    return (
      <main className="bg-white text-gray-900">
      <HeroSection />
      <ArchitectureSection />
      <DeploymentSection />
      <FeaturesSection />
      <ZeroTrustSection />
      <CTASection />
      </main>
    );
  }