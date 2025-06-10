
function NoSelector({handleClick,clickedIndex}) {
  const arr = [1, 2, 3, 4, 5,6];
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
