import { useEffect, useState, useRef, useCallback } from "react";
import HeroContant from "./HeroContant";
import StatsBar from "./home/StatsBar";
import Food from "./home/Food";
import "./Hero.css";

export default function Hero() {
  const [active, setActive] = useState(0);
  const sliderRef = useRef(null);

  const slides = [0, 1, 2, 3];

  // 🔥 DETECT SCROLL POSITION (يعمل 100%)
  useEffect(() => {
    const handleScroll = () => {
      const slider = sliderRef.current;
      if (!slider) return;

      const rect = slider.getBoundingClientRect();
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      // حساب الـ index بناءً على موقع السكرول
      const slideHeight = window.innerHeight;
      const slideIndex = Math.round(scrollTop / slideHeight);

      // التأكد من أن الـ index ضمن النطاق
      const clampedIndex = Math.max(0, Math.min(slideIndex, slides.length - 1));

      setActive(clampedIndex);
    };

    // تشغيل فوري للكشف عن الموقع الحالي
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 DOT CLICK - قفز لسلايد معين
  const goToSlide = (index) => {
    const targetPosition = index * window.innerHeight;
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };
  const [isInHeroSection, setIsInHeroSection] = useState(true); // 🔥 الجديد

  // 🔥 كشف ما إذا كنا في سكشن الهيرو
  useEffect(() => {
    const handleScroll = () => {
      const slider = sliderRef.current;
      if (!slider) return;

      const rect = slider.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

      setIsInHeroSection(isVisible);

      // حساب active slide
      const scrollTop = window.pageYOffset;
      const slideHeight = window.innerHeight;
      const slideIndex = Math.round(scrollTop / slideHeight);
      const clampedIndex = Math.max(0, Math.min(slideIndex, 3));

      setActive(clampedIndex);
    };

    handleScroll(); // تشغيل فوري
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section className="main-slider" ref={sliderRef}>
      {/* 🔥 الـ 4 سلايدات كـ divs منفصلة (هذا السر!) */}
      <div className="slide-wrapper">
        {/* SLIDE 1 */}
        <div className={`slide ${active === 0 ? "active" : ""}`}>
          <HeroContant />
        </div>

        {/* SLIDE 2 */}
        <div className={`slide ${active === 1 ? "active" : ""}`}>
          <StatsBar />
        </div>

        {/* SLIDE 3 */}
        <div className={`slide ${active === 2 ? "active" : ""}`}>
          <Food />
        </div>

        {/* SLIDE 4 */}
        <div className={`slide ${active === 3 ? "active" : ""}`}>
          <div className="about-slide">
            <video
              src="./assets/img/hero/0506.mp4"
              muted
              autoPlay
              loop
              playsInline
              className="hero-video"
            />
          </div>
        </div>
      <div className={`slider-dots ${isInHeroSection ? 'visible' : 'hidden'}`}>
          {slides.map((_, i) => (
            <span
              key={i}
              className={`dot ${active === i ? "active" : ""}`}
              onClick={() => goToSlide(i)}
            />
          ))}
        </div>
      </div>

      {/* 🔥 DOTS NAVIGATION */}
      <div className="slider-dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`dot ${active === i ? "active" : ""}`}
            onClick={() => goToSlide(i)}
            title={`Go to Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* 🔥 SCROLL PROGRESS - نفس سلوك النقاط */}
<div className={`scroll-progress ${isInHeroSection ? 'visible' : 'hidden'}`}>
  <div
    className="progress-bar"
    style={{ height: `${((active + 1) / slides.length) * 100}%` }}
  />
</div>
    </section>
  );
}
