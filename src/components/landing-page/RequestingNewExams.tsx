//Content:
import {heading} from "#/content/landing-page/requestingNewExams";
//Components:
import { SimpleForm } from "../shared/SimpleForm";

export function RequestingNewExams()
{
    return (
        <section className="bg-accent/25 px-5 py-10 flex flex-col justify-center items-center text-center gap-10">
            <h2 className="text-3xl font-semibold">{heading}</h2>
            <SimpleForm/>
        </section>
    );
}