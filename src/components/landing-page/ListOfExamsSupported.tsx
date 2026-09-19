import { examsSupported, heading, subheading } from "#/content/landing-page/listOfExamsSupported";

export function ListOfExamsSupported()
{
    return(
        <section className="bg-card/50 px-5 py-10 flex flex-col justify-center items-center text-center gap-10">
            <div className="bg-red-500/0">
                <h2 className="text-4xl font-semibold">{heading}</h2>
                <p className="opacity-75">{subheading}</p>
            </div>
            <ul className="w-full flex flex-wrap justify-center gap-5">
                {
                    examsSupported.map(({id, Icon, category, bgc, list}) =>
                        <li key={id} className={`${bgc} py-5 px-3 md:px-5 flex flex-col justify-start items-center text-center gap-5 w-full sm:w-fit`}>
                            <div className="flex flex-col justify-center items-center">
                                <Icon className="h-10 w-10 opacity-90"/>
                                <h3 className="text-[1.25rem] font-bold opacity-90">{category}</h3>
                            </div>
                            <div className="flex flex-col gap-2">
                                {
                                    // Need to update these to Links:
                                    list.map((examName, idx) =>
                                        <span key={idx} className="text-sm underline">
                                            {examName}
                                        </span>)
                                }
                            </div>
                        </li>)
                }
            </ul>
        </section>
    )
}