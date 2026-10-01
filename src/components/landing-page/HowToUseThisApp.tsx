export function HowToUseThisApp()
{
    return(
        <section className="bg-card/50 p-10 text-center flex flex-col justify-center items-center gap-5">
            <h2 className="text-4xl font-bold">How to use this App</h2>
            <ol className="list-decimal text-left flex flex-col justify-center items-center">
                <li><strong>Pick an Exam:</strong> <span>Choose from the list above</span></li>
                <li><strong>Select a Year:</strong> <span>Choose a year from the popup</span></li>
                <li><strong>Take the Exam:</strong> <span>Take the exam in peace</span></li>
                <li><strong>Review your Performance:</strong> <span>Upon finishing, you'll be able to review your attempt</span></li>
            </ol>
            <span className="mt-10 opacity-50 text-sm">Piece of Advice: Failure is a verb, not an adjective.</span>
        </section>
    )
}