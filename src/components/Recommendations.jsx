import { ArrowPathIcon, FunnelIcon } from "@heroicons/react/16/solid"
import { useState, useEffect } from "react"
import axios from "axios"
import { backendURL } from "../utils/backendUrl"
import RecommendationCard from "./RecommendationCard"

export default function Recommendations(){

    const [recommendations, setRecommendations] = useState([])

    const getRecommendations = async()=>{
        const {data} = await axios.get(`${backendURL}/recommendations`)
        setRecommendations(data)
    }

    useEffect(()=>{
        getRecommendations()
    }, [])

    return(
        <>
            {/* Header */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
                <p className="text-[#333333] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">
                    Today's Recommendation
                </p>
            </div>

            {/* Recommendation Card */}
            {recommendations.length > 0 ? 
                <RecommendationCard problem={recommendations[0]}/> :
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
                <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-start">
                    <button className="flex gap-1 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-background-light dark:bg-[#283039] text-[#333333] dark:text-white text-sm font-bold leading-normal tracking-[0.015em] border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                        <ArrowPathIcon className="size-4"/>
                        <span className="truncate">New Recommendation</span>
                    </button>
                    <button className="flex gap-1 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-transparent text-[#333333] dark:text-white text-sm font-bold leading-normal tracking-[0.015em] border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                        <FunnelIcon className="size-4"/>
                        <span className="truncate">Filter</span>
                    </button>
                </div>
            </div>
        </>
    )
}