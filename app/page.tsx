"use client";

import { useState } from "react";
import { useFetchData } from "./hooks/useFetchData";
import Loading from "./components/Loading";
import ImageColumn from "./components/ImageColumn";

export default function Home() {
  const [imageCount, setImageCount] = useState<any>(50);

  const url = `https://kino-worker.gnb225.workers.dev/images?count=${imageCount}`;

  const { data = [], loading, error } = useFetchData(url);

  const imageUrls = (data ?? []).map((item: any) => {
    return item.url;
  });

  return (
    <>
      <main className="main-container">
        {loading ? <Loading /> : <ImageColumn images={imageUrls} />}
      </main>

      <style jsx>{`
        .main-container {
          min-height: 100vh;
          width: 100%;
          padding: 0;
          margin: 0;
          background-color: #f8f9fa;

          /* Mobile-first base styles */
          font-size: 16px;
          line-height: 1.5;
        }

        /* Small mobile devices */
        @media (max-width: 480px) {
          .main-container {
            padding: 8px;
            font-size: 14px;
          }
        }

        /* Tablet styles */
        @media (min-width: 768px) {
          .main-container {
            padding: 24px;
            max-width: 1200px;
            margin: 0 auto;
          }
        }

        /* Desktop styles */
        @media (min-width: 1024px) {
          .main-container {
            padding: 32px;
          }
        }

        /* Large desktop styles */
        @media (min-width: 1440px) {
          .main-container {
            padding: 48px;
          }
        }
      `}</style>
    </>
  );
}
