import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../imagenes/logo.png'

//Iconos
import {
    RiBarChart2Line,
    RiLogoutCircleRLine,
    RiArrowRightSLine,
    RiEarthLine,
    RiCloseLine,
    RiMenu3Line
} from 'react-icons/ri'

const Sidebar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showSubmenu, setShowSubmenu] = useState(false);
    const [showSubmenuTwo, setShowSubmenuTwo] = useState(false);
    return (
        <>
            <div className={`xl:h-[100vh] bg-zinc-200 overflow-y-scroll fixed xl:static w-[80%] md:w-[40%] lg:w-[30%] xl:w-auto h-full top-0 bg-secondary-100 p-4 flex flex-col justify-between z-50 ${showMenu ? "left-0" : "-left-full"
                } transition-all`}>
                <div>
                    <h1 className="text-center text-2xl font-bold text-white mb-10">
                        <NavLink to={'/dashboard'}>
                            <img src={logo} alt="logo" class="items-center flex h-12 mx-auto" />
                        </NavLink>
                        Puedes hacerlo<span className="text-primary text-4xl">.</span>
                    </h1>
                    <ul>
                        <li>
                            <NavLink
                                to="/dashboard"
                                className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors">
                                <RiBarChart2Line className="text-primary" />Dashboard
                            </NavLink>
                        </li>
                        <li>
                            <button
                                onClick={() => setShowSubmenu(!showSubmenu)}
                                className="w-full flex items-center justify-between py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors">
                                <span className="flex items-center gap-4">
                                    <RiEarthLine className="text-primary" /> General
                                </span>
                                <RiArrowRightSLine
                                    className={`mt-1 ${showSubmenu && "rotate-90"
                                        } transition-all`} />
                            </button>
                            <ul
                                className={` ${showSubmenu ? "h-auto" : "h-0"
                                    } overflow-y-hidden transition-all`}>
                                <li>
                                    <NavLink
                                        to="/productos"
                                        className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors">
                                        Productos
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <button
                                onClick={() => setShowSubmenuTwo(!showSubmenuTwo)}
                                className="w-full flex items-center justify-between py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors">
                                <span className="flex items-center gap-4">
                                    <RiEarthLine className="text-primary" /> Administración
                                </span>
                                <RiArrowRightSLine
                                    className={`mt-1 ${showSubmenuTwo && "rotate-90"
                                        } transition-all`} />
                            </button>
                            <ul
                                className={` ${showSubmenuTwo ? "h-auto" : "h-0"
                                    } overflow-y-hidden transition-all`}>
                                <li>
                                    <NavLink
                                        to="/usuarios"
                                        className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors">
                                        Usuarios
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <nav>
                    <NavLink className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors">
                        <RiLogoutCircleRLine className="text-primary" /> Cerrar sesión
                    </NavLink>
                </nav>
            </div>
            <button
                onClick={() => setShowMenu(!showMenu)}
                className="xl:hidden fixed bottom-4 right-4 p-3 rounded-full z-50">
                {showMenu ? <RiCloseLine className='hover:bg-red-400 rounded-full xl:hidden' /> : <RiMenu3Line className='hover:bg-green-400 rounded-full xl:hidden' />}
            </button>
        </>
    )
}

export default Sidebar;