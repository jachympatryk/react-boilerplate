import { memo } from 'react';

import { FetchingErrorProps } from './fetching-error.types';

import styles from './fetching-error.module.scss';

export const FetchingError = memo(
  ({ title, subtitle, refreshText, refreshClick, size = 'big', className = '' }: FetchingErrorProps) => {
    return (
      <div className={`${styles.container} ${styles[size]} ${className}`}>
        <h4>{title}</h4>
        <p>{subtitle}</p>
        {refreshClick && (
          <button type="button" onClick={refreshClick}>
            {refreshText}
          </button>
        )}
      </div>
    );
  },
);
