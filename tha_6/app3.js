//1. Write a JavaScript function to check whether an `input` is an array or not
// Test Data :

function is_array(a){
    return(Array.isArray(a));
}

console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));


//2. Write a JavaScript function to clone an array
function array_Clone(a){
    return a.slice();
}

console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

// 3. Write a JavaScript function to get the first element of an array. 
//    Passing a parameter 'n' will return the first 'n' elements of the array.

function first(a,i){
    return a.slice(0,i);
}

console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));


// 4. Write a simple JavaScript program to join all elements of the following array into a string.
function myJoin(myColor1){
    	console.log(myColor1.join());
        console.log(myColor1.join(','));
        console.log(myColor1.join('+'));
}


myColor = ["Red", "Green", "White", "Black"];
myJoin(myColor);