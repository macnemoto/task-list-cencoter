import React from "react";
import { Search } from 'lucide-react'

const SearchInput: React.FC = () => {
    return (
        <div className="bg-red-500 rounded-full flex">
            <div className="p-4  w-1/6">
                <Search />
            </div>
            <input className=" w-5/6 rounded-r-[9999px]" type="text" placeholder="Busca un nombre o precio" />
        </div>
    )
}

export default SearchInput