import React from 'react';

const HeroSection = () => {
    return (
        <section className="bg-[#FFFF] py-16">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    {/* Contenu texte */}
                    <div className="w-1/2 pr-8">
                        <h1 className="text-5xl font-bold mb-6">
                            Apprennez à concevoir des applications web
                        </h1>
                        <p className="text-gray-700 mb-8 text-lg">
                            Artefact vous permet d'acquérir les compétences nécessaires pour
                            concevoir des applications web de A à Z grâce à nos formations sur mesure.
                        </p>
                        <div className="flex space-x-4">
                            <button className="bg-[#55DB3E] text-white px-6 py-4 rounded-xl hover:bg-[#268E11] transition-colors">
                                Inscrivez-vous gratuitement
                            </button>
                            <button className="text-[#268E11]  px-6 py-3 hover:bg-[#E8F5E9] transition-colors">
                                Contactez-nous
                            </button>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="w-1/2 relative">
                        <div className="relative">
                            {/* Image principale */}
                            <div className="relative z-10">
                                <img
                                    src="/public/assets/hero-image.webp"
                                    alt="Développeur web"
                                    className="w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll down */}
                <div className="flex justify-center py-8">
                    <a href="#decouvrir">
                        <img
                            src="/public/assets/scroll.png"
                            alt="Scroll down"
                            className="h-8 cursor-pointer"
                        />
                    </a>
                </div>




            </div>
        </section>
    );
};

export default HeroSection; 