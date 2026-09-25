import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/transfer-section"
import { pathCards } from "@/lib/content"

export function PathSection() {
  return (
    <section id="path" className="scroll-mt-20 border-b">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Header
          kicker="Развилка"
          title="React Native первым, iOS — вторым языком"
          lead="С вашим бэкграундом нативный iOS с нуля — это смена профессии. React Native — это смена поверхности. Сначала отгрузите мобильный продукт, потом углубляйте платформу."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {pathCards.map((card) => (
            <Card key={card.id} className="h-full">
              <CardHeader className="border-b">
                <p className="text-xs tracking-wide text-muted-foreground uppercase">
                  {card.kicker}
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  <CardTitle className="font-heading text-xl">
                    {card.title}
                  </CardTitle>
                  <Badge variant={card.id === "rn" ? "default" : "outline"}>
                    {card.verdict}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-2 leading-relaxed">
                  {card.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground/50" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 border-t pt-4 text-sm text-muted-foreground">
                  {card.fit}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          Практичный гибрид: 3–4 месяца Expo до TestFlight, параллельно читать
          SwiftUI tutorial по вечерам. Вы станете редким профилем — RN-инженер,
          который не теряется в Xcode. На рынок iOS-only идите, если хотите
          именно платформенную карьеру Apple, а не «ещё один клиент на JS».
        </p>
      </div>
    </section>
  )
}
