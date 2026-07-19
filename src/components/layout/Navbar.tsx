import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

/**
 * 헤더 디자인/치수는 원본 사이트(duzon119) common/css/layout.css 의
 * #header / #pcMenu / .right-utill / .mMenu / #menuArea 규칙을 옮긴 것.
 * 원본은 html{font-size:10px} 기준이라 rem 값을 ×10px 로 환산해 적용했다.
 * (예: 원본 height:10rem → 100px, font-size:2rem → 20px)
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 120);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 라우트가 바뀌면 모바일 메뉴를 닫는다
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // 모바일 메뉴가 열려 있는 동안 배경 스크롤 잠금
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const navItems = [
    { label: 'ERP', path: '/erp' },
    { label: '그룹웨어', path: '/groupware' },
    { label: '문서관리', path: '/document' },
    { label: 'AI', path: '/ai' },
    { label: '구매요청/상담', path: '/inquiry' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const go = (path: string) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm'
            : 'relative bg-white'
        }`}
      >
        {/* 원본 .inConts — max-width:1780px, padding:0 3rem */}
        <div className="mx-auto flex h-[68px] w-full max-w-[1780px] items-center justify-between gap-5 px-5 md:h-[100px] md:px-[30px]">
          {/* 원본 .logo-h */}
          <h1 className="flex shrink-0 items-center">
            <button
              type="button"
              onClick={() => go('/')}
              className="flex cursor-pointer items-center gap-[14px] border-none bg-transparent"
            >
              {/* 원본 header.asp와 동일하게 태그라인 + DOUZONE 워드마크를 나란히 배치.
                  각 이미지는 표시 크기의 3배 해상도로 준비해 레티나에서도 선명하다. */}
              {/* 여백을 잘라낸 뒤라 두 이미지의 비율이 4.2:1 / 4.15:1 로 거의 같다.
                  같은 높이로 두어야 원본과 동일한 시각적 균형이 나온다. */}
              <img
                src="/images/logo-tagline.png"
                alt="Authentic innovation, AX and More"
                className="h-[26px] w-auto object-contain md:h-[38px]"
                width={757}
                height={180}
                fetchPriority="high"
                decoding="async"
              />
              <span
                aria-hidden="true"
                className="h-[22px] w-px shrink-0 bg-gray-300 md:h-[32px]"
              />
              <img
                src="/images/logo-douzone.png"
                alt="DOUZONE Business Partner 아이원소프트뱅크"
                className="h-[26px] w-auto object-contain md:h-[38px]"
                width={498}
                height={120}
                fetchPriority="high"
                decoding="async"
              />
            </button>
          </h1>

          {/* 원본 #pcMenu #list */}
          <div className="hidden h-full min-w-0 max-w-[1000px] flex-1 lg:block">
            <ul className="flex h-full items-center justify-center">
              {navItems.map((item) => (
                <li key={item.path} className="flex h-full flex-1 items-center justify-center">
                  <button
                    type="button"
                    onClick={() => go(item.path)}
                    className={`flex h-full cursor-pointer items-center whitespace-nowrap border-none bg-transparent px-3 text-center text-[16px] leading-none transition-colors xl:px-4 xl:text-[20px] ${
                      isActive(item.path)
                        ? 'font-bold text-omni-blue'
                        : 'font-medium text-[#111] hover:font-bold hover:text-omni-blue'
                    }`}
                  >
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* 원본 .right-utill */}
          <div className="flex shrink-0 items-center justify-end gap-[10px]">
            {/* 원본 .language 알약 버튼 — w:100px h:3.8rem bg:#0863de radius:18px */}
            <a
              href="tel:1877-0256"
              className="hidden h-[38px] w-[100px] items-center justify-center overflow-hidden rounded-[18px] border-2 border-[#0863de] bg-[#0863de] text-[16px] font-normal leading-[1.2] text-white transition-opacity hover:opacity-90 md:flex"
            >
              전화문의
            </a>
            <button
              type="button"
              onClick={() => go('/inquiry')}
              className="hidden h-[38px] w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-[18px] border-2 border-[#0863de] bg-[#0863de] text-[16px] font-normal leading-[1.2] text-white transition-opacity hover:opacity-90 md:flex"
            >
              구매상담
            </button>

            {/* 원본 .mMenu — 삼선(비대칭 75%/50%/100%), open 시 X */}
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
              aria-expanded={menuOpen}
              className="relative h-[29px] w-[34px] cursor-pointer overflow-hidden border-none bg-transparent lg:hidden"
            >
              <span
                className={`absolute right-0 top-1/2 block h-[3px] bg-[#111] transition-all duration-300 ${
                  menuOpen ? 'w-full translate-y-[-50%] rotate-45' : 'w-3/4 translate-y-[calc(-50%-12px)]'
                }`}
              />
              <span
                className={`absolute right-0 top-1/2 block h-[3px] w-1/2 translate-y-[-50%] bg-[#111] transition-opacity duration-300 ${
                  menuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute right-0 top-1/2 block h-[3px] bg-[#111] transition-all duration-300 ${
                  menuOpen ? 'w-full translate-y-[-50%] -rotate-45' : 'w-full translate-y-[calc(-50%+13px)]'
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* 원본 #menuArea.menuLayer — 우측에서 슬라이드 인 */}
      <div
        className={`fixed bottom-0 top-[68px] z-40 w-full overflow-y-auto bg-black/70 transition-[right] duration-300 lg:hidden ${
          menuOpen ? 'right-0' : 'right-[-100%]'
        }`}
        onClick={() => setMenuOpen(false)}
      >
        <ul
          className="border-t border-[#ccc] bg-white"
          onClick={(e) => e.stopPropagation()}
        >
          {navItems.map((item) => (
            <li key={item.path} className="border-b border-[#ccc]">
              <button
                type="button"
                onClick={() => go(item.path)}
                className={`flex h-[58px] w-full cursor-pointer items-center border-none pl-[30px] pr-[70px] text-left text-[17px] font-medium leading-[1.4] transition-colors ${
                  isActive(item.path) ? 'bg-omni-blue text-white' : 'bg-transparent text-[#1b1b1b]'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
          <li className="border-b border-[#ccc]">
            <a
              href="tel:1877-0256"
              className="flex h-[58px] w-full items-center bg-[#f7f7f7] pl-[30px] pr-[70px] text-[17px] font-normal leading-[1.3] text-[#666]"
            >
              전화문의 1877-0256
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
