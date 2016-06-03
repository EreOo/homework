
//ex 1
function hll()  {
	document.write('Hello World ');
}

hll();

//ex 2, 3
function hello(name){
	if(name != null)
	document.write('Hello, ' + name);
 else
 	document.write('Hello, guest ');

} 

hello();
hello('Vladimir');

//ex 4
function mul(i, j){
	return i * j;
}

console.log(mul(5,5));


//ex 5 ?
 function some(){
	return "it's work";
}

var a = some;
console.log(a);
console.log(a());


//ex 6
function rgb(a, b, c){
	return "rgb("+a+","+b+","+c+")";
}

console.log(rgb(234,45,123));

//ex 7
function avg(){
	var n = 0;
	//var for <type test>
	var l = arguments.length;

  for(var i = 0; i < arguments.length; i++){

//<type test> if not number -> ignore
  	if(typeof(arguments[i]) == 'number'){
    n += arguments[i];
}
else{
	//if not number ne nado na nego delit' 
      l = l - 1;
    }


  }

  return Math.round(n / l);
}

console.log('AVG: ' + avg(1,3,5,'Vovka', 11, 'dfgrt', 'hahahah'));


//ex8
function write(txt){
	document.write(txt);
}

function log(txt){
	console.log(txt);
}
//test
write('Oooops');

log('Oooops');

//ex9
function operation(m, n, o){
	
	return o(m,n);
}

//test
log(operation(4,2, avg));
