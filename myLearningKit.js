var NUMBER_OF_BUTTONS = 10;

var questionName = ["Sum", "Area Triangle", "Roots X-axis", "Root Quad", "Grade",
    "Povitive vs Negative", "Num pos vs neg Enterd", "Divisable By 6", "Separate digits",
    "Digit 7 in a num"]




/*window.onload = function () {
    var editor = CodeMirror.fromTextArea(document.getElementById("editor"),
        {
            mode: "javascript",

        }

    )
*/


var myCodeMirror = CodeMirror.fromTextArea
    (document.getElementById("editor"), {
        mode: "javascript",
        lineNumbers: true,
        lineSeparator: "..",

        //when typing in the editor
        // indentUnit: 8,
        //smartIndent: false,

        lineWrapping: true,
        electricChars: true,

    });





var myCodeMirror2 = CodeMirror.fromTextArea
    (document.getElementById("editor2"), {
        mode: "javascript",
        lineNumbers: true,

    });



function indent() {

    myCodeMirror.setSelection({
        'line': myCodeMirror.firstLine(),
        'ch': 0,
        'sticky': null
    }, {
        'line': myCodeMirror.lastLine(),
        'ch': 0,
        'sticky': null
    },
        { scroll: false });
    //auto indent the selection
    myCodeMirror.indentSelection("smart");

    // https://codepen.io/cben/pen/JdKyRE
    var charWidth = myCodeMirror.defaultCharWidth(), basePadding = 4;
    myCodeMirror.on("renderLine", function (cm, line, elt) {

        // Show continued list/qoute lines aligned to start of text rather
        // than first non-space char.  MINOR BUG: also does this inside
        // literal blocks.
        var leadingSpaceListBulletsQuotes = /^\s*([*+-]\s+|\d+\.\s+|>\s*)*/;
        var leading = (leadingSpaceListBulletsQuotes.exec(line.text) || [""])[0];
        var off = CodeMirror.countColumn(leading, leading.length, cm.getOption("tabSize")) * charWidth;
        //var off = CodeMirror.countColumn(line.text, null, cm.getOption("tabSize")) * charWidth;

        elt.style.textIndent = "-" + off + "px";
        elt.style.paddingLeft = (basePadding + off) + "px";
    });
    myCodeMirror.refresh();

    //I tried to fire a mousdown event on the code to unselect everything but it does not work.
    myCodeMirror.setSelection({
        'line': myCodeMirror.firstLine(),
    })
}


function checkUncheck1() {
    if (document.getElementById("check1").checked == true) {
        document.getElementById("flowchart").style.display = "inline";
    } else {
        document.getElementById("flowchart").style.display = "none";
    }

}

/*
function checkUncheck2() {
    if (document.getElementById("check2").checked == true) {
        document.getElementById("editor").style.display = "inline";
    } else {
        document.getElementById("editor").style.display = "none";
    }
//smartIndent: false,
}
*/

/*function checkUncheck3() {
    if (document.getElementById("check3").checked == true) {
        document.getElementById("editor").style.display = "inline";
    } else {
        document.getElementById("editor").style.display = "none";
    }

}*/

function zoomIn() {
    document.getElementById("flowchart").style.width = "200%";
    document.getElementById("js").style.width = "200%";
    //document.getElementById("another").style.width = "200%";
}

function zoomOut() {
    document.getElementById("flowchart").style.width = "100%";
    document.getElementById("js").style.width = "100%";
    //document.getElementById("another").style.width = "100%";
}

//Creat buttons
for (i = 0; i < NUMBER_OF_BUTTONS; i++) {
    var newButt = document.createElement("button"); //Creating button element
    $(newButt).text(questionName[i]); // Changing thee txt displaied on the button

    $(newButt).attr("onclick", "p" + i + "()")

    $("nav").append(newButt);
}

