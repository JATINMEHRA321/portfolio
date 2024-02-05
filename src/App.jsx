import { useRef, useEffect, useState } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './App.module.css';
import Cuts from './components/Cuts';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Project from './pages/Project';
import Links from './pages/Links';
import Miscellaneous from './pages/Miscellaneous';

function App() {
  const [receiptDim, setReceiptDim] = useState({ width: 0, height: 0 });
  const receiptRef = useRef();
  const location = useLocation();
  const ifProjectsRoute = location.pathname.startsWith('/projects');

  useEffect(() => {
    const resizeObserver = new ResizeObserver((event) => {
      const width = event[0].contentBoxSize[0].inlineSize;
      const height = event[0].contentBoxSize[0].blockSize;
      if (width !== 0 && height !== 0)
        setReceiptDim({
          width,
          height,
        });
    });

    if (receiptRef) {
      resizeObserver.observe(receiptRef.current);
    }
  }, [receiptRef, location]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <motion.div
      key={location.pathname}
      className={styles.mainContainer}
      initial={{ translateY: 150, opacity: 0.2 }}
      animate={{ translateY: 0, opacity: 1 }}
      transition={{
        type: 'spring',
        duration: 2,
        bounce: 0.4,
      }}
    >
      {/* top cuts */}
      <Cuts receiptDim={receiptDim} position={'top'} />

      {/* receipt */}
      <div ref={receiptRef} className={styles.receipt}>
        <div className={styles.subContainer}>
          {!ifProjectsRoute && (
            <Header
              title={'Jatin Mehra'}
              subtitle={'Software Engineer'}
              description={`Passionate about crafting seamless experiences | Enjoys hiking in
            nature | 8+ years experience`}
            />
          )}
          <div
            className={`${styles.pageContainer} ${ifProjectsRoute ? styles.removePageContainerMargin : ''
              }`}
          >
            {/* router here */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/projects/:name" element={<Project />} />
              <Route path="/links" element={<Links />} />
              <Route path="/miscellaneous" element={<Miscellaneous />} />
              <Route path="" element={<Navigate to="/" />} />

              <Route path="*" element={<div>not found</div>} />
            </Routes>
            <Footer />
          </div>
        </div>
      </div>

      {/* bottom cuts */}
      <Cuts receiptDim={receiptDim} position={'bottom'} />
    </motion.div>
  );
}

export default App;
