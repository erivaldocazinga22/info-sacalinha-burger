import homemNoEscritorio from "@/assets/cheese-burguer.jpeg";

export const DigitalMenu = () => {
    return (
        <div>
            <div className="text-neutral-900 w-[200px] h-[200px] overflow-hidden">
                <img src={homemNoEscritorio} alt="Digital Menu" className="rounded-lg shadow-lg w-full h-full object-cover object-top" />
            </div>
            <div className="mt-4">
                <h2 className="text-2xl font-bold text-neutral-900">Cheese Burguer</h2>
                <h3 className="text-xl font-bold text-neutral-700">2000 kz</h3>
                <div>
                    <p className="text-sm text-neutral-500 mt-2">Delicioso Cheese Burguer com ingredientes frescos e saborosos.</p>
                    <p className="text-sm text-neutral-500 mt-2">Ingredientes:</p>
                    <ul className="list-disc list-inside text-sm text-neutral-500 mt-2">
                        <li>Pão Brioche</li>
                        <li>Molho Sacalinha</li>
                        <li>Carne</li>
                        <li>Queijo</li>
                        <li>Ovo</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};