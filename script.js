
function kalkulator() {
    
    var input1 = parseInt(document.getElementById("input-1").value);

    var input2 = parseInt(document.getElementById("input-2").value);
    
    var op = document.getElementById("op").value;

    var hasil = document.getElementById("hasil");

    var total;

    if (op === "+") {
        total = input1 + input2;
    } else if (op === "-") {
        total = input1 - input2;
    } else if (op === "*") {
        total = input1 * input2;
    } else {
        total = input1 / input2;
    }

    hasil.value = total;
}