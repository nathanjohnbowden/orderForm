// variables
const menu = "";
const crustRadios = [];
let selectedCrust = "";
const sauceRadios = [];
let selectedSauce = "";
const toppingsCheckboxes = [];
const selectedToppings = [];

// event listener
orderNowBtn.addEventListener("click", function (event) {
  event.preventDefault(); //if a button is clicked, the input is instantly cleared from the console

  //get the form element
  const menu = document.getElementById("myMenu"); //pulling form from DOM

  //find what crust radio button was selected
  const crustRadios = menu.elements["crust"]; //menu.elements brings elements of the form into an array called on by name
  for (let i = 0; i < crustRadios.length; i++) {
    if (crustRadios[i].checked) {
      //loop through sauces to identify value of selectedCrust
      selectedCrust = crustRadios[i].value;
    }
  }

  //find what sauce radio button was selected
  const sauceRadios = menu.elements["sauce"]; //pulling sauce elements from menu
  for (let i = 0; i < sauceRadios.length; i++) {
    //loop through sauces to identify value of selectedSauce
    if (sauceRadios[i].checked) {
      selectedSauce = sauceRadios[i].value;
    }
  }

  //find what toppings have been selected and add to array
  const toppingsCheckboxes = menu.elements["toppings"]; //pulling toppings from menu
  for (let i = 0; i < toppingsCheckboxes.length; i++) {
    //loop through toppings to identify checked toppings to add to a separate array called selectedToppings
    if (toppingsCheckboxes[i].checked) {
      selectedToppings.push(toppingsCheckboxes[i].value);
    }
  }

  //experiementing with an alert for when the form is filled out incorrectly

  // if (selectedCrust == false) {
  //     alert("Please fill out all the fields of your Order Form.");
  //     event.reset();
  // }

  // if (selectedSauce == false) {
  //     alert("Please fill out all the fields of your Order Form.");
  //     event.reset();
  // }

  calculateTotal(selectedToppings); // calling function to calculate totals and print to display
});

function calculateTotal() {
  // variables
  let total = 0;
  let toppingPrice = 2.5;
  let basePrice = 5.5;
  let orderString = `One super duper yummy ${selectedCrust} with ${selectedSauce} coming right up!`;
  let toppingsString = "Toppings: ";

  // for loop to string together toppings and add to total price of pizza, used same logic from movie and grocery list challenge
  for (let i = 0; i < selectedToppings.length; i++) {
    total += toppingPrice;
    if (i < selectedToppings.length - 1) {
      toppingsString += selectedToppings[i] + ", ";
    } else {
      toppingsString += selectedToppings[i];
    }
  }

  total += basePrice;

  let pizzaOrderDiv = document.getElementById("pizzaOrder"); // printing crust/sauce options to display
  pizzaOrderDiv.innerHTML = orderString;

  let toppingsDiv = document.getElementById("toppings"); // printing toppings to display
  toppingsDiv.innerHTML = toppingsString;

  let totalDiv = document.getElementById("total"); // printing price to display // how do I format currency?
  totalDiv.innerHTML = "$" + total;
}
