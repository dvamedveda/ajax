/**
 * Проверка данных в форме ввода на то, что они не пусты.
 */
function validate() {
    'use strict';
    let result = true;
    let elements = document.getElementById("input_form").querySelectorAll('div > input');
    for (let item of elements) {
        if (item.value !== "") {
            continue;
        }
        alert('Поле ' + item.placeholder + ' должно быть заполнено!');
        result = false;
    }
    return result;
}

/**
 * Добавление новой строки в таблицу на странице, используя данные из формы.
 * Данные сначала валидируются.
 * После добавления в таблицу форма сбрасывается.
 */
function addTableRow() {
    'use strict';
    if (validate()) {
        let elements = document.getElementById("input_form").querySelectorAll('div > input');
        let tableLastRow = document.getElementById("result_table").lastElementChild.lastElementChild;
        let newString = "";
        newString += '<tr>';
        for (let item of elements) {
            newString += '<td>' + item.value + '</td>';
        }
        newString += '</tr>';
        tableLastRow.insertAdjacentHTML('afterend', newString);
        document.getElementById("input_form").reset();
    }
}