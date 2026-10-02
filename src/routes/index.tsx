//Router:
import {createFileRoute} from '@tanstack/react-router';
export const Route = createFileRoute('/')({component: LandingPage});
//Components:
import {HeroSection} from '#/components/landing-page/HeroSection';
import {ListOfSupportedExams} from '#/components/landing-page/ListOfSupportedExams';
import {HowToUseThisApp} from '#/components/landing-page/HowToUseThisApp';
import {SampleQuestion} from '#/components/landing-page/SampleQuestion';
import { FAQs } from '#/components/landing-page/FAQs';
import { RequestingNewExam } from '#/components/landing-page/RequestingNewExams';

function LandingPage()
{
    return (
        <main>
            <HeroSection/>
            <ListOfSupportedExams/>
            <RequestingNewExam/>
            <HowToUseThisApp/>
            <SampleQuestion/>
            <FAQs/>
        </main>
    )
}