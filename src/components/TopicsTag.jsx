import { XMarkIcon } from "@heroicons/react/16/solid"

export default function TopicsTag({name, removeTag}){
    return(
        <div className="flex h-8 shrink-0 items-center justify-start gap-x-2 rounded-lg bg-[#283039] pl-3 pr-3">
            <p className="text-white text-sm font-medium leading-normal">{name}</p>
            <button onClick={removeTag} type="button">
                <XMarkIcon 
                className="size-5 text-[#9dabb9]"/>
            </button>
        </div>
    )
}