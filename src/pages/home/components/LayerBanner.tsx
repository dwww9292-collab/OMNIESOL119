import { useState, useEffect } from 'react';

interface LayerBannerProps {
  bannerId: string;
  imageSrc: string;
  href: string;
  title: string;
  startDate?: string;
  endDate?: string;
}

export default function LayerBanner({
  bannerId,
  imageSrc,
  href,
  title,
  startDate,
  endDate,
}: LayerBannerProps) {
  const [visible, setVisible] = useState(false);
  const [dontShow, setDontShow] = useState(false);

  useEffect(() => {
    // Check date range
    const now = new Date();
    if (startDate && new Date(startDate) > now) return;
    if (endDate && new Date(endDate) < now) return;

    // Check localStorage hide
    const hideUntil = localStorage.getItem(`layerBannerHideUntil_${bannerId}`);
    if (hideUntil && new Date().getTime() < parseInt(hideUntil, 10)) {
      return;
    }

    setVisible(true);
  }, [bannerId, startDate, endDate]);

  const handleClose = () => {
    if (dontShow) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(0, 0, 0, 0);
      localStorage.setItem(`layerBannerHideUntil_${bannerId}`, tomorrow.getTime().toString());
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50">
      <div className="relative bg-white rounded-lg shadow-2xl max-w-lg w-full mx-4 overflow-hidden">
        <div className="relative">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            title={title}
            className="block"
          >
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-auto object-cover"
            />
          </a>
        </div>
        <div className="flex items-center justify-between px-4 py-3 bg-white">
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
    </div>
  );
}