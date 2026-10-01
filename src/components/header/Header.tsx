//Content:
import {brandLogoSquareTransparentDarkMode, brandnameStylised} from "#/config/site";
//Components:
import {Link} from "@tanstack/react-router";
import { ModeToggle } from "../mode-toggle";
import { Button } from "../ui/button";

export function Header()
{
    return(
        <header className="px-2 py-2 flex justify-between items-center">
            <div className="flex justify-center items-center">
                <img src={brandLogoSquareTransparentDarkMode} className="h-15 w-15"/>
                <Link to="/" className="font-bold text-5xl text-foreground">{brandnameStylised}</Link>
            </div>
            <div className="flex justify-center items-center gap-3">
                <Button>Login</Button>
                <ModeToggle/>
            </div>
        </header>
    )
}