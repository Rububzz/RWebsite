import React, { useState } from "react";
import CrossButton from "./buttons/CrossButton";
import ReactPlayer from "react-player";

function MyModal({ onClose }) {
  const [showVideo, setShowVideo] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const handleReady = () => {
    setIsReady(true);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-md flex justify-center items-center z-50 w-screen">
      <div className="bg-white rounded-xl px-6 py-4 flex flex-col gap-5 items-center mx-4 w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 max-h-[90vh] overflow-y-auto text-black">
        <div className="w-full flex justify-end">
          <CrossButton onClick={onClose} />
        </div>
        <div className="w-full text-center">
          <h1 className="text-2xl font-bold mb-4">Yayyyyy u chose meeeeeee</h1>
          {!showVideo && (
            <button
              className="bg-blue-200 hover:bg-blue-300 transition-colors duration-200 rounded-xl px-6 py-3 font-semibold"
              onClick={() => setShowVideo(true)}
            >
              My Surpriseeeeeee
            </button>
          )}
          {showVideo && (
            <div className="relative pt-[56.25%] w-full">
              {!isReady && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                </div>
              )}
              <ReactPlayer
                url="https://youtu.be/rtYKlyspEj8"
                className="absolute top-0 left-0"
                width="100%"
                height="100%"
                controls
                playing
                onReady={handleReady}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyModal;
