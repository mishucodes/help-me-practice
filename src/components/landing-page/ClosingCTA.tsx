import {Button} from "../ui/button";

export function ClosingCTA()
{
    return(
        <section className="bg-card/10 px-10 py-25 text-center flex flex-col justify-center items-center gap-10">
            <h2 className="text-4xl font-bold">Ready When you Are</h2>
            <Button size={"xlg"}>Start Practising</Button>
        </section>
    )
}