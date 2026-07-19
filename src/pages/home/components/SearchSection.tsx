import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const keywords = [
  { id: 'num_1', label: '#ERP' },
  { id: 'num_2', label: '#CRM' },
  { id: 'num_3', label: '#MES' },
  { id: 'num_4', label: '#통합관리' },
  { id: 'num_5', label: '#연결결산' },
  { id: 'num_6', label: '#회계' },
  { id: 'num_7', label: '#재고' },
  { id: 'num_8', label: '#보건' },
  { id: 'num_9', label: '#환경' },
  { id: 'num_10', label: '#영업' },
  { id: 'num_11', label: '#구매' },
  { id: 'num_12', label: '#생산' },
  { id: 'num_13', label: '#프로젝트' },
  { id: 'num_14', label: '#관리회계' },
  { id: 'num_15', label: '#안전' },
  { id: 'num_16', label: '#건설' },
  { id: 'num_17', label: '#가맹' },
  { id: 'num_18', label: '#AI' },
  { id: 'num_19', label: '#설비' },
  { id: 'num_20', label: '#경비청구' },
  { id: 'num_21', label: '#전자구매' },
  { id: 'num_22', label: '#고객관리' },
  { id: 'num_23', label: '#문서관리' },
  { id: 'num_24', label: '#그룹웨어' },
  { id: 'num_25', label: '#인공지능' },
  { id: 'num_26', label: '#데이터' },
  { id: 'num_27', label: '#경영분석' },
  { id: 'num_28', label: '#내부통제' },
  { id: 'num_29', label: '#기술' },
  { id: 'num_30', label: '#인프라' },
  { id: 'num_31', label: '#인사' },
];

// Keyword → subpage route mapping
const keywordRoutes: Record<string, string> = {
  '#ERP': '/erp',
  '#AI': '/ai',
  '#인공지능': '/ai',
  '#문서관리': '/document',
  '#그룹웨어': '/groupware',
};

const thumbnails = [
  { id: 1, label: 'OmniEsol', href: 'https://online.fliphtml5.com/neqtz/wdyl/' },
  { id: 2, label: 'OmniEsol', href: '#' },
  { id: 3, label: 'OmniEsol', href: '#' },
  { id: 4, label: 'OmniEsol ERP 10', href: 'https://online.fliphtml5.com/neqtz/swhp/' },
  { id: 5, label: 'OmniEsol MES 10', href: 'https://online.fliphtml5.com/neqtz/fmei/' },
  { id: 6, label: 'OmniEsol GSP 10', href: 'https://online.fliphtml5.com/neqtz/jfwi/' },
  { id: 7, label: 'OmniEsol EFIS 10', href: 'https://online.fliphtml5.com/neqtz/ffeg/' },
  { id: 8, label: 'OmniEsol ICS 10', href: 'https://online.fliphtml5.com/neqtz/imid/' },
  { id: 9, label: 'OmniEsol ERP 10\n회계관리', href: 'https://online.fliphtml5.com/neqtz/ctxv/' },
  { id: 10, label: 'OmniEsol ERP 10\n인사관리', href: 'https://online.fliphtml5.com/neqtz/twaj/' },
  { id: 11, label: 'OmniEsol ERP 10\n영업관리', href: 'https://online.fliphtml5.com/neqtz/nhgi/' },
  { id: 12, label: 'OmniEsol ERP 10\n구매·재고관리', href: 'https://online.fliphtml5.com/neqtz/kybg/' },
  { id: 13, label: 'OmniEsol ERP 10\n생산관리', href: 'https://online.fliphtml5.com/neqtz/bxkm/' },
  { id: 14, label: 'OmniEsol ERP 10\n프로젝트관리', href: 'https://online.fliphtml5.com/neqtz/wtit/' },
  { id: 15, label: 'OmniEsol ERP 10\n관리회계', href: 'https://online.fliphtml5.com/neqtz/yfzl/' },
  { id: 16, label: 'OmniEsol ERP 10\n안전·보건·환경관리(EHS)', href: 'https://online.fliphtml5.com/neqtz/qtgg/' },
  { id: 17, label: 'OmniEsol ERP 10\n건설관리', href: 'https://online.fliphtml5.com/neqtz/awii/' },
  { id: 18, label: 'OmniEsol ERP 10\n가맹관리', href: 'https://online.fliphtml5.com/neqtz/cdzg/' },
  { id: 19, label: 'OmniEsol ERP 10\n설비관리', href: 'https://online.fliphtml5.com/neqtz/deco/' },
  { id: 20, label: 'OmniEsol ERP 10\n경비청구관리', href: 'https://online.fliphtml5.com/neqtz/ocbp/' },
  { id: 21, label: 'OmniEsol ERP 10\n전자구매', href: 'https://online.fliphtml5.com/neqtz/wwoh/' },
  { id: 22, label: 'OmniEsol ERP 10\n고객(영업)관리(CRM)', href: 'https://online.fliphtml5.com/neqtz/xlgr/' },
  { id: 23, label: 'OmniEsol 문서관리', href: 'https://online.fliphtml5.com/neqtz/ynhf/' },
  { id: 24, label: 'OmniEsol 그룹웨어', href: 'https://online.fliphtml5.com/neqtz/vjdt/' },
  { id: 25, label: 'ONE AI', href: 'https://online.fliphtml5.com/neqtz/qlvr/' },
  { id: 26, label: 'GEN AI DEWS', href: 'https://online.fliphtml5.com/neqtz/lpjb/' },
  { id: 27, label: 'Insight OFUS', href: 'https://online.fliphtml5.com/neqtz/xynh/' },
  { id: 28, label: 'OmniEsol GSP 10', href: 'https://online.fliphtml5.com/neqtz/pufi/' },
  { id: 29, label: 'OmniEsol EFIS 10', href: 'https://online.fliphtml5.com/neqtz/nerz/' },
  { id: 30, label: 'OmniEsol ICS 10', href: 'https://online.fliphtml5.com/neqtz/edmt/' },
  { id: 31, label: 'OmniEsol 기술·인프라', href: 'https://online.fliphtml5.com/neqtz/owgg/' },
];

