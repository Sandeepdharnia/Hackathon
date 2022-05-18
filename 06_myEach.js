function myEach(array, loopOver)
{
    return loopOver(array);
}

function loopOver(array)
{
    for(let i = 0;i<array.length;i++)
    {
        console.log(array[i]);
    }
}

array = [2, 4, 5,];
myEach(array, loopOver);