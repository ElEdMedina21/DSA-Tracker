import { ChevronUpDownIcon, FunnelIcon } from "@heroicons/react/16/solid";

export default function SolvedProblems() {
  return (
    <>
      <div className="flex flex-col gap-6 p-4">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-[#333333] dark:text-white text-2xl font-bold">
            Solved Problems
          </h2>
          <button className="flex gap-2 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-transparent text-[#333333] dark:text-white text-sm font-bold leading-normal tracking-[0.015em] border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            <FunnelIcon className="size-4" />
            <span className="truncate">Filter</span>
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800">
          <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
            <thead className="bg-gray-50 dark:bg-gray-700/50 text-xs text-gray-700 uppercase dark:text-gray-400">
              <tr>
                <th className="px-6 py-3" scope="col">
                  <div className="flex items-center gap-1 cursor-pointer">
                    Problem Name
                    <ChevronUpDownIcon className="size-4"/>
                  </div>
                </th>
                <th className="px-6 py-3" scope="col">
                  <div className="flex items-center gap-1 cursor-pointer">
                    Last Solved
                    <ChevronUpDownIcon className="size-4"/>
                  </div>
                </th>
                <th className="px-6 py-3" scope="col">
                  <div className="flex items-center gap-1 cursor-pointer">
                    Difficulty
                    <ChevronUpDownIcon className="size-4"/>
                  </div>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className=":bg-background-dark border-b dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900/50">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Two Sum
                </td>
                <td className="px-6 py-4">2023-10-26</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300">
                    Easy
                  </span>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
