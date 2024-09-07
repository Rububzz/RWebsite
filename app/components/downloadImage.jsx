import { saveAs } from "file-saver";

function DownloadImage({ imageUrl, imageName }) {
  const downloadImage = () => {
    fetch(imageUrl)
      .then((response) => response.blob())
      .then((blob) => {
        saveAs(blob, imageName);
      })
      .catch((error) => console.log("error downloading images"));
  };

  return (
    <div className="items-center flex justify-center mt-4">
      <button
        className="px-4 py-3 bg-sky-400 rounded-xl"
        onClick={downloadImage}
      >
        Download {imageName}
      </button>
    </div>
  );
}

export default DownloadImage;
