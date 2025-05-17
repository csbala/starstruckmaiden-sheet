// Sets up a render hook to log when the sheet is opened
export function setupRenderHook() {
  Hooks.on("renderStarstruckMaidenSheet", (sheet, html) => {
    console.log(
      `Starstruck Maiden Sheet opened for actor: ${sheet.actor.name}`
    );
  });
}
