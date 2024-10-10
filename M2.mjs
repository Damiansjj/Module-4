import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let startTop = parseFloat(await userInput.question("true or false? "));
let startLeft = parseFloat(await userInput.question("true or false? "));

let hoogte= 4;

if( startTop == true && startLeft == true){
    for(let a = 1; a <= hoogte; a++)
        { 
            for(let b = 1; b <= a; b++)
            {
                process.stdout.write("*" );
            }
            console.log(" ")
        }    
}
    
else if(startTop == false && startLeft == true){
    for(let a = hoogte; a >= 1; a--)
        { 
            for(let b = 1; b <= a; b++)
            {
                process.stdout.write("*" );
            }
            console.log(" ") }    
}
        
else if(startTop == true && startLeft == false){
    for(let a = 1; a <= hoogte; a++)
        { 
            for(let c = 1; c <= hoogte - a; c++)
            {
                process.stdout.write(" ");
            }
            for(let b= 1 ; b <=a;b++)
            {
                process.stdout.write("*")
            }
            console.log("") }

}

        