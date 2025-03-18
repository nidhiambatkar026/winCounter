import React, {useEffect , useState} from "react";
import ScoreCard from "./../components/scorecard";

export function Home(){
    const [scoreA , setScoreA] = useState(0);
    const [scoreB, setScoreB] = useState(0);

    useEffect(() => {
        if(scoreA < 10 && scoreB < 10){
            return;
        }
        if(scoreA === 10){
            alert("Team A wins!!!");
        }
        if(scoreB === 10){
            alert("Team B wins!!!");
        }
    }, [scoreA , scoreB]);

    return(
        <div className="bg-blue-100 min-h-screen p-10">
           <h1 className="text-center text-3xl md:text-5xl py-4 md:py-10 border-2 border-blue-500 border-dashed rounded-md text-blue-500 bg-white">WinCounter</h1>

           <div className="flex flex-col md:flex-row justify-center md:justify-around md:mt-10">
            <ScoreCard 
            score={scoreA}
            teamName = "Team A"
            increaseScore={()=>{
                setScoreA(scoreA + 1);
            }}
            decreaseScore={()=>{
                setScoreA(scoreA - 1);
            }}
            />
            <ScoreCard 
            score={scoreB}
            teamName = "Team B"
            increaseScore={()=>{
                setScoreB(scoreB + 1);
            }}
            decreaseScore={()=>{
                setScoreB(scoreB - 1);
            }}/>

           </div>

           <div className="flex justify-center mt-10">
             <button className="bg-blue-500 px-10 py-3 text-5xl text-white rounded-lg shadow-lg"
             onClick={() =>{
                setScoreA(0);
                setScoreB(0);
             }}>
               Reset
             </button>
           </div>
        </div>
    );
}
