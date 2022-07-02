import { memo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { NoContentProps } from './no-content.types';
import { LANDING_PAGE } from 'constants/routes.constants';

import styles from './no-content.module.scss';

export const NoContent = memo(
  ({
    title = '',
    subtitle = '',
    btnText = '',
    size = 'big',
    onClick,
    className = '',
    showButton = false,
  }: NoContentProps) => {
    const navigate = useNavigate();
    const location = useLocation();

    const isDashboard = location.pathname === '/';

    const showBtn = showButton && (!isDashboard || onClick);

    const handleClick = () => {
      if (onClick) {
        onClick();
      } else {
        navigate(LANDING_PAGE.path);
      }
    };

    return (
      <div className={`${styles.container} ${styles[size]} ${className}`}>
        <h4>{title}</h4>
        <p>{subtitle}</p>
        {showBtn && (
          <button type="button" onClick={handleClick}>
            {btnText}
          </button>
        )}
      </div>
    );
  },
);
