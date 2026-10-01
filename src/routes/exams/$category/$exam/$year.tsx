//Router:
import {createFileRoute} from '@tanstack/react-router';
export const Route = createFileRoute('/exams/$category/$exam/$year')(
    {
        params:
        {
            stringify: ({category, exam, year}) => ({ category, exam, year: String(year) }),
        },
        component: ExamPage
    });

//Page:
function ExamPage()
{
    const {category, exam, year} = Route.useParams();
    return (
        <>
            <p>Category: {category}</p>
            <p>Exam: {exam}</p>
            <p>Year: {year}</p>
        </>
    );
}