"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Header() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <header className="py-6 text-center relative overflow-hidden">
            <motion.h1 
                className="text-6xl font-display text-neon-green relative z-10"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
                transition={{ duration: 0.5 }}
            >
        Sacalinha Burguer
            </motion.h1>
            <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-bun-gold text-9xl opacity-10 z-0"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
        🍔
            </motion.div>
        </header>
    );
}

