import { ArrowPathIcon, FunnelIcon } from "@heroicons/react/16/solid"

export default function Recommendations(){
    return(
        <>
            {/* Header */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
                <p className="text-[#333333] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">
                    Today's Recommendation
                </p>
            </div>

            {/* Recommendation Card */}
            <div className="p-4 @container">
                <div className="flex flex-col items-stretch justify-start rounded-xl shadow-lg bg-background-light dark:bg-[#1c2127] dark:shadow-none">
                    <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-4 p-6 sm:p-8">
                        <div className="flex justify-between items-start gap-4">
                            <h2 className="text-[#333333] dark:text-white text-2xl font-bold leading-tight tracking-[-0.015em]">
                            Find the Missing Number
                            </h2>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#F5A623]/20 text-[#F5A623]">
                            Medium
                            </span>
                        </div>
                        <p className="text-[#333333] dark:text-[#9dabb9] text-base font-normal leading-relaxed">
                            Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.
                        </p>
                        <div className="flex items-center justify-end gap-3 pt-4">
                            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                            <span className="truncate">Solve Problem</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

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