import { Link } from 'react-router-dom';

export default function FloatingButtons() {
  return (
    <>
      {/* Left DOUZONE Quick Panel */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden md:block">
        <div className="bg-white border border-gray-200 rounded-r-2xl shadow-lg overflow-hidden">
          <div className="px-4 py-3 bg-[#1a3a6b] text-center">
            <p className="text-xs font-bold text-white tracking-wider">DOUZONE</p>
          </div>
          <div className="divide-y divide-gray-100">
            <Link
              to="/inquiry"
              className="flex flex-col items-center gap-1 px-4 py-4 hover:bg-gray-50 transition-colors cursor-pointer"
              aria-label="무료방문요청"
            >
              <div className="w-8 h-8 flex items-center justify-center text-[#1a3a6b]">
                <i className="ri-calendar-check-line text-xl"></i>
              </div>
              <span className="text-xs text-gray-600 text-center leading-tight">
                무료방문요청
              </span>
            </Link>
            <Link
              to="/inquiry"
              className="flex flex-col items-center gap-1 px-4 py-4 hover:bg-gray-50 transition-colors cursor-pointer"
              aria-label="OmniEsol 구매신청"
            >
              <div className="w-8 h-8 flex items-center justify-center text-[#1a3a6b]">
                <i className="ri-computer-line text-xl"></i>
              </div>
              <span className="text-xs text-gray-600 text-center leading-tight">
                <em className="not-italic font-semibold">OmniEsol</em>
                <br />
                구매신청
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Right Floating Action Buttons */}
      <div className="fixed right-4 bottom-24 z-40 hidden md:flex flex-col gap-3">
        {/* Phone */}
        <a
          href="tel:1877-0256"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1a3a6b] text-white shadow-lg hover:bg-[#0f2550] transition-all duration-200 cursor-pointer"
          aria-label="전화 문의"
          title="구입문의 1877-0256"
        >
          <i className="ri-phone-line text-lg"></i>
        </a>

        {/* Online Consultation */}
        <Link
          to="/inquiry"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1a3a6b] text-white shadow-lg hover:bg-[#0f2550] transition-all duration-200 cursor-pointer"
          aria-label="온라인 구매상담"
          title="온라인 구매상담 (평일 09:00~18:00)"
        >
          <i className="ri-customer-service-2-line text-lg"></i>
        </Link>

        {/* KakaoTalk */}
        <a
          href="http://pf.kakao.com/_xnFVzK"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FEE500] text-[#3C1E1E] shadow-lg hover:opacity-90 transition-all duration-200 cursor-pointer"
          aria-label="카카오톡 상담"
          title="카카오톡 오픈채팅 상담"
        >
          <i className="ri-kakao-talk-fill text-lg"></i>
        </a>

        {/* Naver Talk */}
        <a
          href="http://talk.naver.com/wil4im5"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-[#03C75A] text-white shadow-lg hover:opacity-90 transition-all duration-200 cursor-pointer"
          aria-label="네이버 톡톡 문의"
          title="네이버 톡톡 24시간 도입문의 상담"
        >
          <i className="ri-chat-3-line text-lg"></i>
        </a>
      </div>
    </>
  );
}