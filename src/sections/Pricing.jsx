import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Tag from "../components/Tag";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import Button from "../components/Button";

// Animation variants
const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

const featureVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: i => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.4
        }
    })
};

const PricingToggle = ({ activePlan, setActivePlan }) => {
    return (
        <div className="flex justify-center mb-8 p-1.5 bg-neutral-800/50 rounded-full border border-white/10 inline-flex mx-auto shadow-lg w-full max-w-lg ">
            <button
                onClick={() => setActivePlan("monthly")}
                className={`relative flex-1 px-4 sm:px-6 py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${activePlan === "monthly"
                        ? "bg-lime-400 text-neutral-900 shadow-md"
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    }`}
            >
                Monthly
            </button>
            <button
                onClick={() => setActivePlan("quarterly")}
                className={`relative flex-1 px-4 sm:px-6 py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${activePlan === "quarterly"
                        ? "bg-lime-400 text-neutral-900 shadow-md"
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    }`}
            >
                3 Months
                <span className="absolute -top-4 right-3 sm:right-6 transform translate-x-1/2 text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded-full font-bold 
        bg-lime-400 text-neutral-900 border border-lime-500/20 z-20">
                    24% off
                </span>
            </button>
            <button
                onClick={() => setActivePlan("biannual")}
                className={`relative flex-1 px-4 sm:px-6 py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${activePlan === "biannual"
                        ? "bg-lime-400 text-neutral-900 shadow-md"
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    }`}
            >
                6 Months
                <span className="absolute -top-4 right-3 sm:right-6 transform translate-x-1/2 text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded-full font-bold 
        bg-lime-400 text-neutral-900 border border-lime-500/20 z-20">
                    30% off
                </span>
            </button>
        </div>
    );
};

