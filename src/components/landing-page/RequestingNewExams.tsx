//Content:
import {heading, formFields, submitButtonText} from "#/content/landing-page/requestingNewExams";
//Components:
import {SimpleForm} from "../shared/SimpleForm";

export function RequestingNewExams()
{
    return (
        <section className="bg-card/50 px-7 py-10 flex flex-col justify-center items-center gap-10">
            <div>
                <h2 className="text-[1.75rem] md:text-3xl font-bold">{heading}</h2>
            </div>
            <SimpleForm formFields={formFields} submitButtonText={submitButtonText} onSubmit={(values) => console.log(values)}/>
        </section>
    );
}