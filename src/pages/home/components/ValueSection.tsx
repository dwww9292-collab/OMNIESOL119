import { useEffect, useRef, useState } from 'react';

const values = [
  {
    no: '01',
    name: 'Connect',
    label: '연결',
    desc: '인공지능 전환(AX)을 준비하기 위한 비즈니스 순환 프로세스.',
    bg: 'from-blue-500 to-indigo-600',
    icon: 'ri-link',
  },
  {
    no: '02',
    name: 'Share',
    label: '공유',
    desc: '데이터의 공유. 시스템 안에서 기업 자원데이터를 공유해 사용자의 편의성을 향상한다.',
    bg: 'from-indigo-500 to-purple-600',
    icon: 'ri-share-line',
  },
  {
    no: '03',
    name: 'Convergence',
    label: '융합',
    desc: '솔루션의 융합. 데이터를 통합하고 솔루션과 기술의 융합 시너지로 새로운 가치를 창출한다.',
    bg: 'from-purple-500 to-pink-500',
    icon: 'ri-merge-cells-horizontal',
  },
];

const videos = [
  {
    title: 'OmniEsol 도입 사례',
    poster: 'https://www.omniesol.com/img/poster_1.png',
    src: 'https://api.joongang.co.kr/moka_api/ovp.proxy.temporary?id=6366168647112',
  },
  {
    title: 'OmniEsol의 모든 것',
    poster: 'https://www.omniesol.com/img/poster_2.png',
    src: 'https://api.joongang.co.kr/moka_api/ovp.proxy.temporary?id=6366168257112',
  },
];

export default function ValueSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="value"
      className="relative w-full py-24 md:py-32 bg-white overflow-hidden"
    >
      <div className="w-full max-w-6xl mx-auto px-4">
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-16 gap-8">
          <div>
            <h3
              className={`text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight transition-all duration-800 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              OmniEsol의
              <br />
              핵심 가치
            </h3>
          </div>
          <div
            className={`md:max-w-xs transition-all duration-800 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-gray-600 text-base leading-relaxed">
              연결-공유-융합
              <br />
              인공지능 전환(AX)을 준비하기 위한
              <br />
              비즈니스 순환 프로세스
            </p>
          </div>
        </div>

        {/* Values list */}
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-20">
          {values.map((item, index) => (
            <li
              key={item.no}
              className={`group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${300 + index * 200}ms` }}
            >
              <div className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${item.bg} p-8 pb-0 min-h-[280px] flex flex-col`}>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-white/60 text-sm font-bold tracking-widest">
                    {item.no}
                  </span>
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <i className={`${item.icon} text-white text-xl`} />
                  </div>
                </div>
                <h4 className="text-white text-2xl font-bold mb-2">{item.name}</h4>
                <div className="mt-auto pt-6 pb-8">
                  <p className="text-white/90 text-sm leading-relaxed">
                    <b className="text-white font-bold block text-base mb-1">{item.label}</b>
                    {item.desc}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Video slider */}
        <div
          className={`relative transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
            {videos[activeSlide].title}
          </h2>

          <div className="relative rounded-2xl overflow-hidden bg-gray-900 shadow-2xl">
            <div className="relative aspect-video">
              {videos.map((video, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === activeSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <video
                    className="w-full h-full object-cover"
                    controls
                    playsInline
                    poster={video.poster}
                  >
                    <source src={video.src} type="video/mp4" />
                  </video>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination dots */}
          <div className="flex items-center justify-center gap-3 mt-6">
            {videos.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveSlide(index)}
                className={`slider-dot ${index === activeSlide ? 'active' : ''}`}
                aria-label={`비디오 ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}