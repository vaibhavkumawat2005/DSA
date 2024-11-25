function isBalanced(expression){

let stack = []

for(let char of expression){
    if(char === "[" || char === "{" || char === "("){
        stack.push(char);
    }else if( char === ")" || char === "]" || char === "}"){
        if(stack.length === 0){
            return false;
        }

        let top = stack.pop();

        if(
            char === ")" && top !== "(" ||
            char === "}" && top !== "{" ||
            char === "]" && top !== "[" 
        ){
            return false;
        }
    }
}
        return stack.length === 0;
}
console.log(isBalanced("[](){}"))