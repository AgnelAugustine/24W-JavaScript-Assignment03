document.addEventListener('DOMContentLoaded', () => {
    const studentInfo = document.getElementById('studentInfo');
    // student's ID and name.
    studentInfo.innerText = 'Student ID: 200555888, Name: Agnel Augustine';
});

// class named Pizza.
class Pizza {
    // constructor have 3 parameters: crust, meat, and toppings
    constructor(crust, meat, toppings) {
        this.crust = crust; // Crust type of the pizza
        this.meat = meat; // Type of meat/vegetable 
        this.toppings = toppings; // An array for toppings
    }

    getDescription() {
        // Joining the toppings array into a string
        return `A ${this.crust} crust pizza with ${this.meat} and toppings: ${this.toppings.join(', ')}.`;
    }
}

// Adding an event listener to the 'Order' button
document.getElementById('orderButton').addEventListener('click', () => {
    const crust = document.getElementById('crust').value;
    const meat = document.getElementById('meat').value;
    const toppingsElements = document.querySelectorAll('input[name="toppings"]:checked');
    let toppings = Array.from(toppingsElements).map(element => element.value);

    // Creating a new pizza object with the selected optionsl
    const pizza = new Pizza(crust, meat, toppings);
    // Displaying it in the 'orderSummary' element.
    document.getElementById('orderSummary').innerText = pizza.getDescription();
});
