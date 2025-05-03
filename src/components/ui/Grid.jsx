import React, { useRef } from "react";
import { motion } from "framer-motion";

const Grid = () => {
    const gridRef = useRef(null);

    const renderGridCells = () => {
        const cells = [];
        const cellSize = 80; // Size of each grid cell
        const rows = Math.ceil(window.innerHeight / cellSize) + 1;
        const cols = Math.ceil(window.innerWidth / cellSize) + 1;

        for (let i = 0; i < rows * cols; i++) {
            const row = Math.floor(i / cols);
            const col = i % cols;
            const hasEnhancedGlow = Math.random() < 0.15; // Increased chance for enhanced glow

            cells.push(
                <motion.div
                    key={`cell-${i}`}
                    className="absolute border border-white/[0.03]" // Increased base opacity
                    style={{
                        width: cellSize,
                        height: cellSize,
                        left: col * cellSize,
                        top: row * cellSize,
                        boxShadow: hasEnhancedGlow
                            ? `0 0 16px rgba(163, 230, 53, 0.1)` // Increased glow intensity
                            : "none",
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ 
                        opacity: 1,
                        scale: [1, hasEnhancedGlow ? 1.03 : 1.01, 1], // Slightly increased scale effect
                        borderColor: hasEnhancedGlow
                            ? ["rgba(255,255,255,0.03)", "rgba(163,230,53,0.15)", "rgba(255,255,255,0.03)"] // Increased color intensity
                            : ["rgba(255,255,255,0.03)", "rgba(255,255,255,0.06)", "rgba(255,255,255,0.03)"] // Added subtle animation for non-glowing cells
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                        times: [0, 0.5, 1],
                        delay: Math.random() * 2,
                    }}
                />
            );
        }

        return cells;
    };

    return (
        <div ref={gridRef} className="fixed inset-0 pointer-events-none z-0">
            {renderGridCells()}
        </div>
    );
};

export default Grid;