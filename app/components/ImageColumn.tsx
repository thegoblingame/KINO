"use client";

interface ImageColumnProps {
  images: string[];
}

export default function ImageColumn({ images }: ImageColumnProps) {
  return (
    <div className="image-column">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Image ${index + 1}`}
          className="image-item"
        />
      ))}
      
      <style jsx>{`
        .image-column {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 8px;
          width: 100%;
          max-width: 100vw;
        }

        .image-item {
          width: 100%;
          height: auto;
          border-radius: 4px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          object-fit: cover;
          transition: transform 0.2s ease-in-out;
        }

        .image-item:hover {
          transform: scale(1.02);
        }

        /* Small mobile devices */
        @media (max-width: 480px) {
          .image-column {
            gap: 8px;
            padding: 4px;
          }

          .image-item {
            border-radius: 2px;
            box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
          }
        }

        /* Tablet styles */
        @media (min-width: 768px) {
          .image-column {
            gap: 20px;
            padding: 16px;
            max-width: 800px;
            margin: 0 auto;
          }

          .image-item {
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          }
        }

        /* Desktop styles */
        @media (min-width: 1024px) {
          .image-column {
            gap: 24px;
            padding: 24px;
            max-width: 1000px;
          }

          .image-item {
            border-radius: 12px;
            box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
          }
        }

        /* Large desktop styles */
        @media (min-width: 1440px) {
          .image-column {
            gap: 32px;
            padding: 32px;
            max-width: 1200px;
          }
        }
      `}</style>
    </div>
  );
}