import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const FooterSection = () => {
    return (
        <footer className="bg-gray-50 py-12 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm text-gray-700">

                {/* Colonne 1 - Logo + social */}
                <div className="flex flex-col items-center md:items-start">
                    <img src="/assets/logo.png" alt="Logo" className="h-16 mb-4" />
                    <p className="font-semibold mb-2">Dev Artefact</p>
                    <p className="mb-4 text-center md:text-left">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.
                    </p>
                    <div className="flex gap-4 text-xl text-gray-600">
                        <a href="#" className="hover:text-primary transition-colors"><FaLinkedinIn /></a>
                        <a href="#" className="hover:text-primary transition-colors"><FaFacebookF /></a>
                        <a href="#" className="hover:text-primary transition-colors"><FaInstagram /></a>
                        <a href="#" className="hover:text-primary transition-colors"><FaTwitter /></a>
                    </div>
                </div>

                {/* Colonne 2 - Quick links */}
                <div className="flex flex-col items-center md:items-start">
                    <h4 className="font-semibold mb-4">Lien rapide</h4>
                    <ul className="space-y-2 text-center md:text-left">
                        <li><a href="#" className="hover:text-primary transition-colors">Accueil</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Campus</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Découvrir</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Communauté</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Formations</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Contactez-nous</a></li>
                    </ul>
                </div>

                {/* Colonne 3 - Important */}
                <div className="flex flex-col items-center md:items-start">
                    <h4 className="font-semibold mb-4">Important</h4>
                    <ul className="space-y-2 text-center md:text-left">
                        <li><a href="#" className="hover:text-primary transition-colors">Carrière</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Conditions générales</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Politique de confidentialité</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Politique relative aux cookies</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Travail social</a></li>
                    </ul>
                </div>

                {/* Colonne 4 - Contact */}
                <div className="flex flex-col items-center md:items-start">
                    <h4 className="font-semibold mb-4">Contacts</h4>
                    <ul className="space-y-2 text-center md:text-left">
                        <li className="flex items-center gap-3"><FaPhone /> <a href="tel:+243854117356" className="hover:text-primary transition-colors">+243 854 117 356</a></li>
                        <li className="flex items-center gap-3"><FaEnvelope /> <a href="mailto:dev.artefact@gmail.com" className="hover:text-primary transition-colors">dev.artefact@gmail.com</a></li>
                        <li className="flex items-center gap-3"><FaMapMarkerAlt /> <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">6e Niveau, Immeuble Gallérie Albert, en face de Kin-Mart sur Boulevard 30 juin</a></li>
                    </ul>
                </div>
            </div>

            <div className="border-t mt-10 pt-6 text-center text-sm text-gray-400">
                Copyright © 2025 Dev Artefact. All rights reserved.
            </div>
        </footer>
    );
};

export default FooterSection;
