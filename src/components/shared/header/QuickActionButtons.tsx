import {ModeToggle} from "#/components/mode-toggle";
import {Button} from "#/components/ui/button";
import {Link} from "@tanstack/react-router";
//Content:
import {loginLabel} from "#/content/header";

export function QuickActionButtons()
{
    return(
        <div className="flex justify-end items-center gap-2">
            <Link to="/">
                <Button variant="default">{loginLabel}</Button>
            </Link>
            <ModeToggle/>
        </div>
    )
}