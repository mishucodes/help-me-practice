import {listOfSupportedExams} from "#/content/landing-page/listOfSupportedExams";
import {YearPickerForExam} from "./YearPickerForExam";

export function ListOfAllExamsCategorised()
{
    return(
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
                                namesAndYearsOfExams.map((exam) =>
                                    <YearPickerForExam
                                        examCategory = {category}
                                        examName={exam.name}
                                        yearsSupported={exam.years}
                                    />)
                            }
                        </div>
                    </li>)
            }
        </ul>
    )
}