import NoSelector from "./NoSelector";
import Score from "./Score";

const  PlayHeader = () =>{
    return(
        <div className="flex items-center justify-around">
            <Score />
            <NoSelector className />
        </div>
    )
} 

export default PlayHeader;