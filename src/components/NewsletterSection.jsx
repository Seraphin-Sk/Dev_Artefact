import React from "react";

const NewsletterSection = () => {
    return (
        <section className="bg-background py-8 md:py-16 lg:py-24">
            <div className="container mx-auto px-4 text-center">
                {/* Titre et sous-titre */}
                <p className="text-primary font-medium mb-2">Newsletter</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wider mb-4">
                    REJOIGNEZ-NOUS
                </h2>
                <p className="text-gray-600 max-w-xl mx-auto mb-8 text-sm sm:text-base md:text-lg">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit,
                    facere veritatis at porro, ipsum quos culpa aperiam dolorum animi soluta ullam sapiente laborum.
                </p>

                {/* Boutons de contact */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
                    <a
                        href="https://wa.me/your-whatsapp-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary text-white px-8 sm:px-16 py-2 rounded-3xl font-medium shadow-md hover:bg-accent transition"
                    >
                        WhatsApp
                    </a>
                    <a
                        href="https://discord.gg/your-discord-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#7289DA] text-white px-8 sm:px-16 py-2 rounded-3xl font-medium shadow-md hover:bg-[#677BC4] transition"
                    >
                        Discord
                    </a>
                </div>

                {/* Formulaire d'inscription */}
                <form className="max-w-2xl mx-auto pt-8 sm:pt-14 flex flex-col sm:flex-row gap-2 sm:gap-0">
                    <input
                        type="email"
                        placeholder="Votre adresse mail"
                        className="bg-secondary flex-1 px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <button
                        type="submit"
                        className="bg-primary text-white px-8 sm:px-16 py-3 rounded-r-lg hover:bg-accent transition"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    );
};

export default NewsletterSection;
