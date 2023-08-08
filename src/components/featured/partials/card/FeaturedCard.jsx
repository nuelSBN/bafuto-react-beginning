import React from "react";
import "./featured-card.css";

export default function FeaturedCard({ icon, title, subtitle }) {
  return (
    <div className="featured_bottom_card">
      <div className="featured_icon">{icon}</div>
      <h3 className="featured_title">{title}</h3>
      <p className="featured_text">{subtitle}</p>
    </div>
  );
}
