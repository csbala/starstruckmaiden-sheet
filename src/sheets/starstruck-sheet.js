// Defines the Starstruck Maiden character sheet class to load the new D&D 5e sheet
export class StarstruckMaidenSheet extends dnd5e.applications.actor
  .ActorSheet5eCharacter2 {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      width: 600,
      height: 700,
    });
  }
}
