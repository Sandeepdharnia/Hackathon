function wordCount(input)
{
    const arr = input.split(' ');
    if(arr.filter(word => word !=='').length < 30)
    {
        console.log(arr.length);
    }
    else{
        console.log("arr legth is too long");
    }
    
}
wordCount("this is life this is lifethis is life this is life this is life this is life this is life this is life this is life");