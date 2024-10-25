let array = [
    {firstName:"Vaibhav"},
    {LastName:"Kumawat"},
    {Favourite:"2 minute me bhoot bna dunga"},
];

let result = (array,target)=>{
    for(let name of array){
        if(name.firstName === target || name.LastName === target || name.Favourite === target){
            return true;
        }
    }
    return false;
}

console.log(result(array,"Vaibhav"))