function p0() {

    var output = document.getElementById("problem").innerHTML =
        "Draw a flowchart for a computer program to receive two numbers and output their sum. ";

    document.getElementById("flowchart").setAttribute("src", "images/flowchart/sumof2inputs.jpg");
    document.getElementById("flowchart").setAttribute("alt", "Sum of two inputs");

    /*change the img tag and prevent it from displaying the image*/
    document.getElementById("flowchart").style.display = "none";
    document.getElementById("editor").style.display = "none";

    myCodeMirror.setValue(
        "function add().."
        + "{../*precondition: num1 represents a Real number. num2 represents a Real number.*/"
        + "../*Postcondition: The sum of num1 and num2 has been outputted.*/.."

        + "..var w = parseInt(document.getElementById(\"num1\").value);"
        + "..var h = parseInt(document.getElementById(\"num2\").value);"
        + "..var s = w + h;.."
        + "..document.getElementById(\"output\").innerHTML = \"sum: \" + s };..}"

    )

    indent();

}

//myCodeMirror.indentAuto;



function p1() {

    var output = document.getElementById("problem").innerHTML =
        "draw a flowchart for a computer program to receive three numbers and store them in memory spaces " +
        "called a, b, and c as three sides of a triangle and, by using Heron’s formula, calculate and output the area of the triangle. " +
        "You may need to refresh your memory or learn about Heron’s formula";

    document.getElementById("flowchart").setAttribute("src", "images/flowchart/areatriangle.jpg");
    document.getElementById("flowchart").setAttribute("alt", "Area of triangle");

    /*change the img and prevent it from displaying the image*/
    document.getElementById("flowchart").style.display = "none";

    myCodeMirror.setValue(

        "function area()..{  "
        + "../*precondition: 'a, b, c' represents a whole number.*/.."
        + "../*Postcondition: The Area of triangle*/.."

        + "var a = parseInt(document.getElementById(\"num1\").value);.."
        + "var b = parseInt(document.getElementById(\"num2\").value);.."
        + "var c = parseInt(document.getElementById(\"num3\").value);.."
        + "  var p = (a + b + c) / 2;  "

        + "var area = Math.sqrt(p * (p - a) * (p - b) * (p - c));.."
        + "document.getElementById(\"output\").innerHTML = \"Area: \" + area.toFixed(2);..}"
    )
    indent()

}

function p2() {

    var output = document.getElementById("problem").innerHTML =
        "draw a flowchart for a computer program to receive three numerical coefficients of a quadratic equation (store them in memory spaces called a, b, and c"
        + " and calculate and output its roots. Write a precondition that assumes coefficients are good enough such that a solution in real number exists. "
        + " That means your design should not concern cases for which a solution does not exist.’s formula, calculate and output the area of the triangle. " +
        "You may need to refresh your memory or learn about Heron’s formula";

    document.getElementById("flowchart").setAttribute("src", "images/flowchart/rootx-axis.jpg");
    document.getElementById("flowchart").setAttribute("alt", "Root of the x-axis");

    /*change the img and prevent it from displaying the image*/
    document.getElementById("flowchart").style.display = "none";

    myCodeMirror.setValue(
        "function equation() {.."
        + "/\/\precondition: 'a, b, c' represents a real number. .."
        + "//Postcondition: roots of a quadratic equation. ...."

        + "var a = parseInt(document.getElementById(\"num1\").value);.."
        + "var b = parseInt(document.getElementById(\"num2\").value);.."
        + "var c = parseInt(document.getElementById(\"num3\").value);.."

        + "var root1 = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);.."
        + "var root2 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);...."

        + "document.getElementById(\"output\").innerHTML = \"one root: \" + root1.toFixed(2);.."
        + "document.getElementById(\"output2\").innerHTML = \"another root: \" + root2.toFixed(2);.."

        + "}"
    )
    indent();

}


function p3() {

    var output = document.getElementById("problem").innerHTML =
        "draw a flowchart to receive three numerical coefficients of a quadratic equation and determines if it has two distinct real roots, one root, or no roots in real numbers.";

    document.getElementById("flowchart").setAttribute("src", "images/flowchart/root_quadratic.jpg");
    document.getElementById("flowchart").setAttribute("alt", "Root of Quadratic Equation");

    /*change the img and prevent it from displaying the image*/
    document.getElementById("flowchart").style.display = "none";

    document.getElementById("editor").innerHTML =
        "function equation() {\n"
        + "//precondition: \n"
        + "//	'a, b, c' represents a real number.\n"
        + "//Postcondition:\n"
        + "//	one, two, or no roots of a quadratic equation \n"

        + "var a = parseInt(document.getElementById(\"num1\").value); \n"
        + "var b = parseInt(document.getElementById(\"num2\").value);\n\n"
        + "var c = parseInt(document.getElementById(\"num3\").value);\n\n"

        + "var root = Math.pow(b, 2) - 4 * a * c;\n\n"

        + "if (root < 0) {\n"
        + "document.getElementById(\"output\").innerHTML = \"no root\";\n"
        + "} else if (root > 0) {\n"
        + "document.getElementById(\"output\").innerHTML = \"two root\";\n"
        + "} else { \n"
        + "document.getElementById(\"output\").innerHTML = \"one root\";\n"
        + "}\n"

        + "}"

}

