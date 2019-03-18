var arr = [12,34,4,5,6,7,8,9,44];
var sum = 0;
function getSum(arr){
    for(var i = 0; i<arr.length;i++){
        sum = sum + arr[i];
    }
    console.log("Sum : " + sum);
}  

getSum(arr);
