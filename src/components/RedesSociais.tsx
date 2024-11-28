import { motion } from "framer-motion";
import { IconBrandInstagram, IconBrandFacebook, IconBrandWhatsapp } from "@tabler/icons-react";

export default function RedesSociais() {
    const socialLinks = [
        { icon: IconBrandInstagram, href: "https://www.instagram.com/sacalinha.burguer?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", label: "Instagram" },
        { icon: IconBrandFacebook, href: "https://www.facebook.com/sacalinhaburguer", label: "Facebook" },
        { icon: IconBrandWhatsapp, href: "https://wa.me/+244937351817", label: "WhatsApp" },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {socialLinks.map((link, index) => (
                <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-6 bg-neutral-100 dark:bg-neutral-800 rounded-lg hover:bg-brand-green hover:text-white transition-colors group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <motion.div
                        className="text-brand-green group-hover:text-white text-4xl mb-3"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1.5 }}
                    >
                        <link.icon size={40} />
                    </motion.div>
                    <span className="text-lg font-semibold text-neutral-900 group-hover:text-white transition-colors">
                        {link.label}
                    </span>
                </motion.a>
            ))}
        </div>
    );
}

