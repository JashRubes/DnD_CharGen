const character = {
    class: null,
};

function selectClass(className) {
    character.class = className;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("classDisplay").innerText =
        "Class: " + (character.class || "None");
}
