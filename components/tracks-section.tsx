"use client"

import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from "@/components/transfer-section"
import { iosTopics, rnTopics, type TrackTopic } from "@/lib/content"

export function TracksSection() {
  return (
    <section id="tracks" className="scroll-mt-20 border-b">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Header
          kicker="Карта навыков"
          title="Что уметь в RN и что знать про iOS"
          lead="React Native — рабочий стек. iOS — грамотность платформы: читать Swift, понимать HIG, не бояться Xcode, когда модуль падает."
        />
        <Tabs defaultValue="rn" className="mt-10">
          <TabsList variant="line" className="w-full justify-start">
            <TabsTrigger value="rn" className="px-3">
              React Native
            </TabsTrigger>
            <TabsTrigger value="ios" className="px-3">
              Нативный iOS
            </TabsTrigger>
          </TabsList>
          <TabsContent value="rn" className="mt-6">
            <TopicGrid topics={rnTopics} accent="rn" />
          </TabsContent>
          <TabsContent value="ios" className="mt-6">
            <TopicGrid topics={iosTopics} accent="ios" />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

function TopicGrid({
  topics,
  accent,
}: {
  topics: TrackTopic[]
  accent: "rn" | "ios"
}) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {topics.map((topic) => (
        <article
          key={topic.id}
          className="rounded-xl bg-card p-5 ring-1 ring-foreground/10"
        >
          <div className="flex items-center gap-2">
            <Badge variant="outline">{accent === "rn" ? "RN" : "iOS"}</Badge>
            <h3 className="font-heading text-lg font-medium">{topic.title}</h3>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">{topic.why}</p>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed">
            {topic.know.map((line) => (
              <li key={line} className="flex gap-2">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground/40" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  )
}
