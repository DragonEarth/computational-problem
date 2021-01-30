function p34() {
    var sum = 0;

    for (i = 10; t <= 30; i++) {
        sum = sum + i;
    }
    alert(sum);
}
function p35() {
    var num = parseInt(prompt("Enter number"));
    var sum = 1;

    for (i = 1; t <= num; i++) {
        sum = sum * i;
    }
    alert(sum);
}

function p36() {
    var num = parseInt(prompt("Enter number"));
    var v1 = 0;
    var v2 = 1;
    var v = 0;

    prompt(v1);

    for (i = 1; t <= num; i++) {
        var v = v1 + v2;
        var v1 = v2;
        var v2 = v;
        alert(sum);
    }
}

function p37() {
    var a = parseInt(prompt("Enter first number"));
    var b = parseInt(prompt("Enter second number"));
    var muilti = 0;

    for (i = 0; a < a; i++) {
        muilti = muilti + b;
    }
    alert(muilti);
}

function p38() {
    var a = parseInt(prompt("Enter first number"));
    var b = parseInt(prompt("Enter second number"));

    if (a > b) {
        alert(a - b);
    } else {
        alert(a);
    }
}

function p40() {
    var a = parseInt(prompt("Enter number"));

    for (i = 1; i <= n; i++) {
        for (j = 0; j <= n; j++) {
            alert(i, " * ", j, " = ", i * j);
        }
    }

}