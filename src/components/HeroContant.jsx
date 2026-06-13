import { Link } from "react-router-dom";
import "./HeroContant.css";
import { useEffect, useState } from "react";

export default function HeroContant() {
  const [showWelcome, setShowWelcome] = useState(false);
  const [hideWelcome, setHideWelcome] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    // 1. إظهار الترحيب (0.5s)
    const welcomeTimer = setTimeout(() => {
      setShowWelcome(true);
    }, 500);

    // 2. إخفاء الترحيب بعد 2.5s (يختفي تدريجياً)
    const hideWelcomeTimer = setTimeout(() => {
      setHideWelcome(true);
    }, 2500);

    // 3. إظهار اللوجو بعد 3s
    const logoTimer = setTimeout(() => {
      setShowLogo(true);
    }, 3000);

    return () => {
      clearTimeout(welcomeTimer);
      clearTimeout(hideWelcomeTimer);
      clearTimeout(logoTimer);
    };
  }, []);

  return (
    <section className="rh-hero">
      <div className="rh-video-frame">
      <video
      autoPlay
      muted
      loop
      playsInline
      speed="0.6"
      className="rh-hero-bg">
        <source src="/assets/img/hero/0509.MOV" type="video/mp4" />
      </video>
      {/* <div className="rh-video-overlay"></div> */}
      </div>
      <div className="rh-comp-layout animate-fade">
        <div className="rh-container transparent">
          <div className={`rh-main-brand-section ${hideWelcome ? "center-logo" : ""}`}>
            {/* ===== الترحيب (يظهر ثم يختفي) ===== */}
            <div 
              className={`rh-welcome-section 
                ${showWelcome ? 'visible' : ''} 
                ${hideWelcome ? 'hide' : ''}`}
            >
              <div className="rh-welcome-glow"></div>
              <h1 className="rh-welcome-title">
                <span className="rh-welcome-word">Welcome</span>
                <span className="rh-welcome-to">to</span>
                <br />
                <span className="rh-welcome-group">ROYAL HORIZON</span>
                <span className="rh-welcome-group-sub">HOLDING</span>
              </h1>
              <p className="rh-welcome-subtitle">
                Excellence in FMCG & Retail Solutions
              </p>
            </div>

            {/* ===== اللوجو (يظهر بعد اختفاء الترحيب) ===== */}
            <Link 
              to="../companies"
              className={`rh-hero-main-logo-wrapper ${showLogo ? 'visible' : ''}`}
            >
              <img
                src="/assets/img/logo/RHH.png"
                className="rh-hero-main-logo"
                alt="Royal Horizon Holding"
              />
            </Link>

            {/* اللوجوز الصغيرة */}
            <div className="rh-logos-grid">
              <Link to="../companies/horizon" className="rh-grid-item square-card line-1">
                <img src="/assets/img/logo/RHGT1.png" alt="Horizon" />
              </Link>
              
              <Link to="../companies/Fazaa" className="rh-grid-item wide-card line-1">
                <img src="/assets/img/logo/FazaaStores.png" alt="Fazaa" />
              </Link>

              <Link to="../companies/Overseas" className="rh-grid-item square-card line-1">
                <img src="/assets/img/logo/Overseas1.png" alt="Overseas" />
              </Link>

              <Link to="https://rhcafe.ae/#/" className="rh-grid-item square-card RHCAFE">
                <img src="/assets/img/logo/RH-Cafe.png" alt="RH Cafe" />
              </Link>
              
              <Link to="../companies/Fazaa" className="rh-grid-item wide-card">
                <img src="/assets/img/logo/FazaaExpress.png" alt="Fazaa Express" />
              </Link>

              <Link to="https://rhe-s.com/" className="rh-grid-item square-card">
                <img src="/assets/img/logo/RH-e-Store.png" alt="RH e-Store" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}