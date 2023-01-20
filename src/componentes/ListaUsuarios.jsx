import React, { useMemo, Fragment, useCallback } from 'react'
import {
    RiArrowLeftSLine,
    RiArrowRightSLine
} from "react-icons/ri";


const ListaUsuarios = ({
  getTableProps,
  headerGroups,
  getTableBodyProps,
  rows,
  prepareRow,
}) => {
    return (
        <div>
            <div className="flex items-center justify-between mb-10">
                <h1 className="text-4xl text-black">Usuarios</h1>
                <div className="flex items-center gap-2 text-3xl">
                    <RiArrowLeftSLine className="hover:cursor-pointer hover:text-white transition-colors" />
                    <RiArrowRightSLine className="hover:cursor-pointer hover:text-white transition-colors" />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                <div class="w-full min-w-[30rem] p-4 bg-white rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.03)]">


                </div>
            </div>
        </div>
    )
}

export default ListaUsuarios