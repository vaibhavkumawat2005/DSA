let array = [10,200,30,14,35] 
let max = -Infinity
let secondLargest = -Infinity
for(let i = 0 ; i < array.length ; i++)
{
    if(array[i]>max)
    {
        secondLargest = max
        max = array[i]
    }else if(array[i]>secondLargest && array[i] != max)
    {
        secondLargest = array[i]
    }

}

console.log(secondLargest)