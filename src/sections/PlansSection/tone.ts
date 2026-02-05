import type { PlanItem } from './data'

const toneBg: Record<PlanItem['tone'], string> = {
  surface: 'var(--color-surface)',
  gray1: 'var(--color-gray-100)',
  gray2: 'var(--color-gray-200)',
  greenSoft: 'var(--color-green-100)',
  greenStrong: 'var(--color-green-500)',
}

export function bgFor(tone: PlanItem['tone']) {
  return toneBg[tone]
}

