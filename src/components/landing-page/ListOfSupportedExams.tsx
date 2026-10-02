//Data:
import {examsSupported} from "#/data/supportedExams";
//Components:
import {YearPickerForAnExam} from "./_YearPickerForAnExam";

export function ListOfSupportedExams()
{
    return(
        <section className="bg-primary/10 border py-10 px-5 md:p-10 text-center flex flex-col justify-center items-center gap-10">
            <h2 className="font-bold text-4xl">Exams you can practice right now!</h2>
            <ul className="flex justify-center items-center gap-5 flex-wrap">
                {
                    examsSupported.map(({category, namesAndYearsOfExams, Icon, bgTheme}) =>
                        <li key={category} className="w-4/5 sm:w-fit border">
                            <div className={`${bgTheme} min-w-37.5 p-5 flex flex-col justify-center items-center gap-5`}>
                                <div className="flex flex-col justify-center items-center">
                                    <Icon className="h-10 w-10"/>
                                    <h3 className="uppercase font-semibold text-xl">{category}</h3>
                                </div>
                                <ul className="text-center flex flex-col gap-2">
                                    {
                                        namesAndYearsOfExams.map(({name, years}) =>
                                            <li key={name}>
                                                <YearPickerForAnExam examCategory={category} examName={name} yearsSupported={years} />
                                            </li>)
                                    }
                                </ul>
                            </div>
                        </li>)
                }
            </ul>
        </section>
    )
}