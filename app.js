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
            plec: 'M',
            pracuje: true
        },
        {
            imie: 'Anna',
            nazwisko: 'Kowalska',
            wiek: '37',
            plec: 'K',
            pracuje: true
        },
        {
            imie: 'Paweł',
            nazwisko: 'Szulc',
            wiek: '34',
            plec: 'M',
            pracuje: false
        }
    ];
    
    
})();
