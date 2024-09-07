import Link from "next/link";

function Navigationbar() {
  return (
    <div className="bg-[#F1E0CE] content-center items-center ">
      <ul className="py-4 flex content-center justify-center gap-20 text-2xl text-black">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/gallery">Gallery</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigationbar;
