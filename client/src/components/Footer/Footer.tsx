import classNames from 'classnames';
import React from 'react';

import styles from './styles.module.css';

interface FooterProps{
    className?: string
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={classNames(styles.root, className)}>
      Все права защищены
    </footer>
  );
};
