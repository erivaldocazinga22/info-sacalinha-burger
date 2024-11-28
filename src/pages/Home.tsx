import AnimatedBackground from "../components/AnimatedBackground";
import Header from "../components/Header";
import Menu from "../components/Menu";

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
