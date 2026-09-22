import {heading, textForCTA} from "#/content/landing-page/closingCTA";
import {buttonVariants} from "../ui/button";
import {Link} from "@tanstack/react-router";

export function ClosingCTA()
{
    return(
        <section className="bg-primary/5 px-10 py-20 flex flex-col justify-center items-center gap-8 text-center">
            <h2 className="font-bold text-4xl md:text-5xl">{heading}</h2>
            <Link to="/" className={buttonVariants({size: "lg"})}>{textForCTA}</Link>
        </section>
    );
}