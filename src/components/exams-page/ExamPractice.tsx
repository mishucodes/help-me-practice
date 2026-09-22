import {useReducer} from "react";
import {Button} from "#/components/ui/button";
import {playSound} from "#/lib/sounds";
import {initialPracticeState, practiceReducer} from "#/lib/practiceReducer";
import {ExamResults} from "#/components/exams-page/ExamResults";
import type {Exam} from "#/schemas/exam";

export function ExamPractice({questions}: {questions: Exam})
{
    const [{current, outcomes, submitted}, dispatch] = useReducer(practiceReducer, initialPracticeState);
    const {passage, question, options, correctOptions} = questions[current];
    const isDone = outcomes.has(current);
    const isFirst = current === 0;
    const isLast = current === questions.length - 1;
    function handleAnswer(idx: number)
    {
        const outcome = correctOptions.includes(idx) ? "correct" : "incorrect";
        dispatch({type: "record", outcome});
        playSound(outcome);
    }
    function handleSkip()
    {
        dispatch({type: "record", outcome: "skipped"});
        playSound("skip");
        if(!isLast) setTimeout(() => dispatch({type: "advanceFrom", index: current}), 1000);
    }
    if(submitted) return <ExamResults questions={questions} outcomes={outcomes}/>;

    return (
        <>
            <h1 className='text-5xl font-bold p-5'>Here's your exam</h1>
            <div className="px-5 pb-5 flex flex-col gap-5">
                <span className="opacity-50">{current + 1}/{questions.length} questions</span>
                <section className="font-serif">
                    {
                        passage &&
                            <>
                                <strong className="text-xl">Passage:</strong>
                                <p>{passage}</p>
                                <br />
                            </>
                    }
                    <strong className="text-xl">Question:</strong>
                    <p>{question}</p>
                    <br />
                    <strong className="text-xl">Options:</strong>
                    <ol className="my-2 flex flex-col items-start gap-1">
                        {
                            options.map((option, idx) =>
                                {
                                    const revealClass = isDone ? (correctOptions.includes(idx) ? "bg-green-500/50 dark:bg-green-500/50" : "bg-red-500/50 dark:bg-red-500/50") : "";
                                    return (
                                        <li key={idx}>
                                            <Button
                                                variant={"secondary"}
                                                disabled={isDone}
                                                onClick={() => handleAnswer(idx)}
                                                className={`whitespace-normal h-auto text-left justify-start py-2 disabled:opacity-100 ${revealClass}`}
                                            >
                                                {option}
                                            </Button>
                                        </li>
                                    );
                                })
                        }
                    </ol>
                </section>
                <div className="flex gap-2">
                    <Button variant={"outline"} disabled={isFirst} onClick={() => dispatch({type: "previous"})}>Previous</Button>
                    <Button variant={"outline"} disabled={isDone} onClick={handleSkip}>Skip</Button>
                    <Button variant={"outline"} disabled={isLast} onClick={() => dispatch({type: "next"})}>Next</Button>
                    {isLast && <Button variant={"default"} onClick={() => dispatch({type: "submit"})}>Submit exam</Button>}
                </div>
            </div>
        </>
    );
}