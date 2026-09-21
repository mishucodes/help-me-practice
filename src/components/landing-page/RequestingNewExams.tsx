//Content:
import {heading} from "#/content/landing-page/requestingNewExams";
import z from "zod";
//Components:
import {SimpleForm, type SimpleFormProps} from "../shared/SimpleForm";

export function RequestingNewExams()
{
    const formFields =
        [
            {
                id: "first_name",
                name: "First Name",
                type: "text",
                defaultValue: "",
                placeholder: "John",
                validator: z.string().min(2, "Please enter at-least two chars")
            },
            {
                id: "last_name",
                name: "Last Name",
                type: "text",
                defaultValue: "",
                placeholder: "Doe",
                validator: z.string().min(2, "Please enter at-least two chars")
            }
        ] satisfies SimpleFormProps["formFields"];
    return (
        <section className="bg-accent/25 px-5 py-10 flex flex-col justify-center items-center text-center gap-10">
            <h2 className="text-3xl font-semibold">{heading}</h2>
            <SimpleForm formFields={formFields} submitButtonText="Request New Exam" onSubmit={(values) => console.log(values)}/>
        </section>
    );
}