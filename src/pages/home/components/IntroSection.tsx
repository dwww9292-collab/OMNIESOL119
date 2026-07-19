import { useEffect, useRef, useState } from 'react';
import ParticleEffect from './ParticleEffect';

export default function IntroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: '#3b3db4' }}
    >
      <ParticleEffect count={5} color="white" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 text-center">
        <h2
          className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-10 leading-tight transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          인공지능 전환을 위한 새로운 정의
        </h2>

        <div
          className={`space-y-3 transition-all duration-800 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-white/90 text-base md:text-lg leading-relaxed">
            새로운 시대에는 새로운 정의가 필요하다. 인공지능 시대에 비즈니스 방식 역시 변해야 한다.
          </p>
          <p className="text-white/90 text-base md:text-lg leading-relaxed">
            아이원소프트뱅크의 OmniEsol은 단순히 여러 기능의 집합체가 아니다.
          </p>
          <p className="text-white/90 text-base md:text-lg leading-relaxed">
            ERP∙그룹웨어∙문서관리 등에 인공지능이 더해져 모든 비즈니스 기능이 촘촘히 연결됐다.
          </p>
          <p className="text-white/90 text-base md:text-lg leading-relaxed">
            OmniEsol이 연결과 공유, 그리고 융합의 결정체라 불리는 이유다.
          </p>
          <p className="text-white/90 text-base md:text-lg leading-relaxed">
            아이원소프트뱅크의 풍부한 노하우와 인공지능이라는 최신 기술이 온전히 담긴 OmniEsol은
          </p>
          <p className="text-white/90 text-base md:text-lg leading-relaxed">
            비즈니스 솔루션 역사의 결과이자 완결판이다.
          </p>
        </div>
      </div>
    </section>
  );
}