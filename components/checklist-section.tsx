"use client"

import { useProgressContext } from "@/components/progress-provider"
import { Header } from "@/components/transfer-section"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress, ProgressLabel, ProgressValue } from "@/components/ui/progress"
import { checklistGroups } from "@/lib/content"

export function ChecklistSection() {
  const { checked, toggle, reset, done, total, percent, ready } =
    useProgressContext()

  return (
    <section id="checklist" className="scroll-mt-20 border-b">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Header
            kicker="Прогресс"
            title="Чек-лист: умеете, когда сделали, не когда прочитали"
            lead="Отметки живут в браузере. Пункт засчитывается только если вы это собрали руками — на симуляторе или телефоне."
          />
          <Button variant="outline" onClick={reset} disabled={!ready || done === 0}>
            Сбросить
          </Button>
        </div>

        <div className="mt-8 rounded-xl bg-card p-4 ring-1 ring-foreground/10 sm:p-5">
          {!ready ? (
            <p className="text-sm text-muted-foreground">Загружаю отметки…</p>
          ) : (
            <>
              <Progress value={percent}>
                <ProgressLabel>Готово</ProgressLabel>
                <ProgressValue>
                  {(formatted) => formatted ?? `${percent}%`}
                </ProgressValue>
              </Progress>
              <p className="mt-2 text-xs text-muted-foreground">
                {done} из {total} пунктов
              </p>
            </>
          )}
        </div>

        {done === total && ready ? (
          <p className="mt-4 rounded-lg bg-emerald-700/10 px-4 py-3 text-sm text-emerald-900 dark:text-emerald-200">
            Чек-лист закрыт. Дальше — вакансии, код-ревью чужих RN-проектов и
            выбор: оставаться кроссплатформенным или углубляться в iOS.
          </p>
        ) : null}

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {checklistGroups.map((group) => (
            <div
              key={group.id}
              className="rounded-xl bg-card p-5 ring-1 ring-foreground/10"
            >
              <h3 className="font-heading text-lg font-medium">{group.title}</h3>
              <ul className="mt-4 space-y-3">
                {group.items.map((item) => (
                  <li key={item.id}>
                    <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed">
                      <Checkbox
                        className="mt-0.5"
                        checked={Boolean(checked[item.id])}
                        disabled={!ready}
                        onCheckedChange={() => toggle(item.id)}
                      />
                      <span
                        className={
                          checked[item.id]
                            ? "text-muted-foreground line-through"
                            : undefined
                        }
                      >
                        {item.label}
                      </span>
                    </label>
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
