

const RoleDice= ({diceNumber ,numGenerator})=>{
    return(
        <div className="flex flex-col items-center text-[20px] cursor-pointer">
           <img onClick={numGenerator} className="w-44" src={"https://raw.githubusercontent.com/anshuopinion/React-10-Projects/refs/heads/project-3/project-3/public/images/dice/dice_"+diceNumber+".png" } alt="" />
           <p>Click on Dice to Roll</p>
        </div>
    )
}

export default RoleDice;