import { createFileRoute } from '@tanstack/react-router';
import z from "zod";

const examSearchSchema = z.object({
    category: z.string().optional(),
    exam: z.string().optional(),
    year: z.number().optional(),
});

export const Route = createFileRoute('/exams/')({validateSearch: examSearchSchema, component: ExamsPage})

function ExamsPage()
{
    const search = Route.useSearch();
    return (
        <>
            <pre>{JSON.stringify(search, null, 2)}</pre>
        </>
    );
}