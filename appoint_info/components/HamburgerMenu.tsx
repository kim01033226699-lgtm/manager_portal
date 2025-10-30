'use client';

import { useState } from 'react';

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        className="fixed top-6 right-6 z-[1000] w-12 h-12 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center gap-1.5"
      >
        <span className="w-6 h-0.5 bg-orange-500 rounded transition-all duration-300"></span>
        <span className="w-6 h-0.5 bg-orange-500 rounded transition-all duration-300"></span>
        <span className="w-6 h-0.5 bg-orange-500 rounded transition-all duration-300"></span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-[1001] animate-fadeIn"
            onClick={toggleMenu}
          ></div>

          <div className="fixed top-0 right-0 w-80 h-full bg-white z-[1002] shadow-xl flex flex-col animate-slideInRight">
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-900">메뉴</h3>
              <button
                onClick={toggleMenu}
                className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-all duration-200"
              >
                ✕
              </button>
            </div>

            <nav className="flex-1 p-4 overflow-y-auto">
              <a
                href="../index.html"
                className="flex items-center gap-4 px-6 py-4 mb-2 rounded-xl text-gray-900 font-medium hover:bg-gray-100 hover:translate-x-1 transition-all duration-200"
              >
                <span className="text-2xl w-8 flex items-center justify-center">🏠</span>
                <span>포털 홈</span>
              </a>

              <a
                href="../goodrich-info-a/index.html"
                className="flex items-center gap-4 px-6 py-4 mb-2 rounded-xl text-gray-900 font-medium hover:bg-gray-100 hover:translate-x-1 transition-all duration-200"
              >
                <span className="text-2xl w-8 flex items-center justify-center">💰</span>
                <span>지원금 안내</span>
              </a>

              <a
                href="../goodrich-info-gfe/index.html"
                className="flex items-center gap-4 px-6 py-4 mb-2 rounded-xl text-gray-900 font-medium hover:bg-gray-100 hover:translate-x-1 transition-all duration-200"
              >
                <span className="text-2xl w-8 flex items-center justify-center">🎓</span>
                <span>금융캠퍼스 안내</span>
              </a>

              <a
                href="../appoint_info/index.html"
                className="flex items-center gap-4 px-6 py-4 mb-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium transition-all duration-200"
              >
                <span className="text-2xl w-8 flex items-center justify-center">📋</span>
                <span>위촉 안내</span>
              </a>
            </nav>
          </div>
        </>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease;
        }

        .animate-slideInRight {
          animation: slideInRight 0.3s ease;
        }
      `}</style>
    </>
  );
}
