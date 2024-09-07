// components/CatButton.js
import React, { useState } from "react";
import CatModal from "../CatModal";

const CatButton = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="bg-indigo-500 p-5 rounded-xl"
        onClick={() => setShowModal(true)}
      >
        Cat?
      </button>
      {showModal && <CatModal onClose={() => setShowModal(false)} />}
    </>
  );
};

export default CatButton;
