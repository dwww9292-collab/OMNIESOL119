import SubPageLayout from '@/pages/sub/components/SubPageLayout';

export default function GroupwarePage() {
  return (
    <SubPageLayout
      title="Groupware"
      outlinkUrl="https://www.duzon119.co.kr/"
    >
      <section className="w-full py-8 md:py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="box_1 __box">
            {/* Title badge */}
            <div className="__title">
              <div className="inline-flex items-center px-5 py-2 bg-[#0068b7] text-white text-sm font-medium mb-6">
                Groupware
              </div>
            </div>

            {/* Visual image */}
            <div className="__visual mb-8 md:mb-10">
              <img
                src="https://www.omniesol.com/img/groupware.jpg"
                alt="OmniEsol Groupware"
                className="w-full"
              />
            </div>

            {/* Feature table */}
            <div className="__table">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="border border-gray-200">
                  <b className="__title block bg-[#0068b7] text-white text-sm font-bold text-center py-2.5">
                    스마트워크에 최적화된 모바일 환경
                  </b>
                  <div className="txt_wrap p-4">
                    <div className="txt_inner space-y-1">
                      <p className="text-sm text-gray-700">· Web/PC메신저와 완벽 동기화</p>
                      <p className="text-sm text-gray-700">· Web에 제공되는 다양한 기능을 동일하게 지원</p>
                      <p className="text-sm text-gray-700">· 스마트폰, 태블릿 등 다양한 모바일 기기 완벽 지원</p>
                    </div>
                  </div>
                </li>
                <li className="border border-gray-200">
                  <b className="__title block bg-[#0068b7] text-white text-sm font-bold text-center py-2.5">
                    신속한 협업
                  </b>
                  <div className="txt_wrap p-4">
                    <div className="txt_inner space-y-1">
                      <p className="text-sm text-gray-700">· 조직도 기반의 커뮤니케이션</p>
                      <p className="text-sm text-gray-700">· PC와 모바일 메신저의 완벽한 동기화</p>
                      <p className="text-sm text-gray-700">· 별도의 저장없이 첨부 파일 바로보기 가능</p>
                    </div>
                  </div>
                </li>
                <li className="border border-gray-200">
                  <b className="__title block bg-[#0068b7] text-white text-sm font-bold text-center py-2.5">
                    직관적 소통 강화
                  </b>
                  <div className="txt_wrap p-4">
                    <div className="txt_inner space-y-1">
                      <p className="text-sm text-gray-700">· 알파멘션을 통한 신속하고 정확한 메세지 전달</p>
                      <p className="text-sm text-gray-700">· 다양한 이모티콘을 통한 감성 소통</p>
                    </div>
                  </div>
                </li>
                <li className="border border-gray-200">
                  <b className="__title block bg-[#0068b7] text-white text-sm font-bold text-center py-2.5">
                    고객 맞춤형 전자결재
                  </b>
                  <div className="txt_wrap p-4">
                    <div className="txt_inner space-y-1">
                      <p className="text-sm text-gray-700">· 승인, 반려, 후결, 전결 등 기업의 업무 방식에 맞춘</p>
                      <p className="text-sm text-gray-700">· 다양한 결재 프로세스 및 양식 완벽 지원</p>
                      <p className="text-sm text-gray-700">· OmniEsol ERP와 전자결재 연동 기본 제공</p>
                    </div>
                  </div>
                </li>
                <li className="border border-gray-200">
                  <b className="__title block bg-[#0068b7] text-white text-sm font-bold text-center py-2.5">
                    통합 일정 관리
                  </b>
                  <div className="txt_wrap p-4">
                    <div className="txt_inner space-y-1">
                      <p className="text-sm text-gray-700">· 개인 일정 뿐만 아니라 공유 일정까지 한 곳에서 관리</p>
                      <p className="text-sm text-gray-700">· 프로젝트 캘린더로 구성원과의 원활한 협업 일정 조율</p>
                    </div>
                  </div>
                </li>
                <li className="border border-gray-200">
                  <b className="__title block bg-[#0068b7] text-white text-sm font-bold text-center py-2.5">
                    신속한 의사소통 지원
                  </b>
                  <div className="txt_wrap p-4">
                    <div className="txt_inner space-y-1">
                      <p className="text-sm text-gray-700">· 첨부파일 바로보기로 열람 즉시 문서 확인</p>
                      <p className="text-sm text-gray-700">· 중요 메일 설정 시, 수신자의 메일함에 별도 표기</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Video section */}
            <div className="__txt video mt-10 md:mt-14">
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
                      title="OmniEsol UC 주요기능 소개"
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