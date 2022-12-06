export default function Button({ buttonClass, buttonText, buttonType }) {
  return (
    <div>
      <button
        type={`${buttonType}`}
        className={`${buttonClass} hover:-translate-y-1 hover:border-white hover:text-white px-3 py-2 rounded-full text-base lg:text-lg font-bold hover:bg-indigo-500 text-indigo-800`}
      >
        {buttonText}
      </button>
    </div>
  );
}
