//Router:
import {createFileRoute} from '@tanstack/react-router';
export const Route = createFileRoute('/exams/$category/$exam/$year')
    (
        {
            component: ExamPage,
            loader: async ({params}) => {return await getExamJSON(params.category, params.exam, params.year)}
        },
    );
//Lib Functions:
import {getExamJSON} from '#/lib/exams';
import {playSound} from '#/lib/sounds';
//Dependencies:
import {useState} from 'react';
//Components:
import {Button} from '#/components/ui/button';

//Page:
function ExamPage()
{
    const {exam, year} = Route.useParams();
    const examJSON = Route.useLoaderData();
    if(!examJSON) return;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answered, setAnswered] = useState(false);
    function handleSelect(idx: number)
    {
        setAnswered(true);
        playSound(examJSON[currentQuestionIndex].correctOptions.includes(idx+1) ? "correct" : "incorrect");
    }
    return(
        <section className="bg-card/10 border px-5 py-10 md:p-10 flex flex-col gap-5">
            <h2 className="text-5xl font-bold uppercase">{exam} - {year}</h2>
            <hr />
            <div className="font-serif">
                <h3 className="font-bold text-2xl">Question - {currentQuestionIndex+1}</h3>
                <br />
                <strong className="text-xl">Passage:</strong>
                <p>{examJSON[currentQuestionIndex].passage}</p>
                <br />
                <strong className="text-xl">Question:</strong>
                <p>{examJSON[currentQuestionIndex].question}</p>
                <br />
                <strong className="text-xl">Options:</strong>
                <ol className="mt-3 list-decimal list-inside flex flex-col gap-2">
                    {
                        examJSON[currentQuestionIndex].options.map((option, idx) =>
                            {
                                const isCorrect = examJSON[currentQuestionIndex].correctOptions.includes(idx+1);
                                const revealClass = answered
                                                    ?
                                                    (isCorrect ? "bg-green-500/50 dark:bg-green-500/50" : "bg-red-500/50 dark:bg-red-500/50")
                                                    :
                                                    null;
                                return (
                                    <li key={idx}>
                                        <Button
                                            variant="outline"
                                            onClick={() => handleSelect(idx)}
                                            className={`${revealClass} p-2 h-auto whitespace-normal text-left`}
                                        >
                                            {option}
                                        </Button>
                                    </li>);
                            })
                    }
                </ol>
            </div>
            <div className='flex gap-2'>
                <Button variant={"secondary"} onClick={() => setCurrentQuestionIndex(currentQuestionIndex-1)}>Previous Question</Button>
                <Button variant={"destructive"}>Skip Question</Button>
                <Button variant={"default"} onClick={() => setCurrentQuestionIndex(currentQuestionIndex+1)}>Next Question</Button>
            </div>
        </section>
    )
}