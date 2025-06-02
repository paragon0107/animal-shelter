import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from '../styles/Landing.module.css';
import { FaPaw, FaArrowRight } from 'react-icons/fa';

export default function Landing() {
  const router = useRouter();
  const [loaded, setLoaded] = useState(false);
  const [quote, setQuote] = useState('');

  // 후쿠시마 원전 사고 관련 문구 목록
  const quotes = [
    '재난 이후 14년, 아직도 사람들을 기다리는 후쿠시마의 유기동물들',
    '소중한 가족을 잃고 방사능 지역에 남겨진 동물들의 이야기',
    '재난으로 인해 버려진 생명들, 그들의 생존을 위한 심각한 투쟁',
    '인간이 떠난 후쿠시마, 생명의 의지로 버티는 동물들',
    '원전 사고 후 생태계의 새로운 희생자들, 그들에게 도움의 손길을'
  ];

  useEffect(() => {
    setLoaded(true);
    // 랜덤 문구 선택
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }, []);

  const handleEnterSite = () => {
    router.push('/home');
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>유기동물 홍보 사이트에 오신 것을 환영합니다</title>
        <meta name="description" content="유기동물 입양을 장려하고 홍보하기 위한 웹사이트입니다." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={`${styles.content} ${loaded ? styles.visible : ''}`}>
          <div className={styles.logo}>
            <FaPaw className={styles.logoIcon} />
          </div>
          <h1 className={styles.title}>
            <span className={styles.highlight}>후쿠시마</span> 재난의 잊혀진 생명들
          </h1>
          <p className={styles.description}>
            {quote}
          </p>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>9.0</span>
              <span className={styles.statLabel}>지진 강도(리히터)</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>20km</span>
              <span className={styles.statLabel}>원전 주변 방사능 통제구역</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>90%</span>
              <span className={styles.statLabel}>구조되지 못한 동물 비율</span>
            </div>
          </div>
          <p className={styles.subDescription}>
            2011년 3월 11일, 일본 동북부 지진과 지진해일로 인한 후쿠시마 원전 사고는 수만 명의 거주자들을 이주시켰지만, 수천 마리의 반려동물들은 버려졌습니다. 이 동물들은 아직도 우리의 도움을 기다리고 있습니다.
          </p>
          <button 
            className={styles.enterButton}
            onClick={handleEnterSite}
          >
            그들의 이야기 듣기 <FaArrowRight className={styles.arrowIcon} />
          </button>
        </div>

        <div className={styles.backgroundImages}>
          <div className={`${styles.imageContainer} ${styles.image1} ${loaded ? styles.loaded : ''}`}>
            <img src="/images/dog.jpg" alt="강아지 이미지" />
          </div>
          <div className={`${styles.imageContainer} ${styles.image2} ${loaded ? styles.loaded : ''}`}>
            <img src="/images/cat.jpg" alt="고양이 이미지" />
          </div>
          <div className={`${styles.imageContainer} ${styles.image3} ${loaded ? styles.loaded : ''}`}>
            <img src="/images/de.jpg" alt="유기동물 이미지" />
          </div>
          <div className={`${styles.imageContainer} ${styles.image4} ${loaded ? styles.loaded : ''}`}>
            <img src="/images/ca.jpg" alt="유기동물 이미지" />
          </div>
          <div className={`${styles.imageContainer} ${styles.image5} ${loaded ? styles.loaded : ''}`}>
            <img src="/images/pi.jpg" alt="유기동물 이미지" />
          </div>
        </div>
      </main>
    </div>
  );
}
