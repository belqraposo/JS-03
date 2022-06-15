//Questão 1:

let x = 10;
let msg = [];
for(let x = 1; x <= 10; x++){
    msg.push(x)
}
console.log(msg);

// //Questão 2:

let y = 10;
let msg2 = [];
while(y >= 1){
    msg2.push(y);
    y--;
}
console.log(msg2);

//Questão 3:

let count = 0;
let pairs = [];
while(count <= 100){
    if(count % 2 === 0){
        pairs.push(count);
    }
    count++;
}
console.log(pairs);

//Questão 4:

let count2 = 1;
let unpaired = [];
while(count2 <= 100){
    if(count2 % 2 === 1){
        unpaired.push(count2);
    }
    count2++;
}
console.log(unpaired);