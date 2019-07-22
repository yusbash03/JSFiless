

function narcissisticVal(number) {
    //get the input value
     number = document.getElementById("numbr").value;
    //let results = number * number;
    //console.log(results);
    
    //displayed if it's a narcissistic number
    let isNarcNum = document.getElementById('isTrue').innerHTML = number + " is a Narcissistic number";
    
    //displayed if is a narcissistic number
    let isNotNarcNum = document.getElementById('notTrue').innerHTML = number + " is not a Narcissistic number";
    let isNarc = document.getElementById('isTrue');
    isNarc.style.display = 'none';//hide text before operation
    let isNotNarc = document.getElementById('notTrue');
    isNotNarc.style.display = 'none';//hide text before operation

     var stringVal = '' + number;
     var valLength = stringVal.length;//we find the lenght the value
     var result = 0;  
     for (let i in stringVal) {
       result += Math.pow((+stringVal[i]), valLength);
     }
     if(result == number && number !=""){
       alert(number + " is a Narcissistic number");
       isNotNarc.style.display = 'none';
       isNarc.style.display = 'block';
        //console.log(number + " is a Narcissistic number");
     }
     else if(number == ""){
        alert("Please input a number");
        //console.log("Please input a number");
     }
     else{
        //console.log(result);
        alert(number + " is not a Narcissistic number");
        isNotNarc.style.display = 'block';
        isNarc.style.display = 'none';
        //console.log(number + " is not a Narcissistic number");
     }
      
  };
  
  // window.addEventListener('DOMContentLoaded', ()=>{
//     const ALC = 4.0;
//     const hello = document.getElementById('hello').innerHTML = "Hello Cool " + ALC;
// })

// const ALCC = [10,20,9];
// ALCC[1] = 100;
// ALCC.push(23);
// console.log(ALCC);
// let e = 10;
// const name = ()=>{
//     e = 23;
//     console.log(e)
// }
//name();

