/*
=========================================
YURI'S LIBRARY
UI ENGINE
Version 1.0
=========================================
*/

const UI = {

    elements: {

        dialogue: document.getElementById("dialogue"),

        affection: document.getElementById("affection"),

        visits: document.getElementById("visits"),

        sprite: document.getElementById("yuriSprite")

    }

};


function updateDialogue(text){

    UI.elements.dialogue.textContent = text;

}


function updateAffection(){

    UI.elements.affection.textContent = saveData.affection;

}


function updateVisits(){

    UI.elements.visits.textContent = saveData.visits;

}


function refreshUI(){

    updateAffection();

    updateVisits();

}
