import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Header } from "@/components/transfer-section"
import { phases } from "@/lib/content"

export function RoadmapSection() {
  return (
    <section id="roadmap" className="scroll-mt-20 border-b">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Header
          kicker="Порядок учёбы"
          title="Дорожная карта без календаря в днях"
          lead="Фазы важнее недель. Не переходите к жестам, пока список и клавиатура не работают. Не лезьте в Swift, пока нет сборки в TestFlight."
        />
        <Accordion className="mt-10 rounded-xl bg-card px-4 ring-1 ring-foreground/10 sm:px-6" defaultValue={["p1"]}>
          {phases.map((phase) => (
            <AccordionItem key={phase.id} value={phase.id}>
              <AccordionTrigger className="py-4 hover:no-underline">
                <span className="flex flex-col items-start gap-1 text-left sm:flex-row sm:items-baseline sm:gap-4">
                  <span className="text-xs tracking-wide text-muted-foreground uppercase">
                    {phase.week}
                  </span>
                  <span className="font-heading text-base font-medium sm:text-lg">
                    {phase.title}
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <p className="mb-3 font-medium">{phase.goal}</p>
                <ul className="space-y-2 pb-2 text-muted-foreground">
                  {phase.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground/40" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
