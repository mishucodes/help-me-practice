import {createFileRoute} from '@tanstack/react-router';
export const Route = createFileRoute('/exam/$examName')({component: RouteComponent});

function RouteComponent()
{
    const {examName} = Route.useParams();
    return <div>Hello "{examName}"!</div>
}