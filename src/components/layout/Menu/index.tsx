import { DigitalMenu } from "@/components/digitalMenu";
import { OurWebsite } from "@/components/ourWebsite";
import { PaymentMethods } from "@/components/paymentMethods";
import { SocialMedia } from "@/components/socialMedia";
import { MENU_ITEMS } from "@/static";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { MenuItems } from "./MenuItems";

export const Menu = () => {
	const [activeSection, setActiveSection] = useState<string | null>("menu");

	return (
		<div className="max-w-4xl mx-auto mt-12 px-4">
			<div className="flex flex-wrap justify-center gap-4 mb-12">
				{MENU_ITEMS.map((item) => (
					<MenuItems
						key={item.id}
						title={item.title}
						icon={item.icon}
						active={item.id === activeSection}
						onChangeActive={() => setActiveSection(item.id)}
					/>
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
						{activeSection === "menu" && <DigitalMenu />}
						{activeSection === "redes" && <SocialMedia />}
						{activeSection === "pagamento" && <PaymentMethods />}
						{activeSection === "site" && <OurWebsite />}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};
