function fun01() {

    var a = prompt("Enter a number");
    var b = [];

    for (i = 0; a != 0; i = 1 + i) {
        var re = a % 2;
        b[i] = re;
        a = Math.floor(a / 2);
    }

    for (i = b.length; i >= 0; i--) {
        alert(b[i]);
    }

}

//example of algorithms requireing loop with one level of nesting

//1. draw triangle (exercise 15 in lab 5)

//



// Draw a diamond


function diamond() {
    var output = "";

    for (i = 0; i < 3; i = i + 1) {
        console.log("i= " + i);

        for (j = -1; j < i; j = j + 1) {
            output +=  "*";
 
            console.log("J= " + j);

        }

        output += "<br>";
    }

    for (m = 0; m < 3; m = m + 1) {
        console.log("m= " + m);

        for (k = 2; k > m; k = k - 1) {
            output += "*";

            console.log("k= " + j);

        }

        output += "<br>";
    }

    $("#print").html(output);


}

// 4. output the multiplication table of size n
function tTable() {
    var n = prompt("Enter a number");

    var output = document.getElementById("print");

    for (i = 1; i <= n; i++) {
        for (j = 0; j <= 10; j++) {

            output.innerHTML = output.innerHTML + i + " x " + j + " = " + i * j;
            output.innerHTML = output.innerHTML + "<br>";
        }
        output.innerHTML = output.innerHTML + "<br>";
    }
}
