class Person {
    constructor(FName, LName) {
        this.FName = FName;
        this.LName = LName;
    }

    getFullName() {
        return { FName: this.FName, LName: this.LName };
    }

}
module.exports = Person;
