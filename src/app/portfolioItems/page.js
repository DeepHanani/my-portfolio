"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./creative-portfolio.module.scss";
import { FaArrowRight } from "react-icons/fa";

const portfolioItems = [
  {
    id: 1,
    title: "dashboard.swipe.ai (11/2023 - 06/2024)",
    category: "design",
    categoryLabel:
      "The Swipe Dashboard, accessible at dashboard.swipe.ai, serves as a comprehensive merchant portal designed to streamline post- purchase experiences for e-commerce businesses. It offers tools for package protection, claims management, and customer engagement, aiming to enhance customer satisfaction and trust.",
    image: "/images/mobile-app-design.png",
  },
  {
    id: 2,
    title: "Gift Portal (06/2024 - 10/2024)",
    category: "game",
    categoryLabel:
      "Gift Portal is a customized web platform built to simplify the process of sending, tracking, and managing corporate and personal gifts. It allows users and merchants to easily place orders, track delivery, and manage claims—all in a branded, user-friendly interface",
    image: "/images/mobile-app-design.png",
  },
  {
    id: 3,
    title: "Smart Society Dashboard (10/2024 - Present)",
    category: "branding",
    categoryLabel: "The Smart Society Dashboard is a centralized platform designed to streamline and digitize society and apartment management. It provides an intuitive interface for admins, residents, and committee members to manage everyday operations efficiently.",
    image: "/images/mobile-app-design.png",
  },
];

const categories = [
  { id: "all", label: "All" },
  { id: "design", label: "Design" },
  { id: "game", label: "Game" },
  { id: "branding", label: "Branding" },
  { id: "marketing", label: "Marketing" },
];

export default function CreativePortfolio() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section className={styles.portfolio}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>WORKS</span>
          <h2 className={styles.title}>Creative Portfolio</h2>
        </div>

        <div className={styles.filters}>
          {categories.map((category) => (
            <button
              key={category.id}
              className={`${styles.filterBtn} ${
                activeCategory === category.id ? styles.active : ""
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filteredItems.map((item) => (
            <div key={item.id} className={styles.portfolioItem}>
  <div className={styles.content}>
    <h3 className={styles.itemTitle}>{item.title}</h3>
    <span className={styles.category}>{item.categoryLabel}</span>
  </div>
  <div className={styles.redirectIcon}>
     <FaArrowRight />{/* You can use an icon here like an SVG or Lucide/FontAwesome */}
  </div>
</div>
          ))}
        </div>
      </div>
    </section>
  );
}
