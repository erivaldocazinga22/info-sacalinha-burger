import { useDarkMode } from "@/hooks/darkmode";
import { IconMoon, IconSun } from "@tabler/icons-react";
import type React from "react";
import { cn } from "../../lib/utils";

type DarkModeToggleProps = React.ComponentProps<"button">;

export const DarkModeToggle = ({ className, ...rest}: DarkModeToggleProps) => {
    const [isDarkMode, toggleDarkMode] = useDarkMode(); 
    return ( 
        <button onClick={toggleDarkMode} className={cn("p-2 rounded-full text-neutral-900 dark:text-neutral-50 bg-neutral-200 dark:bg-neutral-800", className)} {...rest}> 
            {isDarkMode ? <IconSun /> : <IconMoon />} 
        </button> 
    );
};
