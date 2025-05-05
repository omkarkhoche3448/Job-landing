import React from "react";
import Tag from "../components/Tag";
import { Check } from "lucide-react";
import Button from "../components/Button";

const pricingPlans = [
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
        price: "₹149",
        period: "/month",
        description: "Early Bird Offer",
        subDescription: "For serious job hunters",
        buttonText: "Start Free Trial",
        buttonVariant: "primary",
        features: [
            "Advanced search with all filters",
            "Unlimited saved jobs",
            "Real-time notifications",
            "Application tracking",
            "Resume analyzer",
            "Salary insights"
        ],
        recommended: true
    },
    // {
    //     name: "Enterprise",
    //     price: "Custom",
    //     period: "",
    //     description: "For teams and organizations",
    //     buttonText: "Contact Sales",
    //     buttonVariant: "outline",
    //     features: [
    //         "Everything in Pro",
    //         "API access",
    //         "Custom integrations",
    //         "Dedicated account manager",
    //         "Advanced analytics",
    //         "White-label options"
    //     ],
    //     recommended: false
    // }
];

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

function Pricing() {
    return (
        <section id="pricing" className="py-16 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-lime-400/5 to-transparent"></div>

            <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="flex justify-center">
                    <Tag>Simple Pricing</Tag>
                </div>
                <h2 className="text-4xl lg:text-5xl font-medium text-center mt-4 max-w-2xl mx-auto leading-tight">
                    Choose the plan that's <span className="text-lime-400">right for you</span>
                </h2>
                <p className="text-white/50 text-base text-center mt-4 max-w-2xl mx-auto">
                    Start for free, upgrade when you need more features
                </p>

                <div className="mt-10 flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto">
                    {pricingPlans.map((plan, index) => (
                        <div
                            key={index}
                            className={`bg-neutral-900/50 backdrop-blur-sm border ${plan.recommended ? 'border-lime-400/50' : 'border-white/10'} rounded-2xl p-8 hover:border-lime-400/30 transition-all duration-300 relative md:w-[340px] w-full`}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            whileHover={{ y: -5 }}
                        >
                            {plan.recommended && (
                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-lime-400 text-neutral-900 px-6 py-1 rounded-full text-sm font-medium">
                                    Recommended
                                </div>
                            )}
                            <div className="flex flex-col h-full">
                                <div className="h-[160px]">
                                    <h3 className="text-3xl font-semibold mb-4">{plan.name}</h3>
                                    <div className="flex items-baseline mb-2">
                                        <span className="text-5xl font-bold tracking-tight">₹{plan.price.replace('₹', '')}</span>
                                        <span className="text-white/50 ml-2 text-lg">{plan.period}</span>
                                    </div>
                                    <p className="text-lime-400 text-lg mb-2">{plan.description}</p>
                                    {plan.subDescription && (
                                        <p className="text-white/50 text-base">{plan.subDescription}</p>
                                    )}
                                </div>

                                <div className="mt-6 mb-8">
                                    <Button variant={plan.buttonVariant} className="w-full py-3 text-lg font-medium">
                                        {plan.buttonText}
                                    </Button>
                                </div>

                                <div className="space-y-4">
                                    {plan.features.map((feature, featureIndex) => (
                                        <div key={featureIndex} className="flex items-start">
                                            <Check size={20} className="text-lime-400 mr-3 flex-shrink-0 mt-0.5" />
                                            <span className="text-white/80 text-base">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-8 text-white/50 text-sm">
                    Have questions? Check our <a href="#faqs" className="text-lime-400 hover:underline">FAQ</a> or <a href="/contact" className="text-lime-400 hover:underline">contact us</a>
                </div>
            </div>
        </section>
    );
}

export default Pricing;