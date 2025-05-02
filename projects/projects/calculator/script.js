let INPUT = document.getElementById('inputs_outputs_container');
let value1;
let value2;
let operator;
value1 = parseInt(INPUT.value);

function operator_check() {
    (operator == '+')? operator = '+': (operator == '-')? operator = '-' : (operator == '*') ? operator = '*': (operator == '/')? operator = '/' : alert('error');

}
function final_value() {
    (operator == '+')? INPUT.value = `${value1 += value1}`: (operator == '-')? operator = '-' : (operator == '*') ? operator = '*': (operator == '/')? operator = '/' : alert('error');

} 
document.getElementsByClassName('equal_number')[0].addEventListener('click',()=>{
    // value2 = parseInt(INPUT.value);

});

document.getElementsByClassName('plus_number')[0].addEventListener('click',()=>{
    document.getElementById('inputs_outputs_container').value = '';
    operator = '+';
})



