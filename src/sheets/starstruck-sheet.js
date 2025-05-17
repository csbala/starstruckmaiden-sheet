// Defines the Starstruck Maiden character sheet class to load the new D&D 5e sheet
export class StarstruckMaidenSheet extends dnd5e.applications.actor.ActorSheet5eCharacter2 {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      width: 600,
      height: 700
    });
  }

  // Initialize VE and CB when the sheet is opened
  async _updateObject(event, formData) {
    const actor = this.actor;

    // Ensure VE and CB are initialized
    if (!actor.system.resources?.vitalEnergy) {
      const maxHP = actor.system.attributes.hp.max || 0;
      const conMod = actor.system.abilities.con.mod || 0;
      const level = actor.system.details.level || 1;
      const maxVE = maxHP + (conMod * level); // Max VE = max HP + Con mod per level
      await actor.update({
        "system.resources.vitalEnergy": { value: maxVE, max: maxVE }
      });
    }
    if (!actor.system.resources?.celestialBurn) {
      const maxHP = actor.system.attributes.hp.max || 0;
      const maxCB = Math.ceil(maxHP * 0.75); // Max CB = 75% of max HP, rounded up
      await actor.update({
        "system.resources.celestialBurn": { value: 0, max: maxCB }
      });
    }

    // Handle VE updates
    if (formData["system.resources.vitalEnergy.value"] !== undefined) {
      const newVE = Math.max(0, formData["system.resources.vitalEnergy.value"]);
      const maxHP = actor.system.attributes.hp.max || 0;
      const minHP = Math.ceil(maxHP * 0.25); // HP can't go below 25%
      const currentHP = actor.system.attributes.hp.value || 0;
      const veUsed = (actor.system.resources.vitalEnergy.value || 0) - newVE;

      // Check if using VE would reduce HP below 25%
      const potentialHP = currentHP - veUsed;
      if (potentialHP < minHP) {
        ui.notifications.warn(`Cannot reduce HP below ${minHP} (25% of max HP)!`);
        return;
      }

      // Update HP and CB
      const newHP = Math.max(minHP, potentialHP);
      const newCB = Math.min(
        (actor.system.resources.celestialBurn.value || 0) + veUsed,
        actor.system.resources.celestialBurn.max || 0
      );

      formData["system.attributes.hp.value"] = newHP;
      formData["system.resources.celestialBurn.value"] = newCB;
    }

    // Handle CB usage (e.g., dealing damage restores HP)
    if (formData["system.resources.celestialBurn.value"] !== undefined) {
      const newCB = Math.max(0, formData["system.resources.celestialBurn.value"]);
      const cbUsed = (actor.system.resources.celestialBurn.value || 0) - newCB;
      const newHP = (actor.system.attributes.hp.value || 0) + cbUsed;

      formData["system.attributes.hp.value"] = Math.min(newHP, actor.system.attributes.hp.max || 0);
    }

    return super._updateObject(event, formData);
  }
}