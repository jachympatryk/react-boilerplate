import React from "react";

import { Hero } from "./hero/hero";
import { Skills } from "./skills/skills";
import { AboutMe } from "./about-me/about-me";

import styles from "./landing.module.scss";

export const LandingPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <AboutMe />
      <Skills />
    </div>
  );
};
