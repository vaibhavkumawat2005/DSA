let array = [1,2,2,3,6,6]
let unique = []
let uniqueLength = 0
for(let i = 0 ; i < array.length ; i++)
{
    let found = false
  for(let j = 0 ; j < uniqueLength ; j++)
  {
    if(array[i] === unique[j])
    {
        found = true
        break
    } 
  }
  if(!found)
  {
    unique[uniqueLength] = array[i]
    uniqueLength++  
}
}



for(let i =  0 ; i < unique.length ; i++)
{
    console.log(unique[i])
}   