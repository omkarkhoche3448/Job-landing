import React, { useState } from "react";
import Tag from "../components/Tag";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { twMerge } from "tailwind-merge";

const faqs = [
    {
        question: "How does Handjobs aggregate job listings?",
        answer: "Handjobs uses advanced web crawling techniques to fetch job postings from multiple platforms like LinkedIn, Indeed, Ziprecruiter, and more. Our algorithms process and categorize these listings to ensure you get relevant, high-quality results.",
    },
    {
        question: "Is Handjobs completely free to use?",
        answer: "We offer a free tier that gives you access to basic search functionality across platforms. For advanced features like unlimited saved jobs, real-time notifications, and application tracking, we offer affordable premium plans.",
    },
    {
        question: "How often are job listings updated?",
        answer: "Our crawlers run continuously, ensuring that new job postings are added to our database as soon as they appear on the source platforms. Premium users receive real-time notifications for new jobs matching their criteria.",
    },
    {
        question: "Can I apply to jobs directly through Handjobs?",
        answer: "Yes, for many job listings you can apply directly through our platform. For others, we provide a direct link to the original posting where you can complete your application.",
    },
    {
        question: "How is Handjobs different from other job search platforms?",
        answer: "Unlike traditional job boards, Handjobs doesn't host job listings directly. Instead, we aggregate opportunities from multiple sources, saving you the time and effort of searching across different platforms. Our advanced filtering and search capabilities help you find exactly what you're looking for.",
    },
];

function Faqs() {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleClick = (faqIndex) => {
        setSelectedIndex(selectedIndex === faqIndex ? null : faqIndex);
    };

    return (
        <section  id="faqs" className="py-16 md:py-24 bg-neutral-950">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center">
                    <Tag>Faqs</Tag>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mt-6 text-center max-w-xl mx-auto">
                    Questions? We've got{" "}
                    <span className="text-lime-400">answers</span>
                </h2>

                <div className="mt-8 md:mt-12 flex flex-col gap-6 max-w-2xl mx-auto">
                    {faqs.map((faq, faqIndex) => (
                        <div
                            key={faq.question}
                            onClick={() => handleClick(faqIndex)}
                            className="bg-neutral-900 rounded-2xl border border-white/10 p-6 cursor-pointer transition duration-300 hover:border-lime-400"
                        >
                            <div className="flex justify-between items-start">
                                <h3 className="font-medium m-0">
                                    {faq.question}
                                </h3>
                                <Plus
                                    size={30}
                                    className={twMerge(
                                        "feather feather-plus text-lime-400 flex-shrink-0 transition duration-300",
                                        selectedIndex === faqIndex &&
                                            "rotate-45"
                                    )}
                                />
                            </div>

                            <AnimatePresence>
                                {selectedIndex === faqIndex && (
                                    <motion.div
                                        initial={{
                                            height: 0,
                                            marginTop: 0,
                                        }}
                                        animate={{
                                            height: "auto",
                                            marginTop: 24,
                                        }}
                                        exit={{
                                            height: 0,
                                            marginTop: 0,
                                        }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-white/50">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Faqs;
