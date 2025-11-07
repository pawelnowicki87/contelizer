import React from "react";
import styles from "./TextDisplay.module.scss";

interface TextDisplayProps {
  title: string;
  value: string;
}

export const TextDisplay: React.FC<TextDisplayProps> = ({ title, value }) => (
  <div className={styles["text-display"]}>
    <h3 className={styles["text-display__title"]}>{title}</h3>
    <textarea
      value={value}
      readOnly
      className={styles["text-display__textarea"]}
    />
  </div>
);
