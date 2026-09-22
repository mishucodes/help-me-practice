import {heading, questions} from "#/content/landing-page/frequentlyAskedQuestions";

export function FrequentlyAskedQuestions()
{
    return(
        <section className="bg-primary/5 px-10 py-20 flex flex-col justify-center items-center gap-8">
            <h2 className="font-bold text-3xl md:text-4xl border-b py-2 text-center">{heading}</h2>
            <dl className="max-w-prose flex flex-col gap-4">
                {
                    questions.map(({id, question, answer}) =>
                        <div key={id}>
                            <dt className="font-semibold">{question}</dt>
                            <dd className="opacity-75">{answer}</dd>
                        </div>)
                }
            </dl>
        </section>
    );
}