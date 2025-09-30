"use client";

import Image from "next/image";

interface LoadingProps {
  imageSrc?: string;
}

export default function Loading() {
  return (
    <div className="loading-container">
      <img
        src="/images/cinema.webp"
        alt="Loading"
        width={500}
        // height={500}
        className="loading-image"
      />
      <p className="loading-text">loading</p>

      <style jsx>{`
        .loading-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 20px;
        }

        .loading-image {
          animation: rotate 2s linear infinite;
        }

        .loading-text {
          margin: 0;
          font-size: 16px;
          color: #666;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            sans-serif;
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
