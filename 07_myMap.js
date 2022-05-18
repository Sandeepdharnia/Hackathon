

function myMap(arr, inp)
{
    newArr =[];
    for(let i= 0;i< arr.length; i++){
        newArr.push(arr[i]*inp);
    }
    return newArr;
}
let arr = [2, 4, 5];
console.log(myMap(arr, 7));