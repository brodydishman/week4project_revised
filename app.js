
let answer="";
let number=0;
let number2=0;
let result;

while(number!==5 && number2!==10){
    answer=prompt("How many attacks would you like to attempt?")
    number=number+Math.floor(Math.random() * answer)+1;
    number2=number2+Math.floor(Math.random() * 2)+1;
    if(number>=5){
        result="You have been slain..."
    }
    if(number2>=10)
        result="You have won!"
}

document.body.innerHTML=result;