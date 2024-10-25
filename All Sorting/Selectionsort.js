// let array = [20, 52, 10, 30, 40];

function selectionSort(array) {
    const len = array.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }

  
        let temp = array[i];
        array[i] = array[min];
        array[min] = temp;
    }
   
    

    for(let i =  0 ; i < array.length ; i++)
        {
            console.log(array[i])
        }   
}

selectionSort([12,52,52,-12,0,41,56,100,75]);
