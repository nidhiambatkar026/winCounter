import React from "react";
import{CircleMinus ,CirclePlus} from "lucide-react";

function ScoreCard({score , increaseScore, decreaseScore, teamName, isWinner}){
    return(
        <div className="bg-yellow-300 m-5 w-auto md:w-1/3 rounded-lg shadow-lg">
            <h2 className="text-3xl text-center my-4 border-b-2 pb-4 text-blue-500">
               {teamName}{isWinner? "🍷": ""}
            </h2>

            <h3 className="text-5xl md:text-8xl text-center text-blue-500">
               {score}
            </h3>

            <div className="flex justify-around mb-5 mt-4 md:mt-12">
                <CircleMinus
                   color = "#000"
                   size = {60}
                   onClick ={decreaseScore}/>

                <CirclePlus 
                color="#000" 
                size={60} 
                onClick={increaseScore}/>

            </div>
        </div>
    );
}

export default ScoreCard;