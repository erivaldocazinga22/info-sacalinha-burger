import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RedesSociais from "./RedesSociais";
import FormasPagamento from "./FormasPagamento";
import NossoSite from "./NossoSite";
import { IconCreditCard, IconHome, IconWorld } from "@tabler/icons-react";

export default function Menu() {
    const [activeSection, setActiveSection] = useState<string | null>("redes");

    const menuItems = [
        { id: "redes", title: "Nossas Redes Sociais", icon: IconWorld },
        { id: "pagamento", title: "Formas de Pagamento", icon: IconCreditCard },
        { id: "site", title: "Nosso Site", icon: IconHome },
    ];
    
    return (
        <div className="max-w-4xl mx-auto mt-12 px-4">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {menuItems.map((item) => (
                    <motion.button
                        key={item.id}
                        onClick={() => setActiveSection(item.id)}
                        className={`px-4 py-2 rounded-full transition-colors text-sm md:text-base font-semibold flex items-center ${
                            activeSection === item.id
                                ? "bg-brand-green text-white"
                                : "bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 hover:bg-brand-green hover:text-white"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <item.icon size={20} className="mr-2" />
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

