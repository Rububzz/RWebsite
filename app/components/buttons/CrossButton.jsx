const CrossButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="pl-2 pt-20 text-gray-700 hover:text-red-400 focus:outline-none"
      aria-label="Close"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" height="24" width="24">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
      </svg>
    </button>
  );
};

export default CrossButton;
