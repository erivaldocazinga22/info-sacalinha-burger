import Indsponivel from "@/assets/indisponivel.jpg";
import Sumol from "@/assets/nova-sumol3.jpeg";
import ChesseBacon from "@/assets/novo-cheese-bacon.jpeg";
// Importe ou defina a imagem do hambúrguer
import CheeseBurguer from "@/assets/novo-cheese-burguer2.jpeg";
import {
	IconBrandFacebook,
	IconBrandInstagram,
	IconBrandWhatsapp,
	IconBurger,
	IconCreditCard,
	IconHome,
	IconWorld,
} from "@tabler/icons-react";

export const SOCIAL_LINKS = [
	{
		icon: IconBrandInstagram,
		href: "https://www.instagram.com/sacalinha.burguer?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
		label: "Instagram",
	},
	{
		icon: IconBrandFacebook,
		href: "https://www.facebook.com/sacalinhaburguer",
		label: "Facebook",
	},
	{
		icon: IconBrandWhatsapp,
		href: "https://wa.me/+244937351817",
		label: "WhatsApp",
	},
];

export const PAYMENT_INFO = [
	{
		title: "IBAN BCI",
		value: "0005.0000.9132.1427.1019.7",
		property: "JOAO DOS SANTOS JOSE SACALA",
		description: "Utilize este IBAN para transferências bancárias.",
	},

	{
		title: "Número do Express",
		value: "927 573 541",
		description:
			"Para transferências express, utilize o número da conta acima.",
	},
];

export const MENU_ITEMS = [
	{ id: "menu", title: "Menu Digital", icon: IconBurger },
	{ id: "redes", title: "Nossas Redes Sociais", icon: IconWorld },
	{ id: "pagamento", title: "Formas de Pagamento", icon: IconCreditCard },
	{ id: "site", title: "Nosso Site", icon: IconHome },
];

export const DIGITAL_MENU = [
	{
		title: "Hambúrgueres",
		items: [
			{
				name: "Cheese Burguer",
				description:
					"Delicioso Cheese Burguer com ingredientes frescos e saborosos!.",
				img: CheeseBurguer,
				price: 2000,
			},
			{
				name: "Cheese Salada",
				description:
					"Cheese Salada leve e delicioso, com ingredientes frescos e o sabor que conquista!.",
				img: Indsponivel,
				price: 2500,
			},
			{
				name: "Cheese Bacon",
				description:
					"O irresistível Cheese Bacon com bacon crocante, queijo derretido e muito sabor!",
				img: ChesseBacon,
				price: 2700,
			},
			{
				name: "Coleslaw Burguer",
				description:
					"Coleslaw cremoso e refrescante, feito com repolho crocante e cenoura fresquinha!",
				img: Indsponivel,
				price: 3200,
			},
			{
				name: "Double Cheese Burguer",
				description:
					"ODuas carnes suculentas, dobro de queijo derretido, pão macio e sabor em dobro!",
				img: Indsponivel,
				price: 3500,
			},
		],
	},
	{
		title: "Cachorros",
		items: [
			{
				name: "Cachorro de Bacon",
				description:
					"Delicioso Cheese Burguer com ingredientes frescos e saborosos.",
				img: Indsponivel,
				price: 2000,
			},
			{
				name: "Cachorro Vinagrete",
				description:
					"Cheese Salada leve e delicioso, com ingredientes frescos e o sabor que conquista!.",
				img: Indsponivel,
				price: 2500,
			},
		],
	},
	{
		title: "Bebidas",
		items: [
			{
				name: "Sumol",
				description:
					"Cheese Salada leve e delicioso, com ingredientes frescos e o sabor que conquista!.",
				img: Sumol,
				price: 700,
			},
			{
				name: "Pepsi",
				description:
					"Pepsi gelada e refrescante, perfeita para acompanhar seu lanche!",
				img: Indsponivel,
				price: 250,
			},
			{
				name: "Água Mineral",
				description:
					"Água mineral pura e refrescante, ideal para hidratação!",
				img: Indsponivel,
				price: 150,
			},
		],
	},
];
