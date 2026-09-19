//Router:
import {createFileRoute} from '@tanstack/react-router';
export const Route = createFileRoute('/')({component: LandingPage});

//Components:
import {HeroSection} from '#/components/landing-page/HeroSection';
import { ListOfExamsSupported } from '#/components/landing-page/ListOfExamsSupported';
import { HowToUseThisApp } from '#/components/landing-page/HowToUseThisApp';


//Page:
function LandingPage()
{
    return (
        <>
            <HeroSection/>
            <ListOfExamsSupported/>
            <HowToUseThisApp/>
        </>
    );
}