import React, { useEffect, useState } from "react";
import Tag from "../components/Tag";
import { motion, AnimatePresence } from "framer-motion";
import { User, ChevronLeft, ChevronRight } from "lucide-react";

// In a real implementation, you would import actual images
const sarahImage = "https://randomuser.me/api/portraits/women/1.jpg";
const michaelImage = "https://randomuser.me/api/portraits/men/2.jpg";
const jessicaImage = "https://randomuser.me/api/portraits/women/3.jpg";

const testimonials = [  
    {
        name: "Sarah Johnson",
        role: "Software Engineer",
        company: "Recently hired at Google",
        quote: "Handjobs saved me countless hours of searching across different platforms. I found my dream job at Google in just two weeks!",
        image: sarahImage
    },
    {
        name: "Michael Chen",
        role: "Product Manager",
        company: "Recently hired at Airbnb",
        quote: "The filtering options are incredible. I was able to narrow down exactly what I was looking for and found the perfect match.",
        image: michaelImage
    },
    {
        name: "Jessica Williams",
        role: "UX Designer",
        company: "Recently hired at Figma",
        quote: "As a designer, I appreciate the clean interface and thoughtful user experience. It made my job search so much easier.",
        image: jessicaImage
    }
];

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    // Check if mobile
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Auto scroll for mobile
    useEffect(() => {
        if (isMobile) {
            const timer = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % testimonials.length);
            }, 5000);
            return () => clearInterval(timer);
        }
    }, [isMobile]);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="py-16 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-lime-400/5 to-transparent"></div>

            <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="flex justify-center">
                    <Tag>Testimonials</Tag>
                </div>
                <h2 className="text-4xl lg:text-5xl font-medium text-center mt-4 max-w-2xl mx-auto leading-tight">
                    Success stories from our <span className="text-lime-400">users</span>
                </h2>
                <p className="text-white/50 text-base text-center mt-4 max-w-2xl mx-auto">
                    Hear from job seekers who found their dream positions using Handjobs.
                </p>

                {/* Desktop View */}
                <div className="mt-10 hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} />
                    ))}
                </div>

                {/* Mobile Carousel */}
                <div className="mt-10 md:hidden relative">
                    <div className="overflow-hidden px-4">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.3 }}
                                className="w-full"
                            >
                                <TestimonialCard testimonial={testimonials[currentIndex]} />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex justify-center gap-2 mt-6">
                        {testimonials.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    idx === currentIndex ? 'bg-lime-400 w-4' : 'bg-white/20'
                                }`}
                            />
                        ))}
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevTestimonial}
                        className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/20 backdrop-blur-sm p-2 rounded-full hover:bg-lime-400/20 transition-all"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={nextTestimonial}
                        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/20 backdrop-blur-sm p-2 rounded-full hover:bg-lime-400/20 transition-all"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
}

function TestimonialCard({ testimonial }) {
    return (
        <motion.div
            className="bg-neutral-900 border border-white/10 rounded-xl p-5 hover:border-lime-400/30 transition-all duration-300"
            whileHover={{ y: -5 }}
        >
            <div className="flex flex-col h-full">
                <div className="mb-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-lime-400">
                        {testimonial.image ? (
                            <img 
                                src={testimonial.image} 
                                alt={testimonial.name}
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="bg-lime-400 text-neutral-900 w-full h-full flex items-center justify-center">
                                <User size={32} />
                            </div>
                        )}
                    </div>
                </div>
                
                <p className="text-white/80 text-sm leading-relaxed mb-4 flex-grow">"{testimonial.quote}"</p>
                
                <div className="mt-auto">
                    <h3 className="text-lg font-medium">{testimonial.name}</h3>
                    <p className="text-white/50 text-sm">{testimonial.role}</p>
                    <p className="text-lime-400 text-sm mt-0.5">{testimonial.company}</p>
                </div>
            </div>
        </motion.div>
    );
}

export default Testimonials;