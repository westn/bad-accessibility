import { FC, useCallback, useState } from 'react';

import styles from './Carousel.module.css';

const Carousel: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevClick = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(2);
    }
  }, [currentIndex, setCurrentIndex]);
  const nextClick = useCallback(() => {
    if (currentIndex < 2) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  }, [currentIndex, setCurrentIndex]);

  return (
    <div id="carousel" className={styles.carousel}>
        <div>
          <div className={`${styles.slide} ${currentIndex === 0 ? styles.current: ''}`}>
            <a href="somepage.html?ref=Slide%201">
              <img src="images/slide1.jpg" />
              <div className={styles.description}>
                AU-student vinner ingenjörspris för en pratande robot som teckenspråkstolk.
              </div>
            </a>
          </div>
          <div className={`${styles.slide} ${currentIndex === 1 ? styles.current: ''}`}>
            <a href="somepage.html?ref=Slide%202">
              <img src="images/slide2.jpg" />
              <div className={styles.description}>
                AU installerar universellt utformade kartor på flera platser på campus.
              </div>
            </a>
          </div>
          <div className={`${styles.slide} ${currentIndex === 2 ? styles.current: ''}`}>
            <a href="somepage.html?ref=Slide%203">
              <img src="images/slide3.jpg" />
              <div className={styles.description}>
                Gruppen AU-studenter förespråkar framgångsrikt blindskrift på ölburkar.
              </div>
            </a>
          </div>
        </div>
        <div>
          <div className={styles['btn-prev']} onClick={prevClick}><img src="images/arrow-left.png" /></div>
          <div className={styles['btn-next']} onClick={nextClick}><img src="images/arrow-right.png" /></div>
        </div>
        <ul className={styles.lentils}>
          <li data-slide="0" className={currentIndex === 0 ? styles.active : undefined} />
          <li data-slide="1" className={currentIndex === 1 ? styles.active : undefined} />
          <li data-slide="2" className={currentIndex === 2 ? styles.active : undefined} />
        </ul>
    </div>
  );
}

export default Carousel;
