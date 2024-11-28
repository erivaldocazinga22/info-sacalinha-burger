import { motion } from "framer-motion";

export default function NossoSite() {
    return (
        <div className="text-center">
            <motion.a
                href="https://www.sacalinhaburguer.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 text-xl font-semibold bg-neon-green text-gray-900 rounded-full hover:bg-opacity-80 transition-colors shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(57,255,20)" }}
                whileTap={{ scale: 0.95 }}
            >
        Visite Nosso Site
            </motion.a>
            <motion.p 
                className="mt-6 text-gray-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
        Descubra nosso cardápio completo e faça seu pedido online!
            </motion.p>
        </div>
    );
}

