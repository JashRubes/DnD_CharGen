window.dataStore = {};
const DATA_FOLDER = 'data/'; // automatically used for all JSON files

// Map of keys to JSON filenames
const jsonFiles = {
  racesData: 'races.json',
  classesData: 'classes.json',
  backgroundsData: 'backgrounds.json',
  alignmentsData: 'alignments.json'
};

// Load a single JSON
function loadJSON(key, filename) {
  return fetch(DATA_FOLDER + filename)
    .then(res => {
      if (!res.ok) throw new Error(`Failed to load ${filename}: ${res.statusText}`);
      return res.json();
    })
    .then(json => {
      window.dataStore[key] = json;
    })
    .catch(err => console.error(err));
}

// Load all JSON files in jsonFiles map
function loadAllData() {
  const promises = Object.entries(jsonFiles).map(([key, filename]) => loadJSON(key, filename));
  return Promise.all(promises);
}
