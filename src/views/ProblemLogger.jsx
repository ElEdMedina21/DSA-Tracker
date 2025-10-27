import NavBar from "../components/NavBar"
import TopicsTag from "../components/topicsTag"

export default function ProblemLogger(){
    return(
    <main className="h-screen bg-[#101922] font-display">
        <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
            <NavBar/>
            <div className="layout-container flex h-full grow flex-col">
                <div className="px-4 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                        <div className="flex flex-wrap justify-between gap-3 p-4">
                            <p className="text-white text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">
                            Log a Solved Problem
                            </p>
                        </div>

                        <div className="flex flex-col gap-6 p-4">
                            <div className="flex flex-col gap-4">
                                <label className="flex flex-col min-w-40 flex-1">
                                    <p className="text-gray-300 text-base font-medium leading-normal pb-2">
                                    Problem Title
                                    </p>
                                    <input
                                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg 
                                            text-white focus:outline-0 focus:ring-0 
                                            border border-[#3b4754] bg-[#1c2127] focus:border-primary 
                                            h-14 placeholder:text-[#9dabb9] p-[15px] text-base font-normal leading-normal"
                                    placeholder="Enter the problem title"
                                    value=""
                                    />
                                </label>

                                <label className="flex flex-col min-w-40 flex-1">
                                    <p className="text-gray-300 text-base font-medium leading-normal pb-2">
                                    Difficulty
                                    </p>
                                    <select
                                    className="form-select flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg p-[15px]
                                            text-white focus:outline-0 focus:ring-0 
                                            border border-[#3b4754] bg-[#1c2127] focus:border-primary 
                                            h-14 bg-no-repeat bg-right_0.75rem_center appearance-none"
                                    required
                                    >
                                    <option value="" defaultValue>Select Difficulty</option>
                                    <option value="easy">Easy</option>
                                    <option value="medium">Medium</option>
                                    <option value="hard">Hard</option>
                                    </select>
                                </label>
                            </div>

                            <div>
                                <p className="text-gray-300 text-base font-medium leading-normal pb-2">Topic(s)</p>
                                <div className="flex flex-wrap gap-3 p-3 border border-[#3b4754] rounded-lg bg-[#1c2127]">
                                    <TopicsTag name={"Arrays"}/>
                                    <input
                                    className="flex-1 bg-transparent text-white placeholder:text-[#9dabb9] focus:outline-none"
                                    placeholder="Add a topic..."
                                    type="text"
                                    />
                                </div>
                            </div>

                            <label className="flex flex-col min-w-40 flex-1">
                                <p className="text-gray-300 text-base font-medium leading-normal pb-2">
                                    Solution Link
                                </p>
                                <input
                                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg 
                                        text-white focus:outline-0 focus:ring-0 
                                        border border-[#3b4754] bg-[#1c2127] focus:border-primary 
                                        h-14 placeholder:text-[#9dabb9] p-[15px] text-base font-normal leading-normal"
                                    placeholder="Enter solution link"
                                    value=""
                                />
                            </label>

                            <div className="flex flex-wrap items-center justify-end gap-4 pt-4">
                                <button
                                    className="flex h-12 items-center justify-center rounded-lg bg-primary px-6 
                                        text-base font-semibold text-white hover:bg-primary/90 cursor-pointer"
                                >
                                    Add Problem
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    )
}