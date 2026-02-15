export class Character {
    constructor() {
        this.class = null;
        this.race = null;
        this.background = null;
        this.level = 1;
    }

    setClass(classData) {
        this.class = classData;
    }

    setRace(raceData) {
        this.race = raceData;
    }

    getHitDie() {
        return this.class ? this.class.hitDie : null;
    }
}
