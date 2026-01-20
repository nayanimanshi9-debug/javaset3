function countvowels(str){
    let count=0;
    for(const char of str){
        if(
            char ==="a" ||
            char ==="e"||
            char ==="i" ||
            char ==="o"||
            char ==="u" )
        {
     count++;
    }
}
return count;
}
const countvow=(str) =>{
    let count=0;
    for(const char of str){
        if(
            char ==="a" ||
            char ==="e"||
            char ==="i" ||
            char ==="o"||
            char ==="u" )
        {
     count++;
    }
}
return count;

}
let nums=[1,2,3,4];
nums.forEach((num) => {

console.log(num * num);
});

let marks=[50,70,89,90,60,69,50];

let toppers=marks.filter((val) =>{
    return val > 90;
});
console.log(toppers);

let n=prompt("enter a number:");

let arr =[];
for(let i=1; i<=n; i++){
    arr[i-1]=i;
}
console.log(arr);

let sum=arr.reduce((res,curr) => {
    return res+curr;
});
console.log("sum=",sum);

let factorial=arr.reduce((res,curr) => {
    return res*curr;
});
console.log("factorial =",factorial);