function p4() {

    var output = document.getElementById("problem").innerHTML =
        "draw a flowchart to receive a number and map it to a letter grade based on York standard."
    document.getElementById("flowchart").setAttribute("src", "images/flowchart/grade.jpg");
    document.getElementById("flowchart").setAttribute("alt", "Grades and Grading Schemes");

    /*change the img and prevent it from displaying the image*/
    document.getElementById("flowchart").style.display = "none";

    document.getElementById("editor").innerHTML =
        "//precondition: enter a number from 0 to 100\n"
        + "//Postcondition: Letter representing grade.\n"

        + "function mapping() {\n"

        + "var a = parseInt(document.getElementById(\"num1\").value);\n\n"

        + "switch (true) {\n\n"
        + " case (a > 89):\n"
        + "answer = \"A+\";\n"
        + "break;\n"
        + "case (a > 79):\n"
        + "answer = \"A\";\n"
        + "break;\n"
        + "case (a > 74):\n"
        + "answer = \"B+\";\n"
        + "break;\n"
        + "case (a > 69):\n"
        + "answer = \"B\";\n"
        + "break;\n"
        + "case (a > 64):\n"
        + "answer = \"C+\";\n"
        + "break;\n"
        + "case (a > 59):\n"
        + "answer = \"C\";\n"
        + "break;\n"
        + "case (a > 54):\n"
        + "answer = \"D+\";\n"
        + "break;\n"
        + "case (a > 49):\n"
        + "answer = \"D\";\n"
        + "break;\n"
        + "case (a > 39):\n"
        + "answer = \"E\";\n"
        + "break;\n"
        + "default:\n"
        + "answer = \"F\";\n"
        + "}\n"
        + "document.getElementById(\"output\").innerHTML = answer;\n"


        + "}\n"


}

function p5() {

    var output = document.getElementById("problem").innerHTML =
        "assume there is a webpage containing an HTML input of type text and a button. When the button is" +
        " clicked a function, named Problem06, is called. Draw a flowchart that outputs whether the input is" +
        " positive or negative until a zero is received. When a zero is received, the button is disabled (so the" +
        " function cannot be called anymore).";

    document.getElementById("flowchart").setAttribute("src", "images/flowchart/positive_negative.jpg");
    document.getElementById("flowchart").setAttribute("alt", "Number is Positive or Negative");

    /*change the img and prevent it from displaying the image*/
    document.getElementById("flowchart").style.display = "none";

    document.getElementById("js").setAttribute("src", "images/code/img_6.jpg");

}

function p6() {

    var output = document.getElementById("problem").innerHTML =
        "by modifying your flowchart above, draw a flowchart to continue receiving numbers and output if they" +
        +" are positive or negative until a zero is entered. When a zero is entered, the program should output how"
        + " many positive and how many negative numbers have been entered, then it stops.";

    document.getElementById("flowchart").setAttribute("src", "images/flowchart/num_pos_neg.jpg");
    document.getElementById("flowchart").setAttribute("alt", "Number of Positive and Negative entred");

    /*change the img and prevent it from displaying the image*/
    document.getElementById("flowchart").style.display = "none";

    document.getElementById("js").setAttribute("src", "images/code/img_7.jpg");

}

function p7() {

    var output = document.getElementById("problem").innerHTML =
        "considering the same approach above, draw a flowchart to continue receiving numbers and output if they" +
        " are divisible by 6 or not until a zero is entered. When a zero is entered, the program should output how" +
        " many of the entered numbers were divisible by 6, then it stops. IMPORTANT RESTRICTION: you are not" +
        " allowed to divide the number by 6; therefore, you are not allowed to use the modulus operator (%) over" +
        " 6 to verify the remainder whether the number is divided by 6. You can do any other math trick you wish.";

    document.getElementById("flowchart").setAttribute("src", "images/flowchart/div6.jpg");
    document.getElementById("flowchart").setAttribute("alt", "Divisable By 6");

    /*change the img and prevent it from displaying the image*/
    document.getElementById("flowchart").style.display = "none";

    document.getElementById("flowchart").setAttribute("src", "images/flowchart/div6.jpg");
    document.getElementById("js").setAttribute("src", "images/code/img_8.jpg");

}

