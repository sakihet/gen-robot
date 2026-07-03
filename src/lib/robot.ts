export const HEADS = ['square', 'circle', 'trapezoid', 'hexagon', 'arch', 'inverted'] as const
export const EYES = ['square', 'circle', 'visor', 'mono', 'triple'] as const
export const MOUTHS = ['line', 'grill', 'zigzag', 'teeth', 'dots'] as const
export const ANTENNAS = ['ball', 'double', 'loop', 'zigzag', 'vee', 'none'] as const
export const EARS = ['none', 'bolt', 'round', 'pin', 'fin'] as const
export const NECKS = ['plain', 'duct', 'twin'] as const
export const BODIES = ['square', 'round', 'trapezoid', 'inverted', 'hexagon', 'capsule'] as const
export const CHESTS = ['none', 'buttons', 'screen', 'core', 'hazard', 'vent'] as const

export const FACE_COLORS = ['#ffffff', '#d9dade', '#aeb0b8', '#7a7d86'] as const

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
export type Neck = (typeof NECKS)[number]
export type Body = (typeof BODIES)[number]
export type Chest = (typeof CHESTS)[number]

export interface RobotConfig {
  head: Head
  eyes: Eyes
  mouth: Mouth
  antenna: Antenna
  ears: Ears
  neck: Neck
  body: Body
  chest: Chest
  faceColor: string
  eyeColor: string
}

export function defaultConfig(): RobotConfig {
  return {
    head: 'square',
    eyes: 'square',
    mouth: 'line',
    antenna: 'ball',
    ears: 'none',
    neck: 'plain',
    body: 'square',
    chest: 'core',
    faceColor: FACE_COLORS[0],
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
    neck: pick(NECKS),
    body: pick(BODIES),
    chest: pick(CHESTS),
    faceColor: pick(FACE_COLORS),
    eyeColor: pick(COLORS),
  }
}
