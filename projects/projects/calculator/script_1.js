let INPUT = document.getElementById('inputs_outputs_container');

function append(value) {
    INPUT.value += value;
}

function evaluate_equation() {
    if (INPUT.value == '') {
        alert('Enter the value first:');
    } else {
        INPUT.value = eval(INPUT.value);
    }
}

function clear_all() {
    INPUT.value = '';
}