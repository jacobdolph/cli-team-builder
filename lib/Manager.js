class Manager {
    constructor(name, number, email, officeNumber) {
        this.officeNumber = officeNumber
    }
    getRole() {
        return "Manager"
    }
    getOfficeNumber() {
        return this.officeNumber
    }
}
module.exports = Manager