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
                required: false,
                validator: z.string().min(2, "Please enter at-least two chars")
            },
            {
                id: "last_name",
                name: "Last Name",
                type: "text",
                defaultValue: "",
                placeholder: "Doe",
                required: false,
                validator: z.string().min(2, "Please enter at-least two chars")
            },
            {
                id: "exam_name",
                name: "Exam Name",
                type: "text",
                defaultValue: "",
                placeholder: "CLAT UG",
                required: true,
                validator: z.string().min(2, "Please enter atleast two chars")
            },
            {
                id: "year_from",
                name: "From Which Year?",
                type: "number",
                defaultValue: "",
                placeholder: "2010",
                required: true,
                validator: z.string().min(4, "A valid year should be 4 digits long")
            },
            {
                id: "year_till",
                name: "Till Which Year?",
                type: "number",
                defaultValue: "",
                placeholder: "2020",
                required: true,
                validator: z.string().min(4, "A valid year should be 4 digits long")
            }
        ] satisfies SimpleFormProps["formFields"];
    return (
        <section className="bg-accent/10 px-5 py-10 flex flex-col justify-center items-center text-center gap-10">
            <h2 className="text-3xl font-semibold">{heading}</h2>
            <SimpleForm formFields={formFields} submitButtonText="Request New Exam" onSubmit={(values) => console.log(values)}/>
        </section>
    );
}