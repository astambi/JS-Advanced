// Transpiling with Babel for AMD and RequireJS
// NB path in imports => path to Babel working directory

import {setName} from 'build/js3_BabelRequire/player.js'; // NB path Babel dir
import * as game from 'build/js3_BabelRequire/game.js';   // NB path Babel dir

// add click handler to the start game button
document.getElementById('startGame').addEventListener('click', function () {
    setName(document.getElementById('playername').value); // player.
    game.printGame(); // game.
});

// add click handler to the calculate score button
document.getElementById('calculate').addEventListener('click', function () {
    game.calculateScore(); // game.
});

// set the default number of problems
document.getElementById('problemCount').value = game.getProblemCount(); // game.