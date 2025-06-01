import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { FaArrowLeft, FaFacebook, FaTwitter, FaInstagram, FaShareAlt } from 'react-icons/fa';
import LoadingSpinner from '../../components/LoadingSpinner';
import ImageGallery from '../../components/ImageGallery';
import { useEffect, useState } from 'react';

// 동물 데이터 타입 정의
interface AnimalData {
  id: string;
  name: string;
  age: string;
  gender: string;
  species: string;
  description: string;
  story: string;
  imageUrl: string;
  images?: string[];
}

// 샘플 동물 데이터
const animalData: { [key: string]: AnimalData } = {
  '1': {
    id: '1',
    name: '해피',
    age: '3살',
    gender: '수컷',
    species: '진돗개',
    description: '활발하고 사람을 좋아하는 성격의 진돗개입니다.',
    story: '후쿠시마 원전 사고 이후 버려진 개들 중 하나로, 구조팀에 의해 발견되었습니다. 처음에는 사람을 경계했지만 보호소에서 지내면서 점차 사람에게 마음을 열게 되었습니다. 활발하고 친근한 성격으로 다른 동물들과도 잘 어울립니다. 새로운 가족을 만나 행복하게 살기를 기다리고 있습니다.',
    imageUrl: '/images/1.png',
    images: ['/images/1.png', '/images/2.png', '/images/3.png']
  },
  '2': {
    id: '2',
    name: '럭키',
    age: '2살',
    gender: '암컷',
    species: '믹스견',
    description: '온순하고 조용한 성격의 중형견입니다.',
    story: '방사능 오염 지역에서 구조된 럭키는 처음에는 건강 상태가 좋지 않았지만, 보호소에서의 치료와 보살핌으로 건강을 회복했습니다. 조용하고 온순한 성격으로 특히 아이들과 잘 어울립니다. 산책을 좋아하며 기본적인 훈련도 잘 따릅니다. 따뜻한 가정에서 사랑받기를 기다리고 있습니다.',
    imageUrl: '/images/2.png',
    images: ['/images/2.png', '/images/4.png', '/images/1.png']
  },
  '3': {
    id: '3',
    name: '초코',
    age: '1살',
    gender: '수컷',
    species: '믹스견',
    description: '장난기 많고 활발한 성격의 소형견입니다.',
    story: '어린 나이에 버려진 초코는 다행히 빠르게 구조되었습니다. 장난기가 많고 활발한 성격으로 항상 에너지가 넘칩니다. 사람의 관심을 좋아하며 함께 놀이하는 것을 즐깁니다. 아직 어리기 때문에 기본적인 훈련이 필요하지만, 똑똑해서 빠르게 배울 수 있습니다. 활동적인 가정에서 함께 성장하기를 기다립니다.',
    imageUrl: '/images/3.png',
    images: ['/images/3.png', '/images/2.png', '/images/4.png']
  },
  '4': {
    id: '4',
    name: '별이',
    age: '5살',
    gender: '암컷',
    species: '시바견',
    description: '독립적이고 침착한 성격의 시바견입니다.',
    story: '후쿠시마 지역에서 발견된 별이는 독립적인 성격의 시바견입니다. 처음에는 사람에게 경계심이 많았지만, 시간이 지나면서 신뢰할 수 있는 사람에게는 충성심을 보입니다. 조용한 환경을 선호하며, 다른 반려동물이 없는 가정이 적합합니다. 기본적인 훈련이 되어 있으며, 산책 시 리드줄 착용에 익숙합니다. 인내심 있는 가족을 기다리고 있습니다.',
    imageUrl: '/images/4.png',
    images: ['/images/4.png', '/images/1.png', '/images/3.png']
  }
};

