import {countCorrect, type Outcome} from "#/lib/practiceReducer";
import type {Exam} from "#/schemas/exam";

export function ExamResults({questions, outcomes}: {questions: Exam, outcomes: ReadonlyMap<number, Outcome>})
{
    return (
        <section className="p-5 flex flex-col gap-5">
            <h1 className="text-5xl font-bold">Your result</h1>
            <span>{countCorrect(outcomes)}/{questions.length} questions were correct</span>
        </section>
    );
}