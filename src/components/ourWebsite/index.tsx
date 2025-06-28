import { IconExternalLink } from "@tabler/icons-react";
import { motion } from "framer-motion";

export const OurWebsite = () => {
	return (
		<div className="text-center">
			<motion.a
				href="https://www.sacalinhaburguer.com"
				target="_blank"
				rel="noopener noreferrer"
				className="inline-flex items-center px-6 py-3 text-lg font-semibold bg-brand-green text-white rounded-full hover:bg-opacity-90 transition-colors shadow-lg"
				whileHover={{
					scale: 1.05,
					boxShadow: "0px 0px 8px rgb(65,134,19)",
				}}
				whileTap={{ scale: 0.95 }}
			>
				Visite Nosso Site
				<IconExternalLink size={20} className="ml-2" />
			</motion.a>
			<motion.p
				className="mt-6 text-neutral-600 dark:text-neutral-400"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.2 }}
			>
				Descubra nosso cardápio completo e faça seu pedido online!
			</motion.p>
			<motion.div
				className="mt-8 p-4 border-t-4 border-brand-green text-neutral-900 bg-neutral-100 dark:bg-neutral-800 rounded-lg"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.4 }}
			>
				<p className="text-brand-green font-semibold">
					Horário de Funcionamento:
				</p>
				<p className="mt-2">Segunda a Domingo: 11h às 21h</p>
			</motion.div>
		</div>
	);
};
