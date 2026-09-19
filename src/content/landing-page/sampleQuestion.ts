export const heading = "Try One Right Now";

export const sampleQuestionTopic = "CLAT-UG · Legal Reasoning";
export const sampleQuestion: {passage: string, question: string, options: string[], correctOptions: number[]} =
    {
        passage: "The doctrine of caveat emptor, meaning 'let the buyer beware', places the responsibility on a buyer to examine goods before purchase. Historically, if a buyer failed to inspect the goods and later discovered a defect, the seller bore no liability, provided the seller had not actively concealed the defect or made a false representation. Over time, however, the law carved out exceptions. Where a buyer makes known to the seller the particular purpose for which the goods are required, and relies on the seller's skill or judgment, an implied condition arises that the goods shall be reasonably fit for that purpose. In such cases, the burden effectively shifts, and the seller may be held liable if the goods prove unfit.",
        question: "Ravi visits a chemist and asks for a medicine suitable for his infant's sensitive skin, explaining the condition in detail and relying entirely on the chemist's recommendation. The chemist hands him a cream, which later causes a severe rash because it was formulated for adults. Which of the following is most accurate?",
        options:
            [
                "The chemist bears no liability, since caveat emptor applies and Ravi should have inspected the product.",
                "The chemist is liable, because Ravi made known the particular purpose and relied on the chemist's judgment, creating an implied condition of fitness.",
                "The chemist is liable only if he actively concealed that the cream was made for adults.",
                "Neither party is liable, as the sale was completed and the goods were paid for."
            ],
        correctOptions: [2]
    }