function p29() {
    var a = prompt("Enter a binarry digit of a number to convert to decimal");

    var sum = 0;

    for (i = 0; i < a; i = i + 1) {
        var d = prompt("Enter the next digit");

        var bin = d * Math.pow(2, i);
        var sum = sum + bin;
    }

    alert(sum);
}
function p30() {

    for (i = 9; i < 1000; i = i + 1) {

        if (i % 9 == 0) {
            alert(i);
        }
    }
}

function p31() {
    prompt("Enter a number");
    do {
        prompt("Enter a number");
    } while (num2 < num);
}