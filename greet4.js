function Greetr() {
    this.greeting = "Hello Four";
    this.greet = function () {
        console.log(this.greeting);
    }
}

module.exports = Greetr;