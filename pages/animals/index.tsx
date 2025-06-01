import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaSearch, FaFilter, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import LoadingSpinner from '../../components/LoadingSpinner';

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
}

// 샘플 동물 데이터
const animalsData: AnimalData[] = [
  {
    id: '1',
    name: '해피',
    age: '3살',
    gender: '수컷',
    species: '진돗개',
    description: '활발하고 사람을 좋아하는 성격의 진돗개입니다.',
    story: '후쿠시마 원전 사고 이후 버려진 개들 중 하나로, 구조팀에 의해 발견되었습니다.',
    imageUrl: '/images/1.png'
  },
  {
    id: '2',
    name: '럭키',
    age: '2살',
    gender: '암컷',
    species: '믹스견',
    description: '온순하고 조용한 성격의 중형견입니다.',
    story: '방사능 오염 지역에서 구조된 럭키는 처음에는 건강 상태가 좋지 않았지만, 보호소에서의 치료와 보살핌으로 건강을 회복했습니다.',
    imageUrl: '/images/2.png'
  },
  {
    id: '3',
    name: '초코',
    age: '1살',
    gender: '수컷',
    species: '믹스견',
    description: '장난기 많고 활발한 성격의 소형견입니다.',
    story: '어린 나이에 버려진 초코는 다행히 빠르게 구조되었습니다.',
    imageUrl: '/images/3.png'
  },
  {
    id: '4',
    name: '별이',
    age: '5살',
    gender: '암컷',
    species: '시바견',
    description: '독립적이고 침착한 성격의 시바견입니다.',
    story: '후쿠시마 지역에서 발견된 별이는 독립적인 성격의 시바견입니다.',
    imageUrl: '/images/4.png'
  },
  {
    id: '5',
    name: '맥스',
    age: '4살',
    gender: '수컷',
    species: '리트리버',
    description: '친근하고 활동적인 대형견입니다.',
    story: '버려진 후 야생에서 생활하다 구조된 맥스는 사람을 무척 좋아합니다.',
    imageUrl: '/images/1.png'
  },
  {
    id: '6',
    name: '루시',
    age: '2살',
    gender: '암컷',
    species: '코리안 숏헤어',
    description: '조용하고 애교 많은 고양이입니다.',
    story: '어린 나이에 버려진 루시는 보호소에서 안정을 찾았습니다.',
    imageUrl: '/images/2.png'
  }
];

