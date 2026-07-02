/*
==========================================
Yuri After Story
Version: 1.0.0
Main Application
==========================================
*/

"use strict";

// -----------------------------
// Global Game State
// -----------------------------

let saveData = null;

// -----------------------------
// Start Game
// -----------------------------

function startGame() {

    loadGame();

    saveData.visits++;

    saveGame();

    refreshUI();

    nextDialogue();

}

// -----------------------------
// Continue Button
// -----------------------------

document.addEventListener("DOMContentLoaded", () => {

    const nextButton = document.getElementById("nextButton");

    nextButton.addEventListener("click", () => {

        nextDialogue();

    });

    startGame();

});
