export function setupInitHook() {
  Hooks.once("init", () => {
    // Register the new character sheet for D&D 5e
    Actors.registerSheet("dnd5e", StarstruckMaidenSheet, {
      types: ["character"], // Only for player characters
      makeDefault: false, // Don't override the default sheet
      label: "Starstruck Maiden Character Sheet",
    });
    console.log("Starstruck Maiden Sheet registered!");
  });
}

// Extend the default D&D 5e character sheet
class StarstruckMaidenSheet extends dnd5e.applications.actor
  .ActorSheet5eCharacter {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["dnd5e", "sheet", "actor", "character", "starstruckmaiden"],
      template:
        "modules/starstruckmaiden-sheet/templates/starstruckmaiden-sheet.hbs",
      width: 800,
      height: 800,
      tabs: [
        {
          navSelector: ".tabs",
          contentSelector: ".sheet-body",
          initial: "attributes",
        },
      ],
    });
  }
}
