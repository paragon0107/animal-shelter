import Head from 'next/head';
import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export default function AdoptForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    animalInterest: '',
    experience: '',
    livingCondition: '',
    familyMembers: '',
    workHours: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // 여기서 폼 데이터를 서버로 전송하는 로직이 들어갈 수 있습니다.
    console.log(formData);
    setSubmitted(true);
  };
  
  if (submitted) {
    return (
      <div className="container">
        <div className="success-message">
          <h1>입양 신청이 완료되었습니다!</h1>
          <p>신청해주셔서 감사합니다. 담당자가 검토 후 빠른 시일 내에 연락드리겠습니다.</p>
          <Link href="/" className="primary-btn">홈으로 돌아가기</Link>
        </div>
        
        <style jsx>{`
          .success-message {
            text-align: center;
            padding: 100px 0;
          }
          
          .success-message h1 {
            margin-bottom: 20px;
            color: var(--primary-color);
          }
          
          .success-message p {
            margin-bottom: 30px;
            font-size: 1.1rem;
            color: var(--secondary-color);
          }
        `}</style>
      </div>
    );
  }

  return (
    <div>
      <Head>
        <title>입양 신청 - 유기동물 홍보 사이트</title>
        <meta name="description" content="유기동물 입양을 신청하세요. 새로운 가족이 되어주세요." />
      </Head>

      <div className="container adopt-container">
        <div className="back-button">
          <Link href="/" className="back-link"><FaArrowLeft /> 홈으로 돌아가기</Link>
        </div>
        
        <div className="adopt-header">
          <h1>입양 신청</h1>
          <p>아래 양식을 작성하여 입양 신청을 진행해주세요. 입양 절차와 자격 요건에 대한 검토 후 연락드리겠습니다.</p>
        </div>
        
        <form className="adopt-form" onSubmit={handleSubmit}>
          <div className="form-section">
            <h2>개인 정보</h2>
            
            <div className="form-group">
              <label htmlFor="name">이름 <span className="required">*</span></label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">이메일 <span className="required">*</span></label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">전화번호 <span className="required">*</span></label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  required 
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="address">주소 <span className="required">*</span></label>
              <input 
                type="text" 
                id="address" 
                name="address" 
                value={formData.address} 
                onChange={handleChange} 
                required 
              />
            </div>
          </div>
          
          <div className="form-section">
            <h2>입양 정보</h2>
            
            <div className="form-group">
              <label htmlFor="animalInterest">관심 있는 동물 <span className="required">*</span></label>
              <select 
                id="animalInterest" 
                name="animalInterest" 
                value={formData.animalInterest} 
                onChange={handleChange} 
                required
              >
                <option value="">선택해주세요</option>
                <option value="해피 (진돗개, 3살, 수컷)">해피 (진돗개, 3살, 수컷)</option>
                <option value="럭키 (믹스견, 2살, 암컷)">럭키 (믹스견, 2살, 암컷)</option>
                <option value="초코 (믹스견, 1살, 수컷)">초코 (믹스견, 1살, 수컷)</option>
                <option value="별이 (시바견, 5살, 암컷)">별이 (시바견, 5살, 암컷)</option>
                <option value="기타">기타 (메시지에 상세 내용 기재)</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="experience">반려동물 경험 <span className="required">*</span></label>
              <select 
                id="experience" 
                name="experience" 
                value={formData.experience} 
                onChange={handleChange} 
                required
              >
                <option value="">선택해주세요</option>
                <option value="없음">없음</option>
                <option value="1년 미만">1년 미만</option>
                <option value="1-3년">1-3년</option>
                <option value="3-5년">3-5년</option>
                <option value="5년 이상">5년 이상</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="livingCondition">주거 환경 <span className="required">*</span></label>
              <select 
                id="livingCondition" 
                name="livingCondition" 
                value={formData.livingCondition} 
                onChange={handleChange} 
                required
              >
                <option value="">선택해주세요</option>
                <option value="아파트">아파트</option>
                <option value="단독주택">단독주택</option>
                <option value="빌라/연립">빌라/연립</option>
                <option value="기타">기타</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="familyMembers">가족 구성원 <span className="required">*</span></label>
              <input 
                type="text" 
                id="familyMembers" 
                name="familyMembers" 
                placeholder="예: 성인 2명, 아이 1명(10세)" 
                value={formData.familyMembers} 
                onChange={handleChange} 
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="workHours">평균 근무 시간 <span className="required">*</span></label>
              <input 
                type="text" 
                id="workHours" 
                name="workHours" 
                placeholder="예: 주 5일, 하루 8시간" 
                value={formData.workHours} 
                onChange={handleChange} 
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">추가 메시지</label>
              <textarea 
                id="message" 
                name="message" 
                rows={5} 
                placeholder="입양하고자 하는 이유나 추가 정보를 자유롭게 작성해주세요." 
                value={formData.message} 
                onChange={handleChange} 
              ></textarea>
            </div>
          </div>
          
          <div className="form-notice">
            <p><span className="required">*</span> 표시는 필수 입력 항목입니다.</p>
            <p>제출된 정보는 입양 자격 심사에만 사용되며, 개인정보 보호정책에 따라 안전하게 관리됩니다.</p>
          </div>
          
          <div className="form-actions">
            <button type="submit" className="primary-btn">입양 신청하기</button>
          </div>
        </form>
      </div>

      <style jsx>{`
        .adopt-container {
          padding: 40px 0;
          max-width: 800px;
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
        
        .adopt-header {
          margin-bottom: 40px;
          text-align: center;
        }
        
        .adopt-header h1 {
          font-size: 2.2rem;
          margin-bottom: 15px;
          color: var(--primary-color);
        }
        
        .adopt-header p {
          font-size: 1.1rem;
          color: var(--secondary-color);
          max-width: 700px;
          margin: 0 auto;
        }
        
        .adopt-form {
          background-color: var(--light-gray);
          border-radius: 8px;
          padding: 30px;
        }
        
        .form-section {
          margin-bottom: 40px;
        }
        
        .form-section h2 {
          font-size: 1.5rem;
          margin-bottom: 20px;
          color: var(--primary-color);
          border-bottom: 1px solid #ddd;
          padding-bottom: 10px;
        }
        
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
        }
        
        .required {
          color: #e74c3c;
        }
        
        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 12px 15px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 1rem;
          background-color: white;
        }
        
        .form-group textarea {
          resize: vertical;
        }
        
        .form-notice {
          margin-bottom: 30px;
          font-size: 0.9rem;
          color: var(--secondary-color);
        }
        
        .form-notice p {
          margin-bottom: 5px;
        }
        
        .form-actions {
          text-align: center;
        }
        
        .form-actions button {
          padding: 12px 30px;
          font-size: 1.1rem;
        }
        
        @media (max-width: 768px) {
          .form-row {
            grid-template-columns: 1fr;
            gap: 0;
          }
          
          .adopt-form {
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
}
