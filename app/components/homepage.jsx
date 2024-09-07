import { useRouter } from "next/navigation";
import SurpriseButton from "./buttons/SurpriseButton";

function HomePage() {
  const router = useRouter();
  return (
    <>
      <div className="h-lvh bg-[url('CatWallpaper.webp')] bg-cover bg-center">
        <div className="w-screen flex justify-center items-center">
          <h1 className="text-center pt-10 text-4xl text-black">
            HAPPY 25th BIRTHDAYYY MY BABBUUUUUUUUUU
          </h1>
        </div>
        <div className="flex justify-center items-center pt-52">
          <SurpriseButton />
        </div>
      </div>
      <div className="w-screen bg-[#DEC4B3]">
        <button
          className="bg-[#DEC4B3] text-[#DEC4B3] hover:bg-black p-3"
          onClick={() => router.push("/message")}
        >
          Message for my Babuuuuu
        </button>
      </div>
    </>
  );
}

export default HomePage;
