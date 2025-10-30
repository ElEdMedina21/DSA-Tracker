import DifficultyTag from "./DifficultyTag"
import { CheckCircleIcon } from "@heroicons/react/24/outline"
import axios from "axios"
import { backendURL } from "../utils/backendUrl"

export default function RecommendationCard({problem, getRecommendations}){

    const solveProblem = async()=>{
        try {
            await axios.patch(`${backendURL}/solveProblem`,
                {
                    problemId : problem.id
                }
            )
            getRecommendations()
        } catch (error) {
            console.error(error)
        }
    }

    return(
    <div className="p-4 @container">
        <div className="flex flex-col items-stretch justify-start rounded-xl shadow-lg bg-background-light dark:bg-[#1c2127] dark:shadow-none">
            <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-4 p-6 sm:p-8">
                <div className="flex justify-between items-start gap-4">
                    <h2 className="text-[#333333] dark:text-white text-2xl font-bold leading-tight tracking-[-0.015em]">
                    {problem.problemName}
                    </h2>
                    <DifficultyTag difficulty={problem.difficulty}/>
                </div>
                <div className="text-[#4A90E2] text-base font-normal leading-relaxed">
                    <span className="text-white">Link: </span>
                    <a className="underline" target="_blank" href={problem.link}>{problem.link}</a>
                </div>
                <div className="flex items-center justify-between mt-3">
                    <div className="flex gap-4">
                        <span className="text-white text-base font-normal leading-relaxed">Topics: </span>
                        {problem.topics.map((topic, index)=>(
                            <span key={index} className="text-[#4A90E2] text-base font-normal leading-relaxed">
                                {topic}
                            </span>
                        ))}
                    </div>
                    <button className="flex gap-1 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center 
                    overflow-hidden rounded-lg py-2 px-3 bg-[#4A90E2] text-white text-sm font-bold leading-normal 
                    tracking-[0.015em] hover:bg-[#4A90E2]/90 transition-colors"
                    onClick={()=>solveProblem()}>
                        <span className="truncate">Mark as solved</span>
                        <CheckCircleIcon className="size-5"/>
                    </button>
                </div>
            </div>
        </div>
    </div>)
}