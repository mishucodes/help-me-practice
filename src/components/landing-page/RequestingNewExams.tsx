//Content:
import {heading} from "#/content/landing-page/requestingNewExams";
import z from "zod";
//Components:
import { SimpleForm } from "../shared/SimpleForm";

export function RequestingNewExams()
{
    const formFields =
        [
            {
                name: "First Name",
                type: "input",
                defaultValue: "",
                placeholder: "John",
                validator: z.string().min(2, "Please enter at-least two chars")
            }
        ];
    return (
        <section className="bg-accent/25 px-5 py-10 flex flex-col justify-center items-center text-center gap-10">
            <h2 className="text-3xl font-semibold">{heading}</h2>
            <SimpleForm formFields={formFields} submitButtonText="Request New Exam" onSubmit={(values) => console.log(values)}/>
        </section>
    );
}