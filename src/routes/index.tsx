import {createFileRoute} from '@tanstack/react-router';
export const Route = createFileRoute('/')({component: LandingPage});

function LandingPage()
{
    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold">Welcome to HelpMePractice</h1>
        </div>
    )
}