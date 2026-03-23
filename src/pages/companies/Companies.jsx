import { Link } from "react-router-dom";
import "./Company.css";
import { useReveal } from "../../useReveal";
import { useState } from "react";

export default function Companies() {
  // ===== Links Data (Update URLs) =====
  const [open, setOpen] = useState(null);
  const retailBranches = [
    { name: "RHFS, Ajman", url: "#" },
    { name: "RHFS, Al Ain", url: "#" },
    { name: "RHFS, AUH (Shamkhah)", url: "#" },
    { name: "RHFS, AUH (Bani Yas)", url: "#" },
    { name: "RHFS, AUH (Mussafah)", url: "#" },
  ];

  const retailSpecial = [
    { name: "FES, Seh Al Mahab, Sharjah", url: "#" },
    { name: "FES, Abu Dhabi Police Collage Premises", url: "#" },
    { name: "FES, Al Wathba Sadr Jail Premises", url: "#" },
    { name: "FES, Sharjah Police Academy Premises", url: "#" },
  ];

  const generalTrading = [
    { name: "RH General Trading, Dubai Br", url: "#" },
    { name: "RH General Trading, Mazyad", url: "#" },
  ];

  const overseas = [{ name: "OverSeas General Trading, Mazyad", url: "#" }];

  const ecommerce = [
    { name: "FazaaStore", url: "https://fazaa.ae" }, // مثال
    { name: "RHe-s - Royal Horizon Store", url: "#" },
  ];

  // ✅ Reveal for sections
  const structure = useReveal({ threshold: 0.15, once: true });
  const companies = useReveal({ threshold: 0.15, once: true });
  const fleet = useReveal({ threshold: 0.15, once: true });
  const storage = useReveal({ threshold: 0.15, once: true });
  const team = useReveal({ threshold: 0.15, once: true });

  return (
    <section className="company-wrap">
      {/* =========================
          Company Structure (NEW)
      ========================= */}
<section
  ref={structure.ref}
  className={`cs-container reveal ${structure.visible ? "is-visible" : ""}`}
>
  <h3 className="cs-title">Company Structure</h3>

  <div className="cs-holding">
    Royal Horizon Holding LLC
  </div>

  <div className="cs-line"></div>

  <div className="cs-level">

    {/* Retail */}
 <div
  className="cs-node"
  onMouseEnter={() => open === null && setOpen(1)}
  onMouseLeave={() => open === 1 && setOpen(null)}
>
  <div
    className="cs-nodeTitle"
    onClick={() => setOpen(open === 1 ? null : 1)}
  >
    Retail (B2C)
  </div>

  <div className={`cs-card ${open === 1 ? "open" : ""}`}>
    <div className="cs-links">
      {retailBranches.map(b => (
        <a key={b.name} href={b.url} className="cs-link">
          {b.name} <span>↗</span>
        </a>
      ))}
    </div>
  </div>
</div>

    {/* Wholesale */}
   <div
  className="cs-node"
  onMouseEnter={() => open === null && setOpen(2)}
  onMouseLeave={() => open === 2 && setOpen(null)}
>
  <div
    className="cs-nodeTitle"
    onClick={() => setOpen(open === 2 ? null : 2)}
  >
    Wholesale & Contracts
  </div>

  <div className={`cs-card ${open === 2 ? "open" : ""}`}>
    <div className="cs-links">
      {generalTrading.map(b => (
        <a key={b.name} href={b.url} className="cs-link">
          {b.name} <span>↗</span>
        </a>
      ))}
    </div>
  </div>
</div>

    {/* E-commerce */}
    <div
  className="cs-node"
  onMouseEnter={() => open === null && setOpen(3)}
  onMouseLeave={() => open === 3 && setOpen(null)}
>
  <div
    className="cs-nodeTitle"
    onClick={() => setOpen(open === 3 ? null : 3)}
  >
    E-Commerce
  </div>

  <div className={`cs-card ${open === 3 ? "open" : ""}`}>
    <div className="cs-links">
      {ecommerce.map(b => (
        <a key={b.name} href={b.url} className="cs-link">
          {b.name} <span>↗</span>
        </a>
      ))}
    </div>
  </div>
</div>

  </div>
</section>
      {/* =========================
          Our Companies
      ========================= */}
      <section
        ref={companies.ref}
        className={`container reveal ${companies.visible ? "is-visible" : ""}`}
      >
        <h1 className="company-title">Our Companies</h1>
        <p className="company-sub">
          Explore the diversified companies under Royal Horizon Holding.
        </p>

        <div className="company-grid">
          <Link to="/companies/horizon" className="company-card">
            <div
              className="company-img"
              style={{ backgroundImage: "url(/assets/img/companies/pr2.jpg)" }}
            />
            <h3>Royal Horizon General Trading</h3>
            <p>Wholesale & Government Contracts</p>
          </Link>

          <Link to="/companies/overseas" className="company-card">
            <div
              className="company-img"
              style={{ backgroundImage: "url(/assets/img/companies/pr1.jpg)" }}
            />
            <h3>Overseas Foodstuff Trading</h3>
            <p>FMCG & Foodstuff Supply</p>
          </Link>

          <Link to="/companies/fazaa" className="company-card">
            <div
              className="company-img"
              style={{ backgroundImage: "url(/assets/img/companies/p3.jpg)" }}
            />
            <h3>Fazaa Stores</h3>
            <p>Retail Chain Across UAE</p>
          </Link>
        </div>
      </section>

      {/* =========================
    Fleet Section
========================= */}
<section
  ref={fleet.ref}
  className={`fleet reveal ${fleet.visible ? "is-visible" : ""}`}
>
  <div className="fleet-container">

    <div className="fleet-grid">

      {/* Text */}
      <div className="fleet-content">

        <h2 className="fleet-title">
          Our Fleet – Driving Efficiency and Reach
        </h2>

        <p>
          Royal Horizon Holding operates a robust fleet of 72 vehicles,
          including trailers, trucks, and pick-ups, strategically deployed
          across the UAE to ensure seamless distribution and timely delivery.
        </p>

        <p>
          Vehicles are equipped with freezer, chiller, and ambient
          compartments, enabling us to maintain the highest standards of
          quality and safety for all product categories.
        </p>

        <p>
          Our modern fleet represents reliability, speed, and our
          commitment to operational excellence across every channel.
        </p>

        <div className="fleet-stats">

          <div className="fleet-stat">
            <h3>72+</h3>
            <span>Vehicles</span>
          </div>

          <div className="fleet-stat">
            <h3>7</h3>
            <span>Emirates Coverage</span>
          </div>

          <div className="fleet-stat">
            <h3>24/7</h3>
            <span>Distribution</span>
          </div>

        </div>

      </div>

      {/* Image */}
      <div className="fleet-image">
        <img
          src="/assets/img/about/fleet.jpg"
          alt="Royal Horizon fleet"
          loading="lazy"
        />
      </div>

    </div>

  </div>
</section>


{/* =========================
    Storage & Processing
========================= */}
<section
  ref={storage.ref}
  className={`storage reveal ${storage.visible ? "is-visible" : ""}`}
>

  <div className="storage-container">

    <div className="storage-head">

      <h2>
        Our Storage & Processing – <br />
        Scalable, Secure, and Strategically Equipped
      </h2>

      <p>
        Royal Horizon Holding operates over 170,000 CBM of modern storage
        facilities including 13,000 CBM of temperature-controlled cold storage,
        ensuring optimal preservation and handling of diverse FMCG products.
      </p>

      <p>
        We also operate a dedicated rice packing unit with a daily capacity
        of 270 metric tons, enabling efficient large-scale processing and
        distribution across the UAE.
      </p>

    </div>


    <div className="storage-grid">

      <div className="storage-big">
        <img src="/assets/img/storage/s1.jpg" alt="Storage facility" />
      </div>

      <div className="storage-card">
        <img src="/assets/img/storage/s2.jpg" alt="Processing area" />
      </div>

      <div className="storage-card">
        <img src="/assets/img/storage/s3.jpg" alt="Warehouse operations" />
      </div>

      <div className="storage-card">
        <img src="/assets/img/storage/s4.jpg" alt="Packing unit" />
      </div>

      <div className="storage-card">
        <img src="/assets/img/storage/s6.jpg" alt="Cold storage" />
      </div>

    </div>

  </div>

</section>

      {/* ===== TEAM ===== */}
      <section
        ref={team.ref}
        className={`co-sec reveal ${team.visible ? "is-visible" : ""}`}
      >
        <div className="container">
          <div className="co-head">
            <h2 className="co-h2">Our Team</h2>
            <p className="co-sub">
              Store teams focused on service excellence, product availability, and customer care.
            </p>
          </div>

          <div className="fz-team">
            <img
              src="/assets/img/companies/team.jpg"
              alt="Fazaa Team"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
          </div>
        </div>
      </section>
    </section>
  );
}