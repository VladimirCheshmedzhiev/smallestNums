function smallestTwo(input){

    input.sort((a,b) => a - b);
    input.splice(2);
    console.log(input);



}
smallestTwo([30, 15, 50, 5])