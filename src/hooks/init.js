import { StarstruckMaidenSheet } from "../sheets/starstruck-sheet.js";

// Registers the Starstruck Maiden character sheet during initialization
export function setupInitHook() {
  Hooks.once("init", () => {
    Actors.registerSheet("dnd5e", StarstruckMaidenSheet, {
      types: ["character"], // Only for player characters
      makeDefault: false, // Don't override the default sheet
      label: "STARSTRUCKMAIDEN.SheetLabel", // Localized label
    });
    console.log("Starstruck Maiden Sheet registered!");
  });
}
