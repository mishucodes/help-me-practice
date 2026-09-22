import {heading, subheading} from "#/content/landing-page/listOfSupportedExams";
import { ListOfAllExamsCategorised } from "../shared/exam-picker/ListOfAllExamsCategorised";

export function ListOfSupportedExams()
{
    return(
        <section className="bg-card/50 px-5 py-10 flex flex-col justify-center items-center text-center gap-10">
            <div className="flex flex-col gap-2">
                <h2 className="text-3xl md:text-4xl font-semibold">{heading}</h2>
                <p className="text-sm opacity-75">{subheading}</p>
            </div>
            <ListOfAllExamsCategorised/>
        </section>
    )
}