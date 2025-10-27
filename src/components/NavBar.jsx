import { CodeBracketIcon } from "@heroicons/react/16/solid"
import { NavLink } from "react-router"

export default function NavBar(){
    return(
        <header className="flex w-full items-center justify-between border-b border-gray-200 dark:border-gray-800 px-4 md:px-10 lg:px-40 py-3 bg-background-light dark:bg-background-dark sticky top-0 z-10">
            <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-2xl">
                    <CodeBracketIcon className="size-7 text-[#4A90E2]"/>
                </span>
                <h1 className="text-xl font-bold dark:text-white">
                    DSA Tracker
                </h1>
            </div>
            <nav className="flex items-center gap-4">
                <NavLink className="text-sm font-medium text-white hover:text-[#4A90E2]/90 transition-colors" to={"/"} end>
                    Dashboard
                </NavLink>
                <NavLink className="text-sm font-medium hover:text-[#4A90E2]/90 dark:text-white hover:text-primary/90 transition-colors" 
                to={"/newProblem"} end>
                    Problem Log
                </NavLink>
            </nav>
        </header>
    )
}