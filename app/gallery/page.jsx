"use client";
import Image from "next/image";
import image1 from "/images/1.jpg";
import image2 from "/images/2.jpg";
import Navigationbar from "../components/navigation";
import RandomPicButton from "../components/buttons/RandomPicButton";
import image3 from "/images/3.jpeg";
import image4 from "/images/4.jpeg";
import image5 from "/images/5.jpeg";

function Gallery() {
  return (
    <div className="bg-cover bg-center bg-[url('CatWallpaper.webp')]">
      <Navigationbar />
      <div className="text-center min-h-max">
        <h1 className="text-3xl text-black">Your possible gacha pulls</h1>
      </div>
      <ul className="flex flex-wrap justify-center">
        <li className="w-max p-3">
          <div className="border-2">
            <Image src={image1} width={200} height={200} alt="photo 1" />
          </div>
        </li>
        <li className="w-max p-3">
          <div className="border-2">
            <Image src={image2} width={200} height={200} alt="photo 2" />
          </div>
        </li>
        <li className="w-max p-3">
          <div className="border-2">
            <Image src={image3} width={200} height={200} alt="photo 3" />
          </div>
        </li>
        <li className="w-max p-3">
          <div className="border-2">
            <Image src={image4} width={200} height={200} alt="photo 4" />
          </div>
        </li>
        <li className="w-max p-3">
          <div className="border-2">
            <Image src={image5} width={200} height={200} alt="photo 5" />
          </div>
        </li>
      </ul>
      <div className="flex items-center justify-center">
        <RandomPicButton />
      </div>
    </div>
  );
}

export default Gallery;