import type { RobotConfig } from './robot'

// Fixed dark color for outlines, mouth, and antenna
const DARK = '#26262b'
const FACE = '#ffffff'
const OUTLINE = `stroke="${DARK}" stroke-width="3"`

function renderHead(config: RobotConfig): string {
  switch (config.head) {
    case 'square':
      return `<rect x="16" y="24" width="68" height="62" rx="10" fill="${FACE}" ${OUTLINE}/>`
    case 'circle':
      return `<circle cx="50" cy="55" r="33" fill="${FACE}" ${OUTLINE}/>`
    case 'trapezoid':
      return `<path d="M26 24 H74 L84 86 H16 Z" fill="${FACE}" ${OUTLINE} stroke-linejoin="round"/>`
  }
}

function renderEyes(config: RobotConfig): string {
  const eye = `fill="${config.eyeColor}" stroke="${DARK}" stroke-width="2.5"`
  switch (config.eyes) {
    case 'square':
      return `<rect x="32" y="44" width="9" height="9" rx="1.5" ${eye}/><rect x="59" y="44" width="9" height="9" rx="1.5" ${eye}/>`
    case 'circle':
      return `<circle cx="36.5" cy="48.5" r="4.5" ${eye}/><circle cx="63.5" cy="48.5" r="4.5" ${eye}/>`
    case 'visor':
      return `<rect x="30" y="43" width="40" height="10" rx="5" ${eye}/>`
  }
}

function renderMouth(config: RobotConfig): string {
  switch (config.mouth) {
    case 'line':
      return `<rect x="38" y="66" width="24" height="4" rx="2" fill="${DARK}"/>`
    case 'grill':
      return [38, 45, 52, 59]
        .map((x) => `<rect x="${x}" y="63" width="4" height="10" rx="1.5" fill="${DARK}"/>`)
        .join('')
    case 'smile':
      return `<path d="M39 64 Q50 74 61 64" stroke="${DARK}" stroke-width="4" stroke-linecap="round" fill="none"/>`
  }
}

function renderAntenna(config: RobotConfig): string {
  switch (config.antenna) {
    case 'ball':
      return `<line x1="50" y1="26" x2="50" y2="12" stroke="${DARK}" stroke-width="4"/><circle cx="50" cy="10" r="5" fill="${DARK}"/>`
    case 'double':
      return (
        `<line x1="36" y1="28" x2="30" y2="14" stroke="${DARK}" stroke-width="4"/><circle cx="29" cy="12" r="4" fill="${DARK}"/>` +
        `<line x1="64" y1="28" x2="70" y2="14" stroke="${DARK}" stroke-width="4"/><circle cx="71" cy="12" r="4" fill="${DARK}"/>`
      )
    case 'none':
      return ''
  }
}

function renderEars(config: RobotConfig): string {
  switch (config.ears) {
    case 'bolt':
      return `<rect x="10" y="48" width="12" height="14" rx="3" fill="${FACE}" ${OUTLINE}/><rect x="78" y="48" width="12" height="14" rx="3" fill="${FACE}" ${OUTLINE}/>`
    case 'none':
      return ''
  }
}

export function renderRobotSvg(config: RobotConfig): string {
  // Draw ears and antenna before the head so the head covers the overlap
  const parts = [
    renderAntenna(config),
    renderEars(config),
    renderHead(config),
    renderEyes(config),
    renderMouth(config),
  ].join('')
  return `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">${parts}</svg>`
}
