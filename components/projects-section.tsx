import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/transfer-section"
import { antiPatterns, projects } from "@/lib/content"

const trackLabel = {
  rn: "React Native",
  ios: "iOS",
  both: "Релиз",
} as const

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-20 border-b">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Header
          kicker="Практика"
          title="Шесть проектов вместо бесконечных курсов"
          lead="Каждый закрывает конкретный пробел. Не начинайте следующий, пока текущий не стоит на устройстве."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={project.id} className="h-full">
              <CardHeader>
                <p className="text-xs text-muted-foreground tabular-nums">
                  0{index + 1}
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  <CardTitle className="font-heading">{project.title}</CardTitle>
                  <Badge variant="secondary">{trackLabel[project.track]}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed">{project.outcome}</p>
                <p className="mt-3 text-xs tracking-wide text-muted-foreground uppercase">
                  {project.stack}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <h3 className="mt-14 font-heading text-xl font-medium">Не делайте так</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {antiPatterns.map((item) => (
            <div
              key={item.title}
              className="rounded-xl bg-card p-5 ring-1 ring-foreground/10"
            >
              <p className="font-medium">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
