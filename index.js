//Login attempts and Locking it after the 3rd try
function loginAttempts(attempts) {
   while (attempts <= 3 && attempts > 0) {
      console.log('You can try again.');
      attempts += 1;
   }
   while (attempts > 3) {
      console.log('Account locked.');
      break;
   }
}
loginAttempts(1)
console.log(''); //To give me a space between my logs


//Logging the votes in our voting pool
const votingPool = (votes) => {
   let vote = 0;
   let voteLength = votes.length;
   do {

      console.log(`Recorded vote: ${votes[vote]}`)
      vote += 1;

   } while (vote < voteLength)

}
votingPool(['Useful', 'Not useful', 'Not practical'])
console.log(''); //To give me a space between my logs



//Corresponding Days of the week with numbers
const daysOfTheWeek = (daysInNumber) => {
   daysInNumber.map(day => {
      switch (day) {
         case 1:
            console.log(`${day} corresponds Monday.`);
            break;
         case 2:
            console.log(`${day} corresponds Tuesday.`);
            break;
         case 3:
            console.log(`${day} corresponds Wednesday.`);
            break;
         case 4:
            console.log(`${day} corresponds Thursday.`);
            break;
         case 5:
            console.log(`${day} corresponds Friday.`);
            break;
         case 6:
            console.log(`${day} corresponds Saturday.`);
            break;
         case 7:
            console.log(`${day} corresponds Sunday.`);
            break;
         default:
            console.log(`${day} done not correspond any day of the week.`);
            break;
      }
   })
}
daysOfTheWeek([1, 2, 3, 4, 5, 6, 7])
console.log(''); //To give me a space between my logs



//Password Strength check
function passwordStrengthCheck(passwords) {
   let i;
   passwords.map(password => {
      if (password.length >= 8) {
         console.log(`The password ${password} is a strong password.`);
      }
      else {
         console.log(`The password ${password} ia not a strong password.`);
      }
   })
}
let a = ['password123', '@whata password', 'password', '1234']
passwordStrengthCheck(a)
console.log(''); //To give me a space between my logs



//Language Change
const multilingualGreeting = (languageCode) => {
   switch (languageCode) {
      case 'en':
         console.log('Hello');
         break;
      case 'fr':
         console.log('Bonjour');
         break;
      case 'sw':
         console.log('Habari');
         break;
      case 'ru':
         console.log('привет');
         break;
      case 'it':
         console.log('Buongiorno');
         break;
      default:
         console.log(`Gretting not available for "${languageCode}" language code`)
   }
}
multilingualGreeting('ru')
console.log(''); //To give me a space between my logs



//Weather dashboard
function weatherAlert(weatherDashboard) {
   weatherDashboard.map(temprature => {
      if (temprature > 30) {
         console.log('High heat alert!');
      }
      else if (temprature < 15) {
         console.log('Cold alert!');
      }
      else {
         console.log('Normal conditions');
      }
   }
   )
}
weatherAlert([32, 40, 23, 12, 18, 9])
console.log(''); //To give me a space between my logs



//Registering in queue
function registarationQueue(queueOfNames) {
   let lengthOfQueue = queueOfNames.length;
   while (lengthOfQueue > 0) {
      console.log(`Name: ${queueOfNames.shift()}`);
      lengthOfQueue -= 1;
   }
   console.log({ queueOfNames });
}
registarationQueue(['Arsema A. Gebremichael', 'Semhal Estifanos', 'Pheobe Gloria', 'Queen Carine']);
console.log(''); //To give me a space between my logs



//Retake test until score is 50 and increase 10 on each attempt
function scoreImprovement(score) {
   let retakeAttempt = 1;

   if (score >= 50) {
      console.log(`With a score of ${score}, you don't need to retake the test.`);
   }

   else {
      console.log(`Your score is ${score} before any attempts.`);

      do {
         score = score + 10;
         console.log(`Your score is ${score} on attempt ${retakeAttempt}.`);
         retakeAttempt += 1;
      } while (score < 50);

   }


}


scoreImprovement(30);