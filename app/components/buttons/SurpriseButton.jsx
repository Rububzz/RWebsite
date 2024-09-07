import SurpriseModal from "../SurpriseModal";

const { useState } = require("react");

function SurpriseButton() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="bg-indigo-500 p-5 rounded-xl text-4xl"
      >
        Click for Surpriseeeee!
      </button>
      {showModal && <SurpriseModal onClose={() => setShowModal(false)} />}
    </>
  );
}

export default SurpriseButton;
