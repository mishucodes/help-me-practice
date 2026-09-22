//Router:
import {createFileRoute, Navigate} from '@tanstack/react-router';
import {getExam} from '#/lib/getExam';
import {examParamsSchema, examSchema} from '#/schemas/exam';
export const Route = createFileRoute('/exams/$category/$exam/$year')(
    {
        params:
        {
            parse: (rawParams) => examParamsSchema.parse(rawParams),
            stringify: ({category, exam, year}) => ({ category, exam, year: String(year) }),
        },
        loader: async ({ params }) => examSchema.parse(await getExam(params)),
        errorComponent: () => <Navigate to="/exams"/>,
        notFoundComponent: () => <Navigate to="/exams"/>,
        component: ExamPage
    });

//Components:
import {ExamPractice} from '#/components/exams-page/ExamPractice';

//Page:
function ExamPage()
{
    const questions = Route.useLoaderData();
    return (
        <>
            <ExamPractice questions={questions}/>
        </>
    );
}