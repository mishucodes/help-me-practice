//Dependencies
import {useForm} from "@tanstack/react-form";
import {z} from "zod";
//Components:
import {Button} from "../ui/button";


export type SimpleFormProps =
    {
        
    };
export function SimpleForm({})
{
    const simpleForm = useForm(
        {
            defaultValues: {firstName: "", lastName: "", examName: "", rangeOfYears: ""},
            onSubmit: ({value}) => console.log("submitted with: ", value),
        });
    return (
        <form onSubmit={(e) => {e.preventDefault(); e.stopPropagation(); simpleForm.handleSubmit()}} className="flex flex-col gap-2">
            <simpleForm.Field
                name="firstName"
                validators={
                    {
                        onChange:
                            z.string()
                            .min(2, "First Name must be at-least two chars")
                    }}
            >
                {
                    (field) => (
                        <div className="">
                            <div className="flex gap-2 justify-center items-center">
                            <label htmlFor={field.name}>First Name:</label>
                            <input
                                type="text"
                                id={field.name}
                                name={field.name}
                                value={field.state.value}
                                onBlur={field.handleBlur}
                                onChange={(e) => field.handleChange(e.target.value)}
                                placeholder="John"
                                className="border p-1"
                            />
                            </div>
                            {
                                field.state.meta.isTouched
                                &&
                                field.state.meta.errors.length
                                ?
                                field.state.meta.errors.map(err => <span className="text-xs text-destructive">{err?.message}</span>)
                                :
                                null
                            }
                        </div>)
                }
            </simpleForm.Field>
            <Button variant={"default"} type="submit">Request for a New Exam</Button>
        </form>
    );
}