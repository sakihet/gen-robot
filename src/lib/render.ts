import type { RobotConfig } from './robot'

// Fixed dark color for outlines, mouth, and antenna
const DARK = '#26262b'
const FACE = '#ffffff'
const OUTLINE = `stroke="${DARK}" stroke-width="3"`

// Layout: antenna y 1-18, head y 16-58, visible neck y 58-66, body y 66-94

function renderHead(config: RobotConfig): string {
  switch (config.head) {
    case 'square':
      return `<rect x="23" y="16" width="54" height="42" rx="8" fill="${FACE}" ${OUTLINE}/>`
    case 'circle':
      return `<circle cx="50" cy="36" r="22" fill="${FACE}" ${OUTLINE}/>`
    case 'trapezoid':
      return `<path d="M30 16 H70 L77 58 H23 Z" fill="${FACE}" ${OUTLINE} stroke-linejoin="round"/>`
    case 'hexagon':
      return `<path d="M34 16 H66 L77 37 L66 58 H34 L23 37 Z" fill="${FACE}" ${OUTLINE} stroke-linejoin="round"/>`
    case 'arch':
      return `<path d="M23 58 V44 Q23 16 50 16 Q77 16 77 44 V58 Z" fill="${FACE}" ${OUTLINE} stroke-linejoin="round"/>`
    case 'inverted':
      return `<path d="M23 16 H77 L70 58 H30 Z" fill="${FACE}" ${OUTLINE} stroke-linejoin="round"/>`
  }
}

function renderEyes(config: RobotConfig): string {
  const eye = `fill="${config.eyeColor}" stroke="${DARK}" stroke-width="2.5"`
  switch (config.eyes) {
    case 'square':
      return `<rect x="34.5" y="28.5" width="9" height="9" rx="1.5" ${eye}/><rect x="56.5" y="28.5" width="9" height="9" rx="1.5" ${eye}/>`
    case 'circle':
      return `<circle cx="39" cy="33" r="4.5" ${eye}/><circle cx="61" cy="33" r="4.5" ${eye}/>`
    case 'visor':
      return `<rect x="32" y="28" width="36" height="10" rx="5" ${eye}/>`
    case 'mono':
      return `<circle cx="50" cy="33" r="7.5" ${eye}/>`
    case 'triple':
      return `<circle cx="37" cy="33" r="4" ${eye}/><circle cx="50" cy="33" r="4" ${eye}/><circle cx="63" cy="33" r="4" ${eye}/>`
  }
}

function renderMouth(config: RobotConfig): string {
  switch (config.mouth) {
    case 'line':
      return `<rect x="40" y="46" width="20" height="4" rx="2" fill="${DARK}"/>`
    case 'grill':
      return [37.5, 44.5, 51.5, 58.5]
        .map((x) => `<rect x="${x}" y="43" width="4" height="10" rx="1.5" fill="${DARK}"/>`)
        .join('')
    case 'zigzag':
      return `<path d="M38 49 L42 45 L46 49 L50 45 L54 49 L58 45 L62 49" stroke="${DARK}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`
    case 'teeth':
      return (
        `<rect x="40" y="43" width="20" height="9" rx="2" fill="none" stroke="${DARK}" stroke-width="2.5"/>` +
        `<line x1="45" y1="43" x2="45" y2="52" stroke="${DARK}" stroke-width="2.5"/>` +
        `<line x1="50" y1="43" x2="50" y2="52" stroke="${DARK}" stroke-width="2.5"/>` +
        `<line x1="55" y1="43" x2="55" y2="52" stroke="${DARK}" stroke-width="2.5"/>`
      )
    case 'dots':
      return `<circle cx="42" cy="48" r="2.2" fill="${DARK}"/><circle cx="50" cy="48" r="2.2" fill="${DARK}"/><circle cx="58" cy="48" r="2.2" fill="${DARK}"/>`
  }
}

function renderAntenna(config: RobotConfig): string {
  switch (config.antenna) {
    case 'ball':
      return `<line x1="50" y1="18" x2="50" y2="7" stroke="${DARK}" stroke-width="4"/><circle cx="50" cy="5.5" r="4.5" fill="${DARK}"/>`
    case 'double':
      return (
        `<line x1="39" y1="18" x2="33" y2="7" stroke="${DARK}" stroke-width="4"/><circle cx="32" cy="5.5" r="4" fill="${DARK}"/>` +
        `<line x1="61" y1="18" x2="67" y2="7" stroke="${DARK}" stroke-width="4"/><circle cx="68" cy="5.5" r="4" fill="${DARK}"/>`
      )
    case 'loop':
      return `<path d="M39 19 A 11 11 0 0 1 61 19" fill="none" stroke="${DARK}" stroke-width="4"/>`
    case 'zigzag':
      return `<path d="M50 16 L44 11 L56 6 L50 2" fill="none" stroke="${DARK}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>`
    case 'vee':
      return (
        `<line x1="50" y1="18" x2="42" y2="5" stroke="${DARK}" stroke-width="4" stroke-linecap="round"/>` +
        `<line x1="50" y1="18" x2="58" y2="5" stroke="${DARK}" stroke-width="4" stroke-linecap="round"/>`
      )
    case 'none':
      return ''
  }
}

