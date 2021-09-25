var myName= "JAva script"
console.log(typeof(name));

//primitive Data type in JS 
//string,number, boolean, null, undefined

//null and undefined are not data types



//number literal:
//we only have number data type.No int, double, byte...


var myNumber=20;
console.log(typeof (myNumber));

var myNumber=20.9;
console.log(typeof (myNumber));

var myNum=20/0;
console.log(myNum);//infinity
console.log(typeof (myNum));//number

var num1=20+ "a";
console.log(num1);//"20a"
console.log(typeof (num1));////string



var num2="a"+20;

console.log(num2);//"a20"
console.log(typeof (num2));//string


//boolean:yes or no

var isExist=true;
console.log(isExist);//true

var isExist=false;
console.log(isExist);//false


//null

var pickedColor=null;
console.log(pickedColor);//null
console.log(typeof(pickedColor));//object


//undefined

var selectedCar;
console.log(selectedCar);//undefined
console.log(typeof(selectedCar));//undefined

var selectedCar=undefined;
console.log(selectedCar);
console.log(typeof(selectedCar));