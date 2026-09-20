import { heading } from "#/content/landing-page/requestingNewExams";

export function RequestingNewExams()
{
    return (
        <section className="bg-card bg-red-500/25 px-5 py-10 flex flex-col justify-center items-center text-center gap-10">
            <h2 className="text-3xl font-semibold">{heading}</h2>

        </section>
    );
}