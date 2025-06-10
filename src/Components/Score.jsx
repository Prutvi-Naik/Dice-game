const Score = ({score}) =>{
    return(
        <div className="flex flex-col w-[200px] items-center justify-center">
            <span className="font-[500] text-[100px] mb-[-14px] pb-0">{score}</span>
            <span className="font-[500] text-[24px]">Total Score</span>
        </div>
    )
}

export default Score;