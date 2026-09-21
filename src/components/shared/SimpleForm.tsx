//Dependencies
import {useForm} from "@tanstack/react-form";
import type {StandardSchemaV1} from "@tanstack/react-form";
import {Button} from "../ui/button";
import { Input } from "../ui/input";
import { Field, FieldDescription, FieldLabel } from "../ui/field";

//Types:
export type SimpleFormProps =
    {
        formFields:
            {
                id: string,
                name: string,
                type: "text" | "email" | "tel" | "number",
                defaultValue?: string,
                placeholder?: string,
                required: boolean,
                validator: StandardSchemaV1<string> //zod schema
            }[],
        submitButtonText: string,
        onSubmit: (values: Record<string, string>) => void
    };

//Component:
export function SimpleForm({formFields, submitButtonText, onSubmit}: SimpleFormProps)
{
    const defaultValues: Record<string, string> = Object.fromEntries(formFields.map(({id, defaultValue}) => [id, defaultValue ?? ""]));
    const simpleForm = useForm({defaultValues, onSubmit: ({value}) => onSubmit(value)});
    return (
        <form onSubmit={(e) => {e.preventDefault(); e.stopPropagation(); simpleForm.handleSubmit()}} className="flex flex-col gap-5">
            <div className="flex justify-center items-center flex-wrap gap-2">
            {
                formFields.map(({id, name, type, placeholder, required, validator}) => (
                    <simpleForm.Field key={id} name={id} validators={{onChange: validator}}>
                        {
                            (field) => (
                                <Field>
                                    <FieldLabel htmlFor={id}>{name}{required && <span className="text-destructive">*</span>}</FieldLabel>
                                        <Input
                                            type={type}
                                            id={id}
                                            name={id}
                                            placeholder={placeholder}
                                            required={required}
                                            value={field.state.value}
                                            onBlur={field.handleBlur}
                                            onChange={(e) => field.handleChange(e.target.value)}
                                        />
                                        <FieldDescription className="text-destructive">
                                            {
                                                field.state.meta.isTouched
                                                &&
                                                field.state.meta.errors.length
                                                ?
                                                field.state.meta.errors.map(err => err?.message)
                                                :
                                                null
                                            }
                                        </FieldDescription>
                                </Field>
                            )
                        }
                    </simpleForm.Field>
                ))
            }
            </div>
            <Button variant={"default"} type="submit">{submitButtonText}</Button>
        </form>
    );
}