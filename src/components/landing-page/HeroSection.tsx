import {Button} from "../ui/button";
import {personalWebsiteLink} from "#/config/site";

export function HeroSection()
{
    return(
        <section className="text-center md:p-10 flex flex-col justify-center items-center gap-5">
            <h1 className="font-bold text-5xl">Real Exams. Really Free.</h1>
            <p className="opacity-75 text-base">
                Previous-year question papers for India's most important exams.
                <br />
                All these exams are part of the public record, & I think they should be accessible to everyone.
            </p>
            <Button size={"lg"}>Browse Exams</Button>
            <a href={personalWebsiteLink} className="underline md:hover:font-semibold">Built by an Indie Dev</a>
        </section>
    )
}