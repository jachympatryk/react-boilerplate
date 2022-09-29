export type FetchingErrorProps = {
  title?: string;
  subtitle?: string;
  refreshText?: string;
  refreshClick?: () => void;
  size?: "big" | "medium" | "small";
  className?: string;
};
