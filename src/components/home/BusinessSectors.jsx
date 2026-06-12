import { useEffect, useMemo, useRef, useState } from "react";
import "./BusinessSectors.css";

export default function BusinessSectors() {
  const sections = useMemo(
    () => [
      {
        key: "retail",
        title: "RETAIL",
        subtitle: "Retail Stores",
        desc:
          "We have several outlets and branches located across different regions in the UAE, serving customers with a strong commitment to quality and excellence. As one of the leading companies in the retail sector, we are proud to be among the major partners supporting and accepting the Fazaa Card, providing exclusive benefits and convenient services to Fazaa members throughout our network. Our wide presence and customer-focused approach reflect our dedication to delivering outstanding shopping experiences across the country.",
        image: "/assets/img/hero/related.jpg",
      },
      {
        key: "wholesale",
        title: "WHOLESALE & CONTRACTS",
        subtitle: "FMCG Distribution",
        desc:
          "We are a leading FMCG wholesale and distribution company in the UAE, serving government entities, corporate clients, and retail businesses. With a strong logistics network and efficient supply chain, we ensure reliable product availability and timely deliveries across all Emirates. Our experience in large-scale contracts and distribution operations makes us a trusted partner for businesses throughout the UAE.",
          image: "/assets/img/hero/contract.jpg",
      },
      {
        key: "ecommerce",
        title: "E-COMMERCE",
        subtitle: "Online Platform",
        desc:
          "Our e-commerce platform provides a seamless digital shopping experience, supported by advanced technology, secure online transactions, and efficient delivery systems. Through our ongoing digital transformation initiatives, we offer customers convenient access to a wide range of products, fast order processing, and reliable delivery services across the UAE. Our scalable platform is designed to support continuous growth while maintaining high standards of customer satisfaction.",
        image: "/assets/img/hero/Ecom.jpg",
      },
    ],
    []
  );

  const [active, setActive] = useState(0);
  const refs = useRef([]);

  useEffect(() => {
    const elements = refs.current.filter(Boolean);
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setActive(index);
          }
        });
      },
      {
        root: null,
        threshold: 0.6, // يتغير لما يدخل منتصف الشاشة تقريبًا
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const current = sections[active];

  return (
    <section className="bs-story">
      <div className="container">
        <div className="bs-layout">

          {/* LEFT SIDE (SCROLL TEXT) */}
          <div className="bs-left">
            {sections.map((section, index) => (
              <div
                key={section.key}
                className={`bs-step ${active === index ? "is-active" : ""}`}
                ref={(el) => (refs.current[index] = el)}
                data-index={index}
              >
                <div className="bs-kicker">
                  0{index + 1}. Business Sector
                </div>

                <h2 className="bs-title">{section.title}</h2>

                <div className="bs-subtitle">
                  {section.subtitle}
                </div>

                <p className="bs-description">
                  {section.desc}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE (STICKY IMAGE) */}
          <div className="bs-right">
            <div className="bs-sticky">
              <div className="bs-image-wrapper">
                <img
                  key={current.image}
                  src={current.image}
                  alt={current.title}
                  className="bs-image"
                />

                <div className="bs-overlay">
                  {/* <h3>{current.title}</h3>
                  <span>{current.subtitle}</span> */}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}