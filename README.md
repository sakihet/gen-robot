# gen-robot

A minimal robot icon generator. Compose a robot from flat geometric parts and export it as SVG or PNG.

<img src="public/robot.png" width="160" alt="Sample robot icon">

## Features

- Part picker: head, eyes, mouth, antenna, ears, neck, body, and chest details
- Color selection: base color (including metallic grays) and eye/accent color
- Random generation
- Export as SVG (vector) or PNG (512px)

Built with Vue 3, Vite, and TypeScript. Robots are rendered as a single SVG string shared by the preview and the exporters.

## Development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

## Type Check and Format

```sh
npm run type-check
npm run format
```

## License

[MIT](LICENSE)
