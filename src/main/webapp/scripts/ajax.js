/**
 * Выводит введенную почту над формой ввода
 * на странице ajax.html, заменяя ее, если она уже выведена.
 */
function sendGreeting() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/ajax/greet',
        data: {
            email: $("#exampleInputEmail").val()
        },
        dataType: 'text'
    }).done(function (data) {
        if (!$.contains(document.querySelector('.form-group'), document.querySelector('h1'))) {
            $('.form-group').prepend('<h1>' + data + '</h1>')
        } else {
            $('.form-group > h1').replaceWith('<h1>' + data + '</h1>')
        }
    }).fail(function (error) {
        alert(error);
    });
}