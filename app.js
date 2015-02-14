(function() {
    var app = angular.module('myApp', []);
    
    app.controller('workersController', function() {
        this.workers = pracownicy;
    });

    var pracownicy = [
        {
            imie: 'Jan',
            nazwisko: 'Nowak',
            wiek: '29',
            plec: 'M'
        },
        {
            imie: 'Anna',
            nazwisko: 'Kowalska',
            wiek: '37',
            plec: 'K'
        },
        {
            imie: 'Paweł',
            nazwisko: 'Szulc',
            wiek: '34',
            plec: 'M'
        }
    ];
    
    
})();
