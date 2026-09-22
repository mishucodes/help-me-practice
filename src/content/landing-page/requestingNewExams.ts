import type { SimpleFormProps } from "#/components/shared/SimpleForm";
import z from "zod";

export const heading = "Need some other Exam? Let me know here!";

export const formFields =
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

export const submitButtonText="Request New Exam"