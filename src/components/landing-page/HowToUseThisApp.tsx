export function HowToUseThisApp()
{
    return(
        <section className="bg-primary/10 p-10 flex flex-col justify-center items-center gap-10">
            <h2 className="text-3xl sm:text-4xl font-bold">How to use this App:</h2>
            <ol className="list-decimal list-inside flex flex-col justify-center">
                <li><strong>Pick an Exam:</strong> <span>Choose from the list above</span></li>
                <li><strong>Select a Year:</strong> <span>Choose a year from the popup</span></li>
                <li><strong>Take the Exam:</strong> <span>Take the exam in peace</span></li>
                <li><strong>Review your Performance:</strong> <span>Upon finishing, you'll be able to review your attempt</span></li>
            </ol>
            <span className="opacity-50 text-sm">Piece of Advice: Failure is a verb, not an adjective.</span>
        </section>
    )
}