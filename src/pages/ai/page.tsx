import SubPageLayout from '@/pages/sub/components/SubPageLayout';

export default function AiPage() {
  return (
    <SubPageLayout
      title="AI"
      outlinkUrl="https://www.duzon119.co.kr/"
    >
      {/* visual_1 - ONE AI */}
      <section className="w-full bg-white">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-16">
          <div className="text-center mb-10 md:mb-14">
            <h3 className="text-xl md:text-2xl lg:text-[28px] font-bold text-gray-900 leading-snug mb-4">
              데이터 분석에서 문서 작성까지
              <br />
              차별화된 AI를 경험해 보세요
              <br />
              <b className="text-omni-blue">ONE AI</b>
            </h3>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              ERP, 그룹웨어, 문서관리 등 생성된 데이터와 다양한 문서,
              <br />
              텍스트를 생성형 AI에 적용하여 업무 생산성을 극대화한 아이원소프트뱅크의 AI 솔루션입니다.
            </p>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            <li className="text-center py-6 md:py-8 border border-gray-200">
              <h5 className="text-base md:text-lg font-bold text-omni-blue mb-2">정확성</h5>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                기업 내부 데이터 및 생성된
                <br />
                문서기반으로 최적화된 답변 제공
              </p>
            </li>
            <li className="text-center py-6 md:py-8 border border-gray-200">
              <h5 className="text-base md:text-lg font-bold text-omni-blue mb-2">보안성</h5>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                내부 데이터 유출 없이
                <br />
                AI를 통한 데이터 분석
              </p>
            </li>
            <li className="text-center py-6 md:py-8 border border-gray-200">
              <h5 className="text-base md:text-lg font-bold text-omni-blue mb-2">신뢰성</h5>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                기업 데이터를 학습하지 않는
                <br />
                AI 서비스와 연계
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* contents_1 - ONE AI 상세 */}
      <section className="w-full bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-16">
          {/* box_1 */}
          <div className="mb-14 md:mb-20">
            <div className="mb-6 md:mb-8">
              <div className="inline-block px-5 py-2 bg-omni-blue text-white text-sm font-medium mb-3">
                ONE AI
              </div>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                ERP, 그룹웨어, 문서관리 등 기업 내부 데이터를 기반으로
                <br />
                기업용AI솔루션을 통한 업무 효율성 향상과 안정성을 제공
              </p>
            </div>
            <div className="mb-6 md:mb-8">
              <div className="mb-4">
                <img
                  src="/images/content/ai_1.jpg"
                  alt="ONE AI"
                  className="w-full"
                />
              </div>
              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                <div className="text-center px-4 py-3 bg-omni-blue text-white">
                  <div className="font-bold text-sm md:text-base">ERP</div>
                  <div className="text-xs text-white/80">전사적 자원관리</div>
                </div>
                <div className="text-center px-4 py-3 bg-omni-blue text-white">
                  <div className="font-bold text-sm md:text-base">그룹웨어</div>
                  <div className="text-xs text-white/80">UC</div>
                </div>
                <div className="text-center px-4 py-3 bg-omni-blue text-white">
                  <div className="font-bold text-sm md:text-base">문서관리</div>
                  <div className="text-xs text-white/80">ECM</div>
                </div>
              </div>
            </div>
            <ul className="space-y-4 md:space-y-5">
              <li>
                <b className="text-sm md:text-base text-gray-900 block mb-1">모든 업무 프로세스에 최적화된 AI</b>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                  ERP, 그룹웨어, 문서관리 메뉴의 맞춤형 AI 분석을 통한 업무 효율성 향상
                </p>
              </li>
              <li>
                <b className="text-sm md:text-base text-gray-900 block mb-1">향상된 AX 경험 제공</b>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                  AI 최적화된 맞춤형 UI / UX 적용으로 프롬프트 지식 없이 빠른 업무 수행 가능
                </p>
              </li>
              <li>
                <b className="text-sm md:text-base text-gray-900 block mb-1">B2B 시장에 최적의 AI 솔루션</b>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                  기업 데이터 보안에 최적화된 MS Azure AI 연계로 안전한 AI 활용 환경 제공
                  <br />
                  업무 데이터를 PC가 아닌 클라우드에 저장하여 기업 컨텐츠와 AI 기능의 연계 가능
                </p>
              </li>
            </ul>
          </div>

          {/* box_2 */}
          <div className="mb-14 md:mb-20">
            <div className="mb-6 md:mb-8">
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 leading-snug">
                ONE AI
                <br />
                기업의 업무 생산성 향상을 위한 도구
              </h2>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
              <li className="border border-gray-200">
                <b className="block px-4 pt-4 pb-2 text-sm md:text-base text-gray-900">ONE AI 기업의 업무 생산성 향상을 위한 도구</b>
                <img
                  src="/images/content/ai_2_1.jpg"
                  alt="ONE AI 문서 작성"
                  className="w-full"
                />
                <p className="px-4 pb-4 pt-2 text-gray-500 text-sm md:text-base leading-relaxed">
                  문서 작성을 위한 키워드 입력만으로 템플릿에 맞춰
                  <br />
                  자동 작성되어 문서 작성 시간을 절감
                </p>
              </li>
              <li className="border border-gray-200">
                <b className="block px-4 pt-4 pb-2 text-sm md:text-base text-gray-900">회계관리</b>
                <img
                  src="/images/content/ai_2_2.jpg"
                  alt="ONE AI 회계관리"
                  className="w-full"
                />
                <p className="px-4 pb-4 pt-2 text-gray-500 text-sm md:text-base leading-relaxed">
                  회계 관리의 재무제표 분석 및 요약 기능을 제공하여
                  <br />
                  빠른 의사결정이 가능
                </p>
              </li>
              <li className="border border-gray-200">
                <b className="block px-4 pt-4 pb-2 text-sm md:text-base text-gray-900">AI 문서 기반 질의응답 다중 문서 분석</b>
                <img
                  src="/images/content/ai_2_3.jpg"
                  alt="ONE AI 문서 분석"
                  className="w-full"
                />
                <p className="px-4 pb-4 pt-2 text-gray-500 text-sm md:text-base leading-relaxed">
                  첨부된 파일 및 링크를 동시에 분석/학습하여
                  <br />
                  다량의 문서 정보를 빠르게 요약하고 문서기반의 질의에 답변
                </p>
              </li>
              <li className="border border-gray-200">
                <b className="block px-4 pt-4 pb-2 text-sm md:text-base text-gray-900">인사관리</b>
                <img
                  src="/images/content/ai_2_4.jpg"
                  alt="ONE AI 인사관리"
                  className="w-full"
                />
                <p className="px-4 pb-4 pt-2 text-gray-500 text-sm md:text-base leading-relaxed">
                  ONE AI를 통해 직원 현황을 시각화하여
                  <br />
                  직관적인 자료 제공
                </p>
              </li>
            </ul>
          </div>

          {/* box_3 */}
          <div>
            <div className="mb-6 md:mb-8 text-center">
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                ONE AI가 만들어낸 놀라운 AI 혁신
              </h2>
              <p className="text-gray-500 text-sm md:text-base">
                OmniEsol ONE AI는 업무 생산성을 향상시킴과 동시에 비용 절감 효과를 제공합니다.
              </p>
            </div>
            <div className="text-center">
              <img
                src="/images/content/ai_3.svg"
                alt="ONE AI 혁신"
                className="w-full max-w-3xl mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* visual_2 - GEN AI DEWS */}
      <section className="w-full bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto px-4 py-10 md:py-16">
          <div className="text-center mb-10 md:mb-14">
            <h3 className="text-xl md:text-2xl lg:text-[28px] font-bold text-white leading-snug mb-4">
              AI가 도와주는 개발도구와 개발자 챗봇
              <br />
              <b className="text-omni-blue">GEN AI DEWS</b>
            </h3>
            <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
              GEN AI DEWS는 소프트웨어 개발 프로세스를 근본적으로 혁신하는 지능형 도구로,
              <br />
              코딩 표준 규약에 따라 일관성 있고 표준화된 코드 작성을 가능하게 하여
              <br />
              개발자들의 작업 효율을 크게 향상시킵니다.
            </p>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            <li className="text-center py-6 md:py-8">
              <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-3 bg-white/10 flex items-center justify-center">
                <i className="ri-time-line text-2xl md:text-3xl text-white/70" />
              </div>
              <h5 className="text-white text-sm md:text-base font-medium">개발 시간 단축</h5>
            </li>
            <li className="text-center py-6 md:py-8">
              <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-3 bg-white/10 flex items-center justify-center">
                <i className="ri-bug-line text-2xl md:text-3xl text-white/70" />
              </div>
              <h5 className="text-white text-sm md:text-base font-medium">오류 감소 및 코드 품질 향상</h5>
            </li>
            <li className="text-center py-6 md:py-8">
              <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-3 bg-white/10 flex items-center justify-center">
                <i className="ri-money-dollar-circle-line text-2xl md:text-3xl text-white/70" />
              </div>
              <h5 className="text-white text-sm md:text-base font-medium">개발 비용 감소</h5>
            </li>
          </ul>
        </div>
      </section>

      {/* contents_2 - GEN AI DEWS 상세 */}
      <section className="w-full bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-16">
          {/* box_4 */}
          <div className="mb-14 md:mb-20">
            <div className="mb-6 md:mb-8">
              <div className="inline-block px-5 py-2 bg-omni-blue text-white text-sm font-medium">
                코드(쿼리포함)생성 기반 설계/개발 표준화
              </div>
            </div>
            <div className="mb-6 md:mb-8">
              <div className="mb-4">
                <img
                  src="/images/content/ai_4.svg"
                  alt="설계/개발/운영"
                  className="w-full max-w-3xl mx-auto"
                />
              </div>
              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                <div className="text-center px-6 py-3 bg-omni-blue text-white">
                  <div className="font-bold text-sm md:text-base">설계</div>
                </div>
                <div className="text-center px-6 py-3 bg-omni-blue text-white">
                  <div className="font-bold text-sm md:text-base">개발</div>
                </div>
                <div className="text-center px-6 py-3 bg-omni-blue text-white">
                  <div className="font-bold text-sm md:text-base">운영</div>
                </div>
              </div>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
              <li>
                <h6 className="text-sm md:text-base font-bold text-gray-900 leading-snug mb-3 whitespace-pre-line">
                  코드생성에 적합한 설계 표준화
                  완성도 높은 코드 생성
                </h6>
                <div className="border border-gray-200 p-4 md:p-5">
                  <b className="text-sm md:text-base text-omni-blue block mb-2">설계/기초 코드 생성</b>
                  <p className="text-gray-500 text-sm leading-relaxed">코드 표준에 따른 설계서 작성</p>
                  <p className="text-gray-500 text-sm leading-relaxed">생성된 코드를 1차 테스트 후<br />개발 전달</p>
                  <p className="text-gray-500 text-sm leading-relaxed">모든 설계물 동일한 표준 준수</p>
                </div>
              </li>
              <li>
                <h6 className="text-sm md:text-base font-bold text-gray-900 leading-snug mb-3 whitespace-pre-line">
                  개발 표준화
                  코드 완성
                </h6>
                <div className="border border-gray-200 p-4 md:p-5">
                  <b className="text-sm md:text-base text-omni-blue block mb-2">표준 코드 완성</b>
                  <p className="text-gray-500 text-sm leading-relaxed">작업지시서 기반 코드 완성</p>
                  <p className="text-gray-500 text-sm leading-relaxed">개발 표준에 위배 되지 않게 작성</p>
                  <p className="text-gray-500 text-sm leading-relaxed">오류 및 성능 검토를 AI와 진행</p>
                  <p className="text-gray-500 text-sm leading-relaxed">인수인계를 위한 표준 설계<br />문서 생성</p>
                </div>
              </li>
              <li>
                <h6 className="text-sm md:text-base font-bold text-gray-900 leading-snug mb-3 whitespace-pre-line">
                  운영(유지보수)
                  표준 설계, 표준 소스
                </h6>
                <div className="border border-gray-200 p-4 md:p-5">
                  <b className="text-sm md:text-base text-omni-blue block mb-2">코드 유지 보수</b>
                  <p className="text-gray-500 text-sm leading-relaxed">개발/설계에서 AI에 의해 생성된<br />표준문서를 기준으로 유지보수</p>
                  <p className="text-gray-500 text-sm leading-relaxed">표준 소스(쿼리) 수정으로 인한<br />유지보수 용이성 증대</p>
                </div>
              </li>
            </ul>
          </div>

          {/* box_5 */}
          <div className="mb-14 md:mb-20">
            <div className="mb-6 md:mb-8">
              <div className="inline-block px-5 py-2 bg-omni-blue text-white text-sm font-medium">
                개발 툴 패러다임의 변화를 경험해 보세요
              </div>
            </div>
            <div className="mb-6 md:mb-8">
              <div className="relative">
                <img
                  src="/images/content/ai_5.jpg"
                  alt="GEN AI DEWS 개발 툴"
                  className="w-full"
                />
                <div className="absolute top-3 left-3 px-3 py-2 bg-black/60 text-white text-xs">
                  Query Builder
                  <br />
                  (쿼리 개발 도구)
                </div>
                <div className="absolute bottom-3 right-3 px-3 py-2 bg-omni-blue/80 text-white text-xs">
                  개발자 챗봇
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
              <ul className="lg:w-1/3 space-y-3">
                <li className="text-sm md:text-base font-bold text-gray-900">표준 코드 검증</li>
                <li className="text-sm md:text-base font-bold text-gray-900 whitespace-pre-line">
                  예측코딩 및 문망으로
                  Fill Me 기능으로 제공
                </li>
                <li className="text-sm md:text-base font-bold text-gray-900">코드 분석 / 코드 최적화</li>
              </ul>
              <div className="lg:w-2/3 space-y-3">
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                  생성형 AI와 결합하여 테이블 구조, 지식 없이도 쉽게 코드 생성코드를 표준에 따라 자동 생성하여
                  오류를 최소화 하고 누구나 쉽게 유지보수 가능
                </p>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                  생성된 코드를 바탕으로 설계 산출물을 자동 생성하여 수작업이 많고, 반복적인 산출물 작성을 AI가 대신 생성해 주어
                  유지보수에 용이
                </p>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                  코드/데이터베이스 관련 모든 질문에 대답하는 챗봇으로 별도 매뉴얼/학습비용이 필요 없음.
                </p>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                  ERP 도메인 DB/코드에 대한 질문 및 답변 제공
                </p>
              </div>
            </div>
          </div>

          {/* box_6 */}
          <div>
            <div className="mb-6 md:mb-8">
              <div className="inline-block px-5 py-2 bg-omni-blue text-white text-sm font-medium">
                모든 설계/개발자마다 똑똑한 AI 개발자가 생깁니다
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
              <div className="lg:w-1/2">
                <img
                  src="/images/content/ai_6.jpg"
                  alt="AI 개발자 지원"
                  className="w-full"
                />
              </div>
              <ul className="lg:w-1/2 space-y-4 md:space-y-5">
                <li className="text-sm md:text-base text-gray-700 leading-relaxed">
                  <b>개발 과정에서 발생하는 오류를 줄이고, 수정 비용과 시간을 절약</b>
                </li>
                <li className="text-sm md:text-base text-gray-700 leading-relaxed">
                  <b>빠른 개발 속도로 개발 시간을 단축시켜 경쟁 우위 확보</b>
                </li>
                <li className="text-sm md:text-base text-gray-700 leading-relaxed">
                  <b>코드 품질을 향상시키며 개발자의 생산성 증가</b>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* contents_3 - Video */}
      <section className="w-full bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-16">
          <div className="mb-10 md:mb-14">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <li>
                <div className="mb-4">
                  <h3 className="text-base md:text-lg font-bold text-gray-900">
                    <em className="text-omni-blue not-italic">OmniEsol</em> ONE AI 주요기능 소개
                  </h3>
                </div>
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/AYmYggo_6UQ?si=vtM49Wdb7NLLto5o"
                    title="OmniEsol ONE AI 주요기능 소개"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </li>
              <li>
                <div className="mb-4">
                  <h3 className="text-base md:text-lg font-bold text-gray-900">
                    <em className="text-omni-blue not-italic">OmniEsol</em> GEN AI DEWS 주요기능 소개
                  </h3>
                </div>
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/hjkUoUrfq-g?si=vpjxwJXZDfBcTV_9"
                    title="OmniEsol GEN AI DEWS 주요기능 소개"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </SubPageLayout>
  );
}