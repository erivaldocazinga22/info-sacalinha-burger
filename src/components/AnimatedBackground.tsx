import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const emojis = ["🍔", "🍟", "🥤", "🍺", "🍕"];

export default function AnimatedBackground() {
    const [particles, setParticles] = useState<JSX.Element[]>([]);

    useEffect(() => {
        const newParticles = [];
        for (let i = 0; i < 20; i++) {
            newParticles.push(
                <motion.div
                    key={i}
                    className="absolute text-2xl opacity-5"
                    initial={{
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight,
                    }}
                    animate={{
                        y: [null, Math.random() * window.innerHeight],
                    }}
                    transition={{
                        duration: Math.random() * 10 + 10,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                >
                    {emojis[Math.floor(Math.random() * emojis.length)]}
                </motion.div>
            );
        }
        setParticles(newParticles);
    }, []);

    return <div className="fixed inset-0 overflow-hidden pointer-events-none">{particles}</div>;
}