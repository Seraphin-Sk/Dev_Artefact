import React from 'react';

const HeroSection = () => {
    return (
        <section className="bg-[#FFFF] py-8 md:py-16 lg:py-7">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    {/* Contenu texte */}
                    <div className="w-full lg:w-1/2 lg:ms-14 pr-0 lg:pr-8 mb-8 lg:mb-0 ">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
                            Apprennez à concevoir des applications web
                        </h1>
                        <p className="text-gray-700 mb-6 md:mb-8 text-base sm:text-lg">
                            Dev Artefact vous permet d'acquérir les compétences nécessaires pour
                            concevoir des applications web de A à Z grâce à <span className='font-semibold'>nos formations sur mesure.</span>
                        </p>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <button className="bg-primary text-white px-4 sm:px-6 py-2 sm:py-4 rounded-lg sm:rounded-xl hover:bg-accent transition-colors">
                                Inscrivez-vous gratuitement
                            </button>
                            <button className="text-accent px-4 sm:px-6 py-2 sm:py-3 hover:bg-secondary underline transition-colors">
                                Contactez-nous
                            </button>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative">
                            {/* Image principale */}
                            <div className="relative z-10">
                                <img
                                    src="/assets/hero-image.webp"
                                    alt="Développeur web"
                                    className="w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll down */}
                <div className="flex justify-center py-8 md:py-12 lg:py-0">
                    <a href="#decouvrir">
                        <img
                            src="/assets/scroll.png"
                            alt="Scroll down"
                            className="h-8 sm:h-10 md:h-12 cursor-pointer"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HeroSection; 