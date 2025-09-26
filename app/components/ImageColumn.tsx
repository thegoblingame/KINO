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
          gap: 16px;
          padding: 16px;
          width: 100%;
          max-width: 100vw;
        }
        
        .image-item {
          width: 100%;
          height: auto;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          object-fit: cover;
        }
      `}</style>
    </div>
  );
}