//Router:
import {createFileRoute} from '@tanstack/react-router';
export const Route = createFileRoute('/')({component: LandingPage});
//Components:
import {HeroSection} from '#/components/landing-page/HeroSection';
import {ListOfSupportedExams} from '#/components/landing-page/ListOfSupportedExams';
import {HowToUseThisApp} from '#/components/landing-page/HowToUseThisApp';
import {SampleQuestion} from '#/components/landing-page/SampleQuestion';

function LandingPage()
{
    return (
        <div className="p-8">
            <HeroSection/>
            <ListOfSupportedExams/>
            <HowToUseThisApp/>
            <SampleQuestion/>
        </div>
    )
}