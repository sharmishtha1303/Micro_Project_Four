function insert(value) {
    document.getElementById('display').value += value;
}
function reset() {
    document.getElementById('display').value = '';
}
function deleteCharacter() {
    const display = document.getElementById('display');
    const currentValue = display.value;
    display.value = currentValue.slice(0, -1);
}
function equalto() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (e) {
        document.getElementById('display').value = 'Error';
    }
}