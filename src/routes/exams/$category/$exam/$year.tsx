import {createFileRoute, Navigate} from '@tanstack/react-router';
import z from "zod";
import {getExam} from '#/lib/getExam';

const examParamsSchema = z.object(
    {
        category: z.string(),
        exam: z.string(),
        year: z.coerce.number(),
    });
export const Route = createFileRoute('/exams/$category/$exam/$year')(
    {
        params:
        {
            parse: (rawParams) => examParamsSchema.parse(rawParams),
            stringify: ({category, exam, year}) => ({ category, exam, year: String(year) }),
        },
        loader: ({ params }) => getExam(params),
        errorComponent: () => <Navigate to="/exams"/>,
        notFoundComponent: () => <Navigate to="/exams"/>,
        component: ExamPage
    });

function ExamPage()
{
    const examData = Route.useLoaderData();
    return (
        <>
            <h1>Here's your exam</h1>
            <section>
                {
                    
                }
            </section>
        </>
    );
}
