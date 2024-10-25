let array = [1,2,3,4,5]
let k = 2 
let rotate = []

for(let i = 0 ;i <array.length ; i++)
    {
        rotate[(i+k)%array.length] = array[i]
      

    }
    
   

    for(let i = 0 ; i<array.length ; i++)
{
    array[i] = rotate[i]
}

for(let i = 0 ;  i < array.length ; i++)
{
    console.log(array[i])
}