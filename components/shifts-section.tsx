import { Header } from "@/components/transfer-section"
import { shifts } from "@/lib/content"

export function ShiftsSection() {
  return (
    <section id="shifts" className="scroll-mt-20 border-b">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Header
          kicker="Ментальная модель"
          title="Где веб-интуиция врёт"
          lead="Самые дорогие ошибки React-разработчика в мобилке — не хуки, а DOM-мышление, CSS-мышление и «это же просто ещё один клиент»."
        />
        <div className="mt-10 space-y-4">
          {shifts.map((shift, index) => (
            <article
              key={shift.id}
              className="grid gap-4 rounded-xl bg-card p-5 ring-1 ring-foreground/10 lg:grid-cols-[auto_1fr] lg:gap-8"
            >
              <span className="font-heading text-sm text-muted-foreground tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-heading text-lg font-medium">{shift.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {shift.body}
                </p>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  <CodeBlock label="Веб" code={shift.from} />
                  <CodeBlock label="Мобилка" code={shift.to} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function CodeBlock({ label, code }: { label: string; code: string }) {
  return (
    <div className="rounded-lg bg-muted/70 px-3 py-2">
      <p className="text-[10px] tracking-wide text-muted-foreground uppercase">
        {label}
      </p>
      <pre className="mt-1 overflow-x-auto font-mono text-xs leading-relaxed text-foreground">
        {code}
      </pre>
    </div>
  )
}
