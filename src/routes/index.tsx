//Router:
import {createFileRoute} from '@tanstack/react-router';
export const Route = createFileRoute('/')({component: LandingPage});

//Components:
import {HeroSection} from '#/components/landing-page/HeroSection';
import { ListOfSupportedExams } from '#/components/landing-page/ListOfSupportedExams';
import { HowToUseThisApp } from '#/components/landing-page/HowToUseThisApp';
import { SampleQuestion } from '#/components/landing-page/SampleQuestion';
import { RequestingNewExams } from '#/components/landing-page/RequestingNewExams';


//Page:
function LandingPage()
{
    return (
        <>
            <HeroSection/>
            <ListOfSupportedExams/>
            <RequestingNewExams/>
            <HowToUseThisApp/>
            <SampleQuestion/>
        </>
    );
}