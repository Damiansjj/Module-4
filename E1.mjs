import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let vraag = parseFloat(await userInput.question("Geef de afmeting voor zijde 1: "));
let vraag1 = parseFloat(await userInput.question("Geef de afmeting voor zijde 2: "));