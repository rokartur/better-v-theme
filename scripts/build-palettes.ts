// Regenerates the palette themes from cursor-dark-syntax.json. Run: bun scripts/build-palettes.ts
const cursor = {
  keyword: '#82D2CE',
  call: '#EBC88D',
  declaration: '#EFB080',
  property: '#AAA0FA',
  string: '#E394DC',
  type: '#87C3FF',
  comment: '#F0F0F099',
  decorator: '#A8CC7C',
  constant: '#F8C762',
  text: '#D6D6DD',
  self: '#CC7C8A',
  heading: '#88C0D0',
}

const palettes = {
  Graphite: { keyword: '#8A8A8A', call: '#FFFFFF', declaration: '#FFFFFF', property: '#C8C8C8', string: '#9FD4A3', number: '#D4B98C', type: '#E4E4E4', comment: '#5C5C5C', decorator: '#9A9A9A', text: '#C8C8C8' },
  Glacier: { keyword: '#81A1C1', call: '#88C0D0', declaration: '#8FBCBB', property: '#D8DEE9', string: '#A3BE8C', number: '#B48EAD', type: '#EBCB8B', comment: '#616E88', decorator: '#8FBCBB', text: '#D8DEE9' },
  Ember: { keyword: '#FF8F6B', call: '#FFD089', declaration: '#FFB86B', property: '#E6C3A5', string: '#B5D99C', number: '#F2A7C3', type: '#7FD4C1', comment: '#8A7F76', decorator: '#FFD089', text: '#E8DDD3' },
  Dusk: { keyword: '#C4A7E7', call: '#EBBCBA', declaration: '#F0C6C4', property: '#9CCFD8', string: '#F6C177', number: '#EB6F92', type: '#5FA8BF', comment: '#6E6A86', decorator: '#C4A7E7', text: '#E0DEF4' },
  'Neon Night': { keyword: '#BB9AF7', call: '#7AA2F7', declaration: '#89B4FA', property: '#73DACA', string: '#9ECE6A', number: '#FF9E64', type: '#2AC3DE', comment: '#565F89', decorator: '#E0AF68', text: '#C0CAF5' },
}

const syntax = await Bun.file(`${import.meta.dir}/../themes/cursor-dark-syntax.json`).json()
const pkgPath = `${import.meta.dir}/../package.json`
const pkg = await Bun.file(pkgPath).json()
const source = JSON.stringify({ semanticTokenColors: syntax.semanticTokenColors, tokenColors: syntax.tokenColors })

for (const [name, p] of Object.entries(palettes)) {
  const swap = new Map([
    [cursor.keyword, p.keyword],
    [cursor.call, p.call],
    [cursor.declaration, p.declaration],
    [cursor.property, p.property],
    [cursor.string, p.string],
    [cursor.type, p.type],
    [cursor.comment, p.comment],
    [cursor.decorator, p.decorator],
    [cursor.constant, p.number],
    [cursor.text, p.text],
    [cursor.self, p.keyword],
    [cursor.heading, p.type],
  ])
  const remapped = JSON.parse(source.replace(/#[0-9a-f]{6}(?:[0-9a-f]{2})?\b/gi, (hex) => swap.get(hex.toUpperCase()) ?? hex))
  // Cursor paints numbers with the call color; the palettes give them their own.
  remapped.tokenColors.push({ scope: 'constant.numeric', settings: { foreground: p.number } })

  const label = `Better V ${name}`
  const file = `better-v-${name.toLowerCase().replace(' ', '-')}-theme.json`
  const theme = { name: label, include: './better-v-cursor-dark-theme.json', ...remapped }
  await Bun.write(`${import.meta.dir}/../themes/${file}`, JSON.stringify(theme, null, 2) + '\n')

  const entry = { label, id: label, uiTheme: 'vs-dark', path: `./themes/${file}` }
  const themes = pkg.contributes.themes.filter((t: { id: string }) => t.id !== label)
  pkg.contributes.themes = [...themes, entry]
}

await Bun.write(pkgPath, JSON.stringify(pkg, null, 2) + '\n')