function p8() {

    var output = document.getElementById("problem").innerHTML =
        "Devise a flowchart to receive a positive number and output each digit separately. For"
        + " instance, if the input is 692, the program should output 2, 9, 6. Another example, if the"
        + "number is 135429 the program should out put 9, 2, 4, 5, 3, and 1.";

    document.getElementById("flowchart").setAttribute("src", "images/flowchart/lab5/img_09.jpg");
    document.getElementById("flowchart").setAttribute("alt", "Separate digits");

    /*change the img and prevent it from displaying the image*/
    document.getElementById("flowchart").style.display = "none";

    document.getElementById("js").setAttribute("src", "images/code/img_9.jpg");

}

function p9() {

    var output = document.getElementById("problem").innerHTML =
        "Devise a flowchart to receive a positive number and output how many of its digits are equal"
        + "to 7. For instance, if the input is 772, the program should output 2, because there are two"
        + "sevens there. Another example, if the input is 14368, the program should output 0.";

    document.getElementById("flowchart").setAttribute("src", "images/flowchart/lab5/img_10.jpg");
    document.getElementById("flowchart").setAttribute("alt", "Root of Quadratic Equation");

    /*change the img and prevent it from displaying the image*/
    document.getElementById("flowchart").style.display = "none";

    document.getElementById("js").setAttribute("src", "images/code/img_10.jpg");

}

