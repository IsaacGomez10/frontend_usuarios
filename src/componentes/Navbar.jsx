import React from "react";
import {
    RiArrowDownSLine,
    RiSettings3Line,
    RiLogoutCircleRLine,
} from "react-icons/ri";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { NavLink } from "react-router-dom";

import perfil from '../imagenes/perfil.png'


const Navbar = () => {
    return (
        <header className="h-[7vh] md:h-[10vh] bg-zinc-200 border-b border-secondary-100 p-8 flex items-center justify-end">
            <nav className="flex items-center gap-2">
                <Menu
                    menuButton={
                        <MenuButton className="flex items-center gap-x-2 hover:bg-secondary-100 p-2 rounded-lg transition-colors">
                            <img
                                src={perfil}
                                className="w-6 h-6 object-cover rounded-full"
                            />
                            <span>Nombre</span>
                            <RiArrowDownSLine />
                        </MenuButton>
                    }
                    align="end"
                    arrow
                    arrowClassName="bg-secondary-100"
                    transition
                    menuClassName="bg-secondary-100 p-4">
                    <MenuItem className="p-0 hover:bg-transparent ">
                        <NavLink
                            to="/perfil"
                            className="rounded-lg transition-colors text-black hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1">
                            <img
                                src={perfil}
                                className="w-8 h-8 object-cover rounded-full"/>
                            <div className="flex flex-col text-sm">
                                <span className="text-sm">nombre</span>
                                <span className="text-xs text-gray-500">email</span>
                            </div>
                        </NavLink>
                    </MenuItem>
                    <hr className="my-4 border-gray-500 bg-zinc-200" />
                    <MenuItem className="p-0 hover:bg-transparent">
                        <NavLink
                            to="/configuracion"
                            className="rounded-lg transition-colors text-black hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1">
                            <RiSettings3Line /> Configuración
                        </NavLink>
                    </MenuItem>
                    <MenuItem className="p-0 hover:bg-transparent">
                        <NavLink
                            to="/salir"
                            className="rounded-lg transition-colors text-black hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1">
                            <RiLogoutCircleRLine /> Cerrar sesión
                        </NavLink>
                    </MenuItem>
                </Menu>
            </nav>
        </header>
    )
}

export default Navbar;