import { Suspense } from 'react';

import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import Modal from '@components/Modal/Modal';
import Spinner from '@components/Spinner/Spinner';

import styles from './layout.module.css';

export default function RootLayout({
  search,
  children,
}: {
  search: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Suspense fallback={<Spinner />}>
          <div className={styles.wrapper}>
            <div className={styles['left-column']}>{search}</div>
            <div className={styles['right-column']}>{children}</div>
          </div>
        </Suspense>
      </main>
      <Footer />
      <Modal />
    </>
  );
}
