// Question 1

const totalBasketBallScore = (freeThrow, midRange, threePointers) => {
    if ( typeof freeThrow !== "number" ||
    typeof midRange !== "number" || 
    typeof threePointers !== "number"){
       console.log("Please input a number")
       return 
     }
 return (freeThrow  + (midRange  * 2) +  (threePointers * 3));
 
}

console.log(totalBasketBallScore(2,3,4));

// Question 2
const item = "case";
function itemPrice(item){
switch(item){
    case "computer":
        var price = 500;
        break;
    case "mouse":
        var price = 10;
        break;
    case "tablet":
        var price = 250;
        break;
    case "case":
        var price = 25;
        break;
    case "router":
        var price = 100;
        break;
        default:
            console.log("Item is not available")
    var str = item+ "price is " + price



}
return price
}
console.log(itemPrice("case"));

// Question 3

const resturant = ["Applebees", "Panera Bread",
 "Popeyes", "Chopt", "Chick-fil-A",
  "Cheesecake Factory", "Five Guys"];

  const randomResturant = (numOfResturants) => {
    return length.numOfResturants = 4;
  }
  console.log(randomResturant());
  const randomResturantList = resturant.filter((name) => {
return name.length < 11 ;
  })
  console.log(randomResturantList);

  // Question 4
  let year = 2000;
  function isLeapYear () {
    
    if (( year % 400 == 0) || (year % 4 == 0) && (year % 100 !== 0)) {
        console.log (true)
    }else{
        console.log(false)
    }
    
      return year  
    }
  console.log(isLeapYear())