import { motion } from "framer-motion";
import { useState } from "react";
import { IconCopy } from "@tabler/icons-react";

export default function FormasPagamento() {
    const paymentInfo = [
        { title: "IBAN", value: "PT50 0000 0000 0000 0000 0000 0" },
        { title: "Número da Conta", value: "0000 0000 0000" },
    ];

    const [copiedText, setCopiedText] = useState<string | null>(null);

    const copyToClipboard = (text: string, label: string) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopiedText(label);
            setTimeout(() => setCopiedText(null), 2000);
        });
    };

    return (
        <motion.div 
            className="bg-neutral-100 dark:bg-neutral-800 p-6 md:p-8 rounded-lg shadow-lg"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            <h2 className="text-2xl md:text-3xl font-display mb-6 text-brand-green">Informações de Pagamento</h2>
            {paymentInfo.map((info, index) => (
                <motion.div 
                    key={index} 
                    className="mb-6"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                >
                    <h3 className="text-lg md:text-xl text-neutral-900 font-semibold mb-2">{info.title}</h3>
                    <div className="flex items-center text-neutral-900 bg-white dark:bg-neutral-700 p-3 rounded-md">
                        <p className="font-mono text-sm md:text-base flex-grow">{info.value}</p>
                        <motion.button
                            onClick={() => copyToClipboard(info.value, info.title)}
                            className="ml-2 text-brand-green hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <IconCopy size={20} />
                        </motion.button>
                    </div>
                </motion.div>
            ))}
            {copiedText && (
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-brand-green text-sm mt-2"
                >
                    {copiedText} copiado para a área de transferência!
                </motion.p>
            )}
            <motion.p 
                className="mt-6 text-sm text-neutral-500 dark:text-neutral-400"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
        Para transferências express, utilize o número da conta acima.
            </motion.p>
        </motion.div>
    );
}