function p10() {

    var output = document.getElementById("problem").innerHTML =
        "Devise a flowchart to receive a positive number and output sum of its digits. For instance, if"
        + "the input is 63932, the program should output 23, because 6+3+9+3+2 is 23. Another"
        + "example, if the input is 23 the program should output 5";

    document.getElementById("flowchart").setAttribute("src", "images/flowchart/lab5/img_11.jpg");
    document.getElementById("flowchart").setAttribute("alt", "");

    /*change the img and prevent it from displaying the image*/
    document.getElementById("flowchart").style.display = "none";

    document.getElementById("flowchart").setAttribute("src", "images/flowchart/img_11.jpg");
    document.getElementById("js").setAttribute("src", "images/code/img_11.jpg");

}
function p12() {

    var output = document.getElementById("problem").innerHTML =
        "Devise a flowchart to receive a positive number and output \"yes\" if it's equal to its reverse;"
        + " otherwise, output \"no\". For instance, if the input is 63936, the program should output"
        + " \"yes\", because if you read the digits from left to right or from right to left, it's the same"
        + " number. But, if the input is 632, the program should output \"no\" because 632 is not the"
        + " same as 236";

    document.getElementById("flowchart").setAttribute("src", "images/flowchart/lab5/img_12.jpg");
    document.getElementById("flowchart").setAttribute("alt", "");

    /*change the img and prevent it from displaying the image*/
    document.getElementById("flowchart").style.display = "none";

    document.getElementById("js").setAttribute("src", "images/code/img_12.jpg");

}
function p13() {

    var output = document.getElementById("problem").innerHTML =
        "Devise an algorithm to receive a positive number, as n, and output n! (n Factorial).";

    document.getElementById("flowchart").setAttribute("src", "images/flowchart/lab5/img_13.jpg");
    document.getElementById("flowchart").setAttribute("alt", "");

    /*change the img and prevent it from displaying the image*/
    document.getElementById("flowchart").style.display = "none";

    document.getElementById("js").setAttribute("src", "images/code/img_13.jpg");

}
function p14() {

    var output = document.getElementById("problem").innerHTML =
        "Devise an algorithm to input an integer greater than 1, as n, and output the first n values of"
        + " the Fibonacci sequence. In Fibonacci sequence, the first two values are 0 and 1 and other"
        + " values are sum of the two values preceding it. For instance, if the input is 4, the program"
        + " should print 0, 1, 1, 2,. As another example, if the input is 9, the program should output 0,"
        + " 1, 1, 2, 3, 5, 8, 13, 21,";

    document.getElementById("flowchart").setAttribute("src", "images/flowchart/lab5/img_14.jpg");
    document.getElementById("flowchart").setAttribute("alt", "Root of Quadratic Equation");

    /*change the img and prevent it from displaying the image*/
    document.getElementById("flowchart").style.display = "none";

    document.getElementById("js").setAttribute("src", "images/code/img_14.jpg");

}
function p15() {

    var output = document.getElementById("problem").innerHTML =
        "Devise an algorithm to input a positive integer, n, – and by using XX characters – output the"
        + " figure below that has n rows and each row k has k pairs of XX. For instance, if input is 5, the"
        + " figure on the left (and if the input is 12, the figure on the right) should be generated by the"
        + " program.";

    document.getElementById("flowchart").setAttribute("src", "images/flowchart/lab5/img_15.jpg");
    document.getElementById("flowchart").setAttribute("alt", " ");

    /*change the img and prevent it from displaying the image*/
    document.getElementById("flowchart").style.display = "none";

    document.getElementById("js").setAttribute("src", "images/code/img_15.jpg");

}
function p16() {

    var output = document.getElementById("problem").innerHTML =
        "Accept an input and decided if it is a prime number or not";

    document.getElementById("flowchart").setAttribute("src", "images/flowchart/lab6/img_1.jpg");
    document.getElementById("flowchart").setAttribute("alt", "Prime number Flowchart");

    /*change the img and prevent it from displaying the image*/
    document.getElementById("flowchart").style.display = "none";

    document.getElementById("js").setAttribute("src", "images/code/img_16.jpg");

}
function p17() {

    var output = document.getElementById("problem").innerHTML =
        "draw a flowchart to receive eight numbers, find out if the first four numbers are equal to the other four ones";

    document.getElementById("flowchart").setAttribute("src", "images/flowchart/lab6/img_2.jpg");
    document.getElementById("flowchart").setAttribute("alt", " Fowchart");

    /*change the img and prevent it from displaying the image*/
    document.getElementById("flowchart").style.display = "none";

    document.getElementById("js").setAttribute("src", "images/code/img_17.jpg");

}
function p18() {

    var output = document.getElementById("problem").innerHTML =
        "";

    document.getElementById("flowchart").setAttribute("src", "images/flowchart/lab6/img_3.jpg");
    document.getElementById("flowchart").setAttribute("alt", "Root of Quadratic Equation");

    /*change the img and prevent it from displaying the image*/
    document.getElementById("flowchart").style.display = "none";

    document.getElementById("js").setAttribute("src", "images/code/img_18.jpg");

}
function p19() {

    var output = document.getElementById("problem").innerHTML =
        "";

    document.getElementById("flowchart").setAttribute("src", "images/flowchart/lab6/img_4.jpg");
    document.getElementById("flowchart").setAttribute("alt", "");

    /*change the img and prevent it from displaying the image*/
    document.getElementById("flowchart").style.display = "none";

    document.getElementById("js").setAttribute("src", "images/code/img_19.jpg");

}
function p20() {

    var output = document.getElementById("problem").innerHTML =
        "Draw a flowchart, accept a number and find out if it is a prime or not. solve it using sub-algorithm";

    document.getElementById("flowchart").setAttribute("src", "images/flowchart/lab6/img_5.jpg");
    document.getElementById("flowchart").setAttribute("alt", " ");

    /*change the img and prevent it from displaying the image*/
    document.getElementById("flowchart").style.display = "none";

    document.getElementById("js").setAttribute("src", "images/code/img20.jpg");

}

function p21() {

    var output = document.getElementById("problem").innerHTML =
        "Draw a flowchart, print out if the inputed number is prime and has digit 7. Use sub-algorithm. ";

    document.getElementById("flowchart").setAttribute("src", "images/flowchart/lab6/img_6.jpg");
    document.getElementById("flowchart").setAttribute("alt", " ");

    /*change the img and prevent it from displaying the image*/
    document.getElementById("flowchart").style.display = "none";

    document.getElementById("js").setAttribute("src", "images/code/img_21.jpg");

}


