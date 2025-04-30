import React, { useRef } from "react";
import { motion } from "framer-motion";

const Grid = () => {
    const gridRef = useRef(null);

    // Create grid cells
    const renderGridCells = () => {
        const cells = [];
        const cellSize = 80; // Size of each grid cell
        const rows = Math.ceil(window.innerHeight / cellSize) + 1;
        const cols = Math.ceil(window.innerWidth / cellSize) + 1;
        
        for (let i = 0; i < rows * cols; i++) {
            const row = Math.floor(i / cols);
            const col = i % cols;
            const delay = (row + col) * 0.05; // Staggered animation delay
            
            // Randomize which cells get enhanced glow effects
            const hasEnhancedGlow = Math.random() > 0.93; // Increased chance by another 20% (7% vs 6%)
            const glowIntensity = hasEnhancedGlow ? 
                Math.random() * 0.0691 : // Another 20% higher intensity (0.0518-0.1209 vs 0.0432-0.1008)
                Math.random() * 0.0151 + 0.0065; // Another 20% higher intensity (0.0065-0.0216 vs 0.0054-0.018)
            
            // Randomize animation timing to create organic feel
            const pulseDuration = hasEnhancedGlow ? 
                Math.random() * 2.7 + 3 : // Slightly faster animation (2.6-5.3 seconds vs 2.8-5.6)
                Math.random() * 3.6 + 4.1;   // Slightly faster animation (3.1-6.7 seconds vs 3.3-7.1)
                
            cells.push(
                <motion.div 
                    key={`cell-${row}-${col}`}
                    className="absolute border border-white/[0.014]" // Another 20% more visible border (0.014 vs 0.012)
                    style={{ 
                        width: cellSize, 
                        height: cellSize,
                        left: col * cellSize,
                        top: row * cellSize,
                        boxShadow: hasEnhancedGlow ? 
                            `0 0 16px rgba(163, 230, 53, ${glowIntensity}),
                            inset 0 0 8px rgba(163, 230, 53, ${glowIntensity * 0.7})` : // 20% brighter (16px vs 14px, 8px vs 7px, 0.7 vs 0.6)
                            'none',
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ 
                        opacity: 1,
                        scale: [1, hasEnhancedGlow ? 1.023 : 1.012, 1], // 20% larger scale change (1.023 vs 1.019, 1.012 vs 1.01)
                        borderColor: hasEnhancedGlow ? 
                            ["rgba(255,255,255,0.014)", "rgba(163,230,53,0.138)", "rgba(255,255,255,0.014)"] : // 20% higher intensity (0.138 vs 0.115)
                            ["rgba(255,255,255,0.014)", "rgba(163,230,53,0.052)", "rgba(255,255,255,0.014)"] // 20% higher intensity (0.052 vs 0.043)
                    }}
                    transition={{ 
                        duration: pulseDuration, 
                        repeat: Infinity, 
                        repeatType: "reverse",
                        delay
                    }}
                />
            );
        }
        return cells;
    };

    return (
        <div 
            ref={gridRef}
            className="fixed inset-0 overflow-hidden pointer-events-none z-0"
        >
            {renderGridCells()}
            
            {/* More visible animated focal points */}
            <motion.div
                className="absolute w-64 h-64 rounded-full bg-lime-400/[0.07] blur-2xl" // 20% more visible (0.07 vs 0.058)
                animate={{
                    x: [0, 43, -22, 0], // 20% larger movement (43 vs 36, -22 vs -18)
                    y: [0, 22, 35, 0], // 20% larger movement (22 vs 18, 35 vs 29)
                    opacity: [0.224, 0.354, 0.268, 0.224], // 20% higher intensity (0.224 vs 0.187, etc)
                    scale: [1, 1.091, 1.048, 1] // 20% larger scale change (1.091 vs 1.076, 1.048 vs 1.04)
                }}
                transition={{ duration: 24, repeat: Infinity, repeatType: "mirror" }} // Slightly faster animation (24 vs 26)
            />
            
            <motion.div
                className="absolute right-1/4 top-1/4 w-82 h-82 rounded-full bg-purple-500/[0.07] blur-2xl" // 20% more visible (0.07 vs 0.058)
                animate={{
                    x: [0, -52, 26, 0], // 20% larger movement (-52 vs -43, 26 vs 22)
                    y: [0, 35, -17, 0], // 20% larger movement (35 vs 29, -17 vs -14)
                    opacity: [0.181, 0.311, 0.224, 0.181], // 20% higher intensity (0.181 vs 0.151, etc)
                    scale: [1, 1.134, 1.048, 1] // 20% larger scale change (1.134 vs 1.112, 1.048 vs 1.04)
                }}
                transition={{ duration: 29, repeat: Infinity, repeatType: "mirror", delay: 2 }} // Slightly faster animation (29 vs 31)
            />
            
            {/* Additional glow spots */}
            <motion.div
                className="absolute left-1/5 bottom-1/3 w-42 h-42 rounded-full bg-blue-400/[0.048] blur-xl" // 20% more visible (0.048 vs 0.04)
                animate={{
                    x: [0, 35, -13, 0], // 20% larger movement (35 vs 29, -13 vs -11)
                    y: [0, -26, 17, 0], // 20% larger movement (-26 vs -22, 17 vs 14)
                    opacity: [0.138, 0.268, 0.181, 0.138], // 20% higher intensity (0.138 vs 0.115, etc)
                    scale: [1, 1.113, 1.048, 1] // 20% larger scale change (1.113 vs 1.094, 1.048 vs 1.04)
                }}
                transition={{ duration: 22, repeat: Infinity, repeatType: "mirror", delay: 5 }} // Slightly faster animation (22 vs 24)
            />
        </div>
    );
};

export default Grid;