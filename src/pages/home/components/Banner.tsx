import { useState, useEffect } from 'react';

export default function Banner() {
  const [visible, setVisible] = useState(true);
  const [dontShow, setDontShow] = useState(false);

  useEffect(() => {
    const hideUntil = localStorage.getItem('bannerHideUntil');
    if (hideUntil && new Date().getTime() < parseInt(hideUntil, 10)) {
      setVisible(false);
    }
  }, []);

  const handleClose = () => {
    if (dontShow) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(0, 0, 0, 0);
      localStorage.setItem('bannerHideUntil', tomorrow.getTime().toString());
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="relative w-full bg-white">
      <div className="relative w-full">
        <a
          href="https://www.duzon119.co.kr/"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full"
        >
          <img
            src="https://storage.readdy-site.link/project_files/ea993a2b-01da-4777-8bbf-bebe90db0986/052aa03b-4b80-403b-ba01-ff5f888fc3e3_compressed_img_mVisual01.webp"
            alt="OmniEsol 메인 배너"
            className="w-full h-auto object-cover"
            style={{ maxHeight: '120px' }}
          />
        </a>
      </div>
      <div className="flex items-center justify-end gap-4 px-4 py-2 bg-white border-t border-gray-100">
        <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-600">
          <input
            type="checkbox"
            className="w-4 h-4 accent-omni-blue"
            checked={dontShow}
            onChange={(e) => setDontShow(e.target.checked)}
          />
          <span>오늘 하루 보지 않기</span>
        </label>
        <button
          type="button"
          onClick={handleClose}
          className="text-sm text-gray-500 hover:text-gray-800 px-3 py-1 transition-colors"
        >
          닫기
        </button>
      </div>
    </div>
  );
}