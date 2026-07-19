import { useEffect, useRef, useState } from 'react';
import ParticleEffect from './ParticleEffect';

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-white overflow-hidden flex items-center justify-center"
    >
      <ParticleEffect count={7} color="blue" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20 flex flex-col items-center">
        {/* Main visual image */}
        <div
          className={`w-full max-w-4xl mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <img
            src="/images/content/main.png"
            alt="OmniEsol 메인 비주얼"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Text content */}
        <div className="text-center">
          <h5
            className={`text-lg md:text-xl text-omni-blue font-medium mb-4 tracking-wide transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            융합∙연결∙공유의 결정체
          </h5>

          <h1
            className={`text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-2 transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            <span className="inline-block">세상에 없던</span>
          </h1>

          <h1
            className={`text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 transition-all duration-700 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            <span className="inline-block">비즈니스 솔루션의 탄생</span>
          </h1>

          <h1
            className={`text-5xl md:text-7xl lg:text-8xl font-black tracking-wider transition-all duration-1000 delay-1000 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          >
            {'OmniEsol'.split('').map((char, i) => (
              <span
                key={i}
                className={`inline-block transition-all duration-500 ${
                  i === 0 || i === 4
                    ? 'text-omni-blue'
                    : 'text-gray-900'
                }`}
                style={{
                  transitionDelay: `${1200 + i * 100}ms`,
                }}
              >
                {char}
              </span>
            ))}
          </h1>
        </div>
      </div>
    </section>
  );
}