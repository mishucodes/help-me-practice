//Dependencies
import {useForm} from "@tanstack/react-form";
import {Button} from "../ui/button";

//Types:
export type SimpleFormProps =
    {
        formFields:
            {
                name: string,
                type: "input" | "email" | "tel",
                defaultValue?: string,
                placeholder?: string,
                validator: any //zod schema
            }[],
        submitButtonText: string
        onSubmit: any, //fn that takes all the values in the form...
    };

//Component:
export function SimpleForm({formFields, submitButtonText, onSubmit}: SimpleFormProps)
{
    const simpleForm = useForm(
        {
            defaultValues: formFields.map((field => field.defaultValue && "")),
            onSubmit: onSubmit
        });
    return (
        <form onSubmit={(e) => {e.preventDefault(); e.stopPropagation(); simpleForm.handleSubmit()}} className="flex flex-col gap-2">
            {
                formFields.map(({name, type, placeholder, validator}, idx) => (
                    <simpleForm.Field key={idx} name={name} validators={validator}>
                        {
                            (field) => (
                                <>
                                    <div className="flex gap-2 justify-center items-center">
                                        <label htmlFor={name}>{name}</label>
                                        <input
                                            type={type}
                                            name={field.name}
                                            id={field.name}
                                            value={field.state.value}
                                            onBlur={field.handleBlur}
                                            onChange={(e) => field.handleChange(e.target.value)}
                                            placeholder={placeholder}
                                            className="text-base border p-1"
                                        />
                                    {
                                        field.state.meta.isTouched
                                        &&
                                        field.state.meta.errors.length
                                        ?
                                        field.state.meta.errors.map((err, idx) => <span key={idx} className="text-xs text-destructive">{err?.message}</span>)
                                        :
                                        null
                                    }
                                    </div>
                                </>
                            )
                        }
                    </simpleForm.Field>
                ))
            }
            <Button variant={"default"} type="submit">{submitButtonText}</Button>
        </form>
    );
}