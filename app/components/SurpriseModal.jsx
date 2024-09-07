import { useState } from "react";
import CrossButton from "./buttons/CrossButton";
import MyModal from "./MyModal";
import AYSModal from "./AYSModal";
import Image from "next/image";
import cat1 from "/images/Cat1.jpg";
import vsCat1 from "/images/vsCat1.jpg";

function SurpriseModal({ onClose }) {
  const [showRubinModal, setShowRubinModal] = useState(false);
  const [secondStageCatModal, setSecondStageCatModal] = useState(false);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-md flex justify-center items-center z-50 w-screen">
      <Image src={vsCat1} width={400} height={400} alt="cat photo" />
      <div className="bg-white rounded-xl px-6 py-4 mx-4 w-11/12 sm:w-10/13 md:w-8/12 lg:w-6/12 max-h-3/4 overflow-hidden text-black">
        <div className="absolute top-4 right-4">
          <CrossButton onClick={onClose} />
        </div>
        <div className="text-center mb-6">
          <h1 className="text-xl font-bold">Choose your surprise!</h1>
        </div>
        <div className="flex">
          <div className="w-1/2 bg-purple-400 flex justify-center items-center p-4">
            <button
              className="bg-white text-purple-400 px-4 py-3 rounded"
              onClick={() => setShowRubinModal(true)}
            >
              Rubin
            </button>
            {showRubinModal && (
              <MyModal onClose={() => setShowRubinModal(false)} />
            )}
          </div>
          <div className="w-1/2 bg-pink-600 flex justify-center items-center p-4">
            <button
              className="bg-white text-pink-600 px-4 py-3 rounded"
              onClick={() => setSecondStageCatModal(true)}
            >
              Cat
            </button>
            {secondStageCatModal && (
              <AYSModal onClose={() => setSecondStageCatModal(false)} />
            )}
          </div>
        </div>
      </div>
      <Image src={cat1} width={400} height={400} alt="cat photo" />
    </div>
  );
}

export default SurpriseModal;