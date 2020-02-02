class Engineer {
    constructor(name, num, email, github) {
        this.github = github
    }
    getRole() {
        return "Engineer"
    }
    getGithub() {
        return this.github
    }
}
module.exports = Engineer