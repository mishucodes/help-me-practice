//Components:
import {SearchBox} from "./SearchBox";
import {Navigation} from "./Navigation";
import {QuickActionButtons} from "./QuickActionButtons";

export function Header()
{
    return(
        <header className="bg-popover p-2 grid grid-cols-[auto_1fr] md:grid-cols-[auto_1fr_auto] items-center gap-5 border-b">
            <Navigation/>
            <SearchBox/>
            <QuickActionButtons/>
        </header>
    )
}