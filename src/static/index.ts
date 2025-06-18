import { IconBrandFacebook, IconBrandInstagram, IconBrandWhatsapp, IconBurger, IconCreditCard, IconHome, IconWorld } from "@tabler/icons-react";

export const SOCIAL_LINKS = [
    { 
        icon: IconBrandInstagram, 
        href: "https://www.instagram.com/sacalinha.burguer?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", 
        label: "Instagram" 
    },
    { 
        icon: IconBrandFacebook, 
        href: "https://www.facebook.com/sacalinhaburguer", 
        label: "Facebook" 
    },
    { 
        icon: IconBrandWhatsapp, 
        href: "https://wa.me/+244937351817", 
        label: "WhatsApp" 
    },
];

export const PAYMENT_INFO = [
    { 
        title: "IBAN BCI",
        value: "0005.0000.9132.1427.1019.7",
        property: "JOAO DOS SANTOS JOSE SACALA",
        description: "Utilize este IBAN para transferências bancárias." 
    },
    
    { 
        title: "Número do Express", 
        value: "927 573 541",
        description: "Para transferências express, utilize o número da conta acima."
    },
];

export const MENU_ITEMS = [
    { id: "menu", title: "Menu Digital", icon: IconBurger },
    { id: "redes", title: "Nossas Redes Sociais", icon: IconWorld },
    { id: "pagamento", title: "Formas de Pagamento", icon: IconCreditCard },
    { id: "site", title: "Nosso Site", icon: IconHome },
];