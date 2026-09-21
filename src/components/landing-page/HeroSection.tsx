import {Button} from "../ui/button";
import {heading, subheading, textForCTA, trustSection} from "#/content/landing-page/heroSection";

export function HeroSection()
{
    return(
        <section className="bg-primary/5 px-10 py-20 flex flex-col justify-center items-center gap-10 text-center">
            <div className="flex flex-col gap-2">
                <h1 className="font-bold text-4xl md:text-5xl">{heading}</h1>
                <p className="opacity-50 md:opacity-75">{subheading}</p>
            </div>
            <div className="flex flex-col gap-2">
                <Button variant={"default"} size={"lg"}>{textForCTA}</Button>
                <span className="opacity-45 md:opacity-50 text-sm">{trustSection}</span>
            </div>
        </section>
    );
}