import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-[#FFFF]">
            <div className="md:bg-[url(/assets/Union.png)] bg-no-repeat bg-cover bg-center">
                <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 py-8 md:py-12">
                    <nav className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                        {/* Logo et bouton hamburger */}
                        <div className="flex items-center justify-between w-full md:w-auto">
                            <Link to="/" className="flex items-center">
                                <img
                                    src="/assets/logo.png"
                                    alt="Dev Artefact"
                                    className="h-8 sm:h-10 md:h-12"
                                />
                            </Link>

                            {/* Bouton hamburger pour mobile */}
                            <button
                                onClick={toggleMenu}
                                className="md:hidden p-2 text-gray-700 hover:text-[#55DB3E] focus:outline-none"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Navigation Links */}
                        <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col items-start md:items-center space-y-4 md:space-y-0 md:flex-row md:space-x-4 sm:space-x-6 lg:space-x-8 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 rounded-lg shadow-md md:shadow-none`}>
                            <Link to="/" className="text-sm sm:text-base text-[#55DB3E] active:text-[#55DB3E]">
                                Accueil
                            </Link>
                            <Link to="/campus" className="text-sm sm:text-base text-gray-700 hover:text-[#55DB3E]">
                                Campus
                            </Link>
                            <Link to="/decouvrir" className="text-sm sm:text-base text-gray-700 hover:text-[#55DB3E]">
                                Découvrir
                            </Link>
                            <Link to="/communaute" className="text-sm sm:text-base text-gray-700 hover:text-[#55DB3E]">
                                Communauté
                            </Link>
                            <Link to="/formations" className="text-sm sm:text-base text-gray-700 hover:text-[#55DB3E]">
                                Formations
                            </Link>
                            <Link to="/contact" className="text-sm sm:text-base text-gray-700 hover:text-[#55DB3E]">
                                Contactez-nous
                            </Link>
                            <Link
                                to="/inscription"
                                className="text-sm sm:text-base bg-[#55DB3E] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg md:rounded-xl hover:bg-[#268E11] transition-colors"
                            >
                                Inscrivez-vous gratuitement
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header; 