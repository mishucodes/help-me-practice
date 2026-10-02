//Dependencies:
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
//Content:
import {FAQsContent} from "#/content/landing-page/FAQs";

export function FAQs()
{
    return(
        <section className="bg-card/10 p-10 flex flex-col justify-center md:items-center">
            <h2 className="text-3xl md:text-4xl font-bold">FAQs</h2>
            <Accordion className="max-w-lg">
                {
                    FAQsContent.map(({id, question, answer}) =>
                        <AccordionItem key={id}>
                            <AccordionTrigger>{question}</AccordionTrigger>
                            <AccordionContent>{answer}</AccordionContent>
                        </AccordionItem>)
                }
            </Accordion>
        </section>
    )
}