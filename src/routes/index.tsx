//Router:
import {createFileRoute} from '@tanstack/react-router';
export const Route = createFileRoute('/')({component: LandingPage});

//Components:
import {HeroSection} from '#/components/landing-page/HeroSection';


//Page:
function LandingPage()
{
    return (
        <>
            <HeroSection/>
        </>
    );
}