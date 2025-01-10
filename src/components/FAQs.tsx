import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQs({ faqs }: { faqs: any }) {
  return (
    <section className="default-margin mb-4">
      <h2 className="text-xl font-semibold mb-6">Frequently Asked Questions</h2>
      <Accordion type="multiple">
        {faqs.props.map((faq: any) => (
          <AccordionItem key={faq.id} value={faq.id.toString()}>
            <AccordionTrigger className="flex items-center justify-between py-4 text-lg">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="py-4">
              {/* Display answer if present */}
              {faq.answer && <p className="mb-4 text-sm">{faq.answer}</p>}

              {/* Display points if available */}
              {faq.points && faq.points.length > 0 && (
                <ul className="list-disc pl-5">
                  {faq.points.map((point: any, index: number) => (
                    <li key={index} className="text-sm text-gray-700 mb-2">
                      {point.pnt}
                      {/* Handle subpoints */}
                      {point.subpnt && Array.isArray(point.subpnt) && (
                        <ul className="list-disc pl-5 mt-2">
                          {point.subpnt.map((sub: string, subIndex: number) => (
                            <li
                              key={subIndex}
                              className="text-sm text-gray-600"
                            >
                              {sub}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
