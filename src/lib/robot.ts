export const HEADS = ['square', 'circle', 'trapezoid'] as const
export const EYES = ['square', 'circle', 'visor'] as const
export const MOUTHS = ['line', 'grill', 'smile'] as const
export const ANTENNAS = ['ball', 'double', 'none'] as const
export const EARS = ['none', 'bolt'] as const

export const COLORS = [
  '#e5484d',
  '#f76b15',
  '#ffc53d',
  '#46a758',
  '#12a594',
  '#0090ff',
  '#8e4ec6',
  '#8d8d8d',
] as const

export type Head = (typeof HEADS)[number]
export type Eyes = (typeof EYES)[number]
export type Mouth = (typeof MOUTHS)[number]
export type Antenna = (typeof ANTENNAS)[number]
export type Ears = (typeof EARS)[number]

export interface RobotConfig {
  head: Head
  eyes: Eyes
  mouth: Mouth
  antenna: Antenna
  ears: Ears
  eyeColor: string
}

export function defaultConfig(): RobotConfig {
  return {
    head: 'square',
    eyes: 'square',
    mouth: 'line',
    antenna: 'ball',
    ears: 'none',
    eyeColor: COLORS[5],
  }
}

function pick<T>(items: readonly T[]): T {
  return items[Math.floor(Math.random() * items.length)]!
}

export function randomConfig(): RobotConfig {
  return {
    head: pick(HEADS),
    eyes: pick(EYES),
    mouth: pick(MOUTHS),
    antenna: pick(ANTENNAS),
    ears: pick(EARS),
    eyeColor: pick(COLORS),
  }
}
