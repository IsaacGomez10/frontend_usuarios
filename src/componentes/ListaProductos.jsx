import React from 'react'
import {
    RiArrowLeftSLine,
    RiArrowRightSLine
} from "react-icons/ri";

const ListaProductos = () => {
    return (
        <div>
            <div className="flex items-center justify-between mb-10">
                <h1 className="text-4xl text-black">Productos</h1>
                <div className="flex items-center gap-2 text-3xl">
                    <RiArrowLeftSLine className="hover:cursor-pointer hover:text-white transition-colors" />
                    <RiArrowRightSLine className="hover:cursor-pointer hover:text-white transition-colors" />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

            </div>
        </div>
    )
}

export default ListaProductos