export default function AnimalsList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSpecies, setFilterSpecies] = useState('');
  const [filterGender, setFilterGender] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const animalsPerPage = 4; // 페이지당 표시할 동물 수
  
  // 검색 및 필터링된 동물 목록
  const filteredAnimals = animalsData.filter(animal => {
    const matchesSearch = animal.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         animal.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecies = filterSpecies ? animal.species === filterSpecies : true;
    const matchesGender = filterGender ? animal.gender === filterGender : true;
    
    return matchesSearch && matchesSpecies && matchesGender;
  });
  
  // 페이지네이션 계산
  const totalPages = Math.ceil(filteredAnimals.length / animalsPerPage);
  const indexOfLastAnimal = currentPage * animalsPerPage;
  const indexOfFirstAnimal = indexOfLastAnimal - animalsPerPage;
  const currentAnimals = filteredAnimals.slice(indexOfFirstAnimal, indexOfLastAnimal);
  
  // 페이지 변경 핸들러
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // 페이지 상단으로 스크롤
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // 필터 변경 시 첫 페이지로 이동
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, filterSpecies, filterGender]);
  
  // 로딩 시뮬레이션
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [currentPage, searchTerm, filterSpecies, filterGender]);
  
  // 종 목록 (중복 제거)
  const speciesList = Array.from(new Set(animalsData.map(animal => animal.species)));

  return (
    <div>
      <Head>
        <title>입양 가능한 동물들 - 유기동물 홍보 사이트</title>
        <meta name="description" content="입양을 기다리는 유기동물들을 만나보세요." />
      </Head>

      <div className="container animals-list-container">
        <div className="page-header">
          <h1>입양 가능한 동물들</h1>
          <Link href="/" className="back-link">홈으로 돌아가기</Link>
        </div>
        
        <div className="search-filter-section">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input 
              type="text" 
              placeholder="이름이나 특징으로 검색" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="filter-section">
            <div className="filter-item">
              <label>종류</label>
              <select 
                value={filterSpecies}
                onChange={(e) => setFilterSpecies(e.target.value)}
              >
                <option value="">모든 종류</option>
                {speciesList.map(species => (
                  <option key={species} value={species}>{species}</option>
                ))}
              </select>
            </div>
            
            <div className="filter-item">
              <label>성별</label>
              <select 
                value={filterGender}
                onChange={(e) => setFilterGender(e.target.value)}
              >
                <option value="">모든 성별</option>
                <option value="수컷">수컷</option>
                <option value="암컷">암컷</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="animals-grid">
          {loading ? (
            <div className="loading-container">
              <LoadingSpinner size="medium" />
              <p>동물 정보를 불러오는 중입니다...</p>
            </div>
          ) : filteredAnimals.length > 0 ? (
            currentAnimals.map(animal => (
              <Link href={`/animals/${animal.id}`} key={animal.id} className="animal-card">
                <div className="animal-image">
                  <img src={animal.imageUrl} alt={animal.name} />
                </div>
                <div className="animal-info">
                  <h2>{animal.name}</h2>
                  <div className="animal-meta">
                    <span>{animal.species}</span>
                    <span>•</span>
                    <span>{animal.age}</span>
                    <span>•</span>
                    <span>{animal.gender}</span>
                  </div>
                  <p className="animal-description">{animal.description}</p>
                </div>
              </Link>
            ))
          ) : (
            <div className="no-results">
              <p>검색 결과가 없습니다.</p>
              <button 
                className="primary-btn" 
                onClick={() => {
                  setSearchTerm('');
                  setFilterSpecies('');
                  setFilterGender('');
                }}
              >
                필터 초기화
              </button>
            </div>
          )}
        </div>
        
        {totalPages > 1 && !loading && (
          <div className="pagination">
            <button 
              className="pagination-btn" 
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <FaChevronLeft />
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
              <button
                key={number}
                className={`pagination-btn ${currentPage === number ? 'active' : ''}`}
                onClick={() => handlePageChange(number)}
              >
                {number}
              </button>
            ))}
            
            <button 
              className="pagination-btn" 
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <FaChevronRight />
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        .animals-list-container {
          padding: 40px 0;
        }
        
        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
        }
        
        .page-header h1 {
          font-size: 2.2rem;
          color: var(--primary-color);
        }
        
        .back-link {
          color: var(--primary-color);
          font-weight: 500;
          transition: color 0.3s;
        }
        
        .back-link:hover {
          color: var(--accent-color);
        }
        
        .search-filter-section {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 30px;
          background-color: var(--light-gray);
          padding: 20px;
          border-radius: 8px;
        }
        
        .search-box {
          flex: 1;
          min-width: 300px;
          position: relative;
        }
        
        .search-icon {
          position: absolute;
          left: 15px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--secondary-color);
        }
        
        .search-box input {
          width: 100%;
          padding: 12px 15px 12px 40px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 1rem;
        }
        
        .filter-section {
          display: flex;
          gap: 15px;
        }
        
        .filter-item {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        
        .filter-item label {
          font-size: 0.9rem;
          color: var(--secondary-color);
        }
        
        .filter-item select {
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
          background-color: white;
          min-width: 120px;
        }
        
        .animals-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 30px;
        }
        
        .animal-card {
          display: block;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s;
          background-color: white;
        }
        
        .animal-card:hover {
          transform: translateY(-5px);
        }
        
        .animal-image {
          height: 200px;
          overflow: hidden;
        }
        
        .animal-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s;
        }
        
        .animal-card:hover .animal-image img {
          transform: scale(1.05);
        }
        
        .animal-info {
          padding: 20px;
        }
        
        .animal-info h2 {
          margin-bottom: 10px;
          color: var(--primary-color);
        }
        
        .animal-meta {
          display: flex;
          gap: 8px;
          color: var(--secondary-color);
          margin-bottom: 15px;
          font-size: 0.9rem;
        }
        
        .animal-description {
          color: var(--text-color);
          line-height: 1.5;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .no-results {
          grid-column: 1 / -1;
          text-align: center;
          padding: 50px 0;
        }
        
        .no-results p {
          margin-bottom: 20px;
          font-size: 1.2rem;
          color: var(--secondary-color);
        }
        
        .pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 40px;
          gap: 10px;
        }
        
        .pagination-btn {
          width: 40px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid var(--light-gray);
          background-color: white;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.3s;
        }
        
        .pagination-btn:hover:not(:disabled) {
          background-color: var(--light-gray);
        }
        
        .pagination-btn.active {
          background-color: var(--primary-color);
          color: white;
          border-color: var(--primary-color);
        }
        
        .pagination-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        @media (max-width: 768px) {
          .search-filter-section {
            flex-direction: column;
          }
          
          .filter-section {
            width: 100%;
            justify-content: space-between;
          }
          
          .animals-grid {
            grid-template-columns: 1fr;
          }
          
          .pagination {
            flex-wrap: wrap;
          }
        }
      `}</style>
    </div>
  );
}
