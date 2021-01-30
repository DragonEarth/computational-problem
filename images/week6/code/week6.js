function p22() {

   var sum = 0;
   
   for(i = 0; i <= 100; i = i++) {
       sum = sum + a[i];
   }
   alert("Sum = " + sum);

}

function p23() {
    var a = prompt("Enter First Number: ");
    var b = prompt("Enter Second Number: ");
    var c = prompt("Enter Third Number: ");

    if (a > b) {
        if (b > c) {
            alert(a, b, c);
        } else {
            if (a > c) {
                alert(a, c, b);
            } else {
                alert(c, a, b);
            }
        }
    } else {
        if (a > c) {
            alert(b, a, c);
        } else {
            if (b > c) {
                alert(b, c, a);
            } else {
                alert(c, b, a);
            }
        }
    }

}

function p24() {
    var num = prompt("Eneter a Number: ");

    do {
        num = num / 2;
    } while (num > 1);

    if (num == 1) {
        alert("yes");
    } else {
        alert("no");
    }
}

function P25() {
    var num = prompt("Enter number: ");

    var bin = '';
    var n = num;

    while(n != 0){
        if( n % 2 == 0) {
            bin = bin.concat('0', bin);
        } else{
            bon = bin.concat('1', bin);
        }
        n = n / 2;
    }

    alert(num + "in binary: " + bin);
}

function addSum(num) {
    var p = prompt("Enter a number")
  
    
    alert("Result = " + mySum(num));
  }
  // a sub-algorithm to return sum of natural numbers up to upTo
  // pre-conditions: upTo belongs to Natural numbers >= 0
  // post-conditions: returns sum of all natural numbers less than or equal to upTo
  function mySum(upTo) {
  
    /*TODO 2: implement the body of the function here to 
    calculate sum of 1 to upTo */
    var sum = 0;
    for (i = 0; i <= upTo; i++) {
      sum = sum + i; 
    }
    return sum;
  
  }
  
  