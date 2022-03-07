export type NotFoundProps = {
  title?: string;
  subtitle?: string;
  size?: 'big' | 'medium' | 'small';
  className?: string;
  noButton?: boolean;
  btnText?: string;
  btnClick?: () => void;
};
