import React from "react";
import { IconButton } from "@mui/material";

import { socialMedia } from "./personal-info.constants";

import styles from "./personal-info.module.scss";

export const PersonalInfo = () => {
  const openSocial = (url: string) => () => {
    window.open(url, "_blank");
  };

  return (
    <div className={styles.container}>
      <div>
        {Object.entries(socialMedia).map(([key, { label, url }]) => (
          <IconButton
            key={key}
            aria-label={label}
            onClick={openSocial(url)}
            className={styles.button}
            color="primary"
            sx={{ "*": { fill: "#474cae" } }}
          />
        ))}
      </div>
    </div>
  );
};
