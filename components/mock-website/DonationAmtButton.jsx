import { useState, useEffect } from 'react';

export default function DonationAmtButton({
  buttonType,
  buttonValue,
  handleSetAmt,
}) {
  const [whichButton, setWhichButton] = useState('');
  const leftButton = 'rounded-l-md';
  const middleButton = '-ml-px';
  const rightButton = '-ml-px rounded-r-md';

  useEffect(() => {
    getButton();
  }, [setWhichButton]);

  const getButton = () => {
    if (buttonValue === '100') {
      setWhichButton(leftButton);
    } else if (buttonValue === '200') {
      setWhichButton(middleButton);
    } else if (buttonValue === '300') {
      setWhichButton(rightButton);
    }
  };

  return (
    <button
      type={buttonType}
      value={buttonValue}
      className={`${whichButton} w-full justify-center relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-indigo-500 hover:border-none hover:text-white hover:font-bold`}
      onClick={handleSetAmt}
    >
      ${buttonValue}
    </button>
  );
}
