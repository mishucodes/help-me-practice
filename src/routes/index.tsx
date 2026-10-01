//Router:
import {createFileRoute} from '@tanstack/react-router';
export const Route = createFileRoute('/')({component: LandingPage});
//Components:
import {HeroSection} from '#/components/landing-page/HeroSection';
import {ListOfSupportedExams} from '#/components/landing-page/ListOfSupportedExams';
import { HowToUseThisApp } from '#/components/landing-page/HowToUseThisApp';

function LandingPage()
{
    return (
        <div className="p-8">
            <HeroSection/>
            <ListOfSupportedExams/>
            <HowToUseThisApp/>
        </div>
    )
}