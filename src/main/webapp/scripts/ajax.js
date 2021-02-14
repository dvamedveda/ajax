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
        dataType: 'json'
    }).done(function (data) {
        let response = JSON.parse(JSON.stringify(data));
        if (!$.contains(document.querySelector('.form-group'), document.querySelector('h1'))) {
            $('.form-group').prepend('<h1>' + response.email + '</h1>')
        } else {
            $('.form-group > h1').replaceWith('<h1>' + response.email + '</h1>')
        }
    }).fail(function (error) {
        alert(error);
    });
}