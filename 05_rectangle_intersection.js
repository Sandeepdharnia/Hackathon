const intersect = [[[2, 1], [4, 4]], [[1, 1], [8, 8]]]; // => [2, 2], [4, 3]


function interSect(arr)
{
    let first_arr = arr[0][0];
    let sec_arr = arr[0][1];
    let three_arr = arr[1][0];
    let four_arr = arr[1][1];

    const reducer = (acc, curr) => acc+ curr;
   if(first_arr.reduce(reducer) > three_arr.reduce(reducer))
   {
       console.log(first_arr);
   }
   else{
       console.log(three_arr);
   }

   if(sec_arr.reduce(reducer) < four_arr.reduce(reducer))
   {
       console.log(sec_arr);
   }
   else{
       console.log(four_arr);
   }
}
interSect(intersect);