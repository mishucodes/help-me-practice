//Router:
import {createFileRoute} from '@tanstack/react-router';
export const Route = createFileRoute('/')({component: LandingPage});

//Components:
import {HeroSection} from '#/components/landing-page/HeroSection';
import { ListOfSupportedExams } from '#/components/landing-page/ListOfSupportedExams';
import { HowToUseThisApp } from '#/components/landing-page/HowToUseThisApp';
import { SampleQuestion } from '#/components/landing-page/SampleQuestion';
import {FrequentlyAskedQuestions} from '#/components/landing-page/FrequentlyAskedQuestions';
import { RequestingNewExams } from '#/components/landing-page/RequestingNewExams';
import {ClosingCTA} from '#/components/landing-page/ClosingCTA';


//Page:
function LandingPage()
{
    return (
        <>
            {/* <HeroSection/> */}
            <ListOfSupportedExams/>
            {/* <HowToUseThisApp/> */}
            {/* <SampleQuestion/> */}
            {/* <FrequentlyAskedQuestions/> */}
            {/* <RequestingNewExams/> */}
            {/* <ClosingCTA/> */}
        </>
    );
}