function p22() {

    var output = document.getElementById("problem").innerHTML =
        "Draw flow chart, sum all elements in the array";

    document.getElementById("flowchart").setAttribute("src", "images/week6/flowcharts/img_22.jpg");
    document.getElementById("flowchart").setAttribute("alt", " ");

    /*change the img and prevent it from displaying the image*/
    document.getElementById("flowchart").style.display = "none";

    document.getElementById("js").setAttribute("src", "images/week6/code/img_22.jpg");

}

function p23() {

    var output = document.getElementById("problem").innerHTML =
        "devise a program to receive 3 numbers and output them in non-ascending order.";

    document.getElementById("flowchart").setAttribute("src", "images/week6/flowcharts/img_23.jpg");
    document.getElementById("flowchart").setAttribute("alt", " ");

    /*change the img and prevent it from displaying the image*/
    document.getElementById("flowchart").style.display = "none";

    document.getElementById("js").setAttribute("src", "images/week6/code/img_23.jpg");

}

function p24() {

    var output = document.getElementById("problem").innerHTML =
        "devise a program to receive a number greater than 1 and determine if it is a power of 2 or not";

    document.getElementById("flowchart").setAttribute("src", "images/week6/flowcharts/img_24.jpg");
    document.getElementById("flowchart").setAttribute("alt", " ");

    /*change the img and prevent it from displaying the image*/
    document.getElementById("flowchart").style.display = "none";

    document.getElementById("js").setAttribute("src", "images/week6/code/img_24.jpg");

}
function p25() {

    var output = document.getElementById("problem").innerHTML =
        "devise a program to receive a positive whole number and output its binary representation.";

    document.getElementById("flowchart").setAttribute("src", "images/week6/flowcharts/img_25.jpg");
    document.getElementById("flowchart").setAttribute("alt", " ");

    /*change the img and prevent it from displaying the image*/
    document.getElementById("flowchart").style.display = "none";

    document.getElementById("js").setAttribute("src", "images/week6/code/img_25.jpg");

}

function p26() {

    var output = document.getElementById("problem").innerHTML =
        "devise a program to receive a positive whole number and output its binary representation.";

    document.getElementById("flowchart").setAttribute("src", "images/week6/flowcharts/img_26.jpg");
    document.getElementById("flowchart").setAttribute("alt", " ");

    /*change the img and prevent it from displaying the image*/
    document.getElementById("flowchart").style.display = "none";

    document.getElementById("js").setAttribute("src", "images/week6/code/img_26.jpg");

}
function p27() {

    var output = document.getElementById("problem").innerHTML =
        " Draw a flowcharts that return sum of all less than or equal to num";

    document.getElementById("flowchart").setAttribute("src", "images/week6/flowcharts/img_27.jpg");
    document.getElementById("flowchart").setAttribute("alt", " ");

    /*change the img and prevent it from displaying the image*/
    document.getElementById("flowchart").style.display = "none";

    document.getElementById("js").setAttribute("src", "images/week6/code/img_27.jpg");

}

