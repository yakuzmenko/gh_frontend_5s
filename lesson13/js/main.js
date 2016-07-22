// A $( document ).ready() block.
//$(document).ready(function() {
    document.getElementById("demo").innerHTML = "Hello JavaScript!!!";
    document.getElementById("demo").style.fontSize = "40px";
    //console.log( "ready!" );

    // Number
    var x = 5,
        y = 10.5;

    // String
    var z = "4",
        someText = "Some text here";

    // Boolean
    var one = true,
        two = false;

    // Array
    var fruits = ['banana', 'orange', 'kiwi', 10, one];

    // Object
    var obj = {
        name: 'Vasya',
        surname: 'Pupkin',
        age: 23,
        iq: 70
    };

    // Function
    var myFunction = function ($arg1, $arg2) {
        return $arg1 + $arg2;
    };

    function newFunction() {
        var var1 = "Test";
        someText = "Give me one fruit";

        //console.log(var1);
        //console.log(fruits);
        console.log(someText);

        return false;
    }


    for (i=0; i<Object.keys(obj).length; i++) {

        //if (fruits[i] == 10) {
        //    console.log('10 found');
        //    break;
        //}
    }

    console.log(obj);
    console.log(obj.name + ', ' + obj['age']);

//});