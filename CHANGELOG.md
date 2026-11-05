# Change Log

## 0.0.14
- Calm git colors in the Explorer and Source Control: every git decoration, list error and warning color and the source control graph (lanes and branch badges) now use HSL 60% saturation and 65% lightness with the previous hues. Renamed, staged, conflicting and submodule files and the graph get theme colors instead of the saturated VS Code defaults.

## 0.0.13
- Syntax colors are Cursor Dark (Cursor 3.28.7) 1:1, without the 15% saturation boost. The rules live in `themes/cursor-dark-syntax.json`, copied verbatim from Cursor and included by the theme, so a new Cursor release syncs with one file copy. Workbench UI colors are unchanged.
- Rename the theme from Purple Haze to Better V Cursor Dark. The theme id stays `Better V Theme`, so `workbench.colorTheme` settings keep working.
- Add five syntax palettes on the same workbench UI: Better V Graphite, Glacier, Ember, Dusk and Neon Night. Each one swaps the accent colors of the Cursor rules, and gives numbers their own color. `bun scripts/build-palettes.ts` regenerates them after a Cursor sync.

## 0.0.12
- Syntax colors now follow Cursor Dark (Cursor 3.28.7) rule for rule, with every accent 15% more saturated (OKLCH chroma, same hues, as in 0.0.10). This reverts the 0.0.11 remaps, brings Cursor's newer colors (numbers `#EFC782`, Markdown headings `#80C1D4`, comments `#F0F0F099`) and its C, C++, Python and CMake semantic token rules. Workbench UI colors are unchanged.

## 0.0.11
- Separate syntax roles that all shared `#A497FF`: variables and constants now use the text color `#d6d6dd`, function declarations orange `#F6AD75` like function calls, and HTML/JSX attributes green `#a5ce70`. Properties stay lavender.

## 0.0.10
- Raise saturation of all accent colors by 15% (OKLCH chroma, same hues), so syntax, git and status colors look less washed out.
- Fix the terminal and editor sticky scroll hover: solid `#1A1A1A` instead of a translucent overlay that washed out the text.

## 0.0.9
- Fix secondary buttons (Disable, Uninstall) and extension Install button: light text on dark gray, dark text on light gray.
- Fix dark-on-dark colors: Ports running process icon, SCM graph hover label, warning badges, inline edit gutter indicator.
- Add visible borders to the Command Palette, notifications, find widget, hovers, suggestions and menus.
- Raise contrast of status bar, inactive tabs, section headers, placeholders, line numbers, inlay hints and CodeLens to WCAG levels.

## 0.0.8
- Support VS Code 1.144: theme colors for chat, inline chat, the Agents window, sticky scroll, debug, symbol icons, bracket pairs and other surfaces that fell back to Dark Modern defaults.

## 0.0.7
- Update colors

## 0.0.6
- Increased contrast and improved readability of UI elements.
- Fixed dotenv file key and value colors for better syntax clarity.
- Unified foregrounds and placeholder colors to improve text legibility across panels and inputs.
- Tuned editor visuals: selection, line highlight, bracket match, minimap highlights and gutter markers.

## 0.0.5
- Update README.md badges for installs and rating

## 0.0.4
- Fix extensionButton.prominentForeground contrast

## 0.0.3
- Update README.md with screenshots and credits

## 0.0.2
- Add extension icon and README.md

## 0.0.1
- Initial release of Better V Theme for VS Code
