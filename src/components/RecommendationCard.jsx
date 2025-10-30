import DifficultyTag from "./DifficultyTag"

export default function RecommendationCard({problem}){
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
                <div className="flex gap-4">
                    {problem.topics.map(topic=>(
                        <span className="text-[#9dabb9] text-base font-normal leading-relaxed">
                            {topic}
                        </span>
                    ))}
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
    </div>)
}