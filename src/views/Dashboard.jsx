import NavBar from "../components/NavBar";
import Recommendations from "../components/Recommendations";
import { LightBulbIcon, ListBulletIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import SolvedProblems from "../components/SolvedProblems";

export default function Dashboard() {

    const [currentSection, setCurrentSection] = useState(0)

    return (
    <main className="h-screen bg-[#101922] font-display">
        <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
            <NavBar />
            <div className="layout-container flex h-full grow flex-col">
                <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                        {/* Tabs */}
                        <div className="flex border-b border-gray-200 dark:border-gray-800 mb-4">
                        <button className={`flex items-center gap-2 px-4 py-2 text-sm font-medium border-b-2 hover:cursor-pointer 
                        hover:border-[#4A90E2] hover:text-[#4A90E2]
                        ${currentSection === 0 ? "text-[#4A90E2] border-[#4A90E2]" : "text-gray-400 border-transparent"}`}
                        onClick={()=>setCurrentSection(0)}>
                            <span className="material-symbols-outlined text-lg">
                            <LightBulbIcon className="size-5"/>
                            </span>
                            Recommendations
                        </button>
                        <button className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all border-b-2 cursor-pointer 
                        hover:border-[#4A90E2] hover:text-[#4A90E2]
                        ${currentSection === 1 ? "text-[#4A90E2] border-[#4A90E2]" : "text-gray-400 border-transparent"}`} 
                        onClick={()=>setCurrentSection(1)}>
                            <span className="material-symbols-outlined text-lg">
                            <ListBulletIcon className="size-5"/>
                            </span>
                            Solved Problems
                        </button>
                        </div>

                        {currentSection === 0 && <Recommendations/>}
                        {currentSection === 1 && <SolvedProblems/>}

                    </div>
                </div>
            </div>
        </div>
    </main>
  );
}
