import React from "react";
import { Link } from "react-router-dom";
import styles from "./BackToHome.module.scss";

export const BackToHome: React.FC = () => (
  <Link to="/" className={styles.back}>
    ← Back to Home
  </Link>
);
