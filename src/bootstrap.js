// src/bootstrap.js
Hooks.once("init", () => {
  // Register the StarstruckMaiden Sheet for D&D 5e characters
  Actors.registerSheet("dnd5e", StarstruckMaidenSheet, {
    types: ["character"],
    makeDefault: false,
    label: "StarstruckMaiden Sheet",
  });

  console.log("StarstruckMaiden Sheet | Module initialized");
});

// Define the custom sheet class (extends the default D&D 5e character sheet)
class StarstruckMaidenSheet extends dnd5e.applications.actor
  .ActorSheet5eCharacter {
  // For now, inherit all functionality from the default D&D 5e sheet
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["dnd5e", "sheet", "actor", "character", "starstruckmaiden"],
      template: "systems/dnd5e/templates/actors/character-sheet.hbs",
    });
  }
}
