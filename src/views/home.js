import React, {useEffect , useState} from "react";
import toast, {Toaster} from "react-hot-toast";
import ScoreCard from "./../components/scorecard";

export function Home(){
    const [scoreA , setScoreA] = useState(0);
    const [scoreB, setScoreB] = useState(0);
    const [winner , setWinner] =useState(null);
    const Max_score = 5;

    useEffect(() => {
        if(scoreA < Max_score && scoreB < Max_score){
            return;
        }
        if(scoreA === Max_score){
            setWinner("Team A");
            toast.success("Team A wins!!!");
        }
        if(scoreB === Max_score){
            setWinner("Team B");
            toast.success("Team B wins!!!");
        }
    }, [scoreA , scoreB]);

    return(
        <div className="bg-blue-300 min-h-screen p-10">
           <h1 className="text-center text-3xl md:text-5xl py-4 md:py-10 border-2 border-blue-500 border-dashed rounded-md text-blue-500 bg-yellow-300">WinCounter</h1>

           <div className="flex flex-col md:flex-row justify-center md:justify-around md:mt-10">
            <ScoreCard 
            score={scoreA}
            teamName = "Team A"
            increaseScore={()=>{
                if(winner) return;
                setScoreA(scoreA + 1);
            }}
            decreaseScore={()=>{
                if(winner) return;
                setScoreA(scoreA - 1);
            }}
            isWinner={winner === "Team A"}
            />
            <ScoreCard 
            score={scoreB}
            teamName = "Team B"
            increaseScore={()=>{
                if(winner) return;
                setScoreB(scoreB + 1);
            }}
            decreaseScore={()=>{
                if(winner) return;
                setScoreB(scoreB - 1);
            }}
            isWinner={winner === "Team B"}
            />

           </div>

           <div className="flex justify-center mt-4 md:mt-10">
             <button className="bg-yellow-300 px-10 py-3 text-2xl md:text-5xl text-blue-500 rounded-lg shadow-lg"
             onClick={() =>{
                setScoreA(0);
                setScoreB(0);
                setWinner(null);
             }}>
               Reset
             </button>
           </div>

           <Toaster/>
        </div>
    );
}
