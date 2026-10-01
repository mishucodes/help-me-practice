//Router:
import {createFileRoute} from '@tanstack/react-router';
export const Route = createFileRoute('/')({component: LandingPage});
//Components:
import {HeroSection} from '#/components/landing-page/HeroSection';

function LandingPage()
{
    return (
        <div className="p-8">
            <HeroSection/>
        </div>
    )
}