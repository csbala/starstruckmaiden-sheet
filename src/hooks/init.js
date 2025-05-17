import { StarstruckMaidenSheet } from "../sheets/starstruck-sheet.js";

// Registers the Starstruck Maiden character sheet during initialization
export function setupInitHook() {
  Hooks.once("init", () => {
    Actors.registerSheet("dnd5e", StarstruckMaidenSheet, {
      types: ["character"], // Only for player characters
      makeDefault: false, // Don't override the default sheet
      label: "STARSTRUCKMAIDEN.SheetLabel", // Localized label
    });
    console.log(
      "Starstruck Maiden Sheet registered with D&D 5e system version:",
      game.system.version
    );
    console.log(
      "D&D 5e system settings:",
      game.settings.get("dnd5e", "systemSettings")
    );
  });
}
