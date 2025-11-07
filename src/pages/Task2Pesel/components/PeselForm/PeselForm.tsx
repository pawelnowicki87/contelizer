import React, { useState } from "react";
import { validatePesel } from "../../utils/validatePesel";
import styles from "./PeselForm.module.scss";

export const PeselForm = () => {
  const [pesel, setPesel] = useState("");
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    setPesel(value);
    setIsValid(null);
  };

  const handleValidate = () => {
    setIsValid(validatePesel(pesel));
  };

  return (
    <div className={styles["pesel-form"]}>
      <input
        type="text"
        maxLength={11}
        placeholder="Enter PESEL number"
        value={pesel}
        onChange={handleChange}
        className={styles["pesel-form__input"]}
      />
      <button
        onClick={handleValidate}
        className={styles["pesel-form__button"]}
      >
        Validate
      </button>

      {isValid !== null && (
        <div
          className={`${styles["pesel-form__result"]} ${
            isValid
              ? styles["pesel-form__result--valid"]
              : styles["pesel-form__result--invalid"]
          }`}
        >
          {isValid ? "Valid PESEL" : "Invalid PESEL"}
        </div>
      )}
    </div>
  );
};
