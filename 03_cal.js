
// const calculator (input1 , input2, input3 ) =>
// {
//     return input1 input3 input2
// }



// console.log(calculator(input1, input2,input3));

function calculator(input1, input2, input3)
{
    if(input3 === "+"){
        return input1 + input2;
    }
    if(input3 === "-"){
        return input1 - input2;
    } 
    if(input3 === "*"){
        return input1 * input2;
    } 
    if(input3 === "/" && input2 !== 0  ){
        return input1 / input2;
    } 
    else{
        console.log("Cant divide with 0")
    }
}
console.log(calculator(0, 5, '-'));