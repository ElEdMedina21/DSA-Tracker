import { ArrowPathIcon, FunnelIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid"
import { useState, useEffect } from "react"
import axios from "axios"
import { backendURL } from "../utils/backendUrl"
import RecommendationCard from "./RecommendationCard"

export default function Recommendations(){

    const [recommendations, setRecommendations] = useState([])
    const [currentProblem, setCurrentProblem] = useState(0)

    const getRecommendations = async()=>{
        const {data} = await axios.get(`${backendURL}/recommendations`)
        console.log(data)
        setRecommendations(data)
    }

    const solveProblem = async()=>{
        await axios.patch(`${backendURL}solveProblem`)
    }

    useEffect(()=>{
        getRecommendations()
    }, [])

    return(
        <>
            {/* Header */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
                <p className="text-[#333333] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">
                    Today's Recommendations
                </p>
            </div>

            {/* Recommendation Card */}
            {recommendations.length > 0 ? 
                <RecommendationCard problem={recommendations[currentProblem]}/> :
                <div className="p-4 @container">
                    <div className="flex flex-col items-stretch justify-start rounded-xl shadow-lg bg-background-light dark:bg-[#1c2127] dark:shadow-none">
                        <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-4 p-6 sm:p-8">
                            <div className="flex justify-between items-start gap-4">
                                <h2 className="text-[#333333] dark:text-white text-2xl font-bold leading-tight tracking-[-0.015em]">
                                You are up to date, try solving a new problem!
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {/* Footer Buttons */}
            <div className="flex justify-stretch">
                <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-end">
                    <button className="flex gap-1 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-transparent dark:text-white text-sm font-bold leading-normal tracking-[0.015em] border dark:border-gray-700 dark:hover:bg-gray-700 transition-colors"
                    onClick={()=>setCurrentProblem(prev => (prev-1) % recommendations.length)}>
                        <ChevronLeftIcon className="size-5"/>
                        <span className="truncate">Back</span>
                    </button>
                    <button className="flex gap-1 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-transparent dark:text-white text-sm font-bold leading-normal tracking-[0.015em] border dark:border-gray-700 dark:hover:bg-gray-700 transition-colors"
                    onClick={()=>setCurrentProblem(prev => (prev+1) % recommendations.length)}>
                        <span className="truncate">Next</span>
                        <ChevronRightIcon className="size-5"/>
                    </button>
                </div>
            </div>
        </>
    )
}