function renderEars(config: RobotConfig): string {
  switch (config.ears) {
    case 'bolt':
      return `<rect x="15" y="27" width="13" height="12" rx="3" fill="${FACE}" ${OUTLINE}/><rect x="72" y="27" width="13" height="12" rx="3" fill="${FACE}" ${OUTLINE}/>`
    case 'round':
      return `<circle cx="22" cy="33" r="7" fill="${FACE}" ${OUTLINE}/><circle cx="78" cy="33" r="7" fill="${FACE}" ${OUTLINE}/>`
    case 'pin':
      return (
        `<rect x="14" y="31" width="15" height="4" fill="${DARK}"/><circle cx="14" cy="33" r="3.5" fill="${DARK}"/>` +
        `<rect x="71" y="31" width="15" height="4" fill="${DARK}"/><circle cx="86" cy="33" r="3.5" fill="${DARK}"/>`
      )
    case 'fin':
      return (
        `<path d="M29 26 L16 33 L29 40 Z" fill="${FACE}" ${OUTLINE} stroke-linejoin="round"/>` +
        `<path d="M71 26 L84 33 L71 40 Z" fill="${FACE}" ${OUTLINE} stroke-linejoin="round"/>`
      )
    case 'none':
      return ''
  }
}

function renderNeck(config: RobotConfig): string {
  switch (config.neck) {
    case 'plain':
      return `<rect x="43" y="54" width="14" height="14" fill="${DARK}"/>`
    case 'duct':
      return (
        `<rect x="45" y="54" width="10" height="14" fill="${DARK}"/>` +
        [57.8, 61.2, 64.6]
          .map((y) => `<rect x="41" y="${y}" width="18" height="2.6" rx="1.3" fill="${DARK}"/>`)
          .join('')
      )
    case 'twin':
      return `<rect x="41" y="54" width="6" height="14" fill="${DARK}"/><rect x="53" y="54" width="6" height="14" fill="${DARK}"/>`
  }
}

function renderBody(config: RobotConfig): string {
  switch (config.body) {
    case 'square':
      return `<rect x="24" y="66" width="52" height="28" rx="6" fill="${FACE}" ${OUTLINE}/>`
    case 'round':
      return `<path d="M24 94 V82 Q24 66 39 66 H61 Q76 66 76 82 V94 Z" fill="${FACE}" ${OUTLINE} stroke-linejoin="round"/>`
    case 'trapezoid':
      return `<path d="M31 66 H69 L76 94 H24 Z" fill="${FACE}" ${OUTLINE} stroke-linejoin="round"/>`
    case 'inverted':
      return `<path d="M24 66 H76 L69 94 H31 Z" fill="${FACE}" ${OUTLINE} stroke-linejoin="round"/>`
    case 'hexagon':
      return `<path d="M35 66 H65 L76 80 L65 94 H35 L24 80 Z" fill="${FACE}" ${OUTLINE} stroke-linejoin="round"/>`
    case 'capsule':
      return `<rect x="24" y="66" width="52" height="28" rx="14" fill="${FACE}" ${OUTLINE}/>`
  }
}

function renderChest(config: RobotConfig): string {
  switch (config.chest) {
    case 'buttons':
      return `<circle cx="44" cy="80" r="2.5" fill="${DARK}"/><circle cx="56" cy="80" r="2.5" fill="${DARK}"/>`
    case 'screen':
      return `<rect x="39" y="74" width="22" height="12" rx="2" fill="none" stroke="${DARK}" stroke-width="2.5"/>`
    case 'core':
      return `<circle cx="50" cy="80" r="5.5" fill="${config.eyeColor}" stroke="${DARK}" stroke-width="2.5"/>`
    case 'none':
      return ''
  }
}

export function renderRobotSvg(config: RobotConfig): string {
  // Draw antenna, ears, neck, and body before the head so the head covers the overlap
  const parts = [
    renderAntenna(config),
    renderEars(config),
    renderNeck(config),
    renderBody(config),
    renderChest(config),
    renderHead(config),
    renderEyes(config),
    renderMouth(config),
  ].join('')
  return `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">${parts}</svg>`
}
