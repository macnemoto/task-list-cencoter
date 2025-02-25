import React from "react";
import { Search } from 'lucide-react'
import { useRef } from "react";

const SearchInput: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <div className="flex relative">
            <Search onClick={() => inputRef.current?.focus()} className="text-[#FAFAFA] absolute left-3 top-1/2 -translate-y-1/2" />
            <input ref={inputRef} className="bg-[#09090B] w-5/6 border-1 border-[#27272A] rounded-md py-2 pl-12 text-white" type="text" placeholder="Busca un nombre o precio" />
        </div>
    )
}

export default SearchInput