import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const Grid = () => {
    const gridRef = useRef(null);
    const [gridCells, setGridCells] = useState([]);
    const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 });
    
    // Calculate grid only when viewport size changes
    useEffect(() => {
        const handleResize = () => {
            setViewportSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };
        
        // Initial calculation
        handleResize();
        
        // Add event listener
        window.addEventListener('resize', handleResize);
        
        // Cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    // Generate grid cells based on viewport size
    useEffect(() => {
        if (viewportSize.width === 0 || viewportSize.height === 0) return;
        
        const cells = [];
        const cellSize = 80;
        
        // Calculate visible rows and columns plus a small buffer
        const rows = Math.ceil(viewportSize.height / cellSize) + 1;
        const cols = Math.ceil(viewportSize.width / cellSize) + 1;
        
        // Limit the number of cells for performance
        const maxCells = 100;
        const totalCells = rows * cols;
        const skipFactor = Math.ceil(totalCells / maxCells);
        
        let cellCount = 0;
        
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                // Skip cells based on the factor to limit total number
                if (cellCount++ % skipFactor !== 0) continue;
                
                const hasEnhancedGlow = Math.random() < 0.1; // Only 10% of cells get enhanced glow
                const glowIntensity = 0.05;
                
                cells.push({
                    key: `cell-${row}-${col}`,
                    style: {
                        width: cellSize,
                        height: cellSize,
                        left: col * cellSize,
                        top: row * cellSize,
                        boxShadow: hasEnhancedGlow ? 
                            `0 0 16px rgba(163, 230, 53, ${glowIntensity})` : 'none',
                    },
                    hasEnhancedGlow,
                });
            }
        }
        
        setGridCells(cells);
    }, [viewportSize]);

    return (
        <div ref={gridRef} className="fixed inset-0 pointer-events-none z-0">
            {gridCells.map((cell) => (
                <motion.div
                    key={cell.key}
                    className="absolute border border-white/[0.014]"
                    style={cell.style}
                    initial={{ opacity: 0 }}
                    animate={{ 
                        opacity: 1,
                        scale: [1, cell.hasEnhancedGlow ? 1.02 : 1.01, 1],
                        borderColor: cell.hasEnhancedGlow ? 
                            ["rgba(255,255,255,0.014)", "rgba(163,230,53,0.1)", "rgba(255,255,255,0.014)"] : 
                            ["rgba(255,255,255,0.014)", "rgba(255,255,255,0.014)", "rgba(255,255,255,0.014)"]
                    }}
                    transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                        times: [0, 0.5, 1],
                        delay: Math.random() * 2
                    }}
                />
            ))}
        </div>
    );
};

export default React.memo(Grid);