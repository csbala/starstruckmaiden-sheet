// Register the module and handle sheet customization
Hooks.once("init", () => {
  // Register the custom Starstruck Maiden sheet
  Actors.registerSheet("starstruckmaiden-sheet", StarstruckMaidenSheet, {
    types: ["character"],
    makeDefault: false,
    label: "Starstruck Maiden Sheet",
  });

  // Add a button to toggle the custom sheet
  Hooks.on("renderActorSheet", (sheet, html) => {
    if (sheet.actor.type !== "character") return;
    const useStarstruck = sheet.actor.getFlag(
      "starstruckmaiden-sheet",
      "useStarstruckSheet"
    );
    const button = $(`
      <button class="toggle-starstruck-sheet" style="margin: 5px;">
        ${useStarstruck ? "Use Default Sheet" : "Use Starstruck Sheet"}
      </button>
    `);
    button.on("click", async () => {
      await sheet.actor.setFlag(
        "starstruckmaiden-sheet",
        "useStarstruckSheet",
        !useStarstruck
      );
      sheet.actor.sheet.render(true);
    });
    html.find(".sheet-header").append(button);
  });

  // Override sheet rendering based on flag
  Hooks.on("getActorSheetClass", (actor) => {
    if (
      actor.type === "character" &&
      actor.getFlag("starstruckmaiden-sheet", "useStarstruckSheet")
    ) {
      return StarstruckMaidenSheet;
    }
    return null;
  });
});

// Custom Starstruck Maiden sheet class
class StarstruckMaidenSheet extends ActorSheet {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["starstruckmaiden-sheet", "sheet", "actor", "character"],
      template: "modules/starstruckmaiden-sheet/templates/starstruck-sheet.hbs",
      width: 600,
      height: 600,
    });
  }

  getData() {
    const data = super.getData();
    data.actor = this.actor;
    return data;
  }
}
