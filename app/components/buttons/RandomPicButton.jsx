import { useState } from "react";
import Image from "next/image";
import i1 from "/images/1.jpg";
import i2 from "/images/2.jpg";
import i3 from "/images/3.jpeg";
import i4 from "/images/4.jpeg";
import i5 from "/images/5.jpeg";
import i6 from "/images/6.jpg";
import i7 from "/images/7.jpg";
import i8 from "/images/8.jpg";
import i9 from "/images/9.jpg";
import i10 from "/images/10.jpg";
import i11 from "/images/11.jpg";

import DownloadImage from "../downloadImage";

function RandomPicButton() {
  const [num, setNum] = useState(0);
  const images = [i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11];
  const downloadUrls = [
    "https://amnvkdxifafbkapnmaix.supabase.co/storage/v1/object/public/images/i1.jpg",
    "https://amnvkdxifafbkapnmaix.supabase.co/storage/v1/object/public/images/2.jpg",
    "https://amnvkdxifafbkapnmaix.supabase.co/storage/v1/object/public/images/3.jpg",
    "https://amnvkdxifafbkapnmaix.supabase.co/storage/v1/object/public/images/4.jpeg?t=2024-08-03T06%3A53%3A24.738Z",
    "https://amnvkdxifafbkapnmaix.supabase.co/storage/v1/object/public/images/5.jpeg",
    "https://amnvkdxifafbkapnmaix.supabase.co/storage/v1/object/public/images/6.jpg",
    "https://amnvkdxifafbkapnmaix.supabase.co/storage/v1/object/public/images/7.jpg",
    "https://amnvkdxifafbkapnmaix.supabase.co/storage/v1/object/public/images/8.jpg",
    "https://amnvkdxifafbkapnmaix.supabase.co/storage/v1/object/public/images/9.jpg",
    "https://amnvkdxifafbkapnmaix.supabase.co/storage/v1/object/public/images/10.jpg",
    "https://amnvkdxifafbkapnmaix.supabase.co/storage/v1/object/public/images/11.jpg",
  ];

  const randNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleClick = () => {
    setNum(randNum(1, images.length));
  };

  return (
    <div>
      <div className="text-black items-center">
        <button
          className="py-5 px-4 bg-blue-200 rounded-xl mb-4 mt-4 hover:bg-blue-300 text-2xl"
          onClick={handleClick}
        >
          Gacha!!!
        </button>
      </div>
      {num > 0 && (
        <div>
          <Image
            src={images[num - 1]}
            height={400}
            width={400}
            alt={`Random Image ${num}`}
          />
          <DownloadImage
            className="mt-3"
            imageUrl={downloadUrls[num - 1]}
            imageName="image.jpg"
          />
        </div>
      )}
    </div>
  );
}

export default RandomPicButton;
