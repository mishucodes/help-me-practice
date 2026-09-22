import {heading, sampleQuestion, sampleQuestionTopic} from "#/content/landing-page/sampleQuestion";
import {useState} from "react";
import {Button} from "../ui/button";
import {playSound} from "#/lib/sounds";

export function SampleQuestion()
{
    const [answered, setAnswered] = useState(false);

    function handleSelect(idx: number)
    {
        setAnswered(true);
        playSound(sampleQuestion.correctOptions.includes(idx+1) ? "correct" : "incorrect");
    }

    return(
        <section className="bg-card/50 p-7 md:p-10 flex flex-col gap-4">
            <h2 className="font-bold text-[1.75rem] md:text-3xl">{heading}</h2>
            <hr />
            <div className="font-serif">
                <h3 className="font-semibold text-[1.1rem]">{sampleQuestionTopic}</h3>
                <br />
                <strong>Passage:</strong>
                <p>{sampleQuestion.passage}</p>
                <br />
                <strong>Question:</strong>
                <p>{sampleQuestion.question}</p>
                <br />
                <strong>Options:</strong>
                <ol className="my-2 flex flex-col justify-center items-start gap-1">
                    {
                        sampleQuestion.options.map((option, idx) =>
                            {
                                const isCorrect = sampleQuestion.correctOptions.includes(idx+1);
                                const revealClass = answered ? (isCorrect ? "bg-green-500/50 dark:bg-green-500/50" : "bg-red-500/50 dark:bg-red-500/50") : "";
                                return (
                                    <li key={idx}>
                                        <Button
                                            variant={"secondary"}
                                            onClick={() => handleSelect(idx)}
                                            className={`whitespace-normal h-auto text-left justify-start py-2 ${revealClass}`}
                                        >
                                            {option}
                                        </Button>
                                    </li>
                                );
                            })
                    }
                </ol>
            </div>
        </section>
    )
}