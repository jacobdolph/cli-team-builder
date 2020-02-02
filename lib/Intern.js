class Intern {
    constructor(name, num, email, school) {
        this.school = school
    }
    getRole() {
        return "Intern"
    }
    getSchool() {
        return this.school
    }
}
module.exports = Intern