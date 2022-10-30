
$.getJSON('http://api.open-notify.org/astros.json?callback=?',
function(data) {
    var number = data['number'];
    $('#SpacePeople').html(number);

    data['people'].forEach(function (d) {
        $('#astronauts').append('<h3>' + d['name']+ '</h3>','<h4>' + d['craft']+ '</h4>');
       
    });
});

