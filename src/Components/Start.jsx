import { useState } from "react";
import Play from "./Play"
function Start() {
    const [isStart,setIsStart] = useState(false)
    const startGame = () =>{
        setIsStart(!isStart)
    }
    
 if(isStart == false)
  return (
      <div className="flex items-center mt-10">
      <div>
        <img
          className=""
          src="https://raw.githubusercontent.com/anshuopinion/React-10-Projects/refs/heads/project-3/project-3/public/images/dices.png"
          alt=""
        />
      </div>
      <div>
        <h1 className="font-[700] text-[96px]">DICE GAME</h1>
        <button  onClick={() =>startGame(isStart)}
        className="py-[10px] px-[18px] bg-gray-950 text-white rounded-sm border-transparent absolute right-26 text-center hover:text-gray-900 hover:bg-slate-200 hover:cursor-pointer">Play Now</button>
      </div>
    </div>
  );

  return <Play />
}



export default Start;
