import React from 'react';
// import { useContext } from 'react';
// import { ThemeContextSetter } from '../../contexts/ThemeContext';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';

import styles from './styles.module.css';

interface LayoutProps{
    children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  // const { toggleTheme } = useContext(ThemeContextSetter);
  return (
    <div className={styles.root}>
      <Header />
      <div className={styles.content}>{children}</div>
      <Footer className={styles.footer} />
    </div>
  );
};
