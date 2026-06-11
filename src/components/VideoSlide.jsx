import "./Hero.css";
import { useEffect, useState, useRef } from "react";


export default function VideoSlide( ) {
    return (
        <div className="video-slide" style={{ height: "100vh" }}>

            <video
              src="./assets/img/hero/0507.mp4"
              muted
              autoPlay
              loop
              playsInline
              preload="metadata"
              className="hero-video-bg"
            />

            <div className="video-overlay"></div>

            <div className="video-content">
              <h2 className="quality-title">
                TRUST BY QUALITY
              </h2>

              <div className="quality-content">
                <p>
                  We are a group of companies established in UAE
                  that specialized in fast moving consumer goods
                  and retail sectors. We are known for well
                  executed projects with government entities by
                  distributing dry food products. Our conscious
                  endeavors to learn and understand the
                  requirements of our customers, specially UAE
                  citizens, has given us an upper hand in
                  providing the quality products and services to
                  achieve our customers' satisfaction.
                </p>
              </div>

              <div className="quality-features">

                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>Premium Quality Products</span>
                </div>

                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>Government Certified</span>
                </div>

                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>Customer Satisfaction</span>
                </div>

              </div>
            </div>

          </div>
    );
}