import { AnimatedBackground } from "../components/layout/AnimatedBackground";
import { Header } from "../components/layout/Header";
import { Menu } from "../components/layout/Menu";

export default function Home() {
    return (
        <main className="min-h-screen relative overflow-hidden">
            <AnimatedBackground />
            <div className="relative z-10 px-4 mb-10">
                <Header />
                <Menu />
            </div>
        </main>
  
    );
}
