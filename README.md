# Starstruck Maiden Character Sheet

A Foundry VTT module that adds a custom character sheet for D&D 5e player characters, styled with a purple theme. This sheet mirrors the legacy D&D 5e character sheet layout.

## Features

- Custom "Starstruck Maiden Character Sheet" for D&D 5e player characters.
- Purple-themed styling to distinguish it from the default sheet.
- Matches the legacy D&D 5e sheet layout with ability scores, skills, saving throws, and more.

## Installation

1. Download or clone this repository.
2. Place the `starstruckmaiden-sheet` folder in your Foundry VTT `Data/modules/` directory.
3. In Foundry, go to **Add-on Modules**, click **Install Module**, and use the manifest URL:  
   `https://raw.githubusercontent.com/csbala/starstruckmaiden-sheet/main/module.json`.
4. Activate the module in your world.
5. Create a new D&D 5e character (type: "character"), right-click the character in the sidebar, select "Sheet" settings, and choose "Starstruck Maiden Character Sheet".

## Development

- **Scripts**: JavaScript logic is in `scripts/`. The entry point is `main.js`, which sets up hooks.
- **Hooks**: Hook logic is in `scripts/hooks/`. Currently, `init.js` registers the sheet, and `render.js` logs when the sheet is opened.
- **Sheet Class**: The sheet class is defined in `scripts/sheets/starstruck-sheet.js`.
- **Template**: The sheet’s HTML is in `templates/starstruck-sheet.hbs`.
- **Styles**: CSS is in `styles/starstruck-sheet.css`.

## Future Improvements

- Add Starstruck Maiden-specific fields (e.g., Vital Energy, Celestial Burn).
- Enhance interactivity using render, update, and close hooks.
- Expand localization for additional languages.

## License

MIT License. See [LICENSE](LICENSE) for details.
