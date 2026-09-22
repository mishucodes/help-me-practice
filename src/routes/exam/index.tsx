import { createFileRoute } from '@tanstack/react-router';
export const Route = createFileRoute('/exam/')({component: RouteComponent});


//Page:
function RouteComponent()
{
    return <div>Hello "/exam/"!</div>
}