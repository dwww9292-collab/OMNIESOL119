import { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * 원본 사이트(duzon119)의 좌/우 퀵메뉴 디자인을 옮긴 것.
 *  - 좌측 .quick-left  : index.asp:325 + contents.css:120~131
 *  - 우측 .quick-right : header.asp:56~117 (인라인 <style>)
 * 원본은 html{font-size:10px} 기준이라 rem 값을 x10px 로 환산했다.
 * 항목·링크 내용은 이 사이트 기준(OmniEsol)으로 유지한다.
 */

interface QuickItem {
  key: string;
  icon: string;
  alt: string;
  href: string;
  /** 새 탭으로 여는 외부 링크 */
  external?: boolean;
  /** 라우터로 이동하는 내부 경로 */
  internal?: boolean;
  /** 아이콘 자체가 원형 배경을 필요로 하는 경우 (원본 icon_inq.jpg) */
  roundIcon?: boolean;
  bg: string;
  color: string;
  listIcon: string;
  iconSize: string;
  iconLeft: string;
  label: string;
  sub: string;
}

const RIGHT_ITEMS: QuickItem[] = [
  {
    key: 'tel',
    icon: '/images/quick/q__cont01.png',
    alt: '전화 상담',
    href: 'tel:1877-0256',
    external: false,
    // 원본 .quick-right-list>* 기본형 (파란 배경 + 수화기 아이콘)
    bg: '#0863de',
    color: '#fff',
    listIcon: '/images/quick/icon_tel.jpg',
    iconSize: '20px',
    iconLeft: '23px',
    label: '구입문의',
    sub: '1877-0256',
  },
  {
    key: 'inquiry',
    icon: '/images/quick/icon_inq.jpg',
    alt: '온라인 구매 상담',
    href: '/inquiry',
    external: false,
    internal: true,
    // 원본 .black
    bg: '#222',
    color: '#fff',
    listIcon: '/images/quick/icon_inq.jpg',
    iconSize: '32px',
    iconLeft: '16px',
    label: '온라인 구매상담',
    sub: '평일 09:00~18:00',
    roundIcon: true,
  },
  {
    key: 'kakao',
    icon: '/images/quick/q__cont03.png',
    alt: '카카오톡 상담',
    href: 'http://pf.kakao.com/_xnFVzK',
    external: true,
    // 원본 .kaka
    bg: '#fae100',
    color: '#381e1f',
    listIcon: '/images/quick/icon_kaka.jpg',
    iconSize: '42px',
    iconLeft: '11px',
    label: '카카오톡 상담',
    sub: '오픈채팅방',
  },
  {
    key: 'naver',
    icon: '/images/quick/q__cont04.png',
    alt: '네이버 톡톡 문의',
    href: 'http://talk.naver.com/wil4im5',
    external: true,
    // 원본 .n-talk
    bg: '#03c75a',
    color: '#fff',
    listIcon: '/images/quick/icon_n_talk.jpg',
    iconSize: '30px',
    iconLeft: '17px',
    label: '톡톡문의',
    sub: '24시간 도입문의 상담',
  },
];

export default function FloatingButtons() {
  const [folded, setFolded] = useState(false);

  return (
    <>
      {/* ===== 좌측 퀵메뉴 (원본 .quick-left) — 모바일에서는 숨김 ===== */}
      <div
        className={`fixed left-[13px] top-1/2 z-40 hidden -translate-y-1/2 transition-transform duration-300 ease-out lg:block ${
          folded ? '-translate-x-[112px]' : 'translate-x-0'
        }`}
      >
        <p className="rounded-t-[10px] border border-[#e6e6e6] bg-[#f1f1f1] px-[10px] pb-[25px] pt-[23px] text-center font-mont text-[15px] font-bold leading-none text-[#111]">
          DOUZONE
        </p>

        <ul className="rounded-b-[10px] border border-t-0 border-[#e6e6e6] bg-white px-[10px] pb-[10px]">
          <li>
            <Link
              to="/inquiry"
              className="flex h-[110px] min-w-[90px] flex-col items-center pt-[30px]"
            >
              <img
                src="/images/quick/q_left_icon_01.png"
                alt=""
                aria-hidden="true"
                className="h-[42px] w-auto"
                loading="lazy"
                decoding="async"
              />
              <span className="mt-[10px] break-keep text-center text-[15px] font-medium leading-tight text-[#111]">
                방문/구매신청
              </span>
            </Link>
          </li>
        </ul>

        {/* 원본 .fold_btn — 패널 뒤(z-index:-1)에서 오른쪽으로 삐져나온 손잡이 */}
        <button
          type="button"
          onClick={() => setFolded((v) => !v)}
          aria-label={folded ? '퀵메뉴 펼치기' : '퀵메뉴 접기'}
          aria-expanded={!folded}
          className={`absolute top-0 -z-[1] rounded-r-[10px] px-[11px] py-[25px] pl-[21px] text-[14px] leading-none text-white transition-colors ${
            folded ? 'bg-[#0863de]' : 'bg-[#444]'
          }`}
          style={{ left: 'calc(100% - 10px)' }}
        >
          <span className={`inline-block transition-transform duration-300 ${folded ? 'rotate-180' : ''}`}>
            ←
          </span>
        </button>
      </div>

      {/* ===== 우측 퀵메뉴 (원본 .quick-right) — 모바일에서도 표시 ===== */}
      <div className="fixed bottom-[130px] right-[13px] z-40 flex flex-col gap-[10px]">
        {RIGHT_ITEMS.map((item) => {
          const pill = (
            <span
              className="relative left-[70px] flex h-[64px] w-[240px] items-center rounded-full pl-[65px] pr-4 text-[16px] font-medium leading-tight opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 max-md:h-[50px]"
              style={{
                backgroundColor: item.bg,
                color: item.color,
                backgroundImage: `url('${item.listIcon}')`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: `${item.iconLeft} center`,
                backgroundSize: item.iconSize,
              }}
            >
              <span className="block">
                {item.label}
                <strong className="block font-semibold">{item.sub}</strong>
              </span>
            </span>
          );

          return (
            <div key={item.key} className="group relative flex justify-end">
              <img
                src={item.icon}
                alt={item.alt}
                className={`relative z-[2] h-[64px] w-[64px] object-contain max-md:h-[50px] max-md:w-[50px] ${
                  item.roundIcon ? 'rounded-full bg-[#222] p-[14px]' : ''
                }`}
                loading="lazy"
                decoding="async"
              />

              {/* 호버 시 좌측으로 펼쳐지는 라벨 (원본 .quick-right-list) */}
              <div className="absolute right-0 top-0 h-[64px] w-[64px] overflow-hidden rounded-[32px] transition-all duration-300 group-hover:w-[314px] group-hover:pr-[74px] max-md:h-[50px] max-md:w-[50px] max-md:rounded-[25px] max-md:group-hover:w-[300px] max-md:group-hover:pr-[60px]">
                {item.external ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="block">
                    {pill}
                  </a>
                ) : item.internal ? (
                  <Link to={item.href} className="block">
                    {pill}
                  </Link>
                ) : (
                  <a href={item.href} className="block">
                    {pill}
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
