const fullName = "Byron Lee";
let age = 25;
const birthday = "July 23";
const pineapplePizza = true;
const lifeEvents = ["a", "b", "c", "d"];

if (pineapplePizza === true) {
  console.log(
    `My name is ${fullName} and I like pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
} else {
  console.log(
    `My name is ${fullName} and I don't like pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
}

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

let counter = 0;

while (true) {
  const randomNumber = Math.floor(Math.random() * 10 + 1);
  if (randomNumber !== 5) {
    counter++;
    console.log(`${randomNumber} !== 5`);
  } else {
    counter++;
    console.log(
      `5 === 5. It took ${counter} iterations to randomly generate the number 5.`
    );
    break;
  }
}

const wage = 10;
const hours = 50;
if (hours <= 40) {
  const pay = wage * hours;
  const weeksUntilMillion = 1000000 / pay;
  console.log(
    `It will take ${weeksUntilMillion} weeks until you make 1 million dollars!`
  );
  console.log(pay);
} else {
  const extraHours = hours - 40;
  const overTime = extraHours * (wage * 1.5);
  const pay = 40 * wage + overTime;
  const weeksUntilMillion = 1000000 / pay;
  console.log(
    `It will take ${weeksUntilMillion} weeks until you make 1 million dollars!`
  );
  console.log(pay);
}
