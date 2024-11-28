import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Logo from "../assets/sacalinha_burguer_logo.webp";

export default function Header() {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <header className="py-6 px-4 text-center relative overflow-hidden">
            <div className="flex items-center justify-center space-x-4">
                <img
                    src={Logo}
                    alt="Logo Sacalinha Burguer"
                    width={60}
                    height={60}
                    className="rounded-full "
                />
                <motion.h1 
                    className="text-4xl md:text-6xl font-display text-brand-green relative z-10"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
                    transition={{ duration: 0.5 }}
                >
                    Sacalinha Burguer
                </motion.h1>
            </div>
            <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-neutral-200 dark:text-neutral-700 text-7xl md:text-9xl opacity-10 z-0"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
                🍔
            </motion.div>
        </header>
    );
}

