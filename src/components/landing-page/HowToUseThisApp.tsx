import { heading, steps } from "#/content/landing-page/howToUseThisApp";

export function HowToUseThisApp()
{
    return(
        <section className="py-10 px-5 flex flex-col justify-center items-center gap-8">
            <h2 className="font-bold text-4xl">{heading}</h2>
            <ol className="list-decimal flex flex-col gap-2">
                {
                    steps.map(({id, title, description}) =>
                        <li key={id}>
                            <p>
                                <strong className="font-bold">{title}: </strong>
                                {description}
                            </p>
                        </li>)
                }
            </ol>
        </section>
    )
}