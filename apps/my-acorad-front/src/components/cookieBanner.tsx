import { useState, useEffect } from 'react';
import { FaCookieBite } from 'react-icons/fa';

const COOKIE_KEY = 'acorad_cookie_consent';

export const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleConsent = (value: 'accepted' | 'declined') => {
    localStorage.setItem(COOKIE_KEY, value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-8 sm:right-8 z-50 bg-white border border-gray-200 shadow-xl rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-5xl mx-auto animate-fade-in-up">
      <div className="flex items-start gap-3 text-gray-700 text-sm sm:text-base">
        <FaCookieBite className="text-2xl text-accent-blue mt-1 shrink-0" />
        <p>
          We use cookies to improve your experience. You can choose to accept or decline.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={() => handleConsent('declined')}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 text-sm font-semibold px-4 py-2 rounded-full transition"
        >
          Decline
        </button>
        <button
          onClick={() => handleConsent('accepted')}
          className="bg-primary-blue hover:bg-accent-blue text-white text-sm font-semibold px-4 py-2 rounded-full transition"
        >
          Accept
        </button>
      </div>
    </div>
  );
};
