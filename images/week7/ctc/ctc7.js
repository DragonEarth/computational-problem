function p32() {
    var size = prompt("Enter an array size");

    var highest = 0;
    var value = 0;

    var a = [];

    for (i = 0; i < size; i = i + 1) {
        a[i] = parseInt(prompt("Enter each elemnt in the array one at a time"));
    }
    for (i = 0; i < a.length(); i = i + 1) {
        if (frequancy(a[i], a) > highest) {
            highest = frequancy(a[i], a);
            value = a[i];
        }
    }
    alert(value);
}

function frequancy(num, array) {

    var cnt = 0;

    for (i = 0; array.length(); i++) {
        if (array[i] == num) {
            cnt = cnt + 1;
        }
    }
    return cnt;
}

function p33() {
    var size = prompt("Enter size of an array");

    var a = [];
    var b = []

    for (i = 0; i < size; i = i + 1) {
        a[i] = parseInt(prompt("Enter each elemnt in the array one at a time"));
    }

    for (i = 0; i < a.length && flag == false; i = i + 1) {
        var b = a;
        b[i] = 0;

        if (sumOfArray(b) == 9) {
            flag = true;
        }
    }
    alert(flag);
}

function sumOfArray(array) {
    var sum = 0;
     for(i=0; i<array.length(); i++) {
         sum = sum + array[i];
     }

     return sum;
}