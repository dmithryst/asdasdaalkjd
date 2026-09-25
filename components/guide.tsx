"use client"

import { ChecklistSection } from "@/components/checklist-section"
import { Hero } from "@/components/hero"
import { PathSection } from "@/components/path-section"
import { ProgressProvider } from "@/components/progress-provider"
import { ProjectsSection } from "@/components/projects-section"
import { ResourcesSection, SiteFooter } from "@/components/resources-section"
import { RoadmapSection } from "@/components/roadmap-section"
import { ShiftsSection } from "@/components/shifts-section"
import { SiteHeader } from "@/components/site-header"
import { TracksSection } from "@/components/tracks-section"
import { TransferSection } from "@/components/transfer-section"

export function Guide() {
  return (
    <ProgressProvider>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <TransferSection />
        <PathSection />
        <ShiftsSection />
        <RoadmapSection />
        <TracksSection />
        <ProjectsSection />
        <ChecklistSection />
        <ResourcesSection />
      </main>
      <SiteFooter />
    </ProgressProvider>
  )
}
