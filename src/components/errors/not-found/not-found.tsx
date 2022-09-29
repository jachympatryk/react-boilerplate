import { memo } from "react";
import { useNavigate } from "react-router-dom";

import { NotFoundProps } from "./not-found.types";
import { LANDING_PAGE } from "constants/routes.constants";

import styles from "./not-found.module.scss";

export const NotFound = memo(
  ({ title, subtitle, size = "big", className = "", noButton = false, btnText, btnClick }: NotFoundProps) => {
    const navigate = useNavigate();

    const buttonText = btnText || "Go to Dashboard";

    const handleClick = () => {
      if (btnClick) {
        btnClick();
      } else {
        navigate(LANDING_PAGE.path);
      }
    };

    return (
      <div className={`${styles.container} ${styles[size]} ${className}`}>
        <div className={`${styles.body}`}>
          <div className={styles.title}>{title}</div>
          <div className={styles.subtitle}>{subtitle}</div>
          {!noButton && (
            <button type="button" onClick={handleClick}>
              {buttonText}
            </button>
          )}
        </div>
      </div>
    );
  },
);
