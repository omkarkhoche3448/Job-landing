import { MousePointer2 } from "lucide-react";
import React from "react";
import { twMerge } from "tailwind-merge";

const Pointer = (props) => {
    const { name, color } = props;

    const colorClasses = {
        red: "bg-red-500",
        blue: "bg-blue-500",
        green: "bg-green-500",
        purple: "bg-purple-500",
        orange: "bg-orange-500",
        yellow: "bg-yellow-500",
        lime: "bg-lime-400",
        default: "bg-blue-500"
    };

    return (
        <div className="pointer-wrapper">
            <MousePointer2 size={25} className={`mb-1 ${color ? `text-${color}-500` : "text-blue-500"}`}/>
            <p
                className={twMerge(
                    "ml-5 inline-flex rounded-full font-bold text-sm px-2 py-0.5 rounded-tl-none shadow-lg",
                    colorClasses[color] || colorClasses.default
                )}
            >
                {name}
            </p>
        </div>
    );
};

export default Pointer;
