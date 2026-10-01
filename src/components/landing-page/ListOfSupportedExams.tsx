import {examsSupported} from "#/data/supportedExams";
import {Button} from "../ui/button";

export function ListOfSupportedExams()
{
    return(
        <section className="bg-card/50 md:p-10 flex flex-col justify-center items-center gap-10">
            <h2 className="font-bold text-4xl">Exams you can practice right now!</h2>
            <ul className="flex justify-center items-center gap-5">
                {
                    examsSupported.map(({category, namesAndYearsOfExams, Icon, bgTheme}) =>
                        <li key={category}>
                            <div className={`${bgTheme} p-5 border flex flex-col justify-center items-center gap-5`}>
                                <div className="flex flex-col justify-center items-center">
                                    <Icon className="h-10 w-10"/>
                                    <h3 className="uppercase font-semibold">{category}</h3>
                                </div>
                                <ol className="text-center">
                                    {
                                        namesAndYearsOfExams.map(({name, years}) =>
                                            <li key={name}>
                                                <Button variant={"link"} className="uppercase">{name}</Button>
                                            </li>)
                                    }
                                </ol>
                            </div>
                        </li>)
                }
            </ul>
        </section>
    )
}