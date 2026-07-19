import LayerBanner from './components/LayerBanner';
import Navbar from '@/components/layout/Navbar';
import HeroSection from './components/HeroSection';
import IntroSection from './components/IntroSection';
import SolutionSection from './components/SolutionSection';
import ValueSection from './components/ValueSection';
import SearchSection from './components/SearchSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-white overflow-x-hidden">
      <LayerBanner
        bannerId="layerBanner1"
        imageSrc="/images/content/main_layer_banner.png"
        href="https://www.youtube.com/@IONEsoftBK_official"
        title="[새창]아이원소프트뱅크 유튜브 채널로 이동"
        startDate="2026-03-23"
        endDate="2026-03-26T11:00:00"
      />
      <LayerBanner
        bannerId="layerBanner2"
        imageSrc="/images/content/main_layer_banner2.png"
        href="https://www.theporterzone.com/event/erp10"
        title="[새창]더포터존 - 설 명절 기획전 페이지로 이동"
        startDate="2026-01-19"
        endDate="2026-02-05T00:00:00"
      />
      <main id="container" className="content_wrap">
        <Navbar />
        <HeroSection />
        <IntroSection />
        <SolutionSection />
        <ValueSection />
        <SearchSection />
      </main>
      <Footer />
    </div>
  );
}