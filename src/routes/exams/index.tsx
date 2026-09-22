import { createFileRoute } from '@tanstack/react-router';
import { ListOfSupportedExams } from '#/components/landing-page/ListOfSupportedExams';

export const Route = createFileRoute('/exams/')(
    {
        component: ExamsPage
    });

function ExamsPage()
{
    return (
        <ListOfSupportedExams/>
    );
}
