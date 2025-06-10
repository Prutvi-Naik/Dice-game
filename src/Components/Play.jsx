import RoleDice from "./RoleDice";
import Score from "./Score";
import NoSelector from "./NoSelector";
import { useState } from "react";
const Play = () => {
  const [score, setScore] = useState(0);
  const [clickedIndex, setClickedIndex] = useState();
  const [diceNumber, setDiceNumber] = useState(6);

  
  const numGenerator = () => {
     if(!clickedIndex) return;
    const num = Math.floor(Math.random() * 6) + 1;
    setDiceNumber(num);
    if (clickedIndex !== null && clickedIndex + 1 === diceNumber) {
      setScore((prev) => prev + 1);
    } else {
      setScore((prev) => prev - 1);
    }
    setClickedIndex(undefined);
  };

  const handleClick = (index) => {
   
    setClickedIndex(index === clickedIndex ? null : index);
      
  };

  return ( 
  
    <div>
      <div className="flex items-center justify-around">
        <Score score={score} />
        <NoSelector
          clickedIndex={clickedIndex}
          setClickedIndex={setClickedIndex}
          handleClick={handleClick}
        />
      </div>
      <RoleDice
        diceNumber={diceNumber}
        setDiceNumber={setDiceNumber}
        numGenerator={numGenerator}
      />
    </div>
  );
};

export default Play;
