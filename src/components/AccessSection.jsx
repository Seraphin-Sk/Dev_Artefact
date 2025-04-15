import React from 'react';

const AccessSection = () => {
    return (
        <section className="bg-background py-8 md:py-16 lg:py-24">
            <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-text mb-8 md:mb-12">
                    Accessible et éducatif
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    <div className="bg-secondary p-6 md:p-8 border-2 border-primary rounded-tr-3xl rounded-bl-3xl shadow-custom">
                        <img
                            src="/assets/Acces.webp"
                            alt="accès"
                            className="w-24 md:w-32 py-4 md:py-6"
                        />
                        <h3 className="text-xl md:text-2xl font-bold text-text mb-4">100% Digital</h3>
                        <p className="text-gray-700 text-sm md:text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eos saepe eum iure soluta minus beatae facilis, veniam nihil voluptate quam excepturi atque quis sunt quod molestias alias dolorum ipsam.
                        </p>
                    </div>
                    <div className="bg-secondary p-6 md:p-8 border-2 border-primary rounded-tr-3xl rounded-bl-3xl shadow-custom">
                        <img
                            src="/assets/Acces.webp"
                            alt="accès"
                            className="w-24 md:w-32 py-4 md:py-6"
                        />
                        <h3 className="text-xl md:text-2xl font-bold text-text mb-4">100% Digital</h3>
                        <p className="text-gray-700 text-sm md:text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eos saepe eum iure soluta minus beatae facilis, veniam nihil voluptate quam excepturi atque quis sunt quod molestias alias dolorum ipsam.
                        </p>
                    </div>
                    <div className="bg-secondary p-6 md:p-8 border-2 border-primary rounded-tr-3xl rounded-bl-3xl shadow-custom">
                        <img
                            src="/assets/Acces.webp"
                            alt="accès"
                            className="w-24 md:w-32 py-4 md:py-6"
                        />
                        <h3 className="text-xl md:text-2xl font-bold text-text mb-4">100% Digital</h3>
                        <p className="text-gray-700 text-sm md:text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eos saepe eum iure soluta minus beatae facilis, veniam nihil voluptate quam excepturi atque quis sunt quod molestias alias dolorum ipsam.
                        </p>
                    </div>
                </div>

                {/* Bouton */}
                <div className="flex justify-center mt-8 md:mt-12 lg:mt-16">
                    <button className="bg-primary text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg md:rounded-xl hover:bg-accent transition-colors">
                        Inscrivez-vous gratuitement
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AccessSection;