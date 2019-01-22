class Tip {
    constructor(tip, people) {
        this.tip = tip;
        this.people = people;
    }

    // this function calculate how many % of your bill you will pay as a tip

    calculateTip() {
        if (this.tip === '1') return 0.30;
        else if (this.tip === '2') return 0.20;
        else if (this.tip === '3') return 0.15;
        else if (this.tip === '4') return 0.10;
        else if (this.tp === '5') return 0.05;
        else return alert('You didnt give a opinion ');
    }

    // this function calculates the value of a tip per person

    tipAmount(bill, calculateTip, people) {
        if (bill <= 0 || people <= 0) {
            alert('Your bill or people amount is lower or the same like 0');
            return undefined;
        }
        let results = bill * calculateTip / people;
        return results;
    }
}