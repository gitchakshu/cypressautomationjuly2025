//if cart value is above and equal 1000 give 10% discount 


function cartValueDiscount(cartTotal)
{
   if(cartTotal>=1000 && cartTotal<=1999)
   {
    console.log('customer is eligible for 10% discount')
     let discountTotal = cartTotal*0.1
     console.log('cutomer is gven a discount of-',discountTotal);
     let actualPrice = cartTotal-discountTotal;
     console.log('Actual price of the cart-',actualPrice);
}
else if (cartTotal>=2000 && cartTotal<=3999)
{
console.log('customer is eligible for 20% discount')
     let discountTotal = cartTotal*0.2
     console.log('cutomer is gven a discount of-',discountTotal);
     let actualPrice = cartTotal-discountTotal;
     console.log('Actual price of the cart-',actualPrice);
}
else 
{
    console.log('Invalid Input');
}

}

cartValueDiscount(1500);

//browser
let browser = "edge";

switch(browser)
{
    case"chrome":
    console.log("execute in chrome browser");
    break
    case"edge":
    console.log("execute in edge browser");
    break

    case"firefox":
    console.log("execute in firefox browser");
    break

    default:
        console.log("Invalid Selection");
}

// Assertions- visiblity , textContent, validate 

//Ternary Operator - one line if else 
    let flag = false ;

let message = flag ? "It is true": "It is false"

console.log(message);
