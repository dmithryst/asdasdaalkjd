"use client"

import { useCallback, useMemo, useSyncExternalStore } from "react"

import { allCheckIds } from "@/lib/content"

const STORAGE_KEY = "rn-ios-field-guide-progress"
const EVENT = "rn-ios-progress"

function readStorage() {
  try {
    return localStorage.getItem(STORAGE_KEY) ?? "{}"
  } catch {
    return "{}"
  }
}

function subscribe(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange)
  window.addEventListener(EVENT, onStoreChange)
  return () => {
    window.removeEventListener("storage", onStoreChange)
    window.removeEventListener(EVENT, onStoreChange)
  }
}

function getServerSnapshot() {
  return "{}"
}

function writeStorage(next: Record<string, boolean>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
  window.dispatchEvent(new Event(EVENT))
}

export function useProgress() {
  const raw = useSyncExternalStore(subscribe, readStorage, getServerSnapshot)

  const checked = useMemo(() => {
    try {
      return JSON.parse(raw) as Record<string, boolean>
    } catch {
      return {}
    }
  }, [raw])

  const toggle = useCallback(
    (id: string) => {
      writeStorage({ ...checked, [id]: !checked[id] })
    },
    [checked]
  )

  const reset = useCallback(() => {
    writeStorage({})
  }, [])

  const done = allCheckIds.filter((id) => checked[id]).length
  const total = allCheckIds.length
  const percent = total === 0 ? 0 : Math.round((done / total) * 100)

  return { checked, toggle, reset, done, total, percent, ready: true }
}
