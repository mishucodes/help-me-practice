import {heading, subheading, listOfSupportedExams} from "#/content/landing-page/listOfSupportedExams";
import {YearPickerForExam} from "./YearPickerForExam";

export function ListOfSupportedExams()
{
    return(
        <section className="bg-card/50 px-5 py-10 flex flex-col justify-center items-center text-center gap-10">
            <div className="flex flex-col gap-2">
                <h2 className="text-3xl md:text-4xl font-semibold">{heading}</h2>
                <p className="text-sm opacity-75">{subheading}</p>
            </div>
            <ul className="w-full flex flex-wrap justify-center gap-5">
                {
                    listOfSupportedExams.map(({category, namesAndYearsOfExams, Icon, bgTheme}) =>
                        <li key={category} className={`${bgTheme} w-full xs:w-fit min-w-40 py-5 px-3 md:px-5 flex flex-col justify-start items-center text-center gap-5`}>
                            <div className="flex flex-col justify-center items-center">
                                <Icon className="h-10 w-10 opacity-90"/>
                                <h3 className="capitalize text-[1.25rem] font-bold opacity-90">{category}</h3>
                            </div>
                            <div className="flex flex-col gap-2">
                                {
                                    namesAndYearsOfExams.map((exam, idx) =>
                                        <YearPickerForExam
                                            key={idx}
                                            examCategory = {category}
                                            examName={exam.name}
                                            yearsSupported={exam.years}
                                        />)
                                }
                            </div>
                        </li>)
                }
            </ul>
        </section>
    )
}