function Greetr() {
    this.greeting = "Hello Three";
    this.greet = function () {
        console.log(this.greeting);
    }
}

module.exports = new Greetr();