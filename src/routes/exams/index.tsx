import { createFileRoute } from '@tanstack/react-router';
import { ListOfAllExamsCategorised } from '#/components/shared/exam-picker/ListOfAllExamsCategorised';

export const Route = createFileRoute('/exams/')(
    {
        component: ExamsPage
    });

function ExamsPage()
{
    return (
        <ListOfAllExamsCategorised/>
    );
}
