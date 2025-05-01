import React, { Fragment } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const IntegrationColumn = (props) => {
    const { integrations, className, reverse } = props;
    return (
        <motion.div
            initial={{
                y: reverse ? "-50%" : 0,
            }}
            animate={{
                y: reverse ? 0 : "-50%",
            }}
            transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
            }}
            className={twMerge("flex flex-col gap-5 pb-4", className)}
        >
            {Array.from({ length: 2 }).map((_, i) => (
                <Fragment key={i}>
                    {integrations.map((integration) => (
                        <div
                            key={integration.name}
                            className="bg-neutral-900 border border-white/10 rounded-xl p-5"
                        >
                            <div className="flex justify-center">
                                <img
                                    className="w-20 h-20"
                                    src={integration.icon}
                                    alt={`${integration.name}-icon`}
                                />
                            </div>
                            <h3 className="text-xl text-center mt-4">
                                {integration.name}
                            </h3>
                            <p className="text-center text-white/50 mt-2 text-sm">
                                {integration.description}
                            </p>
                        </div>
                    ))}
                </Fragment>
            ))}
        </motion.div>
    );
};

export default IntegrationColumn;
