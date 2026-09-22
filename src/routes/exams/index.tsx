import { createFileRoute } from '@tanstack/react-router';
import { useEffect } from "react";
import z from "zod";

const examSearchSchema = z.object(
    {
        category: z.string(),
        exam: z.string(),
        year: z.number(),
    });
export const Route = createFileRoute('/exams/')(
    {
        validateSearch: examSearchSchema,
        errorComponent: InvalidExamAddress,
        component: ExamsPage
    });

function ExamsPage()
{
    const search = Route.useSearch();

    useEffect(() =>
    {
        const parsed = examSearchSchema.safeParse(search);
        if(!parsed.success)
            return;
        const { category, exam, year } = parsed.data;
        fetch(`/exams/${category}/${exam}/${year}.json`)
            .then((response) => response.json())
            .then((examData: unknown) => console.log(examData));
    }, [search]);
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