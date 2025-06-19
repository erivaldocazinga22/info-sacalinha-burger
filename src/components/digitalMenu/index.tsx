import { DIGITAL_MENU } from "@/static";

export const DigitalMenu = () => {
    return (
        <div>
            

            {DIGITAL_MENU.map((item) => (
                <div key={item.title} className="bg-neutral-100 dark:bg-neutral-800 p-6 md:p-8 rounded-lg shadow-lg mt-6">
                    <h2 className="text-2xl font-bold dark:text-white text-neutral-900">{item.title}</h2>
                    
                    <ul className="list-disc list-inside text-sm text-neutral-500 mt-2 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {item.items.map((i) => (
                            <li key={i.name} className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-md">
                                <div className="w-[200px] h-[200px] overflow-hidden">
                                    <img src={i.img} alt={i.name} className="rounded-lg shadow-lg w-full h-full object-cover object-top" />
                                </div>
                                <span className="text-xl font-bold dark:text-white text-neutral-900">{i.name}</span>
                                <br />
                                <span className="text-sm dark:text-white text-neutral-800">{i.price} kz</span>

                                <p className="text-sm text-neutral-500 mt-2">{i.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};