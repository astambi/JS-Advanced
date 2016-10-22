function subtract() {
    let num1 = Number($('#firstNumber').val());
    let num2 = Number($('#secondNumber').val());
    let result = num1 - num2;
    $('#result').text(result);
}

// function subtract() {
//     let num1 = parseFloat($('#firstNumber').val());
//     let num2 = parseFloat($('#secondNumber').val());
//     let result = num1 - num2;
//     $('#result')[0].textContent = result;
// }