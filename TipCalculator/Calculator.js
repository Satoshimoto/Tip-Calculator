class Calculator {
    constructor() {
        this.bill = document.getElementById('bill');
        this.opinion = document.getElementById('opinion');
        this.people = document.getElementById('people');
        this.howMuch = document.querySelector('.container .howMuch');
        this.perPerson = document.querySelector('.container .each');
        document.getElementById('count').addEventListener('click', this.calculate.bind(this));
    }

    // function that renders the value of the tip
    render(price, people = 1) {
        if (price === null || price === undefined || isNaN(price)) {
            this.bill.value = '';
            this.opinion.value = '0';
            this.people.value = '';
            this.howMuch.textContent = 'ERROR';
        } else {
            this.howMuch.textContent = price + ' $';
        }
        people > 1 ? this.perPerson.textContent = 'each' : this.perPerson.textContent = '';

    }

    // function start after click 'calculate' button - show the value of the tip per person
    calculate() {
        let pay = new Bill(this.bill.value);
        let tip = new Tip(this.opinion.value, this.people.value);
        let results = Math.round(tip.tipAmount(pay.showBill(), tip.calculateTip(), tip.people) * 100) / 100;
        //results = results.toFixed(3);
        // when results = undefined than in console user can see error thats why I comment toFixed function

        this.render(results, tip.people);

    }

}