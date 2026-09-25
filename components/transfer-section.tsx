import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { kindLabel, transferSkills, type TransferKind } from "@/lib/content"

const kindClass: Record<TransferKind, string> = {
  keep: "bg-emerald-700/10 text-emerald-800 dark:text-emerald-300",
  relearn: "bg-amber-700/10 text-amber-800 dark:text-amber-300",
  new: "bg-sky-700/10 text-sky-800 dark:text-sky-300",
}

export function TransferSection() {
  return (
    <section id="transfer" className="scroll-mt-20 border-b">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Header
          kicker="Инвентаризация"
          title="Что уже есть и чего нет"
          lead="Не учите React заново. Закройте дыры: лейаут без CSS, навигация без URL, платформенные API и сторы."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {transferSkills.map((skill) => (
            <Card key={skill.id} size="sm">
              <CardHeader>
                <div className="flex items-start justify-between gap-3">
                  <CardTitle className="font-heading text-base">
                    {skill.title}
                  </CardTitle>
                  <Badge className={kindClass[skill.kind]} variant="secondary">
                    {kindLabel[skill.kind]}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-muted-foreground">
                  {skill.detail}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Header({
  kicker,
  title,
  lead,
}: {
  kicker: string
  title: string
  lead: string
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
        {kicker}
      </p>
      <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
        {lead}
      </p>
    </div>
  )
}
