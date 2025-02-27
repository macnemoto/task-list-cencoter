import React from "react";
import { Search } from 'lucide-react'
import { useRef } from "react";

const SearchInput: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <div className="flex relative my-10">
            <Search onClick={() => inputRef.current?.focus()} className="text-[#FAFAFA] absolute left-3 top-1/2 -translate-y-1/2" />
            <input ref={inputRef} className="bg-[#09090B] w-full border-1 border-[#27272A] rounded-md py-2 pl-12 text-white" type="text" placeholder="Busca un nombre o precio" />
        </div>
    )
}

export default SearchInput