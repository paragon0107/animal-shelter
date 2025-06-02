import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaShareAlt } from 'react-icons/fa';

interface HomeProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Home({ darkMode, toggleDarkMode }: HomeProps) {
  const [email, setEmail] = useState('');
  const router = useRouter();

  useEffect(() => {
    router.push('/landing');
  }, [router]);

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
        <title>유기동물 홍보 사이트로 이동 중...</title>
        <meta name="description" content="유기동물 입양을 장려하고 홍보하기 위한 웹사이트입니다." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={`container ${styles.headerContainer}`}>
          <div className={styles.logo}>유기동물 홍보</div>
          <nav className={styles.nav}>
            <Link href="https://together.kakao.com/" className={`${styles.navLink} ${styles.donateButton}`}>후원하기</Link>
          </nav>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>후쿠시마에 버려진 동물들</h1>
            <p className={styles.subtitle}>福島に放棄された動物たち</p>
            <div className={styles.smallTitle}>집으로 돌아갈 수 없어요...</div>
            <div className={styles.smallTitle2}>家に帰ることはできません...</div>
            <Link href="https://together.kakao.com/" className="primary-btn">후원하기</Link>
          </div>
          <div className={styles.heroImage}>
            <img src="/images/1.png" alt="유기동물 이미지" />
          </div>
        </div>
      </section>

      <section className={styles.featuredArticle}>
        <div className="container">
          <p className={styles.articleIntro}>원전 사고 후 빈집에 남겨지거나 버려진 동물들..</p>
          <p className={styles.articleIntro2}>原発事故の後、空の家に残されたり放棄された動物..</p>
          <div className={styles.articleContent}>
            <div className={styles.videoContainer}>
              <iframe 
                className={styles.videoFrame}
                src="https://www.youtube.com/embed/571_Ge2Qw7w" 
                title="후쿠시마 유기동물 구조 영상"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
      <section className={styles.callToAction}>
        <div className={styles.callToActionContent}>
          <h2 className={styles.callToActionTitle}>누군가의 반려였던 아이들..</h2>
          <h3 className={styles.callToActionSubtitle}>이제는 거리의 생존자가 되어 하루하루를 버팁니다.</h3>
          <p className={styles.callToActionSubtitle}>당신의 손길이, 다시 희망이 될 수 있습니다.</p>
          <p className={styles.callToActionText}>
            모든 생명은 평등하게 살아갈 권리가 있는 공간인 사이트에서 진행합니다.<br />
            아래의 '후원하기' 버튼을 이용해 협코를 통해 후원해주세요.
          </p>
          <Link href="https://together.kakao.com/" className={`primary-btn ${styles.callToActionButton}`}>후원하기</Link>
        </div>
      </section>

      <section className={styles.animalStories}>
        <div className="container">
          <Link href="/animals/1" className={styles.storyCard}>
            <img src="/images/2.png" alt="시바이누 이야기" />
            <div className={styles.storyOverlay}>
              <h3>기다리고 있어요, 아직도…</h3>
              <p>
                  떠난 사람들이 다시 돌아올까 오늘도, 내일도, 이렇게 짖습니다.<br/>
                  이 강아지는 버림받지 않았다고 믿고 있어요.<br/>
                  그 믿음만으로 하루하루를 버팁니다.
              </p>
            </div>
          </Link>
          <Link href="/animals/2" className={styles.storyCard}>
            <img src="/images/3.png" alt="길고양이 이야기" />
            <div className={styles.storyOverlayright}>
              <p className={styles.storyHighlight}>
                    이 한 끼가, 마지막일지도 몰라요.
              </p>
              <p>버려졌고, 잊혔고, 이젠 살아남는 일조차 간절합니다.<br/>
              비에 젖은 바닥 위, 작은 목숨 둘이 겨우 밥 한 끼를 나눕니다.</p>
            </div>
          </Link>
          <Link href="/animals/3" className={styles.storyCard}>
            <img src="/images/4.png" alt="버려진 강아지 이야기" />
            <div className={styles.storyOverlay}>
              <h3>할머니 탓이 아니에요...</h3>
              <p>“금방 돌아올 거야. 며칠만 참아줘.”<br/>
                  그렇게 떠난 사람들.
                  하지만 돌아오지 못한 시간은 너무 길었습니다.<br/>
                  작은 마당 한켠,
                  목줄에 묶인  끝까지 기다린 아이는
                  결국, 다시는 주인을 만나지 못했습니다.<br/>
                  “우리 개 좀 봐줘요…”
                  간절히 부탁했던 할머니는
                  뒤늦은 소식에 자책하셨지만,<br/>
                  그 누구의 잘못도 아니었습니다.
                  우린 모두, 준비되지 않았을 뿐이었습니다.
              </p>
            </div>
          </Link>
        </div>
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
            <div className={styles.footerLeft}>
              <div className={styles.footerLogo}>유기동물 홍보</div>
              <p className={styles.footerTagline}>모든 생명은 소중합니다</p>
              <div className={styles.footerSocialIcons}>
                <a href="#" className={styles.socialIcon}><FaFacebook /></a>
                <a href="#" className={styles.socialIcon}><FaTwitter /></a>
                <a href="#" className={styles.socialIcon}><FaInstagram /></a>
                <a href="#" className={styles.socialIcon}><FaYoutube /></a>
              </div>
            </div>
            <div className={styles.footerRight}>
              <div className={styles.footerLinks}>
                <div className={styles.footerLinkColumn}>
                  <h4>정보</h4>
                  <a href="/about">소개</a>
                  <a href="/team">팀 소개</a>
                  <a href="/news">뉴스</a>
                </div>
                <div className={styles.footerLinkColumn}>
                  <h4>지원</h4>
                  <a href="/donate">후원하기</a>
                  <a href="/volunteer">봄사하기</a>
                  <a href="/adopt">입양하기</a>
                </div>
                <div className={styles.footerLinkColumn}>
                  <h4>문의</h4>
                  <a href="/contact">연락하기</a>
                  <a href="/faq">FAQ</a>
                  <a href="/privacy">개인정보처리방침</a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>&copy; 2025 유기동물 홍보. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <p>랜딩 페이지로 이동 중입니다...</p>
      </div>
    </div>
  );
}
