

//Login attempts and Locking it after the 3rd try
function failedLogin(attempts){
 while(attempts<=3 && attempts>0){
    console.log('You can try again.');
    attempts +=1;
 }
 while (attempts>3){
    console.log('Account locked.');
    break;
 }
}
failedLogin(3)
console.log(''); //To give me a space between my logs



//Logging the votes in our voting pool
const votingPool = (votesArray) => {
   let vote = 0;
   let voteLength = votesArray.length;
   do{
      
      console.log(`Feature vote: ${votesArray[vote]}`)
      vote +=1;
      
    }while(vote < voteLength)

}
votingPool(['Useful', 'Not useful', 'Not practical'])
console.log(''); //To give me a space between my logs



//Corresponding Days of the week with numbers
const daysOfTheWeek = (daysOfTheWeek) => {
   daysOfTheWeek.map(day => {
      switch(day){
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



//Strong password checker
function passwordStrengthCheck(passwords){
   let i;
   passwords.map(password=> {
      if (password.length >= 8) {
         console.log(`The password ${password} is a strong password.`);
      }
      else{
         console.log(`The password ${password} ia not a strong password.`);
      }
   })
}
let a = ['123jnsdbfrf', '2jbeied29143d', 'sdjfsd', '356']
passwordStrengthCheck(a)
console.log(''); //To give me a space between my logs



//Language Change
const multiligual = (language)=>{
   switch(language){
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
         console.log('Selam')
   }
}
multiligual('ru')
console.log(''); //To give me a space between my logs



//Weather dashboard
function weatherAlert(weatherDashboard){
   weatherDashboard.map(weather=>{
      if (weather > 30){
         console.log('High heat alert!');
      }
      else if (weather < 15){
         console.log('Cold alert!');}
      else {
         console.log('Normal conditions');
      }}
      )
}
weatherAlert([32, 40, 23, 12, 18, 9])
console.log(''); //To give me a space between my logs



//Registering in queue
function registaration(queueOfNames){
   let lengthOfQueue = queueOfNames.length;
   while(lengthOfQueue>0){
      console.log(`Name: ${queueOfNames.shift()}`);
      lengthOfQueue-=1;
   }  
   console.log({queueOfNames});
}
registaration(['Arsema A. Gebremichael', 'Semhal Estifanos', 'Pheobe Gloria', 'Queen Carine']);
console.log('');



//Retake test until score is 50 and increase 10 on each attempt
function scoreImprovement(score){
   let  attempt = 1;
   do{
         console.log(`Your score is ${score} on attempt ${attempt}.`);
         score = score+10;
         attempt += 1;
      }while(score<50);

      
}


scoreImprovement(0);