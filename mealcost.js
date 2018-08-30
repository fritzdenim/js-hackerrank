// Complete the solve function below.
function solve(meal_cost, tip_percent, tax_percent) {
    let tip = meal_cost * (tip_percent/100);
    let tax = meal_cost * (tax_percent/100);
    let totalMeal = Math.round(meal_cost + tip + tax);
    
    console.log("The total meal cost is " + totalMeal + " dollars.");
}

solve(12.00,20,8);
solve(15.50,25,10);