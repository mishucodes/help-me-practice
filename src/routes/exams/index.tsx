import { createFileRoute } from '@tanstack/react-router';
export const Route = createFileRoute('/exams/')({component: ExamsPage})

function ExamsPage()
{
    return (
        <>
            <h1>Here are all the Exams we support:</h1>
        </>
    );
}