function Pricing() {
    const [activePlan, setActivePlan] = useState("monthly");
    const carouselRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    
    // Function to handle scrolling the carousel
    const scrollCarousel = (direction) => {
        if (carouselRef.current) {
            const scrollAmount = direction === 'left' ? -300 : 300;
            carouselRef.current.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
            
            // Update scroll position for button visibility
            setTimeout(() => {
                if (carouselRef.current) {
                    setScrollPosition(carouselRef.current.scrollLeft);
                }
            }, 300);
        }
    };
    
    // Handle scroll event to update button visibility
    const handleScroll = () => {
        if (carouselRef.current) {
            setScrollPosition(carouselRef.current.scrollLeft);
        }
    };

    const pricingData = {
        monthly: [
            {
                name: "Free",
                price: "₹0",
                period: "/month",
                description: "Perfect for casual job seekers",
                buttonText: "Get Started",
                buttonVariant: "outline",
                features: [
                    "Basic job search across platforms",
                    "Limited filters",
                    "Save up to 5 jobs",
                    "Weekly email alerts"
                ],
                recommended: false
            },
            {
                name: "Pro",
                originalPrice: "₹99",
                price: "₹69",
                period: "/month",
                description: "First 69 users only",
                subDescription: "Early Bird Offer",
                buttonText: "Start Free Trial",
                buttonVariant: "primary",
                features: [
                    "Advanced search with all filters",
                    "AI Auto Filler",
                    "Unlimited saved jobs",
                    "Real-time notifications",
                    "Smart resume analyzer",
                    "Salary insights"
                ],
                recommended: true,
                earlyAccess: true
            }
        ],
        quarterly: [
            {
                name: "Free",
                price: "₹0",
                period: "/month",
                description: "Perfect for casual job seekers",
                buttonText: "Get Started",
                buttonVariant: "outline",
                features: [
                    "Basic job search across platforms",
                    "Limited filters",
                    "Save up to 5 jobs",
                    "Weekly email alerts"
                ],
                recommended: false
            },
            {
                name: "Pro",
                originalPrice: "₹249",
                price: "₹189",
                period: " for 3 months",
                description: "First 69 users only",
                subDescription: "Early Bird Offer",
                buttonText: "Start Free Trial",
                buttonVariant: "primary",
                features: [
                    "Advanced search with all filters",
                    "AI Auto Filler",
                    "Unlimited saved jobs",
                    "Real-time notifications",
                    "Smart resume analyzer",
                    "Salary insights"
                ],
                recommended: true
            }
        ],
        biannual: [
            {
                name: "Free",
                price: "₹0",
                period: "/month",
                description: "First 69 users only",
                buttonText: "Get Started",
                buttonVariant: "outline",
                features: [
                    "Basic job search across platforms",
                    "Limited filters",
                    "Save up to 5 jobs",
                    "Weekly email alerts"
                ],
                recommended: false
            },
            {
                name: "Pro",
                originalPrice: "₹499",
                price: "₹349",
                period: " for 6 months",
                description: "First 69 users only",
                subDescription: "Early Bird Offer",
                buttonText: "Start Free Trial",
                buttonVariant: "primary",
                features: [
                    "Advanced search with all filters",
                    "AI Auto Filler",
                    "Unlimited saved jobs",
                    "Real-time notifications",
                    "Smart resume analyzer",
                    "Salary insights"
                ],
                recommended: true
            }
        ]
    };

    return (
        <section id="pricing" className="py-16 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-lime-400/5 to-transparent"></div>

            <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="flex justify-center">
                    <Tag>Simple Pricing</Tag>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-center mt-4 max-w-2xl mx-auto leading-tight">
                    Choose the plan that's <span className="text-lime-400">right for you</span>
                </h2>

                <p className="text-white/50 text-sm sm:text-base text-center mt-4 max-w-2xl mx-auto">
                    Start for free, upgrade when you need more features
                </p>

                <div className="mt-8 flex justify-center">
                    <PricingToggle activePlan={activePlan} setActivePlan={setActivePlan} />
                </div>

                {/* Pricing cards - carousel on mobile, flex on desktop */}
                <div 
                    ref={carouselRef}
                    onScroll={handleScroll}
                    className="mt-6 md:flex md:flex-row md:justify-center md:gap-8 max-w-4xl mx-auto
                               flex overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {pricingData[activePlan].map((plan, index) => (
                        <motion.div
                            key={index}
                            className={`bg-neutral-900/50 backdrop-blur-sm border ${plan.recommended ? 'border-lime-400/50' : 'border-white/10'
                                } rounded-2xl p-6 sm:p-8 hover:border-lime-400/30 transition-all duration-300 relative 
                                  md:w-[340px] min-w-[280px] sm:min-w-[320px] flex-shrink-0 mx-4 md:mx-0 shadow-xl
                                  snap-center mt-3`}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        >
                            {plan.recommended && (
                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-lime-400 text-neutral-900 px-4 sm:px-6 py-1 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap">
                                    {activePlan === "monthly" && index === 1 ? "Early Access" : "Recommended"}
                                </div>
                            )}

                            <div className="flex flex-col h-full">
                                <div className="min-h-[150px] md:min-h-[210px] ">
                                    <h3 className="text-2xl sm:text-3xl font-semibold mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                                        {plan.name}
                                    </h3>

                                    <div className="flex items-baseline mb-2">
                                        <motion.span
                                            key={plan.price}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-4xl sm:text-5xl font-bold tracking-tight"
                                        >
                                            {plan.price}
                                        </motion.span>
                                        <span className="text-white/50 ml-2 text-base sm:text-lg">{plan.period}</span>
                                    </div>

                                    {plan.originalPrice && (
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="text-white/50 text-base sm:text-lg line-through">{plan.originalPrice}</span>
                                            <span className="bg-lime-400/10 text-lime-400 text-xs sm:text-sm font-medium px-2 py-0.5 rounded-full border border-lime-400/20">
                                                {Math.round(((parseFloat(plan.originalPrice.replace('₹', '')) - parseFloat(plan.price.replace('₹', ''))) / parseFloat(plan.originalPrice.replace('₹', ''))) * 100)}% OFF
                                            </span>
                                        </div>
                                    )}

                                    <p className="text-lime-400 text-base sm:text-lg mb-1">{plan.description}</p>

                                    {plan.subDescription && (
                                        <p className="text-white/50 text-sm sm:text-base">{plan.subDescription}</p>
                                    )}
                                </div>

                                <div className="mt-6 mb-8">
                                    <Button
                                        variant={plan.buttonVariant}
                                        className={`w-full text-base sm:text-lg font-medium transition-transform duration-300 hover:scale-[1.02] ${plan.buttonVariant === "primary" ? "shadow-lg shadow-lime-400/20" : ""
                                            }`}
                                    >
                                        {plan.buttonText}
                                    </Button>
                                </div>

                                <div className="space-y-4">
                                    {plan.features.map((feature, featureIndex) => (
                                        <motion.div
                                            key={featureIndex}
                                            custom={featureIndex}
                                            variants={featureVariants}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            className="flex items-start group"
                                        >
                                            <Check size={18} className="text-lime-400 mr-3 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                                            <span className="text-white/80 text-sm sm:text-base group-hover:text-white transition-colors duration-300">
                                                {feature}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile scroll indicator dots */}
                <div className="flex justify-center gap-2 mt-4 md:hidden">
                    {pricingData[activePlan].map((_, index) => (
                        <div 
                            key={index}
                            className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                                (scrollPosition > (index * 300) - 50 && scrollPosition < (index * 300) + 50) 
                                ? 'bg-lime-400' 
                                : 'bg-white/30'
                            }`}
                        />
                    ))}
                </div>

                <div className="text-center mt-8 text-white/50 text-xs sm:text-sm">
                    Have questions? Check our <a href="#faqs" className="text-lime-400 hover:underline">FAQ</a> or <a href="/contact" className="text-lime-400 hover:underline">contact us</a>
                </div>
            </div>
        </section>
    );
};

export default Pricing;