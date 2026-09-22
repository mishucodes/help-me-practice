export type Outcome = "correct" | "incorrect" | "skipped";

export type PracticeState = {current: number, outcomes: ReadonlyMap<number, Outcome>, submitted: boolean};
export type PracticeAction =
    | {type: "record", outcome: Outcome}
    | {type: "previous"}
    | {type: "next"}
    | {type: "advanceFrom", index: number}
    | {type: "submit"};

export const initialPracticeState: PracticeState = {current: 0, outcomes: new Map<number, Outcome>(), submitted: false};

export function practiceReducer(state: PracticeState, action: PracticeAction): PracticeState
{
    switch(action.type)
    {
        case "record":
            return {...state, outcomes: new Map(state.outcomes).set(state.current, action.outcome)};
        case "previous":
            return {...state, current: state.current - 1};
        case "next":
            return {...state, current: state.current + 1};
        case "advanceFrom":
            return state.current === action.index ? {...state, current: state.current + 1} : state;
        case "submit":
            return {...state, submitted: true};
    }
}

export function countCorrect(outcomes: ReadonlyMap<number, Outcome>): number
{
    return [...outcomes.values()].filter((outcome) => outcome === "correct").length;
}
