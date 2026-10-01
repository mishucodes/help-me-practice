//Content:
import {brandLogoSquareTransparentDarkMode, brandLogoSquareTransparentLightMode, brandnameStylised} from "#/config/site";
//Components:
import {Link} from "@tanstack/react-router";
import {ModeToggle} from "../mode-toggle";
import {Button} from "../ui/button";

export function Header()
{
    return(
        <header className="bg-emerald-950/25 sticky top-0 z-50 backdrop-blur-xl px-2 py-5 sm:py-3 flex justify-between items-center">
            <div className="flex justify-center items-center">
                <img src={brandLogoSquareTransparentDarkMode} className="hidden dark:block h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14"/>
                <img src={brandLogoSquareTransparentLightMode} className="dark:hidden h-10 w-10 sm:h-12 sm:w-12 md:h-15 md:w-15"/>
                <Link to="/" className="font-bold text-2xl sm:text-3xl md:text-5xl text-foreground">{brandnameStylised}</Link>
            </div>
            <div className="flex justify-center items-center gap-3">
                <Button>Login</Button>
                <ModeToggle/>
            </div>
        </header>
    )
}