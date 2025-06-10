import { useState } from 'react';

function NoSelector() {
  const [clickedIndex, setClickedIndex] = useState(null);
  const arr = [1, 2, 3, 4, 5]; // Example array

  const handleClick = (index) => {
    setClickedIndex(index === clickedIndex ? null : index);
  };

  return (
    <div className="flex gap-3">
      {arr.map((e, i) => (
        <button
          key={i}
          className={`w-[52px] h-[52px] border border-gray-800 grid place-content-center ${
            clickedIndex === i 
              ? 'bg-gray-900 text-slate-300' 
              : 'bg-slate-200 text-gray-900'
          }`}
          onClick={() => handleClick(i)}
        >
          {e}
        </button>
      ))}
    </div>
  );
}
export default NoSelector;
