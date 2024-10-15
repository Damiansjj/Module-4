import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
let cw = 0;
let gw = 0;

do{
    let vraag= await userInput.question("Kies: rock, paper, scissors? ")
    let choices = ['rock', 'paper', 'scissors'];
    let computerChoice = choices[Math.floor(Math.random()*choices.length)];
    console.log(computerChoice)

    if(vraag == computerChoice){
        console.log("Gelijkspel")  
    }
    
    else if(vraag=='scissors'&& computerChoice=='paper'){
        gw++
        console.log("User win")
    }
    else if(vraag =='paper'&& computerChoice=='rock'){
        cw++
        console.log("Computer win")  
    }
    
    else if(vraag=='rock'&& computerChoice=='scissors'){
        gw++
        console.log("user win")
    }
    else if(vraag=='scissors'&& computerChoice=='rock'){
        cw++
        console.log("Computer win")
    }
    else if(vraag =='rock'&& computerChoice=='paper'){
        cw++
        console.log("User win")  
    }
    
    else if(vraag=='paper'&& computerChoice=='scissors'){
        cw++
        console.log("Computer win")
    }
    else{
    console.log("ongeldige keuze")}
    }while(cw < 3 && gw < 3 )
        console.log("De eindstand is: User: " + gw + " Computer: " + cw)
