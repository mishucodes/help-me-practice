//Dependencies:
import {useState} from "react";
//Lib Functions:
import {playSound} from "#/lib/sounds";
//Content:
import {sampleQuestion, sampleQuestionTopic } from "#/content/landing-page/sampleQuestion";
//Components:
import {Button} from "../ui/button";

export function SampleQuestion()
{
    const [answered, setAnswered] = useState(false);
    function handleSelect(idx: number)
    {
        setAnswered(true);
        playSound(sampleQuestion.correctOptions.includes(idx+1) ? "correct" : "incorrect");
    }
    return(
        <section className="bg-card/10 border px-5 py-10 md:p-10 flex flex-col gap-5">
            <h2 className="text-5xl font-bold">Sample Question:</h2>
            <hr />
            <div className="font-serif">
                <h3 className="font-bold text-2xl">{sampleQuestionTopic}</h3>
                <br />
                <strong className="text-xl">Passage:</strong>
                <p>{sampleQuestion.passage}</p>
                <br />
                <strong className="text-xl">Question:</strong>
                <p>{sampleQuestion.question}</p>
                <br />
                <strong className="text-xl">Options:</strong>
                <ol className="mt-3 list-decimal list-inside flex flex-col gap-2">
                    {
                        sampleQuestion.options.map((option, idx) =>
                            {
                                const isCorrect = sampleQuestion.correctOptions.includes(idx+1);
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
        </section>
    )
}