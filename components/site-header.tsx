"use client"

import { buttonVariants } from "@/components/ui/button"
import { useProgressContext } from "@/components/progress-provider"
import { nav } from "@/lib/content"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const { percent, done, total } = useProgressContext()

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 sm:px-6">
        <a href="#top" className="shrink-0 font-heading text-sm font-semibold tracking-tight">
          RN / iOS
          <span className="ml-2 hidden font-sans text-xs font-normal text-muted-foreground sm:inline">
            полевой гайд
          </span>
        </a>
        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-1 overflow-x-auto lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-2 py-1 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-3">
          <div className="hidden text-right sm:block">
            <p className="text-[11px] tracking-wide text-muted-foreground uppercase">
              Чек-лист
            </p>
            <p className="font-heading text-sm tabular-nums">
              {done}/{total} · {percent}%
            </p>
          </div>
          <a href="#checklist" className={cn(buttonVariants({ size: "sm" }))}>
            К чек-листу
          </a>
        </div>
      </div>
      <nav className="flex gap-1 overflow-x-auto border-t px-4 py-2 lg:hidden">
        {nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="shrink-0 rounded-md px-2 py-1 text-xs text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            {item.label}
          </a>
        ))}
      </nav>
      <div className="h-0.5 w-full bg-muted">
        <div
          className="h-full bg-primary transition-[width] duration-300"
          style={{ width: `${percent}%` }}
        />
      </div>
    </header>
  )
}
