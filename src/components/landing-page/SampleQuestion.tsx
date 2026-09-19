import { heading, sampleQuestion, sampleQuestionTopic } from "#/content/landing-page/sampleQuestion";
import { useState } from "react";
import { Button } from "../ui/button";

export function SampleQuestion()
{
    const [selectedOption, setSelectedOption] = useState<number>(0);
    const [isCorrect, setIsCorrect] = useState<boolean | undefined>(undefined);
    function revealRealAnswer()
    {
        if(sampleQuestion.correctOptions.find((correctOption) => correctOption === selectedOption))
        {
            //play some nice sound?
            setIsCorrect(true);
        }
        else
        {
            //play some bad sound?
            setIsCorrect(false);
        }
    }
    return(
        <section className="bg-card p-5 flex flex-col gap-4">
            <h2 className="font-bold text-2xl md:text-3xl">{heading}</h2>
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
                            <li key={idx}>
                                <Button
                                    variant={"outline"}
                                    onClick={() => setSelectedOption(idx+1)}
                                    className=
                                        {`
                                            whitespace-normal h-auto text-left justify-start py-2
                                            ${selectedOption === idx+1 ? "bg-primary/40": ""}
                                            ${
                                                isCorrect === undefined
                                                ?
                                                null
                                                :
                                                sampleQuestion.correctOptions.find((correctOption) => correctOption === idx+1)
                                                ?
                                                "bg-green-500/50"
                                                :
                                                "bg-destructive/50"
                                            }
                                        `}
                                >
                                    {option}
                                </Button>
                            </li>)
                    }
                </ol>
                <Button variant={"default"} onClick={revealRealAnswer}>Submit</Button>
            </div>
        </section>
    )
}