function scuberGreetingForFeet(someValue){
  let result = "This one is on me!";
  if (someValue <= 400) return result;
  else if(someValue <= 2000) return("That will be twenty bucks.");
  else if(someValue <= 2500) return("I will gladly take your thirty bucks.");
  else if(someValue >= 2500) return("No can do.");
  
}

function ternaryCheckCity(city){
 if (city == "NYC") return "Ok, sounds good.";
 else if (city == "Pittsburgh") return "No go.";

}

function switchOnCharmFromTip(tip){
  
  let response;

  switch (tip){
    case "generous":
      response = "Thank you so much.";
      break;
      case "not as generous":
        response = "Thank you.";
        break;
        case "thanks for everything":
          response = "Bye.";
          break;
  };
  return response;
  };