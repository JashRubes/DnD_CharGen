function randomChoice(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getObjectById(array, id) {
  return array.find(obj => obj.id === id);
}

// Returns a full character object
function generateCharacterObject(options) {
  const level = Math.max(1, Math.min(20, parseInt(options.level || 1)));

  const race = getObjectById(window.dataStore.racesData, options.raceId);
  const charClass = getObjectById(window.dataStore.classesData, options.classId);
  const background = getObjectById(window.dataStore.backgroundsData, options.backgroundId);
  const alignment = options.alignmentId
    ? getObjectById(window.dataStore.alignmentsData, options.alignmentId)
    : randomChoice(window.dataStore.alignmentsData);

  return { level, race, charClass, background, alignment };
}

// Randomize a field
function randomizeField(fieldName) {
  const arrayName = fieldName + 'Data';
  const select = document.getElementById(fieldName + '-select');
  const optionsArray = window.dataStore[arrayName];
  select.value = randomChoice(optionsArray).id;
}
