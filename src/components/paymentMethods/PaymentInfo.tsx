import { IconCopy } from "@tabler/icons-react";
import { motion } from "framer-motion";
import type React from "react";

type PaymentInfoProps = React.ComponentProps<"div"> & {
	title: string;
	index: number;
	description?: string;
	property?: string;
	referenceId?: string;
	entity?: string;
	value?: string;
	onCopyToClipboard: (value: string, title: string) => void;
};

export const PaymentInfo = ({
	index,
	onCopyToClipboard,
	...info
}: PaymentInfoProps) => {
	const isExpress = info.title.toLowerCase() === "express";

	return (
		<motion.div
			className="mb-6"
			initial={{ x: -20, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			transition={{ delay: index * 0.1 }}
		>
			<h3 className="text-lg md:text-xl dark:text-white text-neutral-900 font-semibold mb-2">
				{info.title}
			</h3>

			{info.description && (
				<motion.p
					initial={{ y: 5, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.3 }}
					className="text-sm text-neutral-500 dark:text-neutral-400"
				>
					{info.description}
				</motion.p>
			)}

			{info.property && (
				<motion.p
					initial={{ y: 5, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.3 }}
					className="text-sm text-neutral-500 dark:text-neutral-400"
				>
					{info.property}
				</motion.p>
			)}

			{isExpress ? (
				<>
					<div className="flex items-center text-neutral-900 bg-white dark:bg-neutral-700 p-3 rounded-md mt-3">
						<p className="font-mono text-sm md:text-base flex-grow">
							Referência: {info.referenceId}
						</p>
						<motion.button
							onClick={() => {
								if (info.referenceId) {
									onCopyToClipboard(info.referenceId, info.title);
								}
							}}
							className="ml-2 text-brand-green hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors"
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
						>
							<IconCopy size={20} />
						</motion.button>
					</div>

					<div className="flex items-center text-neutral-900 bg-white dark:bg-neutral-700 p-3 rounded-md mt-2">
						<p className="font-mono text-sm md:text-base flex-grow">
							Entidade: {info.entity}
						</p>
						<motion.button
							onClick={() => {
								if (info.entity) {
									onCopyToClipboard(info.entity, info.title);
								}
							}}
							className="ml-2 text-brand-green hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors"
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
						>
							<IconCopy size={20} />
						</motion.button>
					</div>
				</>
			) : (
				info.value && (
					<div className="flex items-center text-neutral-900 bg-white dark:bg-neutral-700 p-3 rounded-md mt-3">
						<p className="font-mono text-sm md:text-base flex-grow">
							{info.value}
						</p>
						<motion.button
							onClick={() => {
								if (info.value) {
									onCopyToClipboard(info.value, info.title);
								}
							}}
							className="ml-2 text-brand-green hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors"
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
						>
							<IconCopy size={20} />
						</motion.button>
					</div>
				)
			)}
		</motion.div>
	);
};
