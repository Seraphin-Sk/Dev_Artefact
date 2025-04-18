import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
    {
        name: "Clement",
        role: "Conseiller emploi chez BMZ",
        text: "“Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.”",
        image: "assets/student.png",
    },
    {
        name: "Alice",
        role: "Développeuse web chez TechCorp",
        text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”",
        image: "assets/student.png",
    },
    {
        name: "John",
        role: "Designer UX/UI chez CreativeStudio",
        text: "“Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”",
        image: "assets/student.png",
    },
];

const TestimonialSection = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000); // Change de témoignage toutes les 5 secondes

        return () => clearInterval(interval);
    }, []);

    const { name, role, text, image } = testimonials[currentTestimonial];

    return (
        <section className="bg-primary text-white py-8 md:py-16 lg:py-0">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                {/* Image */}
                <div className="flex-shrink-0">
                    <motion.img
                        key={currentTestimonial}
                        src={image}
                        alt="Étudiant témoin"
                        className="w-auto md:w-auto h-auto"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ duration: 0.5 }}
                    />
                </div>

                {/* Texte */}
                <div className="flex-1">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 md:mb-12">
                        Nos <span className="text-white">étudiants témoignent</span>
                    </h2>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentTestimonial}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <p className="text-lg font-semibold mb-2">
                                {name}, <span className="text-secondary">{role}</span>
                            </p>
                            <p className="text-secondary text-base leading-relaxed italic mb-4">
                                {text}
                            </p>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation bullet */}
                    <div className="flex gap-2 justify-center items-center mt-8 md:mt-12">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentTestimonial(index)}
                                className={`w-3 h-3 rounded-full transition-colors ${index === currentTestimonial ? "bg-white" : "bg-white/40"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
