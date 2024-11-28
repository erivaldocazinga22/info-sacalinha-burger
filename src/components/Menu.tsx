"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RedesSociais from "./RedesSociais";
import FormasPagamento from "./FormasPagamento";
import NossoSite from "./NossoSite";

export default function Menu() {
    const [activeSection, setActiveSection] = useState<string | null>(null);

    const menuItems = [
        { id: "redes", title: "Nossas Redes Sociais", emoji: "🌐" },
        { id: "pagamento", title: "Formas de Pagamento", emoji: "💳" },
        { id: "site", title: "Nosso Site", emoji: "🏠" },
    ];

    return (
        <div className="max-w-4xl mx-auto mt-12">
            <div className="flex justify-center space-x-4 mb-12">
                {menuItems.map((item) => (
                    <motion.button
                        key={item.id}
                        onClick={() => setActiveSection(item.id)}
                        className={`px-6 py-3 rounded-full transition-colors text-lg font-semibold ${
                            activeSection === item.id
                                ? "bg-neon-green text-gray-900"
                                : "bg-gray-800 hover:bg-gray-700"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="mr-2">{item.emoji}</span>
                        {item.title}
                    </motion.button>
                ))}
            </div>
            <AnimatePresence mode="wait">
                {activeSection && (
                    <motion.div
                        key={activeSection}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="mt-8"
                    >
                        {activeSection === "redes" && <RedesSociais />}
                        {activeSection === "pagamento" && <FormasPagamento />}
                        {activeSection === "site" && <NossoSite />}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

