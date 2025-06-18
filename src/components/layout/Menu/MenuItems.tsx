import { motion } from "framer-motion";
import type { ElementType } from "react";

type MenuItemsProps = {
    icon: ElementType;
    title: string;
    active: boolean;
    onChangeActive: () => void
}

export const MenuItems = ({ title, icon: Icon, active, onChangeActive }: MenuItemsProps) => {
    return (
        <motion.button
            onClick={onChangeActive}
            className={`px-4 py-2 rounded-full transition-colors text-sm md:text-base font-semibold flex items-center ${
                active
                    ? "bg-brand-green text-white"
                    : `text-neutral-500 hover:text-neutral-700 bg-neutral-200  
                    dark:text-neutral-400 dark:hover:text-neutral-300 dark:bg-neutral-700`
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <Icon size={20} className="mr-2" />
            {title}
        </motion.button>
    );
};
