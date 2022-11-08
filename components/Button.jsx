export default function Button({ buttonClass, buttonText, buttonType }) {
  return (
    <div>
      <button
        type={`${buttonType}`}
        className={`${buttonClass} hover:-translate-y-1 hover:bg-indigo-500 hover:text-white px-3 py-2 rounded-md text-lg font-bold`}
      >
        {buttonText}
      </button>
    </div>
  );
}
