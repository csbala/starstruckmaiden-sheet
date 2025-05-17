// Main entry point for the Starstruck Maiden Character Sheet module
console.log("✅ Starstruck Maiden Sheet Module loaded");

import { setupInitHook } from "./hooks/init.js";
import { setupRenderHook } from "./hooks/render.js";
import { setupUpdateHook } from "./hooks/update.js";
import { setupCloseHook } from "./hooks/close.js";

// Initialize all hooks
setupInitHook();
setupRenderHook();
setupUpdateHook();
setupCloseHook();
