import { NavLink } from "react-router-dom";
import { Menu2 } from "tabler-icons-react";

const Navbar = () => {

    const navMenu = <>
        <NavLink to="/" className={({ isActive }) => isActive ? "text-yellow-600" : ""}>Home</NavLink>
        <NavLink to="contact-us" className={({ isActive }) => isActive ? "text-yellow-600" : ""}>Contact Us</NavLink>
        <NavLink to="dashboard" className={({ isActive }) => isActive ? "text-yellow-600" : ""}>Dashboard</NavLink>
        <NavLink to="our-menu" className={({ isActive }) => isActive ? "text-yellow-600" : ""}>Our Menu</NavLink>
        <NavLink to="our-shop" className={({ isActive }) => isActive ? "text-yellow-600" : ""}>Our Shop</NavLink>
    </>

    return (
        <div className="flex items-center bg-black bg-opacity-70 text-white px-4 md:px-10 py-5 sticky z-10 w-full top-0">
            <div className="site-name flex-grow font-cinzel">
                <p className="text-xl md:text-3xl font-black">Bistro Boss</p>
                <p className="text-lg md:text-2xl font-bold tracking-[2px]">Restaurant</p>
            </div>

            <details className="dropdown dropdown-end lg:hidden text-black">
                <summary className="m-1 btn"><Menu2 size={30} strokeWidth={2} /></summary>
                <ul className="shadow menu dropdown-content z-[1] bg-base-100 rounded-md w-32 font-extrabold gap-2 text-end">
                    {navMenu}
                </ul>
            </details>

            <div className="nav-menus hidden lg:flex gap-10 text-xl font-extrabold">
                    {navMenu}
            </div>
        </div>
    );
};

export default Navbar;