
"use client"
import { useState, useEffect } from 'react';

const CookieModal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const hasConsent = localStorage.getItem('cookieConsent');
    if (!hasConsent) {
      setShowModal(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowModal(false);
  };

  const denyCookies = () => {
    // Optionally handle denying cookies
    setShowModal(false);
  };

  return (
  
    <div className={`fixed bottom-4 left-4 z-50 ${showModal ? '' : 'hidden'}`}>
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-96">
      <div className="flex justify-between items-center bg-gray-100 px-4 py-2">
        <h3 className="text-lg leading-6 font-medium text-gradient">
          Welcome to Our Website
        </h3>
        <button onClick={denyCookies} type="button" className="text-orange-500 hover:text-gray-500 focus:outline-none">
          <span className="sr-only">Close</span>
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-500">
          We use third-party cookies to enhance your browsing experience and to enable certain features, such as sending messages, and keeping you logged in. By accepting all cookies, you agree to our use of cookies as described in our <a href="/privacy" className="text-gradient hover:underline">Privacy Policy</a>.
        </p>
        <p className="text-sm text-gray-500">
          To enjoy the full functionality of our website, please enable third-party cookies in your browser settings. See our <a href="/enabling-cookies-tutorial" className="text-gradient hover:underline">Cookie Settings Tutorial</a>.
        </p>
      </div>
      <div className="bg-gray-50 px-4 py-3 flex justify-end">
        <button onClick={acceptCookies} type="button" className="button button-gradient inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2  text-base font-medium text-white hover:bg-orange-500 focus:outline-none  sm:w-auto sm:text-sm">
          Accept All Cookies
        </button>
      </div>
    </div>
  </div>
  );
};

export default CookieModal;
