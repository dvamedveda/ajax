function validate() {
    'use strict';
    let elements = document.getElementById("input_form").querySelectorAll('div > input');
    for (let item of elements) {
        if (item.value !== "") {
            continue;
        }
        alert('Поле ' + item.placeholder + ' должно быть заполнено!');
    }
}