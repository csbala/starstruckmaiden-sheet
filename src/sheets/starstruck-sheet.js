// Defines the Starstruck Maiden character sheet class
export class StarstruckMaidenSheet extends dnd5e.applications.actor
  .ActorSheet5eCharacter {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["dnd5e", "sheet", "actor", "character", "starstruckmaiden"],
      template: "modules/starstruckmaiden-sheet/templates/starstruck-sheet.hbs",
      width: 600,
      height: 700,
    });
  }
}
