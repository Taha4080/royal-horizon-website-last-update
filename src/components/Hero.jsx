import { useEffect, useState, useRef } from "react";
import HeroContant from "./HeroContant";
import StatsBar from "./home/StatsBar";
import Food from "./home/Food";
import VideoSlide from "./VideoSlide";


import "./Hero.css";

export default function Hero() {

  const [active, setActive] = useState(0);
  const [isInHeroSection, setIsInHeroSection] = useState(true);

  const sliderRef = useRef(null);

  // ALL SLIDES
  const slides = [
    <HeroContant />,
    <StatsBar />,
    <VideoSlide />,
    <Food />,
    
  ];

  useEffect(() => {

    let ticking = false;

    const updateScroll = () => {

      const slider = sliderRef.current;

      if (!slider) {
        ticking = false;
        return;
      }

      const rect = slider.getBoundingClientRect();

      const isVisible =
        rect.top < window.innerHeight &&
        rect.bottom > 0;

      setIsInHeroSection(isVisible);

      const scrollTop = window.pageYOffset;
      const slideHeight = window.innerHeight;

      const slideIndex = Math.round(
        scrollTop / slideHeight
      );

      const clampedIndex = Math.max(
        0,
        Math.min(slideIndex, slides.length - 1)
      );

      setActive((prev) =>
        prev !== clampedIndex
          ? clampedIndex
          : prev
      );

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    updateScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };

  }, [slides.length]);

  const goToSlide = (index) => {
    window.scrollTo({
      top: index * window.innerHeight,
      behavior: "smooth",
    });
  };

  return (

    <section className="main-slider" ref={sliderRef}>

      <div className="slide-wrapper">

        {slides.map((Component, index) => (
          <div
            key={index}
            className={`slide ${
              active === index ? "active" : ""
            }`}
          >
            {Component}
          </div>
        ))}

      </div>

      {/* DOTS */}
      <div
        className={`slider-dots ${
          isInHeroSection
            ? "visible"
            : "hidden"
        }`}
      >
        {slides.map((_, i) => (
          <span
            key={i}
            className={`dot ${
              active === i ? "active" : ""
            }`}
            onClick={() => goToSlide(i)}
          />
        ))}
      </div>

      {/* PROGRESS */}
      <div
        className={`scroll-progress ${
          isInHeroSection
            ? "visible"
            : "hidden"
        }`}
      >
        <div
          className="progress-bar"
          style={{
            height: `${
              ((active + 1) / slides.length) * 100
            }%`,
          }}
        />
      </div>

    </section>
  );
}