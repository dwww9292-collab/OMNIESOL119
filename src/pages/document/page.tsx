import SubPageLayout from '@/pages/sub/components/SubPageLayout';

export default function DocumentPage() {
  return (
    <SubPageLayout
      title="문서관리"
      outlinkUrl="https://www.duzon119.co.kr/"
    >
      <section className="w-full py-8 md:py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* ONEFFICE */}
          <div className="box_1 __box mb-12 md:mb-16">
            <div className="__title mb-6">
              <div className="inline-flex items-center px-5 py-2 bg-[#0068b7] text-white text-sm font-medium mb-2">
                ONEFFICE
              </div>
              <p className="text-gray-600 text-sm md:text-base">
                손쉽고 빠른 문서 작성, 관리, 공유로 경험하는 업무 혁신
              </p>
            </div>

            <div className="__visual mb-8 md:mb-10">
              <img
                src="https://www.omniesol.com/img/docu_1.jpg"
                alt="OmniEsol ONEFFICE"
                className="w-full"
              />
            </div>

            <div className="__txt">
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                <li>
                  <b className="block text-sm md:text-base font-bold text-gray-900 mb-2">
                    문서작성 및 공유
                  </b>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    문서 작성에 꼭 필요한 필수 기능을 중심으로 웹과 PC에서 문서를 쉽게 작성하고 공유
                  </p>
                </li>
                <li>
                  <b className="block text-sm md:text-base font-bold text-gray-900 mb-2">
                    문서댓글
                  </b>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    문서 내 댓글, 알파멘션 기능을 통해 실시간 소통 및 협업이 가능
                  </p>
                </li>
                <li>
                  <b className="block text-sm md:text-base font-bold text-gray-900 mb-2">
                    연관문서
                  </b>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    서로 관련된 문서들을 하나의 문서 안에서 연관 문서로 등록하여 관리
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* ONECHAMBER */}
          <div className="box_2 __box">
            <div className="__title mb-6">
              <div className="inline-flex items-center px-5 py-2 bg-[#0068b7] text-white text-sm font-medium mb-2">
                ONECHAMBER
              </div>
              <p className="text-gray-600 text-sm md:text-base">
                안전하고 체계적인 기업 문서관리의 모든 것
              </p>
            </div>

            <div className="__visual mb-8 md:mb-10">
              <img
                src="https://www.omniesol.com/img/docu_2.jpg"
                alt="OmniEsol ONECHAMBER"
                className="w-full"
              />
            </div>

            <div className="__txt">
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 mb-10 md:mb-14">
                <li>
                  <b className="block text-sm md:text-base font-bold text-gray-900 mb-2">
                    이력관리
                  </b>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    콘텐츠 라이프 사이클 확인을 통한 문서의 체계적인 관리 가능
                  </p>
                </li>
                <li>
                  <b className="block text-sm md:text-base font-bold text-gray-900 mb-2">
                    다차원 분류체계
                  </b>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    유형, 속성, 형식 등에 따른 체계적인 관리 및 상세 검색 기능 제공
                  </p>
                </li>
                <li>
                  <b className="block text-sm md:text-base font-bold text-gray-900 mb-2">
                    폴더 링크 공유
                  </b>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    고유 URL 링크를 통한 대용량 파일의 빠른 공유 가능
                  </p>
                </li>
                <li>
                  <b className="block text-sm md:text-base font-bold text-gray-900 mb-2">
                    콘텐츠 보안
                  </b>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    접근 범위 및 사용 권한의 세부적 설정
                  </p>
                </li>
                <li>
                  <b className="block text-sm md:text-base font-bold text-gray-900 mb-2">
                    중복 파일 삭제
                  </b>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    중복 파일의 자동 확인을 통한 관리의 효율성 증대
                  </p>
                </li>
              </ul>
            </div>

            {/* Video section inside ONECHAMBER box */}
            <div className="__txt video">
              <ul>
                <li>
                  <div className="title_wrap text-center mb-4 md:mb-6">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">
                      <em className="text-[#0068b7] not-italic">OmniEsol</em>{' '}
                      UC 주요기능 소개
                    </h3>
                  </div>
                  <div
                    className="video-box relative w-full"
                    style={{ paddingBottom: '56.25%' }}
                  >
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src="https://www.youtube.com/embed/6oaVRm4_jZQ?si=c2blntU65U6CJl4p"
                      frameBorder={0}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="OmniEsol UC[그룹웨어+문서관리] 핵심기능"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </SubPageLayout>
  );
}