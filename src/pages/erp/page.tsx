import SubPageLayout from '@/pages/sub/components/SubPageLayout';

export default function ErpPage() {
  return (
    <SubPageLayout title="ERP">
      {/* Visual Section - 원본 .visual */}
      <section className="w-full bg-[#0a0a0a] py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-6 md:mb-8">
            <h3 className="text-white text-xl md:text-2xl lg:text-[28px] font-normal leading-relaxed">
              비즈니스 요구사항에 맞춰 발전과 진화를 거듭한
              <br />
              <b className="text-omni-blue font-bold">OmniEsol ERP</b>
            </h3>
          </div>
          <div className="mb-8 md:mb-10">
            <img
              src="https://www.omniesol.com/img/erp_visual.png"
              alt="OmniEsol ERP"
              className="w-full max-w-4xl mx-auto"
            />
          </div>
          <ul className="flex flex-wrap justify-center gap-3 md:gap-4">
            {['AI, 클라우드, 빅데이터', '글로벌, 그룹사 경영환경', '솔루션 연계, 확장', '실시간 데이터 처리', '플랫폼 통합', '비즈니스 인사이트'].map((item) => (
              <li key={item}>
                <span className="inline-flex items-center px-4 py-2 md:px-5 md:py-2 bg-omni-blue text-white rounded-full text-sm md:text-[15px] font-medium whitespace-nowrap">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contents Section - 원본 .contents */}
      <section className="w-full bg-white py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4">
          {/* Box 1: FCM */}
          <div className="py-10 md:py-16 border-b border-gray-100">
            <div className="mb-6 md:mb-8">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-omni-blue text-white rounded-full text-sm md:text-[15px] font-medium">
                <span>OmniEsol</span>
                <span className="font-bold">ERP FCM</span>
              </div>
              <p className="text-gray-600 text-base md:text-lg mt-3">기업 회계의 투명성과 신뢰성 확보</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 md:gap-8 mb-8 md:mb-10">
              <div className="flex flex-wrap gap-2 content-start lg:w-1/3">
                {['#재무회계', '#세무관리', '#자산관리', '#자금회계', '#예산관리', '#리스회계'].map((t) => (
                  <span key={t} className="inline-flex items-center px-3 py-1.5 rounded-full border border-omni-blue text-omni-blue text-xs md:text-sm font-medium bg-white whitespace-nowrap">
                    {t}
                  </span>
                ))}
              </div>
              <div className="lg:w-2/3">
                <img
                  src="https://www.omniesol.com/img/erp_1.jpg"
                  alt="OmniEsol ERP FCM"
                  className="w-full rounded-lg"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div>
                <b className="block text-gray-900 font-bold mb-2 text-sm md:text-base">회계 기준정보의 통합관리</b>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  다양한 기준과 업종별 계정과목관리
                  <br />
                  그룹사 통합 재무제표관리
                </p>
              </div>
              <div>
                <b className="block text-gray-900 font-bold mb-2 text-sm md:text-base">자산관리의 고도화</b>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  자산시뮬레이션 적용
                  <br />
                  부분매각, 손상, 재평가 등 다양한 변동처리
                </p>
              </div>
              <div>
                <b className="block text-gray-900 font-bold mb-2 text-sm md:text-base">자금관리 효율화</b>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  확정 기능을 통한 자금 예측력 강화
                  <br />
                  유형별 체크 기능을 통한 자금사고 방지
                </p>
              </div>
            </div>
          </div>

          {/* Box 2: HRM */}
          <div className="py-10 md:py-16 border-b border-gray-100">
            <div className="mb-6 md:mb-8">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-omni-blue text-white rounded-full text-sm md:text-[15px] font-medium">
                <span>OmniEsol</span>
                <span className="font-bold">ERP HRM</span>
              </div>
              <p className="text-gray-600 text-base md:text-lg mt-3">조직원과 사용자 중심의 HR 환경 구현</p>
            </div>

            <div className="flex flex-col lg:flex-row-reverse gap-6 md:gap-8 mb-8 md:mb-10">
              <div className="flex flex-wrap gap-2 content-start lg:w-1/3">
                {['#인사관리', '#채용관리', '#근태관리', '#급여관리', '#성과관리', '#퇴직관리', '#인재육성관리', '#연말정산관리'].map((t) => (
                  <span key={t} className="inline-flex items-center px-3 py-1.5 rounded-full border border-omni-blue text-omni-blue text-xs md:text-sm font-medium bg-white whitespace-nowrap">
                    {t}
                  </span>
                ))}
              </div>
              <div className="lg:w-2/3">
                <img
                  src="https://www.omniesol.com/img/erp_2.jpg"
                  alt="OmniEsol ERP HRM"
                  className="w-full rounded-lg"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div>
                <b className="block text-gray-900 font-bold mb-2 text-sm md:text-base">인사관리업무</b>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  조직관리, 근태관리, 급여관리, 퇴직금관리, 복리후생, 연말정산, 원천세신고
                </p>
              </div>
              <div>
                <b className="block text-gray-900 font-bold mb-2 text-sm md:text-base">대사우관리(ESS)</b>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  개인정보 변경 신청
                  <br />
                  증명서 발급신청 및 출력
                </p>
              </div>
              <div>
                <b className="block text-gray-900 font-bold mb-2 text-sm md:text-base">전략적인 HRD 기능</b>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  인재육성, 경력개발, 핵심인재 및 교육관리
                  <br />
                  KPI/MBO 기반의 성과평가 및 종합평가
                </p>
              </div>
            </div>
          </div>

          {/* Box 3: SCM */}
          <div className="py-10 md:py-16 border-b border-gray-100">
            <div className="mb-6 md:mb-8">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-omni-blue text-white rounded-full text-sm md:text-[15px] font-medium">
                <span>OmniEsol</span>
                <span className="font-bold">ERP SCM</span>
              </div>
              <p className="text-gray-600 text-base md:text-lg mt-3">데이터 기반의 실시간 SCM 프로세스 정립</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 md:gap-8 mb-8 md:mb-10">
              <div className="flex flex-wrap gap-2 content-start lg:w-1/3">
                {['#영업관리', '#설비관리', '#품질관리', '#프로젝트관리', '#생산관리', '#서비스관리', '#구매관리', '#사업/이자/배당', '#재고관리', '#무역관리'].map((t) => (
                  <span key={t} className="inline-flex items-center px-3 py-1.5 rounded-full border border-omni-blue text-omni-blue text-xs md:text-sm font-medium bg-white whitespace-nowrap">
                    {t}
                  </span>
                ))}
              </div>
              <div className="lg:w-2/3">
                <img
                  src="https://www.omniesol.com/img/erp_3.jpg"
                  alt="OmniEsol ERP SCM"
                  className="w-full rounded-lg"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div>
                <b className="block text-gray-900 font-bold mb-2 text-sm md:text-base">실시간 영업이익 시뮬레이션</b>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  영업채널별 가격요소 계산을 통한 최적의 판매가 산출
                </p>
              </div>
              <div>
                <b className="block text-gray-900 font-bold mb-2 text-sm md:text-base">다양한 구매활동의 전산화</b>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  서비스, 용역, 비용, 자산, 설비 등 전사 통합 구매 기능 제공
                </p>
              </div>
              <div>
                <b className="block text-gray-900 font-bold mb-2 text-sm md:text-base">목적 및 변화에 따른 BOM관리</b>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  연구 및 생산 목적별 BOM관리
                  <br />
                  버전 및 대체번호를 통한 BOM 변경관리
                </p>
              </div>
            </div>
          </div>

          {/* Box 4: CO */}
          <div className="py-10 md:py-16">
            <div className="mb-6 md:mb-8">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-omni-blue text-white rounded-full text-sm md:text-[15px] font-medium">
                <span>OmniEsol</span>
                <span className="font-bold">ERP CO</span>
              </div>
              <p className="text-gray-600 text-base md:text-lg mt-3">민첩한 의사결정을 위한 실시간 분석 모니터링 체계 구축</p>
            </div>

            <div className="flex flex-col lg:flex-row-reverse gap-6 md:gap-8 mb-8 md:mb-10">
              <div className="flex flex-wrap gap-2 content-start lg:w-1/3">
                {['#비용센터', '#제조원가', '#손익센터', '#수익성분석', '#자재원장', '#사업계획'].map((t) => (
                  <span key={t} className="inline-flex items-center px-3 py-1.5 rounded-full border border-omni-blue text-omni-blue text-xs md:text-sm font-medium bg-white whitespace-nowrap">
                    {t}
                  </span>
                ))}
              </div>
              <div className="lg:w-2/3">
                <img
                  src="https://www.omniesol.com/img/erp_4.jpg"
                  alt="OmniEsol ERP CO"
                  className="w-full rounded-lg"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-14">
              <div>
                <b className="block text-gray-900 font-bold mb-2 text-sm md:text-base">재무회계, 물류부문 통합</b>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  실시간 경영성과 및 비용/수익 추적이 가능
                </p>
              </div>
              <div>
                <b className="block text-gray-900 font-bold mb-2 text-sm md:text-base">실시간 표준원가 시스템</b>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  수불 발생 시 실시간 원가 정보 제공
                  <br />
                  표준원가를 적용한 실시간 매출원가 및 이익관리
                </p>
              </div>
              <div>
                <b className="block text-gray-900 font-bold mb-2 text-sm md:text-base">다차원 수익성 분석</b>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  다양한 특성 정보를 추출 및 조합해 관리 목적의 실시간 손익 정보 제공
                  <br />
                  발생된 수익 및 비용을 조정, 배부하여 분석 영역별 자료 생성
                </p>
              </div>
            </div>

            {/* Video Section - 원본 __txt.video */}
            <div className="bg-gray-50 rounded-xl p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <div className="mb-3 md:mb-4">
                    <h3 className="text-base md:text-lg font-bold text-gray-900">
                      <em className="text-omni-blue not-italic">OmniEsol</em> FCM 주요기능 소개
                    </h3>
                  </div>
                  <div className="relative w-full rounded-lg overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src="https://www.youtube.com/embed/hKQ3meQh4w0"
                      title="OmniEsol FCM 주요기능 소개"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
                <div>
                  <div className="mb-3 md:mb-4">
                    <h3 className="text-base md:text-lg font-bold text-gray-900">
                      <em className="text-omni-blue not-italic">OmniEsol</em> HRM 주요기능 소개
                    </h3>
                  </div>
                  <div className="relative w-full rounded-lg overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src="https://www.youtube.com/embed/LATBWoUbivU"
                      title="OmniEsol HRM 주요기능 소개"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SubPageLayout>
  );
}