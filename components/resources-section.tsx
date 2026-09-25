import { Header } from "@/components/transfer-section"
import { resources } from "@/lib/content"

export function ResourcesSection() {
  return (
    <section id="resources" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Header
          kicker="Источники"
          title="Канон, не YouTube-шум"
          lead="Официальные доки Expo, React Native и Apple покрывают 90% входа. Курсы «RN за 12 часов» обычно учат устаревшему CLI и игнорируют сторы."
        />
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {resources.map((group) => (
            <div key={group.group}>
              <h3 className="font-heading text-lg font-medium">{group.group}</h3>
              <ul className="mt-4 space-y-4">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium underline-offset-4 hover:underline"
                    >
                      {item.title}
                    </a>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.note}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>Полевой гайд для React-разработчика, который идёт в мобилку.</p>
        <p>Expo первым. Swift — когда уже есть релиз.</p>
      </div>
    </footer>
  )
}
