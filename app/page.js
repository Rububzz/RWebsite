'use client'
import { useRouter } from "next/navigation"
import Navigationbar from "./components/navigation";
import HomePage from "./components/homepage";

function Home() {
  
  const router = useRouter();


  return (
    <div>  
      <div>
    <Navigationbar/>
    </div>
    <div className="h-80 ">
    <HomePage/>
    </div>
    </div>
  )
}

export default Home