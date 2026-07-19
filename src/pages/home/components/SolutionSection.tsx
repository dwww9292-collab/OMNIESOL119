import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const solutions = [
  {
    id: 'erp',
    label: 'ERP',
    path: '/erp',
    icon: 'ri-settings-4-line',
  },
  {
    id: 'groupware',
    label: '그룹웨어',
    path: '/groupware',
    icon: 'ri-team-line',
  },
  {
    id: 'document',
    label: '문서관리',
    path: '/document',
    icon: 'ri-file-text-line',
  },
  {
    id: 'ai',
    label: 'AI',
    path: '/ai',
    icon: 'ri-brain-line',
  },
];

export default function SolutionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

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
      id="solutions"
      className="relative w-full py-24 md:py-32 bg-white"
    >
      <div className="w-full max-w-6xl mx-auto px-4">
        {/* Title area */}
        <div className="mb-16">
          <h3
            className={`text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight transition-all duration-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            업무 생산성을 극대화하는
            <br />
            핵심 솔루션의 집합체
          </h3>
          <p
            className={`text-gray-500 text-base md:text-lg transition-all duration-800 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            각 아이콘을 눌러 자세한 내용을 확인 해 보세요!
          </p>
        </div>

        {/* Icons grid */}
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {solutions.map((item, index) => (
            <li
              key={item.id}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <button
                type="button"
                onClick={() => navigate(item.path)}
                className="flex flex-col items-center group bg-transparent border-none cursor-pointer w-full"
              >
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-omni-blue/20">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-omni-blue flex items-center justify-center transition-transform duration-300 group-hover:rotate-3">
                    <i className={`${item.icon} text-white text-2xl md:text-3xl`} />
                  </div>
                </div>
                <p className="text-gray-800 font-semibold text-base md:text-lg group-hover:text-omni-blue transition-colors">
                  {item.label}
                </p>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}