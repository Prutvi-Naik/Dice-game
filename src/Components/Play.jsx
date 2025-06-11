import RoleDice from "./RoleDice";
import Score from "./Score";
import NoSelector from "./NoSelector";
import { useState } from "react";
import ShowRules from "./ShowRules";
const Play = () => {
  const [score, setScore] = useState(0);
  const [clickedIndex, setClickedIndex] = useState();
  const [diceNumber, setDiceNumber] = useState(6);
  const [error, setError] = useState("");
  const [showRule,setShowRule] = useState(false);

  const numGenerator = () => {
    if (clickedIndex == null) {
      setError("You have not selected number");
      return error;
    }

    const num = Math.floor(Math.random() * 6) + 1;
    setDiceNumber(num);
    if (clickedIndex !== null && clickedIndex + 1 === diceNumber) {
      setScore((prev) => prev + diceNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setClickedIndex(undefined);
  };

  const handleClick = (index) => {
    setClickedIndex(index === clickedIndex ? null : index);
    setError("");
  };

  return (
    <div>
      <div className="flex items-center justify-around">
        <Score score={score} />
        <NoSelector
          clickedIndex={clickedIndex}
          setClickedIndex={setClickedIndex}
          handleClick={handleClick}
          error={error}
        />
      </div>
      <RoleDice
        diceNumber={diceNumber}
        setDiceNumber={setDiceNumber}
        numGenerator={numGenerator}
      />
      <div className="flex flex-col gap-2 items-center mt-8 ">
        <button
        onClick={()=>(setScore(0))}
         className="py-[10px] w-40 px-[18px] bg-slate-300 text-gray-800 rounded-sm border-1 border-black  text-center hover:text-slate-200 hover:bg-gray-900 hover:cursor-pointer">
          Reset Score
        </button>
        <button 
        onClick={()=>setShowRule(!showRule)}
        className="py-[10px] w-40 px-[18px] bg-gray-950 text-white rounded-sm border-1 border-black  text-center hover:text-gray-900 hover:bg-slate-200 hover:cursor-pointer">
          Show rules
        </button>
         {showRule &&  <ShowRules />}
      </div>
      <div >
      
      </div>
    </div>
  );
};

export default Play;
