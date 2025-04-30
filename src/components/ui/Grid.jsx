import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const Grid = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const gridRef = useRef(null);

    // Track mouse position for subtle grid movement
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        
        window.addEventListener('mousemove', handleMouseMove);
        
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

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
            
            cells.push(
                <motion.div 
                    key={`cell-${row}-${col}`}
                    className="absolute border border-white/[0.03]"
                    style={{ 
                        width: cellSize, 
                        height: cellSize,
                        left: col * cellSize,
                        top: row * cellSize,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ 
                        opacity: 1,
                        scale: [1, 1.02, 1],
                        borderColor: Math.random() > 0.97 ? ["rgba(255,255,255,0.03)", "rgba(163,230,53,0.2)", "rgba(255,255,255,0.03)"] : "rgba(255,255,255,0.03)"
                    }}
                    transition={{ 
                        duration: Math.random() * 3 + 2, 
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
            style={{
                transform: `perspective(1000px) rotateX(${mousePosition.y * 0.005}deg) rotateY(${-mousePosition.x * 0.005}deg)`,
                transition: 'transform 0.1s ease-out',
            }}
        >
            {renderGridCells()}
            
            {/* Animated focal points */}
            <motion.div
                className="absolute w-40 h-40 rounded-full bg-lime-400/5 blur-xl"
                animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                    opacity: [0.4, 0.6, 0.4],
                }}
                transition={{ duration: 15, repeat: Infinity, repeatType: "mirror" }}
            />
            
            <motion.div
                className="absolute right-1/4 top-1/4 w-60 h-60 rounded-full bg-purple-500/5 blur-xl"
                animate={{
                    x: [0, -120, 0],
                    y: [0, 80, 0],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 18, repeat: Infinity, repeatType: "mirror", delay: 2 }}
            />
        </div>
    );
};

export default Grid;