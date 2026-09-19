//Router:
import {createFileRoute} from '@tanstack/react-router';
export const Route = createFileRoute('/')({component: LandingPage});

//Components:
import {HeroSection} from '#/components/landing-page/HeroSection';
import { ListOfExamsSupported } from '#/components/landing-page/ListOfExamsSupported';
import { HowToUseThisApp } from '#/components/landing-page/HowToUseThisApp';
import { SampleQuestion } from '#/components/landing-page/SampleQuestion';
import { RequestingNewExams } from '#/components/landing-page/RequestingNewExams';


//Page:
function LandingPage()
{
    return (
        <>
            <HeroSection/>
            <ListOfExamsSupported/>
            <RequestingNewExams/>
            <HowToUseThisApp/>
            <SampleQuestion/>
        </>
    );
}