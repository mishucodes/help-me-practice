import { heading, steps } from "#/content/landing-page/howToUseThisApp";

export function HowToUseThisApp()
{
    return(
        <section className="bg-primary/5 py-20 px-10 flex flex-col justify-center items-center gap-8">
            <h2 className="font-bold text-3xl md:text-4xl border-b py-2">{heading}</h2>
            <ol className="list-decimal flex flex-col gap-2 opacity-90">
                {
                    steps.map(({id, title, description}) =>
                        <li key={id}>
                            <p>
                                <strong>{title}: </strong>
                                {description}
                            </p>
                        </li>)
                }
            </ol>
        </section>
    )
}