export default function SearchSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedKeyword, setSelectedKeyword] = useState<string | null>(null);
  const navigate = useNavigate();

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

  const handleKeywordClick = (id: string, label: string) => {
    // If keyword maps to a subpage, navigate there directly
    const route = keywordRoutes[label];
    if (route) {
      navigate(route);
      return;
    }
    setSelectedKeyword(id);
  };

  const handleReset = () => {
    setSelectedKeyword(null);
  };

  // Map keyword index to thumbnail (1-based)
  const selectedIndex = selectedKeyword
    ? keywords.findIndex((k) => k.id === selectedKeyword)
    : -1;

  return (
    <section
      ref={sectionRef}
      id="search"
      className="relative w-full py-24 md:py-32"
      style={{ backgroundColor: '#3b3db4' }}
    >
      <div className="w-full max-w-6xl mx-auto px-4">
        {/* Search title */}
        <div className="text-center mb-12">
          <h2
            className={`text-3xl md:text-4xl font-bold text-white mb-4 transition-all duration-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            나에게 가장 필요한 OmniEsol 기능은?
          </h2>
          <div
            className={`transition-all duration-800 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="inline-flex items-center bg-white/10 rounded-full px-6 py-3">
              <p className="text-white/80 text-sm md:text-base">
                업무와 관련된 키워드를 골라 나에게 필요한 기능을 찾아보세요!
              </p>
            </div>
          </div>
        </div>

        {/* Keyword tags */}
        <div
          className={`flex flex-wrap justify-center gap-2 md:gap-3 mb-12 transition-all duration-800 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {keywords.map((kw) => (
            <button
              key={kw.id}
              type="button"
              onClick={() => handleKeywordClick(kw.id, kw.label)}
              // 선택 시 text-omni-blue 와 text-white/90 이 동시에 적용되면
              // 우선순위가 같아 흰 글자가 이겨 흰 배경에 묻힌다. 배타적으로 분기한다.
              className={`keyword-tag hover:bg-white hover:text-omni-blue ${
                selectedKeyword === kw.id
                  ? 'bg-white text-omni-blue border-white'
                  : 'border-white/40 text-white/90'
              }`}
            >
              {kw.label}
            </button>
          ))}
        </div>

        {/* 브로슈어 목록 — 키워드 선택 여부와 무관하게 항상 노출하고,
            키워드를 고르면 해당 항목만 강조한다. */}
        <div
          className={`transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                당신을 위한 OmniEsol, 지금 만나보세요
              </h2>
              <p className="text-white/70 text-sm md:text-base">
                클릭하여 옴니이솔의 자세한 기능을 살펴보세요!
              </p>
            </div>

            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 mb-10">
              {thumbnails.map((thumb, index) => {
                const isHighlighted = selectedIndex === index;
                return (
                  <li
                    key={thumb.id}
                    // 아무것도 선택하지 않았을 때는 전부 또렷하게,
                    // 키워드를 고른 뒤에만 나머지를 흐리게 처리한다.
                    className={`transition-all duration-500 ${
                      isHighlighted
                        ? 'scale-105 z-10'
                        : selectedKeyword
                          ? 'scale-100 opacity-50'
                          : 'scale-100 opacity-100'
                    }`}
                  >
                    <a
                      href={thumb.href}
                      target={thumb.href.startsWith('http') ? '_blank' : undefined}
                      rel={thumb.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="block group"
                    >
                      <div className="relative rounded-xl overflow-hidden bg-white/10 aspect-[3/4] mb-2">
                        <img
                          src={`https://www.omniesol.com/img/thumb/thumb_${thumb.id}.jpg`}
                          alt={thumb.label.replace('\n', ' ')}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          loading="lazy"
                        />
                        {isHighlighted && (
                          <div className="absolute inset-0 border-2 border-white rounded-xl" />
                        )}
                      </div>
                      <p className="text-white text-xs md:text-sm text-center whitespace-pre-line leading-tight">
                        {thumb.label}
                      </p>
                    </a>
                  </li>
                );
              })}
            </ul>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://fliphtml5.com/bookcase/zdnri/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded-full bg-white text-omni-blue font-semibold text-sm hover:bg-white/90 transition-colors"
            >
              OmniEsol E-브로슈어 보기
            </a>
            {/* 선택을 해제할 대상이 있을 때만 노출 */}
            {selectedKeyword && (
              <button
                type="button"
                onClick={handleReset}
                className="px-8 py-3 rounded-full bg-white/10 text-white text-sm font-medium hover:bg-white/20 transition-colors"
              >
                선택 해제
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}