export default function AnimalDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [animal, setAnimal] = useState<AnimalData | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (id && typeof id === 'string') {
      const animalInfo = animalData[id];
      setAnimal(animalInfo || null);
      setLoading(false);
    }
  }, [id]);
  
  if (loading) {
    return (
      <div className="loading-container">
        <LoadingSpinner size="large" />
        <p>로딩 중...</p>
      </div>
    );
  }
  
  if (!animal) {
    return (
      <div className="not-found-container">
        <h1>찾을 수 없는 동물입니다</h1>
        <Link href="/" className="primary-btn">홈으로 돌아가기</Link>
      </div>
    );
  }

  return (
    <div>
      <Head>
        <title>{animal.name} - 유기동물 홍보 사이트</title>
        <meta name="description" content={`${animal.name}의 이야기를 확인하고 입양을 고려해보세요.`} />
      </Head>

      <div className="container animal-detail-container">
        <div className="back-button">
          <Link href="/animals" className="back-link"><FaArrowLeft /> 모든 동물 보기</Link>
        </div>
        
        <div className="animal-detail">
          <div className="animal-image">
            <ImageGallery images={animal.images || [animal.imageUrl]} alt={animal.name} />
          </div>
          
          <div className="animal-info">
            <h1 className="animal-name">{animal.name}</h1>
            
            <div className="animal-meta">
              <div className="meta-item">
                <span className="meta-label">나이:</span>
                <span className="meta-value">{animal.age}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">성별:</span>
                <span className="meta-value">{animal.gender}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">품종:</span>
                <span className="meta-value">{animal.species}</span>
              </div>
            </div>
            
            <p className="animal-description">{animal.description}</p>
            
            <div className="social-share">
              <span>공유하기:</span>
              <div className="social-icons">
                <FaFacebook />
                <FaTwitter />
                <FaInstagram />
                <FaShareAlt />
              </div>
            </div>
            
            <button className="primary-btn">입양 문의하기</button>
          </div>
        </div>
        
        <div className="animal-story">
          <h2>이야기</h2>
          <p>{animal.story}</p>
        </div>
        
        <div className="related-animals">
          <h2>다른 동물들도 만나보세요</h2>
          <div className="related-grid">
            {Object.values(animalData)
              .filter(a => a.id !== id)
              .slice(0, 3)
              .map(a => (
                <Link href={`/animals/${a.id}`} key={a.id} className="related-card">
                  <img src={a.imageUrl} alt={a.name} />
                  <div className="related-info">
                    <h3>{a.name}</h3>
                    <p>{a.species}, {a.age}</p>
                  </div>
                </Link>
              ))
            }
          </div>
        </div>
      </div>

      <style jsx>{`
        .loading-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          font-size: 1.2rem;
          color: var(--secondary-color);
        }
        
        .loading-container p {
          margin-top: 20px;
          animation: pulse 1.5s infinite;
        }
        
        @keyframes pulse {
          0% { opacity: 0.6; }
          50% { opacity: 1; }
          100% { opacity: 0.6; }
        }
        
        .not-found-container {
          text-align: center;
          padding: 100px 0;
        }
        
        .not-found-container h1 {
          margin-bottom: 20px;
        }
        
        .animal-detail-container {
          padding: 40px 0;
        }
        
        .back-button {
          margin-bottom: 30px;
        }
        
        .back-link {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--primary-color);
          font-weight: 500;
          transition: color 0.3s;
        }
        
        .back-link:hover {
          color: var(--accent-color);
        }
        
        .animal-detail {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          margin-bottom: 40px;
        }
        
        .animal-image img {
          width: 100%;
          border-radius: 8px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        .animal-name {
          font-size: 2.5rem;
          margin-bottom: 20px;
          color: var(--primary-color);
        }
        
        .animal-meta {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
          margin-bottom: 20px;
          background-color: var(--light-gray);
          padding: 15px;
          border-radius: 8px;
        }
        
        .meta-label {
          font-weight: 600;
          display: block;
          margin-bottom: 5px;
          color: var(--secondary-color);
        }
        
        .meta-value {
          font-size: 1.1rem;
        }
        
        .animal-description {
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 30px;
        }
        
        .social-share {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 30px;
        }
        
        .social-icons {
          display: flex;
          gap: 15px;
        }
        
        .social-icons > :global(svg) {
          font-size: 1.2rem;
          color: var(--secondary-color);
          cursor: pointer;
          transition: color 0.3s;
        }
        
        .social-icons > :global(svg):hover {
          color: var(--accent-color);
        }
        
        .animal-story {
          margin-bottom: 60px;
        }
        
        .animal-story h2 {
          font-size: 1.8rem;
          margin-bottom: 20px;
          color: var(--primary-color);
        }
        
        .animal-story p {
          font-size: 1.1rem;
          line-height: 1.8;
        }
        
        .related-animals h2 {
          font-size: 1.8rem;
          margin-bottom: 30px;
          color: var(--primary-color);
        }
        
        .related-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        
        .related-card {
          display: block;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s;
        }
        
        .related-card:hover {
          transform: translateY(-5px);
        }
        
        .related-card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
        
        .related-info {
          padding: 15px;
        }
        
        .related-info h3 {
          margin-bottom: 5px;
          color: var(--primary-color);
        }
        
        .related-info p {
          color: var(--secondary-color);
        }
        
        @media (max-width: 768px) {
          .animal-detail {
            grid-template-columns: 1fr;
          }
          
          .related-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
