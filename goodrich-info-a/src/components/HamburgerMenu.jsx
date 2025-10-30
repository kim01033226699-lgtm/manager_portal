import { useState } from 'react';
import './HamburgerMenu.css';

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigate = (url) => {
    window.location.href = url;
  };

  return (
    <>
      <button className="hamburger-button" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      {isOpen && (
        <>
          <div className="hamburger-overlay" onClick={toggleMenu}></div>
          <div className="hamburger-menu">
            <div className="hamburger-header">
              <h3>메뉴</h3>
              <button className="close-button" onClick={toggleMenu}>✕</button>
            </div>
            <nav className="hamburger-nav">
              <a href="../index.html" className="hamburger-item">
                <span className="hamburger-icon">🏠</span>
                <span>포털 홈</span>
              </a>
              <a href="../goodrich-info-a/index.html" className="hamburger-item active">
                <span className="hamburger-icon">💰</span>
                <span>지원금 안내</span>
              </a>
              <a href="../goodrich-info-gfe/index.html" className="hamburger-item">
                <span className="hamburger-icon">🎓</span>
                <span>금융캠퍼스 안내</span>
              </a>
              <a href="../appoint_info/index.html" className="hamburger-item">
                <span className="hamburger-icon">📋</span>
                <span>위촉 안내</span>
              </a>
            </nav>
          </div>
        </>
      )}
    </>
  );
}

export default HamburgerMenu;
