import { Badge } from "@/components/ui/badge"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.72_0.12_195/0.18),transparent_45%),radial-gradient(ellipse_at_bottom_left,oklch(0.55_0.14_255/0.14),transparent_40%)]"
      />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div>
          <p className="mb-4 text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            React → мобильная разработка
          </p>
          <h1 className="font-heading text-4xl leading-[1.1] font-semibold tracking-tight text-balance sm:text-5xl lg:text-[3.4rem]">
            Семь лет React — это не ноль. Это готовый вход в React Native.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Ниже — честная карта для фронтендера, который хочет уйти в мобилку:
            что забираете с собой, чего не хватает, почему React Native стоит
            первым, и когда имеет смысл лезть в нативный iOS.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            <Badge variant="secondary">Ваш стек: React</Badge>
            <Badge variant="secondary">Опыт: 7 лет</Badge>
            <Badge variant="secondary">Цель: RN → iOS</Badge>
          </div>
        </div>
        <aside className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
          <Stat n="~70%" label="навыков React переносится в RN сразу" />
          <Stat n="5 фаз" label="от первого экрана до TestFlight и Swift" />
          <Stat n="1 Mac" label="нужен для iOS-симулятора и стора" />
        </aside>
      </div>
    </section>
  )
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="rounded-xl bg-card p-4 ring-1 ring-foreground/10">
      <p className="font-heading text-2xl font-semibold tracking-tight">{n}</p>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </div>
  )
}
