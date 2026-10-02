import {Button} from "@/components/ui/button";
import {Field, FieldDescription, FieldGroup, FieldLabel} from "@/components/ui/field";
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

export function RequestingNewExam()
{
    return(
        <section className="bg-card/10 p-6 md:px-25 md:py-10 flex flex-col justify-center items-center gap-5">
            <div className="flex flex-col justify-center gap-2">
                <h2 className="text-2xl md:text-3xl font-bold">Could not find the exam you were looking for?</h2>
                <p className="text-xl opacity-75">Feel free to request it here:</p>
            </div>
            <ExampleInputForm/>
        </section>
    )
}





export function ExampleInputForm()
{
    const countries =
    [
        {label: "United States", value: "us"},
        {label: "United Kingdom", value: "uk"},
        {label: "Canada", value: "ca"},
    ]
    return (
        <form className="w-full max-w-sm">
            <FieldGroup>
                <Field>
                    <FieldLabel htmlFor="form-name">Name</FieldLabel>
                        <Input id="form-name" type="text" placeholder="Evil Rabbit" required />
                </Field>
                <Field>
                    <FieldLabel htmlFor="form-email">Email</FieldLabel>
                    <Input id="form-email" type="email" placeholder="john@example.com" />
                    <FieldDescription>We&apos;ll never share your email with anyone.</FieldDescription>
                </Field>
                <div className="grid grid-cols-2 gap-4">
                    <Field>
                        <FieldLabel htmlFor="form-phone">Phone</FieldLabel>
                        <Input id="form-phone" type="tel" placeholder="+1 (555) 123-4567" />
                    </Field>
                    <Field>
                        <FieldLabel htmlFor="form-country">Country</FieldLabel>
                        <Select items={countries} defaultValue="us">
                            <SelectTrigger id="form-country">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {
                                        countries.map((country) =>
                                            <SelectItem key={country.value} value={country.value}>{country.label}</SelectItem>)
                                    }
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </Field>
                </div>
                <Field orientation="horizontal">
                    <Button type="button" variant="outline">Cancel</Button>
                    <Button type="submit">Submit</Button>
                </Field>
            </FieldGroup>
        </form>
    )
}