import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaShareAlt } from 'react-icons/fa';

interface HomeProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Home({ darkMode, toggleDarkMode }: HomeProps) {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() === '') {
      alert('이메일 주소를 입력해주세요.');
      return;
    }
    alert('구독이 완료되었습니다. 감사합니다!');
    setEmail('');
  };

  return (
    <div>
      <Head>
        <title>유기동물 홍보 사이트</title>
        <meta name="description" content="유기동물 입양을 장려하고 홍보하기 위한 웹사이트입니다." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={`container ${styles.headerContainer}`}>
          <div className={styles.logo}>유기동물 홍보</div>
          <nav className={styles.nav}>
            <Link href="/" className={styles.navLink}>홈</Link>
            <Link href="/animals" className={styles.navLink}>입양 가능한 동물들</Link>
            <Link href="/adopt" className={styles.navLink}>입양 신청</Link>
          </nav>
          <button className={styles.darkModeBtn} onClick={toggleDarkMode}>
            {darkMode ? '라이트모드' : '다크모드'}
          </button>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>후쿠시마에 버려진 동물들</h1>
            <p className={styles.subtitle}>福島に放棄された動物たち</p>
            <div className={styles.date}>2025.06.02 | 관리자</div>
            <Link href="/animals" className="primary-btn">입양 가능한 동물들 보기</Link>
          </div>
          <div className={styles.heroImage}>
            <img src="/images/1.png" alt="유기동물 이미지" />
          </div>
        </div>
      </section>

      <section className={styles.featuredArticle}>
        <div className="container">
          <p className={styles.articleIntro}>매일 10,000 마리의 동물이 버려지고 있습니다.</p>
          <div className={styles.articleContent}>
            <div className={styles.socialIcons}>
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
              <FaYoutube />
              <FaShareAlt />
            </div>
            <div className={styles.articleImage}>
              <img src="/images/2.png" alt="유기견 구조 현장" />
              <div className={styles.imageCaption}>
                <h2>후쿠시마 피난 지구 <span className={styles.highlight}>입양해 달라개!</span></h2>
              </div>
            </div>
            <p className={styles.articleText}>
              후쿠시마 원전 사고 이후 많은 동물들이 버려졌습니다. 
              이들에게 새로운 가족이 되어주세요.
            </p>
            <Link href="/adopt" className="secondary-btn">입양 신청하기</Link>
          </div>
        </div>
      </section>

      <section className={styles.animalStories}>
        <Link href="/animals/1" className={styles.storyCard}>
          <img src="/images/2.png" alt="해피의 이야기" />
          <div className={styles.storyOverlay}>
            <h3>해피</h3>
            <p>후쿠시마 원전 사고 이후 버려진 개들은 야생에서 생존하기 위해 무리를 지어 생활하고 있습니다. 그들에게 새로운 희망을...</p>
          </div>
        </Link>
        <Link href="/animals/2" className={styles.storyCard}>
          <img src="/images/3.png" alt="럭키의 이야기" />
          <div className={styles.storyOverlay}>
            <h3>럭키</h3>
            <p>많은 동물들이 방사능 오염 지역에 남겨졌습니다. 구조 활동가들의 노력으로 일부는 안전한 곳으로...</p>
          </div>
        </Link>
        <Link href="/animals/3" className={styles.storyCard}>
          <img src="/images/4.png" alt="초코의 이야기" />
          <div className={styles.storyOverlay}>
            <h3>초코</h3>
            <p>버려진 동물들은 사람의 도움 없이 생존하기 어렵습니다. 당신의 작은 관심이 그들에게는 큰 희망이 됩니다...</p>
          </div>
        </Link>
      </section>

      <section className={styles.faq}>
        <div className="container">
          <h2 className={styles.faqTitle}>F&Q</h2>
          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h3>유기동물 입양은 어떻게 하나요?</h3>
              <p>유기동물 보호소를 방문하여 상담 후 입양 절차를 진행할 수 있습니다. 자세한 내용은 지역 보호소에 문의하세요.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>입양 전 준비사항은 무엇인가요?</h3>
              <p>반려동물을 위한 공간, 사료, 장난감 등 기본적인 생활용품을 준비하고, 가족 구성원 모두의 동의가 필요합니다.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>유기동물 후원은 어떻게 하나요?</h3>
              <p>홈페이지 내 후원하기 버튼을 통해 정기/일시 후원이 가능하며, 물품 후원도 가능합니다.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>봉사활동은 어떻게 신청하나요?</h3>
              <p>보호소별로 봉사활동 일정과 신청 방법이 다르니, 관심 있는 보호소에 직접 문의하시기 바랍니다.</p>
            </div>
          </div>
          <Link href="/adopt" className={`primary-btn ${styles.faqButton}`}>입양 문의하기</Link>
        </div>
      </section>

      <section className={styles.newsletter}>
        <div className="container">
          <h2 className={styles.newsletterTitle}>유기동물 소식지 구독하기</h2>
          <p className={styles.newsletterDesc}>정기적으로 유기동물 소식을 받아보세요</p>
          <form className={styles.newsletterForm} onSubmit={handleSubscribe}>
            <input 
              type="email" 
              placeholder="이메일 주소를 입력하세요" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="primary-btn">구독하기</button>
          </form>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerContent}>
            <div className={styles.footerLogo}>유기동물 홍보</div>
            <div className={styles.footerSocialIcons}>
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
              <FaYoutube />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