function p28() {

    var output = document.getElementById("problem").innerHTML =
        " Draw a flowcharts move 0's to the left-side and 1's to the right side of the array";

    document.getElementById("flowchart").setAttribute("src", "images/week8/ctc/flowchart/img_28.jpg");
    document.getElementById("flowchart").setAttribute("alt", " ");

    /*change the img and prevent it from displaying the image*/
    document.getElementById("flowchart").style.display = "none";

    document.getElementById("js").setAttribute("src", "images/week8/ctc/code/img_28.jpg");

}
function p30() {

    var output = document.getElementById("problem").innerHTML =
        " Print number between 5 to 1000 has the LSD 9";

    document.getElementById("flowchart").setAttribute("src", "images/test/img_30.jpg");
    document.getElementById("flowchart").setAttribute("alt", " ");

    /*change the img and prevent it from displaying the image*/
    document.getElementById("flowchart").style.display = "none";

    document.getElementById("js").setAttribute("src", "images/test//img_30_code.jpg");

}
function p31() {

    var output = document.getElementById("problem").innerHTML =
        "Draw a flowchart keep accepting a number until the number entered is greater than the previous one";

    document.getElementById("flowchart").setAttribute("src", "images/test/img_31.jpg");
    document.getElementById("flowchart").setAttribute("alt", " ");

    /*change the img and prevent it from displaying the image*/
    document.getElementById("flowchart").style.display = "none";

    document.getElementById("js").setAttribute("src", "images/test//img_31_code.jpg");

}
function p32() {

    var output = document.getElementById("problem").innerHTML =
        " Draw a flowchart, print the value of the highest occurrence number in array";

    document.getElementById("flowchart").setAttribute("src", "images/week7/ctc/img_32.jpg");
    document.getElementById("flowchart").setAttribute("alt", " ");

    /*change the img and prevent it from displaying the image*/
    document.getElementById("flowchart").style.display = "none";

    document.getElementById("js").setAttribute("src", "images/test//img_32_code.jpg");

}
function p33() {

    var output = document.getElementById("problem").innerHTML =
        "Draw a flowchart to show if any of its elements are equal to 9";

    document.getElementById("flowchart").setAttribute("src", "images/week7/ctc/img_33.jpg");
    document.getElementById("flowchart").setAttribute("alt", " ");

    /*change the img and prevent it from displaying the image*/
    document.getElementById("flowchart").style.display = "none";

    document.getElementById("js").setAttribute("src", "images/test//img_33_code.jpg");

}
function p34() {

    var output = document.getElementById("problem").innerHTML =
        " Print number between 5 to 1000 has the LSD 9";

    document.getElementById("flowchart").setAttribute("src", "images/test/img_30.jpg");
    document.getElementById("flowchart").setAttribute("alt", " ");

    /*change the img and prevent it from displaying the image*/
    document.getElementById("flowchart").style.display = "none";

    document.getElementById("js").setAttribute("src", "images/test//img_30_code.jpg");

}
function p35() {

    var output = document.getElementById("problem").innerHTML =
        " Sum of numbers 10 to 30";

    document.getElementById("flowchart").setAttribute("src", "images/week8/lab/img_01.jpg");
    document.getElementById("flowchart").setAttribute("alt", " ");

    /*change the img and prevent it from displaying the image*/
    document.getElementById("flowchart").style.display = "none";

    document.getElementById("js").setAttribute("src", "images/week8/lab/img_code_01.jpg");

}
function p36() {

    var output = document.getElementById("problem").innerHTML =
        "Factoria";

    document.getElementById("flowchart").setAttribute("src", "images/week8/lab/img_02.jpg");
    document.getElementById("flowchart").setAttribute("alt", " ");

    /*change the img and prevent it from displaying the image*/
    document.getElementById("flowchart").style.display = "none";

    document.getElementById("js").setAttribute("src", "images/week8/lab/img_code_02.jpg");

}
function p37() {

    var output = document.getElementById("problem").innerHTML =
        "Fibonacci";

    document.getElementById("flowchart").setAttribute("src", "images/week8/lab/img_03.jpg");
    document.getElementById("flowchart").setAttribute("alt", " ");

    /*change the img and prevent it from displaying the image*/
    document.getElementById("flowchart").style.display = "none";

    document.getElementById("js").setAttribute("src", "images/week8/lab/img_code_03.jpg");

}
function p38() {

    var output = document.getElementById("problem").innerHTML =
        "a*b, without using multiplication (assume a and/or b are whole numbers)";

    document.getElementById("flowchart").setAttribute("src", "images/week8/lab/img_04.jpg");
    document.getElementById("flowchart").setAttribute("alt", " ");

    /*change the img and prevent it from displaying the image*/
    document.getElementById("flowchart").style.display = "none";

    document.getElementById("js").setAttribute("src", "images/week8/lab/img_code_04.jpg");

}
function p39() {

    var output = document.getElementById("problem").innerHTML =
        "a modulo b, without using modulo operation (use subtraction instead)";

    document.getElementById("flowchart").setAttribute("src", "images/week8/lab/img_05.jpg");
    document.getElementById("flowchart").setAttribute("alt", " ");

    /*change the img and prevent it from displaying the image*/
    document.getElementById("flowchart").style.display = "none";

    document.getElementById("js").setAttribute("src", "images/week8/lab/img_code_05.jpg");

}
function p40() {

    var output = document.getElementById("problem").innerHTML =
        "output the multiplication table of size n";

    document.getElementById("flowchart").setAttribute("src", "images/week8/lab/img_06.jpg");
    document.getElementById("flowchart").setAttribute("alt", " ");

    /*change the img and prevent it from displaying the image*/
    document.getElementById("flowchart").style.display = "none";

    document.getElementById("js").setAttribute("src", "images/week8/lab/img_code_06.jpg");

}