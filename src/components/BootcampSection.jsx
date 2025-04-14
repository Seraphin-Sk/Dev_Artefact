import React from 'react';

const BootcampSection = () => {
    return (
        <section className="bg-secondary">
            <div className="container mx-auto px-4 py-8 md:py-16 lg:py-28 text-center">
                <div className="flex justify-center items-center px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64">
                    <h2 className="text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight text-text">
                        Nous vous aidons à apprendre à concevoir des applications web de A à Z grâce à {' '}
                        <span className="text-primary font-semibold">nos formations sur mesure.</span>
                    </h2>
                </div>

                <div className="flex flex-wrap justify-center pt-8 md:pt-16 lg:pt-24 xl:pt-40">
                    <img
                        src="/assets/module.png"
                        alt="Modules de formation en développement web"
                        className="w-full max-w-md md:max-w-lg lg:max-w-full xl:max-w-none"
                    />
                </div>
            </div>
        </section>
    );
};

export default BootcampSection;
