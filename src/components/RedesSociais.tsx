import { motion } from "framer-motion";
import { IconBrandInstagram, IconBrandFacebook, IconBrandWhatsapp } from "@tabler/icons-react";

export default function RedesSociais() {
    const socialLinks = [
        { icon: IconBrandInstagram, href: "https://www.instagram.com/sacalinhaburguer", label: "Instagram" },
        { icon: IconBrandFacebook, href: "https://www.facebook.com/sacalinhaburguer", label: "Facebook" },
        { icon: IconBrandWhatsapp, href: "https://wa.me/5511999999999", label: "WhatsApp" },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {socialLinks.map((link, index) => (
                <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <motion.div
                        className="text-neon-green text-4xl mb-3"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1.5 }}
                    >
                        <link.icon />
                    </motion.div>
                    <span className="text-lg font-semibold group-hover:text-neon-green transition-colors">
                        {link.label}
                    </span>
                </motion.a>
            ))}
        </div>
    );
}

