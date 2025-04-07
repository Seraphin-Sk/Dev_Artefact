import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-[#FFFF] py-0 px-0">
            <div className="bg-[url(/public/assets/Union.png)] bg-no-repeat bg-cover bg-center container mx-auto px-16 py-12">
                <nav className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img src="/assets/logo.png" alt="Dev Artefact" className="h-12" />
                    </Link>

                    {/* Navigation Links */}
                    <div className="flex items-center space-x-8">
                        <Link to="/" className="text-[#55DB3E] active:text-[#55DB3E]">Accueil</Link>
                        <Link to="/campus" className="text-gray-700 hover:text-[#55DB3E]">Campus</Link>
                        <Link to="/decouvrir" className="text-gray-700 hover:text-[#55DB3E]">Découvrir</Link>
                        <Link to="/communaute" className="text-gray-700 hover:text-[#55DB3E]">Communauté</Link>
                        <Link to="/formations" className="text-gray-700 hover:text-[#55DB3E]">Formations</Link>
                        <Link to="/contact" className="text-gray-700 hover:text-[#55DB3E]" >Contactez-nous</Link>
                        <Link
                            to="/inscription"
                            className="bg-[#55DB3E] text-white px-6 py-4 rounded-xl hover:bg-[#268E11] transition-colors"
                        >
                            Inscrivez-vous gratuitement
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header; 