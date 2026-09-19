//Router:
import {createFileRoute} from '@tanstack/react-router';
export const Route = createFileRoute('/')({component: LandingPage});

//Components:
import {HeroSection} from '#/components/landing-page/HeroSection';
import { ListOfExamsSupported } from '#/components/landing-page/ListOfExamsSupported';


//Page:
function LandingPage()
{
    return (
        <>
            <HeroSection/>
            <ListOfExamsSupported/>
        </>
    );
}