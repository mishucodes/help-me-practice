import {Link} from "@tanstack/react-router";
//Content:
import {headerTitle, brandLogoInLightMode, brandLogoInDarkMode} from "#/content/header";

export function Navigation()
{
    return(
        <div className="flex items-center justify-center bg-red-400/0">
            <img src={brandLogoInLightMode} alt="brand logo" className="h-8 w-8 md:h-12 md:w-12 dark:hidden" />
            <img src={brandLogoInDarkMode} alt="brand logo" className="h-8 w-8 md:h-12 md:w-12 hidden dark:inline" />
            <Link to="/" className="font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight">{headerTitle}</Link>
        </div>
    )
}