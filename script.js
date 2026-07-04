let arr=[2,4,9,11,78,59,43,22]
console.log("Array", arr);



function findMaximum(array){
    let max=array[0];
    for(let i=0;i<array.length;i++){
        if(array[i]>max){
            max=array[i];
        }
    }
    return max;
}

const calculateSum = (array)=>{
    let sum=0;
    for(let i=0; i<array.length;i++){
        sum+=array[i];
    }
    return sum;   
}

const countOdd = function(array){
    let count = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 !== 0){
            count++;
        }
    }
    return count;
}

console.log("Maximum number:", findMaximum(arr));
console.log("Sum of all elements:", calculateSum(arr));
console.log("Count of odd numbers:", countOdd(arr));
