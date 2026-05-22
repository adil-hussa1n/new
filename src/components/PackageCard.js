import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

export const PackageCard = ({ title, price, features, popular }) => {
  return (
    <div className={`package-card ${popular ? 'popular-card' : ''}`}>
      {popular && (
        <div className="popular-badge-wrapper">
          <span className="popular-badge">POPULAR</span>
        </div>
      )}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-price">{price}</h6>
        <ul className="features-list">
          {features && features.map((feature, index) => {
            const isCheck = feature.startsWith("✅");
            const cleanFeature = feature.replace(/^[✅❌]\s*/, "");
            return (
              <li key={index} className={isCheck ? "feature-enabled" : "feature-disabled"}>
                <FontAwesomeIcon 
                  icon={isCheck ? faCheckCircle : faTimesCircle} 
                  className={isCheck ? "text-success me-2" : "text-danger me-2"} 
                />
                <span>{cleanFeature}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="card-footer-action">
        <a href="#contact" className={popular ? "btn-package btn-package-popular" : "btn-package"}>Learn More</a>
      </div>
    </div>
  );
};
