import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [scrollDown, setScrollDown] = useState(false);
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const toggleNav = () => {
        setNav(!nav);
    }

    const closeNavbar = () => {
        if (window.innerWidth <= 850) {
            setNav(false);
        }
    }

 

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setScrollDown(true);
            } else {
                setScrollDown(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav>
            <div className={`hidden lg:flex justify-between m-auto uppercase md:max-w-[1366px] md:py-5 md:text-2xl ${scrollDown ? 'scrollDown' : ''}`}>
                <div>
                    <h1 className="font-bold">Agata Budzyńska</h1>
                </div>
                <div>
                    <ul className="flex">
                        <li>
                            <Link
                                to="/"
                                className=" lg:hover:text-[black] lg:text-lg hover:font-bold transform transition-all duration-300 ease-in-out">
                                Strona Główna
                            </Link>
                        </li>
                        <li className="ml-5">
                            <Link
                                to="/o-mnie"
                                className=" lg:hover:text-[black] lg:text-lg hover:font-bold transform transition-all duration-300 ease-in-out">
                                O mnie
                            </Link>
                        </li>
                        <li className="ml-5">
                            <Link
                                to="/cwicz-ze-mna"
                                className=" lg:hover:text-[black] lg:text-lg hover:font-bold transform transition-all duration-300 ease-in-out">
                                Ćwicz ze mną
                            </Link>
                        </li>
                        <li className="ml-5">
                            <Link
                                to="/kontakt"
                                className=" lg:hover:text-[black] lg:text-lg hover:font-bold transform transition-all duration-300 ease-in-out">
                                Kontakt
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="fixed z-50 right-5 top-10 lg:hidden">
                <div onClick={toggleNav}>
                    {nav ? (
                        <AiOutlineClose size={20} className="text-[#fff] z-52"/>
                    ) : (
                        <AiOutlineMenu size={20} className={`${scrollDown ? 'text-black' : 'text-[#fff]'} z-51`} />
                    )}
                </div>
            </div>

            {nav && (
                <div className="fixed inset-0 z-40 bg-[#185854] text-[#fff] items-center uppercase  text-center lg:hidden">
                    <h1 className="pt-20 md:text-3xl">Agata Budzyńska</h1>
                    <ul className="mt-20 md:text-2xl">
                        <li>
                            <Link to="/" onClick={closeNavbar}>
                                Strona Główna
                            </Link>
                        </li>
                        <li className="mt-5">
                            <Link to="/o-mnie" onClick={closeNavbar}>
                                O mnie
                            </Link>
                        </li>
                        <li className="mt-5">
                            <Link to="/cwicz-ze-mna" onClick={closeNavbar}>
                                Ćwicz ze mną
                            </Link>
                        </li>
                        <li className="mt-5">
                            <Link to="/kontakt" onClick={closeNavbar}>
                                Kontakt
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default Navbar;
