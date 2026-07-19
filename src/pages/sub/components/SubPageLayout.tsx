import Footer from '@/pages/home/components/Footer';
import Navbar from '@/components/layout/Navbar';

interface SubPageLayoutProps {
  title: string;
  children: React.ReactNode;
  outlinkUrl?: string;
  headerBgImage?: string;
}

export default function SubPageLayout({ title, children, outlinkUrl, headerBgImage }: SubPageLayoutProps) {
  const defaultOutlink = 'https://www.duzon119.co.kr/';

  return (
    <div className="relative w-full min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* Header */}
      <section
        className="relative w-full overflow-hidden"
        style={{ minHeight: '300px' }}
      >
        {/* Background image */}
        {headerBgImage && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${headerBgImage}')` }}
          />
        )}
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute w-3 h-3 rounded-full bg-white/15 animate-float"
            style={{ top: '15%', left: '18%', animationDelay: '0s' }}
          />
          <div
            className="absolute w-4 h-4 rounded-full bg-white/10 animate-float"
            style={{ top: '35%', left: '8%', animationDelay: '0.8s' }}
          />
          <div
            className="absolute w-2.5 h-2.5 rounded-full bg-white/20 animate-float"
            style={{ top: '55%', left: '25%', animationDelay: '1.6s' }}
          />
          <div
            className="absolute w-5 h-5 rounded-full bg-white/10 animate-float"
            style={{ top: '20%', right: '20%', animationDelay: '2.4s' }}
          />
          <div
            className="absolute w-3 h-3 rounded-full bg-white/15 animate-float"
            style={{ top: '60%', right: '12%', animationDelay: '1.2s' }}
          />
          <div
            className="absolute w-4 h-4 rounded-full bg-white/10 animate-float"
            style={{ top: '40%', right: '30%', animationDelay: '3.2s' }}
          />
        </div>
        <div className="relative z-10 flex items-center justify-center text-center py-20 md:py-24">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            {title}
          </h1>
        </div>
      </section>

      <main className="relative w-full">{children}</main>

      {/* Outlink */}
      <section className="w-full py-10 md:py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <a
            href={outlinkUrl || defaultOutlink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-3.5 bg-omni-blue text-white font-medium rounded hover:bg-blue-700 transition-colors whitespace-nowrap"
          >
            도입 문의
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}