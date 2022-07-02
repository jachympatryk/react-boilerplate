import React from 'react';
import classNames from 'classnames';

import { ContentProps } from './content.types';

import styles from './content.module.scss';

export const Content: React.FC<ContentProps> = ({ children, className }) => {
  return (
    <div className={styles.wrapperWithSearch}>
      <main className={classNames(styles.containerWithSearch, className)}>{children}</main>
    </div>
  );
};
