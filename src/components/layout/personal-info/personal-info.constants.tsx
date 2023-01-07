import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";

const iconStyles = {
  width: 40,
  height: 40,
};

export const socialIcons = {
  facebook: <Facebook sx={iconStyles} />,
  instagram: <Instagram sx={iconStyles} />,
  linkedin: <LinkedIn sx={iconStyles} />,
};

export const socialMedia = {
  facebook: { name: "Facebook", label: "facebook", url: "https://www.facebook.com/SeaEasy-107312585347120" },
  instagram: { name: "Instagram", label: "instagram", url: "https://www.instagram.com/sea_easy/?hl=pl" },
  linkedin: { name: "LinkedIn", label: "linkedIn ", url: "https://www.linkedin.com/company/seaeasy/" },
  tiktok: { name: "TikTok", label: "TikTok", url: "https://www.tiktok.com/@sea_easy" },
};
