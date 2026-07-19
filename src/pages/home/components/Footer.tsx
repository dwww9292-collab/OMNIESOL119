export default function Footer() {
  return (
    <footer className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-4 py-6 md:py-8">
        {/* 상단 링크 */}
        <div className="flex items-center gap-2 text-sm text-[#7b7b7b]">
          <a href="/privacy" className="hover:text-gray-900 transition-colors whitespace-nowrap">
            개인정보취급방침
          </a>
          <span className="text-gray-300">|</span>
          <a href="/terms" className="hover:text-gray-900 transition-colors whitespace-nowrap">
            이용약관
          </a>
          <span className="text-gray-300">|</span>
          <a href="/location" className="hover:text-gray-900 transition-colors whitespace-nowrap">
            오시는 길
          </a>
        </div>

        {/* 구분선 */}
        <div className="border-t border-gray-300 mt-4" />

        {/* 하단 정보 영역 */}
        <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8 py-6">
          {/* 좌측: 로고 및 카피라이트 */}
          <div className="w-full lg:w-[260px] shrink-0">
            <img
              src="/images/logo-douzone.png"
              alt="iONE SOFTBANK"
              className="w-32 h-auto object-contain mb-3"
            />
            <p className="text-xs text-[#7b7b7b] mt-4 leading-relaxed">
              COPYRIGHT © 2024 iONE SOFTBANK.
              <br />
              All rights reserved.
            </p>
          </div>

          {/* 중앙: 연락처 정보 */}
          <div className="flex-1 text-xs text-[#7b7b7b] leading-relaxed space-y-1">
            <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <span>아이원소프트뱅크(주)</span>
              <span className="text-gray-300">|</span>
              <span>대표:황명희</span>
              <span className="text-gray-300">|</span>
              <span>사업자등록번호:113-86-70956</span>
              <span className="text-gray-300">|</span>
              <span>통신판매신고번호:2017-서울구로-0617</span>
            </p>
            <p>주소:서울특별시 구로구 디지털로 285 에이스원타워 1차 405호</p>
            <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <span>구매상담담당:1877-0256</span>
              <span className="text-gray-300">|</span>
              <span>고객센터:1877-1859</span>
              <span className="text-gray-300">|</span>
              <span>iCUBE/G20:1877-0840</span>
              <span className="text-gray-300">|</span>
              <span>블루앱비서:1600-4208</span>
            </p>
            <p>테스트 계정 신청:070-4497-3388</p>
          </div>

          {/* 우측: 소셜 아이콘 이미지 */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href="https://blog.naver.com/zhogksgjqm"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full overflow-hidden hover:opacity-90 transition-opacity"
              title="네이버 블로그"
            >
              <img
                src="/images/social/blog.webp"
                alt="네이버 블로그"
                className="w-full h-full object-cover"
              />
            </a>
            <a
              href="https://cafe.naver.com/ionesoftbank"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full overflow-hidden hover:opacity-90 transition-opacity"
              title="네이버 카페"
            >
              <img
                src="/images/social/cafe.webp"
                alt="네이버 카페"
                className="w-full h-full object-cover"
              />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full overflow-hidden hover:opacity-90 transition-opacity"
              title="페이스북"
            >
              <img
                src="/images/social/facebook.webp"
                alt="페이스북"
                className="w-full h-full object-cover"
              />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full overflow-hidden hover:opacity-90 transition-opacity"
              title="링크드인"
            >
              <img
                src="/images/social/instagram.webp"
                alt="링크드인"
                className="w-full h-full object-cover"
              />
            </a>
            <a
              href="http://pf.kakao.com/_xnFVzK"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full overflow-hidden hover:opacity-90 transition-opacity"
              title="카카오톡"
            >
              <img
                src="/images/social/kakao.webp"
                alt="카카오톡"
                className="w-full h-full object-cover"
              />
            </a>
            <a
              href="https://youtube.com/@IONEsoftBK_official"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-red-600 flex items-center justify-center hover:opacity-90 transition-opacity"
              title="유튜브"
            >
              <i className="ri-youtube-fill text-white text-sm" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}