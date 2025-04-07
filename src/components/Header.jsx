import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-[#E8F5E9] py-4">
            <div className="container mx-auto px-4">
                <nav className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img src="/assets/logo.png" alt="Dev Artefact" className="h-10" />
                    </Link>

                    {/* Navigation Links */}
                    <div className="flex items-center space-x-8">
                        <Link to="/" className="text-gray-700 hover:text-gray-900">Accueil</Link>
                        <Link to="/campus" className="text-gray-700 hover:text-gray-900">Campus</Link>
                        <Link to="/decouvrir" className="text-gray-700 hover:text-gray-900">Découvrir</Link>
                        <Link to="/communaute" className="text-gray-700 hover:text-gray-900">Communauté</Link>
                        <Link to="/formations" className="text-gray-700 hover:text-gray-900">Formations</Link>
                        <Link to="/contact" className="text-gray-700 hover:text-gray-900" >Contactez-nous</Link>
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