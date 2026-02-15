import { Character } from "./logic/character.js";
import { loadJSON } from "./logic/loader.js";
import { renderOptions } from "./ui/renderer.js";

const character = new Character();

async function init() {
    const classes = await loadJSON("data/classes.json");

    renderOptions("class-section", classes, (selected) => {
        character.setClass(selected);
        updateSummary();
    });
}

function updateSummary() {
    const summary = document.getElementById("summary");
    summary.innerText =
        character.class
            ? "Class: " + character.class.name
            : "No class selected";
}

init();
