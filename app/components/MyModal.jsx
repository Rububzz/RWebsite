import CrossButton from "./buttons/CrossButton";
import Video from "next-video";
import video from "https://amnvkdxifafbkapnmaix.supabase.co/storage/v1/object/public/Video/BirthdayVideo.mp4?t=2024-09-07T08%3A34%3A31.695Z";
import { useState } from "react";
import { useEffect } from "react";

function MyModal({ onClose }) {
  const [showVideo, setshowVideo] = useState(false);

  useEffect(() => {
    if (showVideo) {
      // Ensure video is loaded or synced if necessary
      // This could be where `next-video sync` logic is triggered, if needed.
    }
  }, [showVideo]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-md flex justify-center items-center z-50 w-screen">
      <div className="bg-white rounded-xl px-6 py-4 flex-col gap-5 items-center mx-4 w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 max-h-3/4 overflow-hidden text-black">
        <div className="w-full flex justify-end">
          <CrossButton onClick={onClose} />
        </div>
        <div className="w-full text-center">
          <h1>Yayyyyy u chose meeeeeee</h1>
          <button
            className="bg-blue-200 rounded-xl px-4 py-3"
            onClick={() => setshowVideo(true)}
          >
            My Surpiseeeeeee
          </button>
          {showVideo && <Video src={video} />}
        </div>
      </div>
    </div>
  );
}

export default MyModal;
