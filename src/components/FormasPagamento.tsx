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
            className="bg-gray-800 p-8 rounded-lg shadow-lg"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            <h2 className="text-3xl font-display mb-6 text-neon-green">Informações de Pagamento</h2>
            {paymentInfo.map((info, index) => (
                <motion.div 
                    key={index} 
                    className="mb-6"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                >
                    <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                    <div className="flex items-center bg-gray-700 p-3 rounded-md">
                        <p className="font-mono flex-grow">{info.value}</p>
                        <motion.button
                            onClick={() => copyToClipboard(info.value, info.title)}
                            className="ml-2 text-neon-green hover:text-white transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <IconCopy />
                        </motion.button>
                    </div>
                </motion.div>
            ))}
            {copiedText && (
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-neon-green text-sm mt-2"
                >
                    {copiedText} copiado para a área de transferência!
                </motion.p>
            )}
            <motion.p 
                className="mt-6 text-sm text-gray-400"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
        Para transferências express, utilize o número da conta acima.
            </motion.p>
        </motion.div>
    );
}

