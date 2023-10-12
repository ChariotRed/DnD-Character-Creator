function createCharacter() {
    const name = document.getElementById("charName").value;
    const race = document.getElementById("charRace").value;
    const _class = document.getElementById("charClass").value;

    const character = {
        name: name,
        race: race,
        class: _class
    };

    displayCharacter(character);
}

function displayCharacter(character) {
    const output = document.getElementById("output");
    output.innerHTML = `<strong>${character.name}</strong> - ${character.race} ${character.class}`;
}

function generateBackstory() {
    const race = document.getElementById("charRace").value;
    const _class = document.getElementById("charClass").value;

    let backstory = "Born ";


    switch (race) {// Generate backstory based on race
        case 'Human':
            backstory += "in a bustling city, you've seen the breadth of humanity from the richest nobles to the poorest vagabonds. ";
            break;
        case 'Elf':
            backstory += "in a secluded glade, you've walked the silent paths of the deep forests under the moonlit sky. ";
            break;
    }


    switch (_class) {// Modify backstory based on class
        case 'Warrior':
            backstory += "Training from a young age, the clang of steel and the weight of armor are second nature to you.";
            break;
        case 'Mage':
            backstory += "With an innate affinity for the arcane, you've spent years studying the secrets of magic.";
            break;
    }

    displayBackstory(backstory);
}

function displayBackstory(backstory) {
    const output = document.getElementById("backstoryOutput");
    output.innerHTML = `<strong>Backstory:</strong> ${backstory}`;
}
