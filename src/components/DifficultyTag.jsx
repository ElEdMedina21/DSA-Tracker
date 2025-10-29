export default function DifficultyTag({difficulty}){

    return(
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize
         ${difficulty === "easy" ? "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300" :
           difficulty === "medium" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300":
           "bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300"
         }`}>
            {difficulty}
        </span>
    )
}