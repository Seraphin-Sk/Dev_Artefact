import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Success = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <section ref={ref} className="bg-background py-8 md:py-16 lg:py-24">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    {/* Contenu texte */}
                    <div className="w-full lg:w-1/2 lg:ms-14 pr-0 lg:pr-8 mb-8 lg:mb-0 ">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 md:mb-6 text-text">
                            Progressez vers votre prochain niveau de succès
                        </h1>
                        <p className="text-gray-600 mb-6 md:mb-8 text-sm sm:text-base lg:text-lg pt-6">
                            Dev Artefact vous permet d'acquérir les compétences nécessaires pour
                            concevoir des applications web de A à Z grâce à <span className='font-semibold'>nos formations sur mesure.</span>
                        </p>
                        {/* Contenu graphique */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8">
                            <div>
                                <p className="text-4xl sm:text-5xl font-extrabold text-text">
                                    +{inView ? <CountUp end={30} duration={2} /> : '0'}
                                </p>
                                <div className="flex items-start">
                                    <div className="border-l border-gray-400 h-12 sm:h-14 mr-4 mt-2"></div>
                                    <p className="mt-2 text-sm sm:text-base lg:text-lg text-gray-700"><span className='font-semibold'>Experts</span><br /> à vos cotés</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-4xl sm:text-5xl font-extrabold text-text">
                                    +{inView ? <CountUp end={200} duration={2} /> : '0'}
                                </p>
                                <div className="flex items-start">
                                    <div className="border-l border-gray-400 h-12 sm:h-14 mr-4 mt-2"></div>
                                    <p className="mt-2 text-sm sm:text-base lg:text-lg text-gray-700"><span className='font-semibold'>Heures</span><br /> de contenus </p>
                                </div>
                            </div>
                            <div>
                                <p className="text-4xl sm:text-5xl font-extrabold text-text">
                                    +{inView ? <CountUp end={250} duration={2} suffix="M$" /> : '0'}
                                </p>
                                <div className="flex items-start">
                                    <div className="border-l border-gray-400 h-12 sm:h-14 mr-4 mt-2"></div>
                                    <p className="mt-2 text-sm sm:text-base lg:text-lg text-gray-700"><span className='font-semibold'>Générés</span><br /> par nos élèves</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative">
                            {/* Image principale */}
                            <div className="relative z-10">
                                <img
                                    src="/assets/succes.webp"
                                    alt="Développeur web"
                                    className="w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Success;

