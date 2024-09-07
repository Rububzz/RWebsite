import CrossButton from "./buttons/CrossButton";
import ReactPlayer from "react-player";

const CatModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-md flex justify-center items-center z-50 w-screen">
      <div className="bg-white rounded-xl px-6 py-4 flex-col gap-5 items-center mx-4 w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 max-h-3/4 overflow-hidden text-black">
        <div className="w-full flex justify-end">
          <CrossButton onClick={onClose} />
        </div>
        <div>
          <h1 className="text-black text-center mb-5 text-3xl font-bold">
            Fine heres a cute cat getting pats :(
          </h1>
        </div>
        <div className="w-full text-center">
          <ReactPlayer url="https://www.youtube.com/watch?v=2UKz8XUsNOg&ab_channel=WaggleTV" />
        </div>
      </div>
    </div>
  );
};

export default CatModal;
