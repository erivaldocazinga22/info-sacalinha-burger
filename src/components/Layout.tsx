import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps)  => {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            {children}
        </div>
    );
};

