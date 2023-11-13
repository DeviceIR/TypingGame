import Game from "./scripts/Game.js";

/**
 * defining the keys on the keyboard because it will be needed though out the game
 * @var
 */
const keys = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

import Document from "./scripts/Doc.js";

let doc = new Document();
let game = new Game(doc.inputElement)