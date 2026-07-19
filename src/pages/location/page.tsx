import SubPageLayout from '@/pages/sub/components/SubPageLayout';

export default function LocationPage() {
  return (
    <SubPageLayout
      title="오시는 길"
      headerBgImage="/images/content/bg_location.jpg"
    >
      <div className="max-w-5xl mx-auto px-4 py-10 md:py-14">
        {/* 상단 안내 + 카카오 버튼 */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div className="text-sm md:text-base text-gray-700 leading-relaxed">
            <p>기업을 위한 모든 ICT Solution과 Service를 제공하는</p>
            <p className="text-lg md:text-xl font-bold text-gray-900">대한민국 대표 ICT 기업 더존</p>
          </div>
          <a
            href="https://map.kakao.com/?urlX=476674.0&urlY=1106969.0&name=%EC%84%9C%EC%9A%B8%20%EA%B5%AC%EB%A1%9C%EA%B5%AC%20%EB%94%94%EC%A7%80%ED%84%B8%EB%A1%9C%20285&map_type=TYPE_MAP&from=roughmap"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-yellow-400 text-gray-900 text-sm font-medium rounded hover:bg-yellow-500 transition-colors whitespace-nowrap"
          >
            KAKAO 지도보기
            <i className="ri-arrow-right-line" />
          </a>
        </div>

        {/* 지도 영역 */}
        <div className="relative w-full rounded-lg overflow-hidden border border-gray-200 mb-8">
          {/* 에이스트윈타워 정보 오버레이 카드 */}
          <div className="absolute top-4 left-4 z-10 bg-white rounded-lg shadow-lg p-4 max-w-[280px]">
            <h3 className="font-bold text-gray-900 text-base">에이스트윈타워</h3>
            <p className="text-sm text-gray-600 mt-1">대한민국 서울특별시 구로구 디지털로 285</p>
            <div className="flex items-center gap-1 mt-2">
              <span className="text-yellow-500 text-sm">★</span>
              <span className="text-sm font-medium text-gray-800">5.0</span>
              <span className="text-xs text-gray-500">(4)</span>
              <span className="text-gray-300 mx-1">|</span>
              <i className="ri-information-line text-gray-400 text-sm" />
            </div>
            <div className="mt-3 pt-3 border-t border-gray-100 flex items-center gap-3">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=37.4855,126.9015"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-600 hover:underline flex items-center gap-1"
              >
                <i className="ri-direction-line" />
                길찾기
              </a>
              <a
                href="https://www.google.com/maps/place/%EC%97%90%EC%9D%B4%EC%8A%A4%ED%8A%B8%EC%9C%88%ED%83%80%EC%9B%8C"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-600 hover:underline flex items-center gap-1"
              >
                <i className="ri-map-2-line" />
                지도 크게보기
              </a>
            </div>
          </div>

          <iframe
            src="https://maps.google.com/maps?q=%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C+%EA%B5%AC%EB%A1%9C%EA%B5%AC+%EB%94%94%EC%A7%80%ED%84%B8%EB%A1%9C+285+%EC%97%90%EC%9D%B4%EC%8A%A4%ED%8A%B8%EC%9C%88%ED%83%80%EC%9B%8C+1%EC%B0%A8&hl=ko&t=m&z=17&ie=UTF8&iwloc=A&output=embed"
            title="아이원소프트뱅크 위치"
            className="w-full h-[400px] md:h-[500px] border-0"
            allowFullScreen
            loading="lazy"
          />
        </div>

        {/* 연락처 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
            <div className="w-8 h-8 flex items-center justify-center shrink-0">
              <i className="ri-map-pin-2-fill text-gray-700 text-lg" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-1">주 소</p>
              <p className="text-xs text-gray-600 leading-relaxed">
                [우12345] 서울특별시 구로구 디지털로 285(구로동, 에이스트윈타워 1차 405호)
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
            <div className="w-8 h-8 flex items-center justify-center shrink-0">
              <i className="ri-phone-fill text-gray-700 text-lg" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-1">연락처</p>
              <p className="text-xs text-gray-600 leading-relaxed">대표전화 1600-4208</p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
            <div className="w-8 h-8 flex items-center justify-center shrink-0">
              <i className="ri-printer-fill text-gray-700 text-lg" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-1">팩 스</p>
              <p className="text-xs text-gray-600 leading-relaxed">02-3432-4623</p>
            </div>
          </div>
        </div>

        {/* 오시는 방법 */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
            <p className="text-sm font-bold text-gray-900">오시는 방법</p>
          </div>
          <div className="p-5 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6">
              <span className="text-sm font-semibold text-gray-900 w-20 shrink-0">지하철</span>
              <span className="text-sm text-gray-700">2호선 구로디지털단지 역</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6">
              <span className="text-sm font-semibold text-gray-900 w-20 shrink-0">버스정류장</span>
              <span className="text-sm text-gray-700">롯데시티호텔구로 (17-751) / 보람아파트 (17-503) / 구로3동현대아파트 (17-911) / 롯데시티호텔구로 [17-752]</span>
            </div>
          </div>
        </div>
      </div>
    </SubPageLayout>
  );
}