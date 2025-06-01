import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

interface ImageGalleryProps {
  images: string[];
  alt: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, alt }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const openLightbox = () => {
    setShowLightbox(true);
  };

  const closeLightbox = () => {
    setShowLightbox(false);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'Escape') closeLightbox();
  };

  return (
    <div className="gallery-container">
      <div className="main-image" onClick={openLightbox}>
        <img src={images[currentIndex]} alt={alt} />
        {images.length > 1 && (
          <div className="image-counter">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {images.length > 1 && (
        <div className="thumbnails">
          {images.map((image, index) => (
            <div 
              key={index} 
              className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            >
              <img src={image} alt={`${alt} thumbnail ${index + 1}`} />
            </div>
          ))}
        </div>
      )}

      {images.length > 1 && (
        <div className="gallery-controls">
          <button className="gallery-control prev" onClick={prevImage} aria-label="Previous image">
            <FaChevronLeft />
          </button>
          <button className="gallery-control next" onClick={nextImage} aria-label="Next image">
            <FaChevronRight />
          </button>
        </div>
      )}

      {showLightbox && (
        <div 
          className="lightbox" 
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-lightbox" onClick={closeLightbox}>
              <FaTimes />
            </button>
            <img src={images[currentIndex]} alt={alt} />
            
            {images.length > 1 && (
              <>
                <button className="lightbox-control prev" onClick={prevImage}>
                  <FaChevronLeft />
                </button>
                <button className="lightbox-control next" onClick={nextImage}>
                  <FaChevronRight />
                </button>
                <div className="lightbox-counter">
                  {currentIndex + 1} / {images.length}
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <style jsx>{`
        .gallery-container {
          position: relative;
          margin-bottom: 20px;
          border-radius: 8px;
          overflow: hidden;
        }
        
        .main-image {
          position: relative;
          cursor: pointer;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        .main-image img {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.3s ease;
        }
        
        .main-image:hover img {
          transform: scale(1.02);
        }
        
        .image-counter {
          position: absolute;
          bottom: 10px;
          right: 10px;
          background-color: rgba(0, 0, 0, 0.6);
          color: white;
          padding: 5px 10px;
          border-radius: 15px;
          font-size: 0.8rem;
        }
        
        .thumbnails {
          display: flex;
          gap: 10px;
          margin-top: 10px;
          overflow-x: auto;
          padding-bottom: 5px;
        }
        
        .thumbnail {
          width: 70px;
          height: 70px;
          border-radius: 5px;
          overflow: hidden;
          cursor: pointer;
          opacity: 0.7;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }
        
        .thumbnail:hover {
          opacity: 0.9;
        }
        
        .thumbnail.active {
          opacity: 1;
          border: 2px solid var(--primary-color);
        }
        
        .thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .gallery-controls {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          transform: translateY(-50%);
          display: flex;
          justify-content: space-between;
          pointer-events: none;
        }
        
        .gallery-control {
          background-color: rgba(255, 255, 255, 0.8);
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          pointer-events: auto;
          transition: all 0.3s ease;
          color: var(--primary-color);
        }
        
        .gallery-control:hover {
          background-color: white;
          transform: scale(1.1);
        }
        
        .gallery-control.prev {
          margin-left: 10px;
        }
        
        .gallery-control.next {
          margin-right: 10px;
        }
        
        .lightbox {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.9);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        
        .lightbox-content {
          position: relative;
          max-width: 90%;
          max-height: 90%;
        }
        
        .lightbox-content img {
          max-width: 100%;
          max-height: 90vh;
          display: block;
          margin: 0 auto;
        }
        
        .close-lightbox {
          position: absolute;
          top: -40px;
          right: 0;
          background: transparent;
          border: none;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
          z-index: 1001;
        }
        
        .lightbox-control {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: rgba(255, 255, 255, 0.2);
          border: none;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: white;
          transition: background-color 0.3s;
        }
        
        .lightbox-control:hover {
          background-color: rgba(255, 255, 255, 0.4);
        }
        
        .lightbox-control.prev {
          left: -70px;
        }
        
        .lightbox-control.next {
          right: -70px;
        }
        
        .lightbox-counter {
          position: absolute;
          bottom: -30px;
          left: 50%;
          transform: translateX(-50%);
          color: white;
          font-size: 0.9rem;
        }
        
        @media (max-width: 768px) {
          .lightbox-control {
            width: 40px;
            height: 40px;
          }
          
          .lightbox-control.prev {
            left: -50px;
          }
          
          .lightbox-control.next {
            right: -50px;
          }
        }
        
        @media (max-width: 480px) {
          .lightbox-control.prev {
            left: 10px;
          }
          
          .lightbox-control.next {
            right: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default ImageGallery;
