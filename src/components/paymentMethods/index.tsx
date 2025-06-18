import { motion } from "framer-motion";
import { PAYMENT_INFO } from "../../static";
import { useCopyToClipboard } from "../../hooks/copyToClipboard";
import { PaymentInfo } from "./PaymentInfo";

export const PaymentMethods = () => {
    const { copiedText, onCopyToClipboard } = useCopyToClipboard();

    return (
        <motion.div 
            className="bg-neutral-100 dark:bg-neutral-800 p-6 md:p-8 rounded-lg shadow-lg"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            <h2 className="text-2xl md:text-3xl font-display mb-6 text-brand-green">Informações de Pagamento</h2>
            {PAYMENT_INFO.map((info, index) => (
                <PaymentInfo key={info.value || info.title || index} index={index} 
                    title={info.title}
                    description={info.description}
                    property={info.property}
                    value={info.value}
                    onCopyToClipboard={onCopyToClipboard}
                />
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
        </motion.div>
    );
};

