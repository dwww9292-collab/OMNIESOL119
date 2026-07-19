import { useState } from 'react';
import Footer from '@/pages/home/components/Footer';
import Navbar from '@/components/layout/Navbar';

/**
 * 상담신청 폼 수신 주소.
 *
 * 기존에는 사이트 빌더(readdy.ai)의 폼 API 로 전송되고 있었으나,
 * 제3자 서비스에 고객 개인정보가 쌓이고 계정 만료 시 문의가 조용히
 * 사라지는 구조라 제거했다.
 *
 * 자사 홈페이지 관리자 페이지가 준비되면 그 접수 URL 을 여기에 넣으면 된다.
 * 빈 문자열인 동안에는 온라인 접수를 막고 전화 안내를 노출한다
 * (제출된 것처럼 보이면서 아무 데도 도착하지 않는 상황을 방지).
 */
const INQUIRY_ENDPOINT = '';

/** 온라인 접수가 막혀 있을 때 안내할 대표번호 */
const FALLBACK_TEL = '1877-0256';

export default function InquiryPage() {
  const [formData, setFormData] = useState({
    company: '',
    bizno: '',
    tel: '',
    fax: '',
    writer: '',
    position: '',
    phone1: '',
    phone2: '',
    phone3: '',
    emailLocal: '',
    emailDomain: '',
    products: [] as string[],
    meetingMethod: '',
    meetingDate: '',
    meetingTime: '',
    content: '',
    privacy: false,
    website_alt: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formError, setFormError] = useState('');

  const handleProductChange = (product: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      products: checked
        ? [...prev.products, product]
        : prev.products.filter((p) => p !== product),
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.website_alt.trim()) {
      setFormStatus('success');
      return;
    }

    if (!formData.company || !formData.writer || !formData.phone1 || !formData.emailLocal || !formData.content || !formData.privacy) {
      setFormError('필수 항목을 모두 입력해주세요.');
      return;
    }

    // 수신처가 아직 연결되지 않았다면 전송하지 않고 분명히 알린다.
    if (!INQUIRY_ENDPOINT) {
      setFormError(
        `현재 온라인 접수가 준비 중입니다. ${FALLBACK_TEL} 으로 전화 주시면 바로 상담 도와드리겠습니다.`
      );
      setFormStatus('error');
      return;
    }

    setFormStatus('loading');
    setFormError('');

    try {
      const params = new URLSearchParams();
      params.append('company', formData.company);
      params.append('bizno', formData.bizno);
      params.append('tel', formData.tel);
      params.append('fax', formData.fax);
      params.append('writer', formData.writer);
      params.append('position', formData.position);
      params.append('phone', `${formData.phone1}-${formData.phone2}-${formData.phone3}`);
      params.append('email', `${formData.emailLocal}@${formData.emailDomain}`);
      params.append('products', formData.products.join(', '));
      params.append('meetingMethod', formData.meetingMethod);
      params.append('meetingDate', formData.meetingDate);
      params.append('meetingTime', formData.meetingTime);
      params.append('content', formData.content);

      const res = await fetch(INQUIRY_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      });

      // 관리자 페이지 연동 시 응답 형식에 맞춰 이 부분만 조정하면 된다.
      // 지금은 HTTP 상태 코드만으로 성공 여부를 판단한다.
      if (res.ok) {
        setFormStatus('success');
      } else {
        setFormError(
          `접수에 실패했습니다. 잠시 후 다시 시도하시거나 ${FALLBACK_TEL} 으로 연락해주세요.`
        );
        setFormStatus('error');
      }
    } catch {
      setFormError('네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
      setFormStatus('error');
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* Header */}
      <section
        className="relative w-full overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0f0f2e 0%, #1a1a4e 30%, #2d2d8a 70%, #3b3db4 100%)',
          minHeight: '280px',
        }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-blue-600/10 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-56 h-56 rounded-full bg-purple-500/10 blur-3xl" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center py-16 md:py-24">
          <p className="text-white/50 text-xs md:text-sm mb-3 tracking-[0.3em] uppercase font-medium">
            Purchase Inquiry
          </p>
          <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight">
            구매요청/상담
          </h1>
        </div>
      </section>

      {/* Form */}
      <main className="w-full py-12 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 text-center">
            제품/서비스 구매상담
          </h3>
          <div className="w-12 h-1 bg-omni-blue rounded mx-auto mb-10" />

          {/* 접수 URL 이 연결되기 전까지 노출. INQUIRY_ENDPOINT 를 채우면 자동으로 사라진다. */}
          {!INQUIRY_ENDPOINT && formStatus !== 'success' && (
            <div className="mb-8 rounded-lg border border-amber-300 bg-amber-50 px-5 py-4">
              <p className="text-sm font-semibold text-amber-900 mb-1">
                온라인 접수 준비 중입니다
              </p>
              <p className="text-sm leading-relaxed text-amber-800">
                현재 온라인 상담 신청은 준비 중입니다. 빠른 상담을 원하시면{' '}
                <a href={`tel:${FALLBACK_TEL}`} className="font-bold underline">
                  {FALLBACK_TEL}
                </a>
                {' '}로 연락해주시면 담당자가 바로 도와드리겠습니다.
              </p>
            </div>
          )}

          {formStatus === 'success' ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-5 bg-green-100 rounded-full">
                <i className="ri-check-line text-green-600 text-3xl" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">상담 신청이 완료되었습니다.</h4>
              <p className="text-gray-500 text-base mb-8">
                빠른 시일 내에 담당자가 연락드리겠습니다.
              </p>
              <button
                type="button"
                onClick={() => setFormStatus('idle')}
                className="px-8 py-3 bg-omni-blue text-white font-medium rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
              >
                다시 신청하기
              </button>
            </div>
          ) : (
            <form
              id="purchaseInquiryForm"
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              {/* honeypot */}
              <input
                type="text"
                name="website_alt"
                value={formData.website_alt}
                onChange={(e) => setFormData((prev) => ({ ...prev, website_alt: e.target.value }))}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                readOnly={false}
                style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}
              />

              {/* 상호 */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start sm:items-center">
                <label className="text-gray-700 text-sm font-medium w-28 shrink-0">
                  상호(법인명) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
                  required
                  className="flex-1 min-w-0 border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-omni-blue focus:border-transparent"
                  placeholder="상호(법인명)을 입력하세요"
                />
              </div>

              {/* 사업자등록번호 */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start sm:items-center">
                <label className="text-gray-700 text-sm font-medium w-28 shrink-0">사업자등록번호</label>
                <div className="flex-1 min-w-0">
                  <input
                    type="text"
                    name="bizno"
                    value={formData.bizno}
                    onChange={(e) => setFormData((prev) => ({ ...prev, bizno: e.target.value }))}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-omni-blue"
                    placeholder="사업자등록번호 (선택)"
                  />
                  <p className="text-omni-blue text-xs mt-1">
                    (사업자등록번호를 작성해주시면 더 원활한 상담이 가능합니다.)
                  </p>
                </div>
              </div>

              {/* 전화번호 */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start sm:items-center">
                <label className="text-gray-700 text-sm font-medium w-28 shrink-0">전화번호</label>
                <input
                  type="text"
                  name="tel"
                  value={formData.tel}
                  onChange={(e) => setFormData((prev) => ({ ...prev, tel: e.target.value }))}
                  className="flex-1 min-w-0 border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-omni-blue"
                  placeholder="전화번호"
                />
              </div>

              {/* 팩스번호 */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start sm:items-center">
                <label className="text-gray-700 text-sm font-medium w-28 shrink-0">팩스번호</label>
                <input
                  type="text"
                  name="fax"
                  value={formData.fax}
                  onChange={(e) => setFormData((prev) => ({ ...prev, fax: e.target.value }))}
                  className="flex-1 min-w-0 border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-omni-blue"
                  placeholder="팩스번호"
                />
              </div>

              {/* 담당자명 */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start sm:items-center">
                <label className="text-gray-700 text-sm font-medium w-28 shrink-0">
                  담당자명 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="writer"
                  value={formData.writer}
                  onChange={(e) => setFormData((prev) => ({ ...prev, writer: e.target.value }))}
                  required
                  className="flex-1 min-w-0 border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-omni-blue"
                  placeholder="담당자명"
                />
              </div>

              {/* 직위 */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start sm:items-center">
                <label className="text-gray-700 text-sm font-medium w-28 shrink-0">직위</label>
                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={(e) => setFormData((prev) => ({ ...prev, position: e.target.value }))}
                  className="flex-1 min-w-0 border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-omni-blue"
                  placeholder="직위"
                />
              </div>

              {/* 핸드폰번호 */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start sm:items-center">
                <label className="text-gray-700 text-sm font-medium w-28 shrink-0">
                  핸드폰번호 <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center gap-2 flex-wrap">
                  <input
                    type="text"
                    name="phone1"
                    value={formData.phone1}
                    onChange={(e) => setFormData((prev) => ({ ...prev, phone1: e.target.value }))}
                    required
                    maxLength={4}
                    className="w-20 border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-center focus:outline-none focus:ring-2 focus:ring-omni-blue"
                  />
                  <span className="text-gray-500">-</span>
                  <input
                    type="text"
                    name="phone2"
                    value={formData.phone2}
                    onChange={(e) => setFormData((prev) => ({ ...prev, phone2: e.target.value }))}
                    maxLength={4}
                    className="w-20 border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-center focus:outline-none focus:ring-2 focus:ring-omni-blue"
                  />
                  <span className="text-gray-500">-</span>
                  <input
                    type="text"
                    name="phone3"
                    value={formData.phone3}
                    onChange={(e) => setFormData((prev) => ({ ...prev, phone3: e.target.value }))}
                    maxLength={4}
                    className="w-20 border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-center focus:outline-none focus:ring-2 focus:ring-omni-blue"
                  />
                </div>
              </div>

              {/* 이메일 */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start sm:items-center">
                <label className="text-gray-700 text-sm font-medium w-28 shrink-0">
                  이메일 <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center gap-2 flex-wrap">
                  <input
                    type="text"
                    name="email"
                    value={formData.emailLocal}
                    onChange={(e) => setFormData((prev) => ({ ...prev, emailLocal: e.target.value }))}
                    required
                    className="w-32 border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-omni-blue"
                    placeholder="이메일 아이디"
                  />
                  <span className="text-gray-500">@</span>
                  <input
                    type="text"
                    value={formData.emailDomain}
                    onChange={(e) => setFormData((prev) => ({ ...prev, emailDomain: e.target.value }))}
                    className="w-36 border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-omni-blue"
                    placeholder="도메인"
                  />
                </div>
              </div>

              {/* 제품선택 */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start">
                <label className="text-gray-700 text-sm font-medium w-28 shrink-0 pt-2">제품선택</label>
                <div className="flex flex-wrap gap-4">
                  {['Amaranth 10', 'WEHAGO(SmartA10)', '그룹웨어', 'PMS/SI'].map((product) => (
                    <label key={product} className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
                      <input
                        type="checkbox"
                        name="products"
                        value={product}
                        checked={formData.products.includes(product)}
                        onChange={(e) => handleProductChange(product, e.target.checked)}
                        className="w-4 h-4 accent-omni-blue"
                      />
                      {product}
                    </label>
                  ))}
                </div>
              </div>

              {/* 미팅방법 */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start">
                <label className="text-gray-700 text-sm font-medium w-28 shrink-0 pt-2">미팅방법</label>
                <div className="flex gap-6">
                  {['원격미팅', '대면미팅'].map((method) => (
                    <label key={method} className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
                      <input
                        type="radio"
                        name="meetingMethod"
                        value={method}
                        checked={formData.meetingMethod === method}
                        onChange={(e) => setFormData((prev) => ({ ...prev, meetingMethod: e.target.value }))}
                        className="w-4 h-4 accent-omni-blue"
                      />
                      {method}
                    </label>
                  ))}
                </div>
              </div>

              {/* 미팅날짜 / 미팅시간 */}
              {formData.meetingMethod && (
                <>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start sm:items-center">
                    <label className="text-gray-700 text-sm font-medium w-28 shrink-0">미팅날짜</label>
                    <div className="flex-1 min-w-0">
                      <input
                        type="date"
                        name="meetingDate"
                        value={formData.meetingDate}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(e) => setFormData((prev) => ({ ...prev, meetingDate: e.target.value }))}
                        className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-omni-blue"
                      />
                      <span className="text-gray-400 text-xs ml-3">(영업일 기준 월~금만 선택 가능)</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start sm:items-center">
                    <label className="text-gray-700 text-sm font-medium w-28 shrink-0">미팅시간</label>
                    <select
                      name="meetingTime"
                      value={formData.meetingTime}
                      onChange={(e) => setFormData((prev) => ({ ...prev, meetingTime: e.target.value }))}
                      className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-omni-blue"
                    >
                      <option value="">시간 선택</option>
                      {['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'].map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </>
              )}

              {/* 문의내용 */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start">
                <label className="text-gray-700 text-sm font-medium w-28 shrink-0 pt-2">
                  문의내용 <span className="text-red-500">*</span>
                </label>
                <div className="flex-1 min-w-0">
                  <textarea
                    name="content"
                    value={formData.content}
                    onChange={(e) => {
                      if (e.target.value.length <= 500) {
                        setFormData((prev) => ({ ...prev, content: e.target.value }));
                      }
                    }}
                    required
                    rows={6}
                    maxLength={500}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-omni-blue resize-none"
                    placeholder="문의 내용을 입력해주세요. (최대 500자)"
                  />
                  <p className="text-gray-400 text-xs text-right mt-1">
                    {formData.content.length} / 500
                  </p>
                </div>
              </div>

              {/* 개인정보처리방침 */}
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h5 className="text-sm font-bold text-gray-800 mb-3">개인정보처리방침</h5>
                <div className="h-28 overflow-y-auto text-xs text-gray-500 leading-relaxed mb-4 pr-2">
                  아이원소프트뱅크 주식회사는 개인정보보호법 및 정보통신망 이용촉진 및 정보 보호 등에 관한 법률에 따라
                  정보주체의 개인정보 및 권익을 보호하고 개인정보와 관련한 정보주체의 고 충을 원활하게 처리할 수 있도록
                  다음과 같은 처리방침을 두고 있습니다. 수집하는 개인정보 항목: 상호, 사업자등록번호, 전화번호,
                  담당자명, 직위, 핸드폰번호, 이메일, 제품선택, 문의내용. 개인정보 수집 목적: 구매상담 및 서비스 제공.
                  개인정보 보유기간: 목적 달성 후 즉시 파기.
                </div>
                <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
                  <input
                    type="checkbox"
                    name="privacy"
                    checked={formData.privacy}
                    onChange={(e) => setFormData((prev) => ({ ...prev, privacy: e.target.checked }))}
                    required
                    className="w-4 h-4 accent-omni-blue"
                  />
                  개인정보처리방침에 동의합니다.
                </label>
              </div>

              {/* Error message */}
              {formStatus === 'error' && formError && (
                <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-red-600 text-sm">
                  {formError}
                </div>
              )}

              {/* Submit */}
              <div className="text-center pt-4">
                <button
                  type="submit"
                  disabled={formStatus === 'loading'}
                  className="px-16 py-4 bg-omni-blue text-white font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-60 whitespace-nowrap cursor-pointer text-base"
                >
                  {formStatus === 'loading' ? '처리 중...' : '문의하기'}
                </button>
              </div>
            </form>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}