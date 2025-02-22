// Problem 1
// A simple Function to calculate cashout charge for an Mobile Banking Agent
function cashOut(money) {
  if (typeof money !== "number" || money <= 0) {
    return "Invalid";
  }
  let charge;
  charge = (money * 1.75) / 100;
  return charge;
}
//Problem 2
//A Funtion to check whether an user input email is valid or invalid.
function validEmail(email) {
  if (typeof email !== "string") {
    return "Invalid";
  }
  if (
    email[0] === "." ||
    email[0] === "-" ||
    email[0] === "+" ||
    email[0] === "@" ||
    email[0] === " "
  ) {
    return false;
  }
  if (!email.includes("@") || email.includes(" ")) {
    return false;
  }
  let len = email.length;
  if (
    email[len - 1] !== "m" ||
    email[len - 2] !== "o" ||
    email[len - 3] !== "c" ||
    email[len - 4] !== "."
  ) {
    return false;
  }
  return true;
}
//Problem 3
//Comparing two teams and deciding the winner
function electionResult(votes) {
  if (Array.isArray(votes)) {
    const arr1 = [];
    const arr2 = [];
    for (let vote of votes) {
      if (vote === "mango") {
        arr1.push(vote);
      } else if (vote === "banana") {
        arr2.push(vote);
      }
    }
    if (arr1.length > arr2.length) {
      return "Mango";
    } else if (arr2.length > arr1.length) {
      return "Banana";
    } else if (arr1.length == arr2.length) {
      return "Draw";
    }
  } else {
    return "Invalid";
  }
}
//Problem 4
//Returning true for some valid conditions .
function isBestFriend(f1, f2) {
  if (typeof f1 === "object" && typeof f2 === "object") {
    if (f1.bestFriend === f2.roll && f2.bestFriend === f1.roll) {
      return true;
    } else {
      return false;
    }
  }
  // =====
  else {
    return "Invalid";
  }
}
// Problem 5 
// Calculating watch time given in seconds to Hour,Minute and Seconds.
function calculateWatchTime(arr) {
  if (Array.isArray(arr)) {
    let sumOfTime = 0;
    for (time of arr) {
      if (typeof time === "number") {
        sumOfTime = time + sumOfTime;
      } else {
        return "Invalid";
      }
    }
    const hour = parseInt(sumOfTime / (60 * 60));
    const remainingSeconds = sumOfTime % (60 * 60);
    const minutes = parseInt(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;
    const Time = {
      hour: hour,
      minutes: minutes,
      seconds: seconds,
    };
    return Time;
  } else {
    return "Invalid";
  }
}
// const result1 = cashOut(2000);
// const result2 = validEmail("rafid.iconic@gmail.com");
// const result3 = electionResult(['banana','mango']);
// const result4 = isBestFriend();
// const result5 = calculateWatchTime([100,100,100]);
// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);
// console.log(result5);
