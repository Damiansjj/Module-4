import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let start = parseFloat(await userInput.question("Met welke getal gaan we beginnen: "));
let end= parseFloat(await userInput.question("Met welke getal gaan we eindigen: "));
let deler1=parseFloat(await userInput.question("Wat is het eerste waarop we testen: "));
let deler2=parseFloat(await userInput.question("Wat is het tweede getal waarop we testen: "));

for(let teller = start; teller <= end; teller++)


    if(teller  %deler1 == 0 && teller %deler2==0){
        console.log( teller+ " Dit getal is deelbaar door "+ deler1 + " en " +deler2)
    }
    else
    console.log(teller)